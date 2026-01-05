import * as vscode from 'vscode';

export const ui_options = [
    {
        label: 'match',
        detail: '替换窗口ID[非脚本]',
        insertText: 'match: []',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**替换原版界面ID**\n\n` +
            `- **生效对象**: Menu类型\n` +
            `- **脚本支持**: 否\n` +
            `- **默认值**: 无\n\n` +
            `填写要替换的原版界面ID。可在客户端日志中查看打开界面时显示的ID。\n\n` +
            `支持正则匹配：使用 \`[regex]\` 前缀\n` +
            `例如: \`[regex][0-9]+\``
        )
    },
    {
        label: 'hide',
        detail: '打开时隐藏的HUD[非脚本]',
        insertText: 'hide: []',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**隐藏HUD列表**\n\n` +
            `- **生效对象**: Menu类型、HUD类型\n` +
            `- **脚本支持**: 否\n` +
            `- **默认值**: 无\n\n` +
            `当此UI打开时，隐藏指定的HUD。\n\n` +
            `**ArcartX HUD**: 填写对应ID\n\n` +
            `**原版HUD名称**:\n` +
            `vignette, spyglass, helmet, frostbite, portal, hotbar, crosshair\n` +
            `boss_event_progress, player_health, armor_level, food_level, air_level\n` +
            `mount_health, jump_bar, experience_bar, item_name, sleep_fade\n` +
            `potion_icons, debug_text, fps_graph, record_overlay, title_text, subtitles\n` +
            `scoreboard, chat_panel, player_list\n` +
            `recipe_toast, system_toast, advancement_toast, tutorial_toast`
        )
    },
    {
        label: 'itemSize',
        detail: '物品渲染尺寸[默认: 16][脚本]',
        insertText: 'itemSize: ${1:尺寸}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**物品拿起时的渲染大小**\n\n` +
            `- **生效对象**: Menu类型\n` +
            `- **脚本支持**: 是\n` +
            `- **默认值**: 16\n\n` +
            `当点击物品槽位拿起物品到鼠标指针上时的渲染大小。`
        )
    },
    {
        label: 'through',
        detail: '是否开启穿透点击[默认: false][脚本]',
        insertText: 'through: true',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**穿透点击**\n\n` +
            `- **生效对象**: Menu类型、HUD类型\n` +
            `- **脚本支持**: 是\n` +
            `- **默认值**: false\n\n` +
            `是否开启穿透点击。\n\n` +
            `- \`true\`: 重叠的组件点击时会同时触发\n` +
            `- \`false\`: 只触发显示在上层的组件`
        )
    },
    {
        label: 'escClose',
        detail: '允许ESC关闭[默认: true][脚本]',
        insertText: 'escClose: false',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**ESC键关闭**\n\n` +
            `- **生效对象**: Menu类型\n` +
            `- **脚本支持**: 是\n` +
            `- **默认值**: true\n\n` +
            `是否允许按下ESC键关闭此UI。`
        )
    },
    {
        label: 'background',
        detail: '是否渲染背景[默认: true][脚本]',
        insertText: 'background: false',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**渲染半透明背景**\n\n` +
            `- **生效对象**: Menu类型\n` +
            `- **脚本支持**: 是\n` +
            `- **默认值**: true\n\n` +
            `是否渲染原版的半透明黑色背景。`
        )
    },
    {
        label: 'closeDied',
        detail: '死亡关闭[默认: true][脚本]',
        insertText: 'closeDied: false',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**死亡时关闭UI**\n\n` +
            `- **生效对象**: Menu类型\n` +
            `- **脚本支持**: 是\n` +
            `- **默认值**: true\n\n` +
            `玩家死亡时UI是否关闭。\n\n` +
            `⚠️ 除非替换的是原版死亡界面，否则建议保持默认值。`
        )
    },
    {
        label: 'show',
        detail: '默认是否渲染[默认: true][脚本]',
        insertText: 'show: false',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**UI是否渲染**\n\n` +
            `- **生效对象**: Menu类型、HUD类型\n` +
            `- **脚本支持**: 是\n` +
            `- **默认值**: true\n\n` +
            `控制UI是否显示。可通过脚本动态修改。`
        )
    },
    {
        label: 'jei',
        detail: 'JEI侧边栏[默认: false][脚本]',
        insertText: 'jei: true',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**显示JEI侧边栏**\n\n` +
            `- **生效对象**: Menu类型\n` +
            `- **脚本支持**: 是\n` +
            `- **默认值**: false\n\n` +
            `UI打开时是否显示JEI的侧边栏（需要安装JEI模组）。`
        )
    },
    {
        label: 'level',
        detail: 'HUD渲染的优先级[默认: 0][脚本]',
        insertText: 'level: ${1:优先级}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**HUD渲染优先级**\n\n` +
            `- **生效对象**: HUD类型\n` +
            `- **脚本支持**: 是\n` +
            `- **默认值**: 0\n\n` +
            `HUD的渲染层级，数字越大越先渲染（显示越靠后）。`
        )
    },
    {
        label: 'isHud',
        detail: '作为HUD[默认: false][非脚本]',
        insertText: 'isHud: true',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**标识为HUD类型**\n\n` +
            `- **生效对象**: HUD类型\n` +
            `- **脚本支持**: 否\n` +
            `- **默认值**: false\n\n` +
            `将此UI标识为HUD类型（常驻屏幕的显示UI）。`
        )
    },
    {
        label: 'defaultOpen',
        detail: 'HUD加载后自动打开[默认: true][非脚本]',
        insertText: 'defaultOpen: false',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**HUD自动打开**\n\n` +
            `- **生效对象**: HUD类型\n` +
            `- **脚本支持**: 否\n` +
            `- **默认值**: true\n\n` +
            `HUD加载后是否自动打开。\n\n` +
            `若不自动打开，可使用指令 \`/a screen open\` 或API启动/关闭。`
        )
    },
    {
        label: 'action',
        detail: 'UI触发器',
        insertText: 'action:\n  ',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**UI动作触发器**\n\n` +
            `定义UI的各种触发器和事件处理。\n\n` +
            `输入 \`?\` 查看可用的触发器类型。`
        )
    },
    {
        label: 'packetHandler',
        detail: '通讯处理器',
        insertText: 'packetHandler:\n  ',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            `**数据包处理器**\n\n` +
            `用于处理服务端发送到客户端的数据包。\n\n` +
            `**服务端发送数据**:\n` +
            `\`\`\`java\n` +
            `ui.sendPacket(player, "处理器名", Map.of("key", "value"));\n` +
            `\`\`\`\n\n` +
            `**客户端接收数据**:\n` +
            `- 数据存储在 \`packet\` 变量中\n` +
            `- 通过 \`packet[\'key\']\` 访问具体值\n\n` +
            `**数据类型限制**:\n` +
            `- 仅支持基本数据类型\n` +
            `- 支持 List 和 Map\n` +
            `- 集合内容必须是基本数据类型\n\n` +
            `输入 \`?\` 查看可用的处理器名称。`
        )
    },
]
