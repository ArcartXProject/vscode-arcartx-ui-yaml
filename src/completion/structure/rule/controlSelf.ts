import * as vscode from 'vscode';

// 控件对象(self)函数补全
export const control_self_functions = [
    // === 子控件操作 ===
    {
        label: 'getVisibleChildren()',
        detail: '获取可见的子控件列表',
        insertText: 'getVisibleChildren()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取可见子控件\n\n' +
            '**参数**: 无\n\n' +
            '**返回值**: 列表（控件对象数组）\n\n' +
            '---\n\n' +
            '```shimmer\n' +
            'self.getVisibleChildren()\n' +
            '// 返回: [控件A, 控件B...]\n' +
            '```'
        )
    },
    {
        label: 'create()',
        detail: '在当前控件层级创建子控件',
        insertText: 'create(${1:tempID}, ${2:newName})',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 创建子控件\n\n' +
            '在当前控件层级通过模板创建控件。\n\n' +
            '**参数**:\n' +
            '- `tempID` - 模板ID\n' +
            '- `newName` - 新创建控件的ID\n\n' +
            '**返回值**: 控件对象\n\n' +
            '---\n\n' +
            '```shimmer\n' +
            'self.create(\'模板ID\', \'新控件ID\')\n' +
            '// 返回一个控件对象\n' +
            '```\n\n' +
            '对应的 template 配置:\n' +
            '```yaml\n' +
            'template:\n' +
            '  模板ID:\n' +
            '    type: texture\n' +
            '    attribute:\n' +
            '      width: 100\n' +
            '      height: 100\n' +
            '```'
        )
    },
    {
        label: 'copy()',
        detail: '复制控件',
        insertText: 'copy(${1:newID})',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 复制控件\n\n' +
            '复制当前控件到新的ID。\n\n' +
            '**参数**:\n' +
            '- `newID` - 新控件的ID\n\n' +
            '**返回值**: 新控件对象\n\n' +
            '---\n\n' +
            '```shimmer\n' +
            'self.copy(\'新控件ID\')\n' +
            '// 返回新创建的控件对象\n' +
            '```'
        )
    },

    // === 状态操作 ===
    {
        label: 'getVisible()',
        detail: '获取控件可见状态',
        insertText: 'getVisible()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取可见状态\n\n' +
            '**参数**: 无\n\n' +
            '**返回值**: 布尔值'
        )
    },
    {
        label: 'getEnable()',
        detail: '获取控件启用状态',
        insertText: 'getEnable()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取启用状态\n\n' +
            '**参数**: 无\n\n' +
            '**返回值**: 布尔值'
        )
    },
    {
        label: 'setEnable()',
        detail: '设置控件启用状态',
        insertText: 'setEnable(${1:true})',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 设置启用状态\n\n' +
            '**参数**:\n' +
            '- `enable` - 是否启用 (true/false)\n\n' +
            '**返回值**: 无\n\n' +
            '---\n\n' +
            '```shimmer\n' +
            'self.setEnable(false)\n' +
            '```'
        )
    },

    // === 位置和尺寸 ===
    {
        label: 'getX()',
        detail: '获取X坐标',
        insertText: 'getX()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取X坐标\n\n' +
            '**返回值**: 数字'
        )
    },
    {
        label: 'getY()',
        detail: '获取Y坐标',
        insertText: 'getY()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取Y坐标\n\n' +
            '**返回值**: 数字'
        )
    },
    {
        label: 'getWidth()',
        detail: '获取宽度',
        insertText: 'getWidth()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取宽度\n\n' +
            '**返回值**: 数字'
        )
    },
    {
        label: 'getHeight()',
        detail: '获取高度',
        insertText: 'getHeight()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取高度\n\n' +
            '**返回值**: 数字'
        )
    },
    {
        label: 'getPoint()',
        detail: '获取锚点位置',
        insertText: 'getPoint()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取锚点位置\n\n' +
            '**返回值**: 字符串'
        )
    },

    // === 属性访问 ===
    {
        label: 'get()',
        detail: '获取控件属性值',
        insertText: 'get(${1:attributeName})',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取属性值\n\n' +
            '**参数**:\n' +
            '- `attributeName` - 属性名称\n\n' +
            '**返回值**: 属性值\n\n' +
            '---\n\n' +
            '```shimmer\n' +
            'self.get(\'texts\')\n' +
            '// 获取 texts 属性值\n' +
            '```'
        )
    },
    {
        label: 'set()',
        detail: '设置控件属性值',
        insertText: 'set(${1:attributeName}, ${2:value})',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 设置属性值\n\n' +
            '**参数**:\n' +
            '- `attributeName` - 属性名称\n' +
            '- `value` - 新值\n\n' +
            '**返回值**: 无\n\n' +
            '---\n\n' +
            '```shimmer\n' +
            'self.set(\'texts\', \'新文本\')\n' +
            '// 设置 texts 属性值\n' +
            '```'
        )
    },

    // === 拖拽相关 ===
    {
        label: 'getDragX()',
        detail: '获取拖拽X偏移',
        insertText: 'getDragX()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取拖拽X偏移\n\n' +
            '**返回值**: 数字'
        )
    },
    {
        label: 'getDragY()',
        detail: '获取拖拽Y偏移',
        insertText: 'getDragY()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取拖拽Y偏移\n\n' +
            '**返回值**: 数字'
        )
    },
    {
        label: 'getDragXRatio()',
        detail: '获取拖拽X比例 (0-1)',
        insertText: 'getDragXRatio()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取拖拽X比例\n\n' +
            '返回0-1之间的值，用于滚动栏。\n\n' +
            '**返回值**: 数字 (0-1)'
        )
    },
    {
        label: 'getDragYRatio()',
        detail: '获取拖拽Y比例 (0-1)',
        insertText: 'getDragYRatio()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取拖拽Y比例\n\n' +
            '返回0-1之间的值，用于滚动栏。\n\n' +
            '**返回值**: 数字 (0-1)'
        )
    },

    // === 父子访问 ===
    {
        label: 'getParent()',
        detail: '获取父控件',
        insertText: 'getParent()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取父控件\n\n' +
            '**返回值**: 控件对象'
        )
    },
    {
        label: 'getRoot()',
        detail: '获取根控件',
        insertText: 'getRoot()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取根控件\n\n' +
            '**返回值**: 控件对象'
        )
    },

    // === 特殊控件方法 ===
    {
        label: 'getText()',
        detail: '获取文本内容 (Text/TextBox)',
        insertText: 'getText()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取文本内容\n\n' +
            '获取 Text 或 TextBox 控件的文本内容。\n\n' +
            '**适用**: Text、TextBox\n\n' +
            '**返回值**: 字符串'
        )
    },
    {
        label: 'setText()',
        detail: '设置文本内容 (Text/TextBox)',
        insertText: 'setText(${1:text})',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 设置文本内容\n\n' +
            '**适用**: Text、TextBox\n\n' +
            '---\n\n' +
            '```shimmer\n' +
            'self.setText(\'新文本\')\n' +
            '```'
        )
    },
    {
        label: 'getItem()',
        detail: '获取槽位物品 (Slot)',
        insertText: 'getItem()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            '## 获取槽位物品\n\n' +
            '**适用**: Slot\n\n' +
            '**返回值**: 物品堆对象'
        )
    },
];
