import * as vscode from 'vscode';

// UI 任务类型值
export const task_type_values = [
    {
        label: 'delay',
        detail: '延迟任务 - 指定时间后执行一次',
        insertText: 'delay',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 延迟任务 (delay)\n\n' +
            '在指定时间后执行一次任务。\n\n' +
            '**属性**:\n' +
            '| 属性 | 说明 | 必需 |\n' +
            '|------|------|------|\n' +
            '| `type` | 固定为 `delay` | 是 |\n' +
            '| `time` | 延迟时间（毫秒） | 是 |\n' +
            '| `run` | 执行的脚本 | 是 |\n\n' +
            '**示例**:\n' +
            '```yaml\n' +
            'tasks:\n' +
            '  延迟5秒:\n' +
            '    type: delay\n' +
            '    time: 5000\n' +
            '    run: |-\n' +
            '      Message.chat("5秒后执行")\n' +
            '```\n\n' +
            '**常用场景**: 延迟关闭UI、定时提示消息。'
        )
    },
    {
        label: 'loop',
        detail: '循环任务 - 按周期循环执行',
        insertText: 'loop',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 循环任务 (loop)\n\n' +
            '在指定时间后开始，按周期循环执行任务。\n\n' +
            '**属性**:\n' +
            '| 属性 | 说明 | 必需 |\n' +
            '|------|------|------|\n' +
            '| `type` | 固定为 `loop` | 是 |\n' +
            '| `time` | 初始延迟时间（毫秒） | 是 |\n' +
            '| `cycle` | 循环周期（毫秒） | 是 |\n' +
            '| `run` | 执行的脚本 | 是 |\n\n' +
            '**示例**:\n' +
            '```yaml\n' +
            'tasks:\n' +
            '  每3秒提示:\n' +
            '    type: loop\n' +
            '    time: 3000\n' +
            '    cycle: 1000\n' +
            '    run: |-\n' +
            '      Message.chat("循环执行中...")\n' +
            '```\n\n' +
            '**常用场景**: 定时刷新数据、倒计时显示、循环检测状态。'
        )
    },
];
