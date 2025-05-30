import * as vscode from 'vscode';

export const ui_options = [
    {
        label: 'match',
        detail: '替换窗口ID[非脚本]',
        insertText: 'match: []',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'hide',
        detail: '打开时隐藏的HUD[非脚本]',
        insertText: 'hide: []',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'transfer',
        detail: '是否传递交互到HUD[默认: false][脚本]',
        insertText: 'transfer: true',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'itemSize',
        detail: '物品渲染尺寸[默认: 16][脚本]',
        insertText: 'itemSize: ${1:尺寸}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'through',
        detail: '是否开启穿透点击[默认: false][脚本]',
        insertText: 'through: true',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'escClose',
        detail: '允许ESC关闭[默认: true][脚本]',
        insertText: 'escClose: false',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'background',
        detail: '是否渲染背景[默认: true][脚本]',
        insertText: 'background: false',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'closeDied',
        detail: '死亡关闭[默认: true][脚本]',
        insertText: 'closeDied: false',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'show',
        detail: '默认是否渲染[默认: true][脚本]',
        insertText: 'show: false',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'jei',
        detail: 'JEI侧边栏[默认: false][脚本]',
        insertText: 'jei: true',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'level',
        detail: 'HUD渲染的优先级[默认: 0][脚本]',
        insertText: 'level: ${1:优先级}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'isHud',
        detail: '作为HUD[默认: false][非脚本]',
        insertText: 'isHud: true',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'action',
        detail: 'UI触发器',
        insertText: 'action:\n  ',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'packetHandler',
        detail: '通讯处理器',
        insertText: 'packetHandler:\n  ',
        kind: vscode.CompletionItemKind.Property
    },
]