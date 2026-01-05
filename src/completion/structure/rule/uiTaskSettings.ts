import * as vscode from 'vscode';

// ========== 任务模板 ==========
const delayTask = {
    label: 'delay-task',
    detail: '创建延迟任务',
    insertText: [
        '${1:任务名称}:',
        '  type: delay',
        '  time: ${2:5000}',
        '  run: |-',
        '    ${3:// 5秒后执行一次}',
        '    Message.chat("延迟任务执行了")'
    ].join('\n'),
    kind: vscode.CompletionItemKind.Snippet
};

const loopTask = {
    label: 'loop-task',
    detail: '创建循环任务',
    insertText: [
        '${1:任务名称}:',
        '  type: loop',
        '  time: ${2:3000}',
        '  cycle: ${3:1000}',
        '  run: |-',
        '    ${4:// 3秒后开始，每1秒循环执行}',
        '    Message.chat("循环任务执行中...")'
    ].join('\n'),
    kind: vscode.CompletionItemKind.Snippet
};

// 任务模板导出（用于 tasks: 块级别）
export const task_templates = [
    delayTask,
    loopTask
];

// UI 任务设置（tasks 下的属性）
export const task_settings = [
    {
        label: 'type',
        detail: '任务类型',
        insertText: 'type: ',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 任务类型\n\n' +
            '设置定时任务的类型。\n\n' +
            '**可选类型**:\n' +
            '- `delay` - 延迟任务（指定时间后执行一次）\n' +
            '- `loop` - 循环任务（指定时间后开始，按周期循环执行）\n\n' +
            '**注意**: 输入 `/` 查看所有选项。'
        )
    },
    {
        label: 'time',
        detail: '初始延迟时间（毫秒）',
        insertText: 'time: ${1:1000}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 初始延迟时间\n\n' +
            '任务开始前的延迟时间（毫秒）。\n\n' +
            '**类型**: 数字\n\n' +
            '**示例**:\n' +
            '- `1000` - 1秒后执行\n' +
            '- `5000` - 5秒后执行'
        )
    },
    {
        label: 'cycle',
        detail: '循环周期（毫秒，仅loop类型）',
        insertText: 'cycle: ${1:1000}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 循环周期\n\n' +
            '循环任务的执行周期（毫秒）。\n\n' +
            '**类型**: 数字\n' +
            '**适用**: 仅 `loop` 类型任务\n\n' +
            '**示例**:\n' +
            '- `1000` - 每1秒执行一次\n' +
            '- `5000` - 每5秒执行一次'
        )
    },
    {
        label: 'run',
        detail: '任务执行的脚本',
        insertText: 'run: |-\n  ${1:// 执行的脚本}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 执行脚本\n\n' +
            '任务触发时执行的脚本内容。\n\n' +
            '**示例**:\n' +
            '```yaml\n' +
            'run: |-\n' +
            '  Message.chat("任务执行了")\n' +
            '  self.close()\n' +
            '```'
        )
    },
];
