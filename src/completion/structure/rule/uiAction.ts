import * as vscode from 'vscode';

export const ui_actions = [
    {
        label: 'keyPress',
        detail: '键盘按下事件',
        insertText: 'keyPress: |-\n  ${1:// 通过self.currentKeyPress获取按下的按键}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**键盘按下事件**\n\n` +
            `当用户按下键盘上的任意键时触发。\n\n` +
            `**获取按键**: \`self.currentKeyPress\`\n\n` +
            `---\n\n` +
            `\`\`\`shimmer\n` +
            `keyPress: |-\n` +
            `  if self.currentKeyPress == 'A' {\n` +
            `    // 按下A键时的逻辑\n` +
            `  }\n` +
            `\`\`\``
        )
    },
    {
        label: 'keyRelease',
        detail: '键盘释放事件',
        insertText: 'keyRelease: |-\n  ${1:// 通过self.currentKeyReleased获取释放的按键}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**键盘释放事件**\n\n` +
            `当用户释放键盘上的任意键时触发。\n\n` +
            `**获取按键**: \`self.currentKeyReleased\`\n\n` +
            `---\n\n` +
            `\`\`\`shimmer\n` +
            `keyRelease: |-\n` +
            `  if self.currentKeyReleased == 'ESC' {\n` +
            `    // 释放ESC键时的逻辑\n` +
            `  }\n` +
            `\`\`\``
        )
    },
    {
        label: 'wheel',
        detail: '滚轮事件',
        insertText: 'wheel: |-\n  ${1:// 通过self.wheelValue正负判断滚动方向}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**鼠标滚轮事件**\n\n` +
            `当用户滚动鼠标滚轮时触发。\n\n` +
            `**获取滚动值**: \`self.wheelValue\`\n\n` +
            `- 正数: 向上滚动\n` +
            `- 负数: 向下滚动\n\n` +
            `---\n\n` +
            `\`\`\`shimmer\n` +
            `wheel: |-\n` +
            `  if self.wheelValue > 0 {\n` +
            `    // 向上滚动\n` +
            `  } else {\n` +
            `    // 向下滚动\n` +
            `  }\n` +
            `\`\`\``
        )
    },
    {
        label: 'message',
        detail: '接收消息事件',
        insertText: 'message: |-\n  ${1:// 通过Chat.getEventMessage()获取消息内容}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**接收消息事件**\n\n` +
            `当接收到聊天消息时触发。\n\n` +
            `**获取消息**: \`Chat.getEventMessage()\`\n\n` +
            `---\n\n` +
            `\`\`\`shimmer\n` +
            `message: |-\n` +
            `  val msg = Chat.getEventMessage()\n` +
            `  // 处理消息内容\n` +
            `\`\`\``
        )
    },
    {
        label: 'chatOpen',
        detail: '聊天框打开事件',
        insertText: 'chatOpen: |-\n  ${1:// 聊天框打开时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**聊天框打开事件**\n\n` +
            `当玩家打开聊天框时触发。`
        )
    },
    {
        label: 'chatClose',
        detail: '聊天框关闭事件',
        insertText: 'chatClose: |-\n  ${1:// 聊天框关闭时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**聊天框关闭事件**\n\n` +
            `当玩家关闭聊天框时触发。`
        )
    },
    {
        label: 'open',
        detail: 'UI打开事件',
        insertText: 'open: |-\n  ${1:// 该触发器触发于UI所有控件初始化之后}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**UI打开事件**\n\n` +
            `当UI打开时触发，**在所有控件初始化之后**。\n\n` +
            `与 \`load\` 的区别:\n` +
            `- \`open\`: 控件初始化**之后**触发\n` +
            `- \`load\`: 控件初始化**之前**触发\n\n` +
            `适用于需要操作控件的逻辑。`
        )
    },
    {
        label: 'click',
        detail: '点击事件',
        insertText: 'click: |-\n  ${1:// 点击时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**鼠标点击事件**\n\n` +
            `当UI被点击时触发（任意鼠标键）。`
        )
    },
    {
        label: 'clickLeft',
        detail: '左键点击事件',
        insertText: 'clickLeft: |-\n  ${1:// 左键点击时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**鼠标左键点击事件**\n\n` +
            `当UI被左键点击时触发。`
        )
    },
    {
        label: 'clickRight',
        detail: '右键点击事件',
        insertText: 'clickRight: |-\n  ${1:// 右键点击时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**鼠标右键点击事件**\n\n` +
            `当UI被右键点击时触发。`
        )
    },
    {
        label: 'clickMiddle',
        detail: '中键点击事件',
        insertText: 'clickMiddle: |-\n  ${1:// 中键点击时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**鼠标中键点击事件**\n\n` +
            `当UI被中键（滚轮按下）点击时触发。`
        )
    },
    {
        label: 'release',
        detail: '释放事件',
        insertText: 'release: |-\n  ${1:// 释放时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**鼠标释放事件**\n\n` +
            `当UI上鼠标按键释放时触发（任意鼠标键）。`
        )
    },
    {
        label: 'releaseLeft',
        detail: '左键释放事件',
        insertText: 'releaseLeft: |-\n  ${1:// 左键释放时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**鼠标左键释放事件**\n\n` +
            `当UI上左键释放时触发。`
        )
    },
    {
        label: 'releaseRight',
        detail: '右键释放事件',
        insertText: 'releaseRight: |-\n  ${1:// 右键释放时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**鼠标右键释放事件**\n\n` +
            `当UI上右键释放时触发。`
        )
    },
    {
        label: 'releaseMiddle',
        detail: '中键释放事件',
        insertText: 'releaseMiddle: |-\n  ${1:// 中键释放时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**鼠标中键释放事件**\n\n` +
            `当UI上中键释放时触发。`
        )
    },
    {
        label: 'resize',
        detail: '游戏尺寸变化事件',
        insertText: 'resize: |-\n  ${1:// 游戏尺寸变化时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**游戏窗口尺寸变化事件**\n\n` +
            `当游戏窗口尺寸改变时触发。\n\n` +
            `适用于需要响应窗口大小变化的布局调整。`
        )
    },
    {
        label: 'close',
        detail: 'UI关闭事件',
        insertText: 'close: |-\n  ${1:// UI关闭时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**UI关闭事件**\n\n` +
            `当UI关闭时触发。\n\n` +
            `适用于清理资源或保存状态的逻辑。`
        )
    },
    {
        label: 'tick',
        detail: '逻辑帧事件',
        insertText: 'tick: |-\n  ${1:// 正常来说是每秒触发100次}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**逻辑帧事件**\n\n` +
            `每秒触发 **100次**。\n\n` +
            `注意：\n` +
            `- 这是**逻辑帧**，与渲染帧不同\n` +
            `- 运算层和逻辑层是分开的\n\n` +
            `适用于需要高频更新的逻辑。`
        )
    },
    {
        label: 'seconds',
        detail: '每秒事件',
        insertText: 'seconds: |-\n  ${1:// 每秒触发一次}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**每秒触发事件**\n\n` +
            `每秒触发 **1次**。\n\n` +
            `适用于需要低频循环调用的逻辑（如倒计时、定时更新等）。`
        )
    },
    {
        label: 'load',
        detail: 'UI读取事件',
        insertText: 'load: |-\n  ${1:// UI自身加载完成后触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**UI加载事件**\n\n` +
            `当UI自身加载完成后触发，**在控件初始化之前**。\n\n` +
            `与 \`open\` 的区别:\n` +
            `- \`load\`: 控件初始化**之前**触发\n` +
            `- \`open\`: 控件初始化**之后**触发\n\n` +
            `适用于需要在控件创建前执行的初始化逻辑。`
        )
    },
]
