import * as vscode from 'vscode';

export const ui_actions = [
    {
        label: 'keyPress',
        detail: '键盘按下事件 - 通过self.currentKeyPress获取按下的按键',
        insertText: 'keyPress: |-\n  ${1:// 通过self.currentKeyPress获取按下的按键}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'keyRelease',
        detail: '键盘释放事件 - 通过self.currentKeyReleased获取释放的按键',
        insertText: 'keyRelease: |-\n  ${1:// 通过self.currentKeyReleased获取释放的按键}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'wheel',
        detail: '滚轮事件 - 通过self.wheelValue正负判断滚动方向',
        insertText: 'wheel: |-\n  ${1:// 通过self.wheelValue可通过正负判断滚动方向}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'message',
        detail: '接收消息事件 - 通过Chat.getEventMessage()获取消息内容',
        insertText: 'message: |-\n  ${1:// 通过Chat.getEventMessage()获取本次触发事件的消息内容}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'chatOpen',
        detail: '聊天框打开事件',
        insertText: 'chatOpen: |-\n  ${1:// 聊天框打开时触发}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'chatClose',
        detail: '聊天框关闭事件',
        insertText: 'chatClose: |-\n  ${1:// 聊天框关闭时触发}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'open',
        detail: 'UI打开事件 - 触发于UI所有控件初始化之后',
        insertText: 'open: |-\n  ${1:// 该触发器触发于UI所有控件初始化之后}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'click',
        detail: '点击事件',
        insertText: 'click: |-\n  ${1:// 点击时触发}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'clickLeft',
        detail: '左键点击事件',
        insertText: 'clickLeft: |-\n  ${1:// 左键点击时触发}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'clickRight',
        detail: '右键点击事件',
        insertText: 'clickRight: |-\n  ${1:// 右键点击时触发}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'clickMiddle',
        detail: '中键点击事件',
        insertText: 'clickMiddle: |-\n  ${1:// 中键点击时触发}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'release',
        detail: '释放事件',
        insertText: 'release: |-\n  ${1:// 释放时触发}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'releaseLeft',
        detail: '左键释放事件',
        insertText: 'releaseLeft: |-\n  ${1:// 左键释放时触发}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'releaseRight',
        detail: '右键释放事件',
        insertText: 'releaseRight: |-\n  ${1:// 右键释放时触发}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'releaseMiddle',
        detail: '中键释放事件',
        insertText: 'releaseMiddle: |-\n  ${1:// 中键释放时触发}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'resize',
        detail: '游戏尺寸变化事件',
        insertText: 'resize: |-\n  ${1:// 游戏尺寸变化时触发}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'close',
        detail: 'UI关闭事件',
        insertText: 'close: |-\n  ${1:// UI关闭时触发}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'tick',
        detail: '逻辑帧事件 - 每秒触发100次',
        insertText: 'tick: |-\n  ${1:// 正常来说是每秒触发100次，和渲染帧不一样}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'seconds',
        detail: '每秒事件 - 每秒触发一次',
        insertText: 'seconds: |-\n  ${1:// 每秒触发一次，用于一些需要低频循环调用的逻辑}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'load',
        detail: 'UI读取事件 - 触发于UI控件初始化之前',
        insertText: 'load: |-\n  ${1:// UI自身加载完成后触发，触发于UI控件初始化之前}',
        kind: vscode.CompletionItemKind.Property
    },
]