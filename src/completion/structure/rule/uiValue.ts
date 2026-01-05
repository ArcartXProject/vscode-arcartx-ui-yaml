import * as vscode from 'vscode';

// 原版HUD名称列表
export const hud_names = [
    { label: 'vignette', detail: '视场暗角', insertText: 'vignette', kind: vscode.CompletionItemKind.Value },
    { label: 'spyglass', detail: '望远镜效果', insertText: 'spyglass', kind: vscode.CompletionItemKind.Value },
    { label: 'helmet', detail: '头盔渲染', insertText: 'helmet', kind: vscode.CompletionItemKind.Value },
    { label: 'frostbite', detail: '冰霜效果', insertText: 'frostbite', kind: vscode.CompletionItemKind.Value },
    { label: 'portal', detail: '传送门渲染', insertText: 'portal', kind: vscode.CompletionItemKind.Value },
    { label: 'hotbar', detail: '物品栏', insertText: 'hotbar', kind: vscode.CompletionItemKind.Value },
    { label: 'crosshair', detail: '准星', insertText: 'crosshair', kind: vscode.CompletionItemKind.Value },
    { label: 'boss_event_progress', detail: 'Boss进度条', insertText: 'boss_event_progress', kind: vscode.CompletionItemKind.Value },
    { label: 'player_health', detail: '玩家生命值', insertText: 'player_health', kind: vscode.CompletionItemKind.Value },
    { label: 'armor_level', detail: '护甲值', insertText: 'armor_level', kind: vscode.CompletionItemKind.Value },
    { label: 'food_level', detail: '饥饿值', insertText: 'food_level', kind: vscode.CompletionItemKind.Value },
    { label: 'air_level', detail: '氧气值', insertText: 'air_level', kind: vscode.CompletionItemKind.Value },
    { label: 'mount_health', detail: '坐骑生命值', insertText: 'mount_health', kind: vscode.CompletionItemKind.Value },
    { label: 'jump_bar', detail: '跳跃蓄力条（马）', insertText: 'jump_bar', kind: vscode.CompletionItemKind.Value },
    { label: 'experience_bar', detail: '经验条', insertText: 'experience_bar', kind: vscode.CompletionItemKind.Value },
    { label: 'item_name', detail: '物品名称', insertText: 'item_name', kind: vscode.CompletionItemKind.Value },
    { label: 'sleep_fade', detail: '睡眠渐变', insertText: 'sleep_fade', kind: vscode.CompletionItemKind.Value },
    { label: 'potion_icons', detail: '药水效果图标', insertText: 'potion_icons', kind: vscode.CompletionItemKind.Value },
    { label: 'debug_text', detail: '调试文本', insertText: 'debug_text', kind: vscode.CompletionItemKind.Value },
    { label: 'fps_graph', detail: 'FPS图表', insertText: 'fps_graph', kind: vscode.CompletionItemKind.Value },
    { label: 'record_overlay', detail: '唱片播放覆盖层', insertText: 'record_overlay', kind: vscode.CompletionItemKind.Value },
    { label: 'title_text', detail: '标题文字', insertText: 'title_text', kind: vscode.CompletionItemKind.Value },
    { label: 'subtitles', detail: '字幕', insertText: 'subtitles', kind: vscode.CompletionItemKind.Value },
    { label: 'scoreboard', detail: '记分板', insertText: 'scoreboard', kind: vscode.CompletionItemKind.Value },
    { label: 'chat_panel', detail: '聊天面板', insertText: 'chat_panel', kind: vscode.CompletionItemKind.Value },
    { label: 'player_list', detail: '玩家列表', insertText: 'player_list', kind: vscode.CompletionItemKind.Value },
    { label: 'recipe_toast', detail: '配方提示', insertText: 'recipe_toast', kind: vscode.CompletionItemKind.Value },
    { label: 'system_toast', detail: '系统提示', insertText: 'system_toast', kind: vscode.CompletionItemKind.Value },
    { label: 'advancement_toast', detail: '成就提示', insertText: 'advancement_toast', kind: vscode.CompletionItemKind.Value },
    { label: 'tutorial_toast', detail: '教程提示', insertText: 'tutorial_toast', kind: vscode.CompletionItemKind.Value },
];

// match 属性的格式选项
export const match_values = [
    {
        label: '[regex]',
        detail: '正则表达式匹配模式',
        insertText: '[regex]${1:正则表达式}',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: new vscode.MarkdownString(
            `**正则匹配模式**\n\n` +
            `使用 \`[regex]\` 前缀表示后续内容为正则表达式。\n\n` +
            `例如: \`[regex][0-9]+\` 匹配纯数字ID\n\n` +
            `注：容器的匹配永远不包含颜色符号`
        )
    },
];
