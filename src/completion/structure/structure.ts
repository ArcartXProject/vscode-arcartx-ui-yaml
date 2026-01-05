import * as vscode from 'vscode';
import { completionConfigs, CompletionConfig, attributeValueMap } from './rule'
import { self_functions } from './rule/uiSelf'
import { control_self_functions } from './rule/controlSelf'
import { builtin_functions, builtin_objects } from './rule/shimmerBuiltin'
import { task_type_values } from './rule/uiTaskTypeValues'

export class StructureCompletionProvider implements vscode.CompletionItemProvider {

    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {

        const currentLine = document.lineAt(position.line).text;
        const linePrefix = currentLine.substring(0, position.character);

        // 1. 检测 self. 或内置对象函数补全
        const selfMatch = linePrefix.match(/(\w+)\.$/);
        if (selfMatch) {
            const prefix = selfMatch[1];
            if (prefix === 'self' || prefix === 'val' || prefix === 'var' || builtin_objects.includes(prefix)) {
                // 判断是 UI 级别的 self 还是控件级别的 self
                let functions = builtin_functions;
                if (prefix === 'self') {
                    // 获取当前路径，判断是否在 UI 级别
                    const currentPath = this.getCurrentPath(document, position);
                    const pathStr = currentPath.join('.');
                    // 检查是否在 UI 的 action/packetHandler 中，或者路径中包含 ui
                    const isInUiLevel = currentPath.includes('ui') ||
                                          pathStr.includes('ui.action') ||
                                          pathStr.includes('ui.packetHandler');
                    // 在 UI 级别使用 UI 函数，否则使用控件函数
                    functions = isInUiLevel ? self_functions : control_self_functions;
                } else if (prefix === 'val' || prefix === 'var') {
                    functions = builtin_functions;
                } else {
                    // builtin_objects
                    functions = builtin_functions.filter(f => f.label.startsWith(prefix + '.'));
                }
                return functions.map(completion => {
                    const item = new vscode.CompletionItem(completion.label, completion.kind || vscode.CompletionItemKind.Property);
                    item.detail = completion.detail || '';
                    item.insertText = new vscode.SnippetString(completion.insertText);
                    item.documentation = completion.documentation;
                    item.sortText = `0${completion.label}`;
                    return item;
                });
            }
        }

        // 2. 检测属性值补全（如 point: ~xxx）
        // 注意：只有输入了部分内容时才显示补全，使用触发字符（/ 或 ?）时交给第2.5节处理
        const lastChar = linePrefix.charAt(linePrefix.length - 1);

        // 提前获取当前路径，用于上下文检测
        const currentPath = this.getCurrentPath(document, position);
        const pathStr = currentPath.join('.');
        const isInTasksContext = currentPath.includes('tasks');

        if (lastChar !== '/' && lastChar !== '?') {
            const attrValueMatch = linePrefix.match(/(\w+):\s*(~?)(\w*)$/);
            if (attrValueMatch) {
            const attrName = attrValueMatch[1];
            const tildePrefix = attrValueMatch[2] || '';
            const partialInput = attrValueMatch[3] || '';

            // 只有当有部分输入时才显示补全（过滤模式）
            // 如果 partialInput 为空，不显示补全，需要用户输入 / 触发
            // 在 tasks 上下文中，type 属性使用任务类型值
            let valueOptions = attributeValueMap.get(attrName);
            if (attrName === 'type' && isInTasksContext) {
                valueOptions = task_type_values;
            }

            if (!partialInput || !valueOptions) {
                // 跳过，不显示补全
            } else {
                // partialInput 有值，显示过滤后的补全
                const filteredOptions = valueOptions.filter(opt => {
                    const label = opt.label.toLowerCase();
                    const input = partialInput.toLowerCase();
                    return label.includes(input);
                });

                return filteredOptions.map(completion => {
                    const item = new vscode.CompletionItem(completion.label, completion.kind || vscode.CompletionItemKind.Property);
                    item.detail = completion.detail;
                    let insertText = completion.insertText;
                    if (tildePrefix === '~' && insertText.startsWith('~')) {
                        insertText = insertText.substring(1);
                    }
                    if (partialInput && insertText.startsWith('~' + partialInput)) {
                        insertText = '~' + insertText.substring(partialInput.length + 1);
                    } else if (partialInput && insertText.startsWith(partialInput)) {
                        insertText = insertText.substring(partialInput.length);
                    }
                    item.insertText = new vscode.SnippetString(insertText);
                    item.documentation = completion.documentation;
                    item.sortText = `0${completion.label}`;
                    return item;
                });
            }
        }
        }

        // 2.5. 检测属性值补全（使用触发字符 / 或 ?）
        // 当用户输入 point: ~/ 或 slotType: ~? 时，使用此节触发补全
        if (lastChar === '/' || lastChar === '?') {
            // 修改正则：匹配属性名、可选的 ~ 前缀、以及触发字符前的内容
            // 例如: point: ~/ -> attrName=point, tildePrefix=~
            const attrMatch = linePrefix.match(/(\w+):\s*(~?|)[\w|/|?]*$/);
            if (attrMatch) {
                const attrName = attrMatch[1];
                // 检查是否有 ~ 前缀（通过检查 linePrefix 中是否包含 ~）
                const tildeMatch = linePrefix.match(/(\w+):\s*(~)/);
                const tildePrefix = tildeMatch ? tildeMatch[2] : '';
                // 在 tasks 上下文中，type 属性使用任务类型值
                let valueOptions = attributeValueMap.get(attrName);
                if (attrName === 'type' && isInTasksContext) {
                    valueOptions = task_type_values;
                }

                if (valueOptions && valueOptions.length > 0) {
                    return valueOptions.map(completion => {
                        const item = new vscode.CompletionItem(completion.label, completion.kind || vscode.CompletionItemKind.Property);
                        item.detail = completion.detail;
                        let insertText = completion.insertText;
                        if (tildePrefix === '~' && insertText.startsWith('~')) {
                            insertText = insertText.substring(1);
                        }
                        item.insertText = new vscode.SnippetString(insertText);
                        item.documentation = completion.documentation;
                        item.filterText = lastChar + completion.label;
                        item.additionalTextEdits = [
                            vscode.TextEdit.delete(new vscode.Range(
                                new vscode.Position(position.line, position.character - 1),
                                position
                            ))
                        ];
                        item.sortText = `0${completion.label}`;
                        return item;
                    });
                }
            }
        }

        // 3. 查找匹配配置
        console.log('StructureCompletion: linePrefix =', JSON.stringify(linePrefix));
        console.log('StructureCompletion: currentPath =', currentPath);

        const matchingConfig = this.findMatchingConfig(currentPath);
        console.log('StructureCompletion: matchingConfig =', matchingConfig ? matchingConfig.path : null);

        if (!matchingConfig) {
            return [];
        }

        // 4. 处理触发字符（/ 或 ?）
        const isTriggerChar = lastChar === '?' || lastChar === '/';

        return matchingConfig.completions.map(completion => {
            const item = new vscode.CompletionItem(completion.label, completion.kind || vscode.CompletionItemKind.Property);
            item.detail = completion.detail;
            item.insertText = new vscode.SnippetString(completion.insertText);
            item.documentation = completion.documentation || new vscode.MarkdownString(completion.detail);

            if (isTriggerChar) {
                item.filterText = lastChar + completion.label;
                item.additionalTextEdits = [
                    vscode.TextEdit.delete(new vscode.Range(
                        new vscode.Position(position.line, position.character - 1),
                        position
                    ))
                ];
            }

            item.sortText = `0${completion.label}`;
            return item;
        });
    }

    /**
     * 获取当前位置的路径
     * 例如：controls -> 遮罩 -> attribute -> ['controls', '遮罩', 'attribute']
     */
    private getCurrentPath(document: vscode.TextDocument, position: vscode.Position): string[] {
        const path: string[] = [];
        const currentLineText = document.lineAt(position.line).text;

        // 计算当前行的缩进
        let currentIndent = 0;
        if (!currentLineText.trim() || currentLineText.trim().startsWith('//') || currentLineText.trim().startsWith('#')) {
            // 空行或注释行，使用光标位置作为缩进
            currentIndent = position.character;
        } else {
            currentIndent = this.getIndentLevel(currentLineText);
        }
        console.log('getCurrentPath: currentIndent =', currentIndent, 'currentLineText =', JSON.stringify(currentLineText));

        // 检测当前行是否在属性值行（key: value 中的 value 部分）
        const currentLineTrimmed = currentLineText.trim();
        if (currentLineTrimmed.includes(':')) {
            const colonIndex = currentLineTrimmed.indexOf(':');
            const beforeColon = currentLineTrimmed.substring(0, colonIndex).trim();
            if (beforeColon && !beforeColon.includes(' ') && position.character > currentLineText.indexOf(':')) {
                path.unshift(beforeColon);
            }
        }

        // 检测当前行所在的块（attribute:, children:, action:）
        // 需要记录块所在的行号，避免向上遍历时重复添加
        let blockLineNum = -1;
        if (path.length === 0 || !currentLineTrimmed.includes(':')) {
            let currentBlockKey: string | null = null;
            for (let lineNum = position.line - 1; lineNum >= 0; lineNum--) {
                const line = document.lineAt(lineNum);
                const lineText = line.text.trim();
                if (!lineText || lineText.startsWith('#') || lineText.startsWith('//')) continue;

                const lineIndent = this.getIndentLevel(line.text);
                if (lineIndent < currentIndent) {
                    // 移除注释
                    let actualContent = lineText;
                    const hashIndex = lineText.indexOf('#');
                    if (hashIndex !== -1) actualContent = lineText.substring(0, hashIndex).trim();
                    const slashIndex = lineText.indexOf('//');
                    if (slashIndex !== -1) actualContent = lineText.substring(0, slashIndex).trim();

                    // 检查是否是容器关键字
                    if (actualContent.endsWith(':')) {
                        const key = actualContent.replace(':', '').trim();
                        const containerKeys = ['attribute', 'children', 'action', 'controls', 'ui', 'root_control', 'packetHandler'];
                        if (containerKeys.includes(key)) {
                            currentBlockKey = key;
                            blockLineNum = lineNum;
                            currentIndent = lineIndent;  // 更新缩进，避免重复添加
                            console.log('getCurrentPath: found block =', key, 'at line', lineNum, 'new currentIndent =', currentIndent);
                        }
                    }
                    break;
                }
            }
            if (currentBlockKey) {
                path.unshift(currentBlockKey);
            }
        }

        console.log('getCurrentPath: after block detection, path =', path, 'currentIndent =', currentIndent, 'blockLineNum =', blockLineNum);

        // 向上遍历，构建路径（跳过已处理的块行）
        for (let lineNum = position.line - 1; lineNum >= 0; lineNum--) {
            // 跳过已处理的块行
            if (lineNum === blockLineNum) continue;
            const line = document.lineAt(lineNum);
            const lineText = line.text.trim();
            if (!lineText || lineText.startsWith('#') || lineText.startsWith('//')) continue;

            const lineIndent = this.getIndentLevel(line.text);

            // 移除注释
            let actualContent = lineText;
            const hashIndex = lineText.indexOf('#');
            if (hashIndex !== -1) actualContent = lineText.substring(0, hashIndex).trim();
            const slashIndex = lineText.indexOf('//');
            if (slashIndex !== -1) actualContent = lineText.substring(0, slashIndex).trim();

            // 检查是否以冒号结尾
            if (actualContent.endsWith(':')) {
                const key = actualContent.replace(':', '').trim();

                // 只有缩进更小的才是父级，缩进相同的是同级，不应该加入路径
                if (lineIndent < currentIndent) {
                    console.log('getCurrentPath: adding to path (smaller indent):', key, 'lineIndent =', lineIndent, 'currentIndent =', currentIndent);
                    path.unshift(key);
                    currentIndent = lineIndent;
                }
            }
        }

        console.log('getCurrentPath: final path =', path);
        return path;
    }

    private getIndentLevel(line: string): number {
        let indent = 0;
        for (const char of line) {
            if (char === ' ') indent++;
            else if (char === '\t') indent += 4;
            else break;
        }
        return indent;
    }

    /**
     * 查找匹配当前路径的配置
     * 支持智能前缀匹配：如果配置路径是当前路径的前缀，则匹配成功
     */
    private findMatchingConfig(currentPath: string[]): CompletionConfig | undefined {
        console.log('findMatchingConfig: currentPath =', currentPath);
        console.log('findMatchingConfig: completionConfigs.length =', completionConfigs.length);

        // 1. 首先尝试精确匹配
        const exactMatch = completionConfigs.find(config => {
            if (config.path.length !== currentPath.length) return false;
            return config.path.every((pathPart, index) => pathPart === currentPath[index]);
        });
        if (exactMatch) {
            console.log('findMatchingConfig: exactMatch found, path =', exactMatch.path);
            return exactMatch;
        }

        // 2. 尝试前缀匹配（如果配置路径是当前路径的前缀）
        // 例如：当前路径 ['ui', 'controls', '遮罩', 'attribute'] 可以匹配配置 ['controls', '*', 'attribute']
        // 注意：需要找到最长匹配路径，因为空路径 [] 会匹配所有路径
        const prefixMatches = completionConfigs.filter(config => {
            return this.isPrefixMatch(config.path, currentPath);
        });

        if (prefixMatches.length > 0) {
            // 选择最佳匹配项：
            // 1. 优先选择路径更长的
            // 2. 长度相同时，优先选择非通配符更多的（更精确）
            const bestMatch = prefixMatches.reduce((best, current) => {
                if (current.path.length > best.path.length) {
                    return current;
                } else if (current.path.length === best.path.length) {
                    // 长度相同，选择非通配符更多的
                    const currentNonWildcards = current.path.filter(p => p !== '*').length;
                    const bestNonWildcards = best.path.filter(p => p !== '*').length;
                    return currentNonWildcards > bestNonWildcards ? current : best;
                }
                return best;
            });
            console.log('findMatchingConfig: prefixMatch found, path =', bestMatch.path);
            return bestMatch;
        }

        // 3. 尝试通配符匹配（仅用于没有通过前缀匹配的配置）
        console.log('findMatchingConfig: trying wildcard match...');
        const wildcardMatch = completionConfigs.find(config => {
            const matches = this.isWildcardMatch(config.path, currentPath);
            if (config.path.includes('*')) {
                console.log('  wildcard check:', config.path, '->', matches);
            }
            return matches;
        });
        if (wildcardMatch) {
            console.log('findMatchingConfig: wildcardMatch found, path =', wildcardMatch.path);
        } else {
            console.log('findMatchingConfig: no match found!');
        }
        return wildcardMatch;
    }

    /**
     * 检查配置路径是否是当前路径的前缀
     * 例如：
     * - ['controls', '*', 'attribute'] 可以匹配 ['ui', 'controls', 'xxx', 'attribute']
     * - ['*', 'attribute'] 可以匹配 ['controls', 'xxx', 'attribute']（后缀匹配）
     */
    private isPrefixMatch(configPath: string[], currentPath: string[]): boolean {
        // 如果配置路径包含通配符，使用通配符前缀匹配
        if (configPath.includes('*')) {
            return this.isWildcardPrefixMatch(configPath, currentPath);
        }

        // 纯前缀匹配（不含通配符）
        if (configPath.length > currentPath.length) return false;
        for (let i = 0; i < configPath.length; i++) {
            if (configPath[i] !== currentPath[i]) {
                return false;
            }
        }
        return true;
    }

    /**
     * 通配符前缀匹配
     *
     * 规则：
     * - '*' 匹配**一个**路径段
     * - 从末尾开始对齐匹配（支持后缀匹配）
     * - 配置路径长度不能超过当前路径长度
     *
     * 例如：
     * - ['controls', '*'] 匹配 ['controls', 'xxx']（长度2），但不匹配 ['controls', 'xxx', 'yyy']（长度3）
     * - ['*', 'attribute'] 从末尾对齐匹配 ['controls', 'xxx', 'attribute']（末尾是 attribute）
     * - ['*', '*', 'attribute'] 从末尾对齐匹配 ['controls', 'xxx', 'yyy', 'attribute']（末尾是 attribute）
     */
    private isWildcardPrefixMatch(configPath: string[], currentPath: string[]): boolean {
        // 配置路径长度不能超过当前路径长度
        if (configPath.length > currentPath.length) {
            return false;
        }

        // 如果长度相同，使用精确通配符匹配
        if (configPath.length === currentPath.length) {
            return this.isWildcardMatch(configPath, currentPath);
        }

        // 从末尾开始对齐匹配
        let configIndex = configPath.length - 1;
        let currentIndex = currentPath.length - 1;

        while (configIndex >= 0 && currentIndex >= 0) {
            const configPart = configPath[configIndex];
            const currentPart = currentPath[currentIndex];

            if (configPart === '*') {
                // 通配符匹配一个路径段
                configIndex--;
                currentIndex--;
            } else if (configPart === currentPart) {
                // 精确匹配
                configIndex--;
                currentIndex--;
            } else {
                // 不匹配，但配置路径可能有剩余通配符可以跳过当前路径的这些段
                // 检查配置路径剩余部分是否都是通配符
                let allWildcards = true;
                for (let i = 0; i <= configIndex; i++) {
                    if (configPath[i] !== '*') {
                        allWildcards = false;
                        break;
                    }
                }
                // 如果剩余配置都是通配符，则匹配成功
                if (allWildcards) {
                    return true;
                }
                return false;
            }
        }

        // 检查剩余的配置路径部分是否都是通配符
        while (configIndex >= 0) {
            if (configPath[configIndex] !== '*') {
                return false;
            }
            configIndex--;
        }

        return true;
    }

    /**
     * 检查通配符路径是否精确匹配当前路径（保留用于向后兼容）
     *
     * 规则：
     * - '*' 匹配任意单个路径段
     * - 配置路径长度必须等于当前路径长度
     */
    private isWildcardMatch(configPath: string[], currentPath: string[]): boolean {
        // 长度必须相同
        if (configPath.length !== currentPath.length) {
            return false;
        }

        for (let i = 0; i < configPath.length; i++) {
            const configPart = configPath[i];
            const currentPart = currentPath[i];
            // '*' 匹配任意值，其他必须精确匹配
            if (configPart !== '*' && configPart !== currentPart) {
                return false;
            }
        }
        return true;
    }
}
