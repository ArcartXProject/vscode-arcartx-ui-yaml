import * as vscode from 'vscode';

// ========== 鼠标点击事件 ==========
export const control_actions = [
    {
        label: 'click',
        detail: '点击事件',
        insertText: 'click: |-\n  ${1:// 点击时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 点击 (click)\n\n' +
            '鼠标点击控件时触发。'
        )
    },
    {
        label: 'clickLeft',
        detail: '左键点击事件',
        insertText: 'clickLeft: |-\n  ${1:// 左键点击时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 左键点击 (clickLeft)\n\n' +
            '鼠标左键点击控件时触发。'
        )
    },
    {
        label: 'clickRight',
        detail: '右键点击事件',
        insertText: 'clickRight: |-\n  ${1:// 右键点击时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 右键点击 (clickRight)\n\n' +
            '鼠标右键点击控件时触发。'
        )
    },
    {
        label: 'clickMiddle',
        detail: '中键点击事件',
        insertText: 'clickMiddle: |-\n  ${1:// 中键点击时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 中键点击 (clickMiddle)\n\n' +
            '鼠标中键点击控件时触发。'
        )
    },

    // ========== 鼠标释放事件 ==========
    {
        label: 'release',
        detail: '释放事件',
        insertText: 'release: |-\n  ${1:// 释放时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 释放 (release)\n\n' +
            '鼠标释放控件时触发。'
        )
    },
    {
        label: 'releaseLeft',
        detail: '左键释放事件',
        insertText: 'releaseLeft: |-\n  ${1:// 左键释放时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 左键释放 (releaseLeft)\n\n' +
            '鼠标左键释放控件时触发。'
        )
    },
    {
        label: 'releaseRight',
        detail: '右键释放事件',
        insertText: 'releaseRight: |-\n  ${1:// 右键释放时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 右键释放 (releaseRight)\n\n' +
            '鼠标右键释放控件时触发。'
        )
    },
    {
        label: 'releaseMiddle',
        detail: '中键释放事件',
        insertText: 'releaseMiddle: |-\n  ${1:// 中键释放时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 中键释放 (releaseMiddle)\n\n' +
            '鼠标中键释放控件时触发。'
        )
    },

    // ========== 鼠标移动事件 ==========
    {
        label: 'enter',
        detail: '鼠标进入范围事件',
        insertText: 'enter: |-\n  ${1:// 鼠标进入范围时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 鼠标进入 (enter)\n\n' +
            '鼠标进入控件范围时触发。'
        )
    },
    {
        label: 'leave',
        detail: '鼠标离开范围事件',
        insertText: 'leave: |-\n  ${1:// 鼠标离开范围时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 鼠标离开 (leave)\n\n' +
            '鼠标离开控件范围时触发。'
        )
    },
    {
        label: 'hover',
        detail: '鼠标悬停事件',
        insertText: 'hover: |-\n  ${1:// 鼠标悬停时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 鼠标悬停 (hover)\n\n' +
            '鼠标悬停在控件上时持续触发。\n\n' +
            '**注意**: 与 enter/leave 不同，hover 会在鼠标悬停期间持续触发。'
        )
    },

    // ========== 滚动事件 ==========
    {
        label: 'scroll',
        detail: '滚动事件',
        insertText: 'scroll: |-\n  ${1:// 滚动时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 滚动 (scroll)\n\n' +
            '鼠标滚轮在控件上滚动时触发。\n\n' +
            '**可用变量**: `self.scrollDelta` - 滚动方向和幅度'
        )
    },

    // ========== 输入框事件 ==========
    {
        label: 'textChange',
        detail: '输入框内容被改变事件 (TextBox独有)',
        insertText: 'textChange: |-\n  ${1:// 输入框内容被改变时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 内容改变 (textChange)\n\n' +
            '输入框内容被改变时触发。\n\n' +
            '**适用控件**: TextBox、ChatTextBox\n\n' +
            '**可用变量**: `self.text` - 当前输入框内容'
        )
    },

    // ========== 生命周期事件 ==========
    {
        label: 'create',
        detail: '被创建时事件',
        insertText: 'create: |-\n  ${1:// 被创建时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 创建 (create)\n\n' +
            '控件被创建时触发。\n\n' +
            '**常用场景**: 初始化控件状态、设置默认值、注册事件监听。'
        )
    },
    {
        label: 'remove',
        detail: '被删除时事件',
        insertText: 'remove: |-\n  ${1:// 被删除时触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 删除 (remove)\n\n' +
            '控件被删除时触发。\n\n' +
            '**注意**: 关闭UI不会触发此事件。'
        )
    },

    // ========== 定时事件 ==========
    {
        label: 'tick',
        detail: '每帧触发事件',
        insertText: 'tick: |-\n  ${1:// 每帧触发}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 每帧 (tick)\n\n' +
            '每帧都会触发，用于持续更新控件状态。\n\n' +
            '**常用场景**: 动画效果、进度条更新、倒计时显示。\n\n' +
            '**注意**: 频率很高，避免执行耗时操作。'
        )
    },
]
