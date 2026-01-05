import * as vscode from 'vscode';

export const packetHandler_options = [
    {
        label: 'init',
        detail: '初始化处理器 - UI初始化时接收数据',
        insertText: [
            'init: |-',
            '  var.title = packet[\'title\']',
            '  // 处理初始化逻辑'
        ].join('\n'),
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**初始化处理器**\n\n` +
            `用于UI初始化时接收服务端发送的数据。\n\n` +
            `**服务端调用示例**:\n` +
            `\`\`\`java\n` +
            `ui.sendPacket(player, "init", Map.of("type", "register", "title", "你好"));\n` +
            `\`\`\`\n\n` +
            `**接收数据**:\n` +
            `- 数据存储在 \`packet\` 变量中\n` +
            `- 通过 \`packet[\'key\']\` 访问具体值`
        )
    },
    {
        label: 'result',
        detail: '结果处理器 - 接收操作结果',
        insertText: [
            'result: |-',
            '  var.title = packet',
            '  // 处理结果数据'
        ].join('\n'),
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**结果处理器**\n\n` +
            `用于接收操作结果或返回数据。\n\n` +
            `**服务端调用示例**:\n` +
            `\`\`\`java\n` +
            `ui.sendPacket(player, "result", resultData);\n` +
            `\`\`\``
        )
    },
    {
        label: 'close',
        detail: '关闭处理器 - 处理服务端关闭请求',
        insertText: [
            'close: |-',
            '  async {',
            '    Thread.sleep(500)',
            '    self.close()',
            '  }'
        ].join('\n'),
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**关闭处理器**\n\n` +
            `用于处理服务端发送的关闭请求。\n\n` +
            `**服务端调用示例**:\n` +
            `\`\`\`java\n` +
            `ui.sendPacket(player, "close", null);\n` +
            `\`\`\`\n\n` +
            `常用于延迟关闭UI的场景。`
        )
    },
    {
        label: 'update',
        detail: '更新处理器 - 接收数据更新',
        insertText: [
            'update: |-',
            '  var.data = packet',
            '  // 处理更新逻辑'
        ].join('\n'),
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**更新处理器**\n\n` +
            `用于接收服务端发送的数据更新。\n\n` +
            `适用于动态更新UI内容的场景。`
        )
    },
    {
        label: 'refresh',
        detail: '刷新处理器 - 刷新UI数据',
        insertText: [
            'refresh: |-',
            '  // 刷新UI数据'
        ].join('\n'),
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**刷新处理器**\n\n` +
            `用于刷新UI显示的数据。`
        )
    },
];
