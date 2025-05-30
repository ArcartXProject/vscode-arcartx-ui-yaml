import * as vscode from 'vscode';

export const control_actions = [
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
        label: 'enter',
        detail: '鼠标进入范围事件',
        insertText: 'enter: |-\n  ${1:// 鼠标进入范围时触发}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'leave',
        detail: '鼠标离开范围事件',
        insertText: 'leave: |-\n  ${1:// 鼠标离开范围时触发}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'textChange',
        detail: '输入框内容被改变事件 (TextBox独有)',
        insertText: 'textChange: |-\n  ${1:// 输入框内容被改变时触发}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'create',
        detail: '被创建时事件',
        insertText: 'create: |-\n  ${1:// 被创建时触发}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'remove',
        detail: '被删除时事件',
        insertText: 'remove: |-\n  ${1:// 被删除时触发}',
        kind: vscode.CompletionItemKind.Property
    },
]