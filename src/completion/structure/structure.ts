import * as vscode from 'vscode';
import { completionConfigs, CompletionConfig } from './rule'

export class StructureCompletionProvider implements vscode.CompletionItemProvider {

    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {

        const currentPath = this.getCurrentPath(document, position);

        const matchingConfig = this.findMatchingConfig(currentPath);

        if (!matchingConfig) {
            return [];
        }

        return matchingConfig.completions.map(completion => {
            const item = new vscode.CompletionItem(completion.label, completion.kind || vscode.CompletionItemKind.Property);
            item.detail = completion.detail;
            item.insertText = new vscode.SnippetString(completion.insertText);
            item.documentation = new vscode.MarkdownString(completion.detail);

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

    private getCurrentPath(document: vscode.TextDocument, position: vscode.Position): string[] {
        const path: string[] = [];
        let currentIndent = this.getIndentLevel(document.lineAt(position.line).text);

        for (let lineNum = position.line - 1; lineNum >= 0; lineNum--) {
            const line = document.lineAt(lineNum);
            const lineText = line.text.trim();

            // 跳过空行和完整的注释行
            if (!lineText || lineText.startsWith('#') || lineText.startsWith('//')) {
                continue;
            }

            const lineIndent = this.getIndentLevel(line.text);

            // 提取实际内容（移除注释部分）
            let actualContent = lineText;
            const hashIndex = lineText.indexOf('#');
            const slashIndex = lineText.indexOf('//');

            if (hashIndex !== -1 || slashIndex !== -1) {
                let commentIndex = -1;
                if (hashIndex !== -1 && slashIndex !== -1) {
                    commentIndex = Math.min(hashIndex, slashIndex);
                } else if (hashIndex !== -1) {
                    commentIndex = hashIndex;
                } else {
                    commentIndex = slashIndex;
                }
                actualContent = lineText.substring(0, commentIndex).trim();
            }

            // 检查实际内容是否以冒号结尾
            if (actualContent.endsWith(':')) {
                if (lineIndent < currentIndent) {
                    const key = actualContent.replace(':', '').trim();
                    path.unshift(key);
                    currentIndent = lineIndent;
                }
            }
        }

        return path;
    }

    private getIndentLevel(line: string): number {
        let indent = 0;
        for (const char of line) {
            if (char === ' ') {
                indent++;
            } else if (char === '\t') {
                indent += 4;
            } else {
                break;
            }
        }
        return indent;
    }

    private findMatchingConfig(currentPath: string[]): CompletionConfig | undefined {
        // 首先尝试精确匹配
        const exactMatch = completionConfigs.find(config => {
            if (config.path.length !== currentPath.length) {
                return false;
            }

            return config.path.every((pathPart, index) =>
                pathPart === currentPath[index]
            );
        });

        if (exactMatch) {
            return exactMatch;
        }

        // 尝试通配符匹配（支持不同长度）
        const wildcardMatch = completionConfigs.find(config => {
            return this.isWildcardMatch(config.path, currentPath);
        });

        if (wildcardMatch) {
            return wildcardMatch;
        }

        // 如果都没有匹配，查找通用的通配符配置（路径为["*"]）
        return completionConfigs.find(config =>
            config.path.length === 1 && config.path[0] === '*'
        );
    }

    /**
     * 检查通配符路径是否匹配当前路径
     * 支持 * 通配符，可以跳过任意数量的路径段
     */
    private isWildcardMatch(configPath: string[], currentPath: string[]): boolean {
        return this.matchPath(configPath, 0, currentPath, 0);
    }

    /**
     * 递归匹配路径
     * @param configPath 配置路径
     * @param configIndex 配置路径当前索引
     * @param currentPath 当前路径
     * @param currentIndex 当前路径当前索引
     */
    private matchPath(configPath: string[], configIndex: number, currentPath: string[], currentIndex: number): boolean {
        // 如果配置路径已经遍历完
        if (configIndex >= configPath.length) {
            return currentIndex >= currentPath.length; // 当前路径也应该遍历完
        }

        // 如果当前路径已经遍历完，但配置路径还有非通配符的部分
        if (currentIndex >= currentPath.length) {
            // 检查剩余的配置路径是否都是通配符
            for (let i = configIndex; i < configPath.length; i++) {
                if (configPath[i] !== '*') {
                    return false;
                }
            }
            return true;
        }

        const configSegment = configPath[configIndex];
        const currentSegment = currentPath[currentIndex];

        if (configSegment === '*') {
            // 通配符可以匹配0个或多个路径段
            // 尝试匹配0个路径段（跳过通配符）
            if (this.matchPath(configPath, configIndex + 1, currentPath, currentIndex)) {
                return true;
            }
            // 尝试匹配1个或多个路径段
            return this.matchPath(configPath, configIndex, currentPath, currentIndex + 1);
        } else {
            // 精确匹配
            if (configSegment === currentSegment) {
                return this.matchPath(configPath, configIndex + 1, currentPath, currentIndex + 1);
            } else {
                return false;
            }
        }
    }
}