import * as vscode from 'vscode';

export const control_settings = [
    {
        label: 'val',
        detail: '控件常量名[非脚本]',
        insertText: 'val: ${1:常量名}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'type',
        detail: '设置控件类型',
        insertText: 'type: ${1|texture,text,9sliceTexture,textBox,entity,slot,canvas,adaptive,hGrid,vGrid,hStack,vStack,scroll|}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'attribute',
        detail: '控件属性列表',
        insertText: 'attribute:\n  ',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'children',
        detail: '控件子控件表',
        insertText: 'children:\n  ',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'action',
        detail: '控件触发器',
        insertText: 'action:\n  ',
        kind: vscode.CompletionItemKind.Property
    }
]