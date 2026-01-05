import * as vscode from 'vscode';

// UI对象(self)函数和变量补全
export const self_functions = [
    // === 函数 ===
    {
        label: 'childrenCount()',
        detail: '获取顶层组件数量',
        insertText: 'childrenCount()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            `**获取顶层组件数量**\n\n` +
            `**参数**: 无\n` +
            `**返回值**: 数字类型\n\n` +
            `---\n\n` +
            `\`\`\`shimmer\n` +
            `self.childrenCount()\n` +
            `\`\`\``
        )
    },
    {
        label: 'close()',
        detail: '关闭当前UI',
        insertText: 'close()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            `**关闭当前UI**\n\n` +
            `**参数**: 无\n` +
            `**返回值**: 无\n\n` +
            `---\n\n` +
            `\`\`\`shimmer\n` +
            `self.close()\n` +
            `\`\`\``
        )
    },
    {
        label: 'getID()',
        detail: '获取当前UI的ID',
        insertText: 'getID()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            `**获取当前UI的ID**\n\n` +
            `**参数**: 无\n` +
            `**返回值**: 字符串类型\n\n` +
            `---\n\n` +
            `\`\`\`shimmer\n` +
            `self.getID()  // 返回: "exampleUI"\n` +
            `\`\`\``
        )
    },
    {
        label: 'removeControlWithMeta()',
        detail: '匹配控件元数据删除控件',
        insertText: 'removeControlWithMeta(${1:key}, ${2:value})',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            `**匹配控件元数据删除控件**\n\n` +
            `**参数**:\n` +
            `- \`key\`: 元数据键\n` +
            `- \`value\`: 元数据值（可选，不包含则只匹配键）\n\n` +
            `**返回值**: 无\n\n` +
            `---\n\n` +
            `\`\`\`shimmer\n` +
            `self.removeControlWithMeta("exampleKey", "exampleValue")\n` +
            `\`\`\``
        )
    },
    {
        label: 'getControlWithMeta()',
        detail: '匹配控件元数据获取控件',
        insertText: 'getControlWithMeta(${1:key}, ${2:value})',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            `**匹配控件元数据获取控件**\n\n` +
            `**参数**:\n` +
            `- \`key\`: 元数据键\n` +
            `- \`value\`: 元数据值（可选）\n\n` +
            `**返回值**: 列表（控件对象数组）\n\n` +
            `---\n\n` +
            `\`\`\`shimmer\n` +
            `self.getControlWithMeta("exampleKey", "exampleValue")\n` +
            `// 返回: [控件对象A, 控件对象B...]\n` +
            `\`\`\``
        )
    },
    {
        label: 'getSlotItemStack()',
        detail: '获取指定槽位的物品',
        insertText: 'getSlotItemStack(${1:slotName}, ${2:slotType})',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            `**获取指定槽位的物品**\n\n` +
            `**参数**:\n` +
            `- \`slotName\`: 槽位ID\n` +
            `- \`slotType\`: 槽位类型（如 "Extra"）\n\n` +
            `**返回值**: 物品堆（为空时返回空气）\n\n` +
            `**适用**: 仅Menu类型\n\n` +
            `---\n\n` +
            `\`\`\`shimmer\n` +
            `self.getSlotItemStack('xxx', "Extra")\n` +
            `\`\`\``
        )
    },
    {
        label: 'getOriginalName()',
        detail: '获取UI的原始名称',
        insertText: 'getOriginalName()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            `**获取UI的原始名称**\n\n` +
            `获取被替换的原版UI名称。\n\n` +
            `**参数**: 无\n` +
            `**返回值**: 字符串类型\n\n` +
            `**适用**: 仅Menu类型\n\n` +
            `---\n\n` +
            `\`\`\`shimmer\n` +
            `self.getOriginalName()  // 返回: "原版UI名称"\n` +
            `\`\`\``
        )
    },
    {
        label: 'clickSlot()',
        detail: '模拟点击容器槽位',
        insertText: 'clickSlot(${1:id}, ${2:button}, ${3:type})',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            `**模拟点击容器槽位**\n\n` +
            `**参数**:\n` +
            `- \`id\`: 槽位ID\n` +
            `- \`button\`: 按键ID（通常为 0、1、2）\n` +
            `- \`type\`: 点击类型（可选，默认 "PICKUP"）\n\n` +
            `**可用点击类型**:\n` +
            `PICKUP, QUICK_MOVE, SWAP, CLONE, THROW, QUICK_CRAFT, PICKUP_ALL\n\n` +
            `**适用**: 仅Menu类型\n\n` +
            `---\n\n` +
            `\`\`\`shimmer\n` +
            `self.clickSlot(0, 0, "PICKUP")\n` +
            `\`\`\``
        )
    },
    {
        label: 'getCarriedItemStack()',
        detail: '获取鼠标指针上的物品堆',
        insertText: 'getCarriedItemStack()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            `**获取鼠标指针上的物品堆**\n\n` +
            `获取拿起物品时鼠标指针上的物品对象。\n\n` +
            `**参数**: 无\n` +
            `**返回值**: 物品堆（为空时返回空物品堆）\n\n` +
            `**适用**: 仅Menu类型`
        )
    },
    {
        label: 'delayAction()',
        detail: '延迟触发UI的触发器事件',
        insertText: 'delayAction(${1:delay}, ${2:actionName})',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            `**延迟触发UI的触发器事件**\n\n` +
            `**参数**:\n` +
            `- \`delay\`: 延迟时间（毫秒）\n` +
            `- \`actionName\`: 触发器名称\n\n` +
            `**返回值**: 无\n\n` +
            `---\n\n` +
            `\`\`\`shimmer\n` +
            `self.delayAction(1000, 'click')  // 1秒后触发click事件\n` +
            `\`\`\``
        )
    },
    {
        label: 'getHoverScroll()',
        detail: '获取鼠标悬停的滚动控件列表',
        insertText: 'getHoverScroll()',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            `**获取鼠标悬停的滚动控件列表**\n\n` +
            `获取当前鼠标悬停的滚动栏控件列表。\n\n` +
            `**参数**: 无\n` +
            `**返回值**: 滚动栏控件列表\n\n` +
            `**适用**: 仅Menu类型\n\n` +
            `---\n\n` +
            `\`\`\`shimmer\n` +
            `self.getHoverScroll()  // 返回: []\n` +
            `\`\`\``
        )
    },
    {
        label: 'create()',
        detail: '在当前界面创建一级控件',
        insertText: 'create(${1:tempID}, ${2:newName})',
        kind: vscode.CompletionItemKind.Function,
        documentation: new vscode.MarkdownString(
            `**在当前界面创建一级控件**\n\n` +
            `从 template 模板创建新控件。\n\n` +
            `**参数**:\n` +
            `- \`tempID\`: 模板ID\n` +
            `- \`newName\`: 新创建控件的ID\n\n` +
            `**返回值**: 控件对象\n\n` +
            `---\n\n` +
            `\`\`\`shimmer\n` +
            `self.create('我是一个模板', '新控件名称')\n` +
            `\`\`\`\n\n` +
            `对应的 template 配置:\n` +
            `\`\`\`yaml\n` +
            `template:\n` +
            `  我是一个模板:\n` +
            `    type: Texture\n` +
            `    attribute:\n` +
            `      width: 128\n` +
            `      height: 128\n` +
            `\`\`\``
        )
    },

    // === 变量（属性） ===
    {
        label: 'itemSize',
        detail: '物品渲染大小 [仅Menu]',
        insertText: 'itemSize',
        kind: vscode.CompletionItemKind.Variable,
        documentation: new vscode.MarkdownString(
            `**物品渲染大小**\n\n` +
            `拿起物品时的渲染大小。\n\n` +
            `**类型**: 数字\n` +
            `**适用**: 仅Menu类型`
        )
    },
    {
        label: 'through',
        detail: '是否穿透点击',
        insertText: 'through',
        kind: vscode.CompletionItemKind.Variable,
        documentation: new vscode.MarkdownString(
            `**是否穿透点击**\n\n` +
            `控制点击是否穿透到下层组件。\n\n` +
            `**类型**: 布尔值`
        )
    },
    {
        label: 'escClose',
        detail: '是否允许ESC关闭 [仅Menu]',
        insertText: 'escClose',
        kind: vscode.CompletionItemKind.Variable,
        documentation: new vscode.MarkdownString(
            `**是否允许ESC关闭**\n\n` +
            `**类型**: 布尔值\n` +
            `**适用**: 仅Menu类型`
        )
    },
    {
        label: 'background',
        detail: '是否渲染背景 [仅Menu]',
        insertText: 'background',
        kind: vscode.CompletionItemKind.Variable,
        documentation: new vscode.MarkdownString(
            `**是否渲染背景**\n\n` +
            `控制原版半透明背景的渲染。\n\n` +
            `**类型**: 布尔值\n` +
            `**适用**: 仅Menu类型`
        )
    },
    {
        label: 'closeDied',
        detail: '死亡时是否关闭UI [仅Menu]',
        insertText: 'closeDied',
        kind: vscode.CompletionItemKind.Variable,
        documentation: new vscode.MarkdownString(
            `**死亡时是否关闭UI**\n\n` +
            `**类型**: 布尔值\n` +
            `**适用**: 仅Menu类型`
        )
    },
    {
        label: 'show',
        detail: 'UI是否渲染',
        insertText: 'show',
        kind: vscode.CompletionItemKind.Variable,
        documentation: new vscode.MarkdownString(
            `**UI是否渲染**\n\n` +
            `可动态修改控制UI显示状态。\n\n` +
            `**类型**: 布尔值`
        )
    },
    {
        label: 'jei',
        detail: '是否显示JEI侧边栏 [仅Menu]',
        insertText: 'jei',
        kind: vscode.CompletionItemKind.Variable,
        documentation: new vscode.MarkdownString(
            `**是否显示JEI侧边栏**\n\n` +
            `**类型**: 布尔值\n` +
            `**适用**: 仅Menu类型`
        )
    },
    {
        label: 'actions',
        detail: '触发器字典',
        insertText: 'actions',
        kind: vscode.CompletionItemKind.Variable,
        documentation: new vscode.MarkdownString(
            `**触发器字典**\n\n` +
            `包含所有UI触发器的字典对象。\n\n` +
            `**类型**: 字典`
        )
    },
    {
        label: 'wheelValue',
        detail: '滚轮滚动值',
        insertText: 'wheelValue',
        kind: vscode.CompletionItemKind.Variable,
        documentation: new vscode.MarkdownString(
            `**滚轮滚动值**\n\n` +
            `在 wheel 事件中获取滚轮滚动方向和值。\n\n` +
            `**类型**: 数字\n` +
            `- 正数: 向上滚动\n` +
            `- 负数: 向下滚动`
        )
    },
    {
        label: 'currentKeyPress',
        detail: '当前按下的按键',
        insertText: 'currentKeyPress',
        kind: vscode.CompletionItemKind.Variable,
        documentation: new vscode.MarkdownString(
            `**当前按下的按键**\n\n` +
            `在 keyPress 事件中获取按下的按键。\n\n` +
            `**类型**: 字符串`
        )
    },
    {
        label: 'currentKeyReleased',
        detail: '当前释放的按键',
        insertText: 'currentKeyReleased',
        kind: vscode.CompletionItemKind.Variable,
        documentation: new vscode.MarkdownString(
            `**当前释放的按键**\n\n` +
            `在 keyRelease 事件中获取释放的按键。\n\n` +
            `**类型**: 字符串`
        )
    },
    {
        label: 'level',
        detail: 'HUD渲染优先级 [仅HUD]',
        insertText: 'level',
        kind: vscode.CompletionItemKind.Variable,
        documentation: new vscode.MarkdownString(
            `**HUD渲染优先级**\n\n` +
            `数字越大越先渲染（显示越靠后）。\n\n` +
            `**类型**: 数字\n` +
            `**适用**: 仅HUD类型`
        )
    },
];
