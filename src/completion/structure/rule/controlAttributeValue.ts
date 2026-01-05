import * as vscode from 'vscode';

// type 属性的控件类型选项
export const type_values = [
    // ========== 基础显示 ==========
    {
        label: 'texture',
        detail: '纹理 - 普通图片控件',
        insertText: 'texture',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 纹理 (Texture)\n\n' +
            '用于显示色块或者图像的基础控件。\n\n' +
            '**支持格式**: png、jpg、gif\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `normal` | 常态显示内容（资源路径或rgb颜色） | 无 |\n' +
            '| `hover` | 鼠标悬停时显示的内容 | 无 |\n\n' +
            '**特殊用法**:\n' +
            '- 渲染玩家头像: `normal: PlayerSkin:UUID`\n' +
            '- 渲染色块: `normal: ~255,255,255`\n\n' +
            '**也支持文本显示**，可用 `texts` 属性设置文本内容。'
        )
    },
    {
        label: 'text',
        detail: '文字 - 文本控件',
        insertText: 'text',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 文字 (Text)\n\n' +
            '用于显示纯文字内容。\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `shadow` | 渲染阴影 | `false` |\n' +
            '| `right` | 右对齐 | `false` |\n\n' +
            '**常用属性**:\n' +
            '- `texts` - 文本内容\n' +
            '- `fontSize` - 字体大小\n' +
            '- `center` - 是否居中\n' +
            '- `lineSpace` - 行间距\n' +
            '- `font` - 字体文件(.ttf)'
        )
    },
    {
        label: '9sliceTexture',
        detail: '九宫格纹理 - 可拉伸图片',
        insertText: '9sliceTexture',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 九宫格纹理 (9SliceTexture)\n\n' +
            '支持九宫格拉伸的图片控件，四角不会被拉伸，其余部分根据宽高进行拉伸。\n\n' +
            '**也支持文本显示**。\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `normal` | 常态显示内容 | 无 |\n' +
            '| `hover` | 鼠标悬停时显示的内容 | 无 |\n' +
            '| `left` | 左侧分割线宽度 | `0` |\n' +
            '| `right` | 右侧分割线宽度 | `0` |\n' +
            '| `top` | 上分割线高度 | `0` |\n' +
            '| `bottom` | 下分割线高度 | `0` |\n' +
            '| `textureWidth` | 贴图宽度 | `0` |\n' +
            '| `textureHeight` | 贴图高度 | `0` |\n\n' +
            '**工作原理**: 将贴图分为9个部分，四角(淡紫色)不拉伸，四边单方向拉伸，中心双向拉伸。\n\n' +
            '**常用场景**: 对话框、可变大小按钮、边框、圆角背景。'
        )
    },
    // ========== 游戏内容显示 ==========
    {
        label: 'entity',
        detail: '实体 - 游戏实体渲染',
        insertText: 'entity',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 实体 (Entity)\n\n' +
            '用于在UI中渲染游戏内实体（如背包UI的玩家）。\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `uuid` | 渲染实体的UUID | 当前客户端玩家自身uuid |\n' +
            '| `hideTag` | 是否渲染名称标签 | `false` |\n' +
            '| `followMouse` | 视线是否跟随鼠标 | `false` |\n\n' +
            '**常用场景**: 角色预览、背包玩家显示。'
        )
    },
    {
        label: 'slot',
        detail: '槽位 - 物品格子',
        insertText: 'slot',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 槽位 (Slot)\n\n' +
            '物品格子，用于显示和操作物品。\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `normal` | 常态显示内容 | 无 |\n' +
            '| `hover` | 鼠标悬停时显示的内容 | 无 |\n' +
            '| `slotType` | 槽位类型 | `Backpack` |\n' +
            '| `id` | 槽位ID | `0` |\n' +
            '| `itemScale` | 物品缩放比例 | `1.0` |\n' +
            '| `lock` | 锁定点击事件 | `false` |\n' +
            '| `cooldown` | 物品冷却状态贴图 | 无 |\n' +
            '| `overwriteText` | 覆盖右下角文字显示 | 无 |\n\n' +
            '**slotType 选项**:\n' +
            '- `Container` - 容器槽位\n' +
            '- `Backpack` - 背包槽位\n' +
            '- `Extra` - 自定义拓展槽位（ID为字符串）\n' +
            '- `Icon` - 图标槽位\n' +
            '- `Hover` - 悬停槽位\n\n' +
            '**itemEffect说明**: 填写配置文件名，如 `abc/xxx` 对应 `ArcartX/item_effect/abc/xxx.yml`'
        )
    },
    // ========== 输入控件 ==========
    {
        label: 'textBox',
        detail: '输入框 - 文本输入',
        insertText: 'textBox',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 输入框 (TextBox)\n\n' +
            '用于接收用户输入的文本内容。\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `length` | 最大输入长度 | `99999` |\n' +
            '| `allowNewLine` | 是否允许换行 | `false` |\n' +
            '| `editable` | 是否可编辑 | `true` |\n' +
            '| `cursorColor` | 光标颜色 | `~151,255,255` |\n' +
            '| `emptyText` | 空输入时的提示文本 | 无 |\n' +
            '| `canLoseFocus` | 是否可以失去焦点 | `true` |\n' +
            '| `background` | 输入框背景颜色 | 无 |\n' +
            '| `passwordChar` | 密码字符 | 无 |\n' +
            '| `inputPattern` | 输入限制（正则） | 无 |\n\n' +
            '**常用场景**: 用户名输入、密码输入、搜索框。'
        )
    },
    // ========== 布局型 ==========
    {
        label: 'canvas',
        detail: '画布 - 基础容器',
        insertText: 'canvas',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 画布 (Canvas)\n\n' +
            '基础容器控件，用于组织和布局子控件。\n\n' +
            '**特点**:\n' +
            '- 子控件位置相对于画布左上角\n' +
            '- 需要手动设置每个子控件的 x, y 坐标\n' +
            '- 子控件可以使用锚点定位\n\n' +
            '**无独有属性**。\n\n' +
            '**常用场景**: 精确定位的UI布局、滚动内容容器。'
        )
    },
    {
        label: 'adaptive',
        detail: '自适配布局 - 响应式容器',
        insertText: 'adaptive',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 自适配布局 (Adaptive)\n\n' +
            '根据窗口大小调整子组件的缩放值。\n\n' +
            '**使用说明**:\n' +
            '- 将宽高设置为编辑时屏幕分辨率（如1920x1080）\n' +
            '- 不同分辨率时会自动计算缩放并应用到子组件\n' +
            '- 组件本身位置不变，需设置合适的锚点\n\n' +
            '**无独有属性**。\n\n' +
            '**常用场景**: 全屏UI、需要适配不同分辨率的界面。'
        )
    },
    {
        label: 'hGrid',
        detail: '横向网格布局 (Grid)',
        insertText: 'hGrid',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 横向网格布局 (HGrid/Gird)\n\n' +
            '将子控件根据设定的间距和列数有序排列（如背包槽位）。\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `spaceBetweenX` | X轴间距 | `0` |\n' +
            '| `spaceBetweenY` | Y轴间距 | `0` |\n' +
            '| `column` | 列数 | `1` |\n\n' +
            '**常用场景**: 背包、物品网格。'
        )
    },
    {
        label: 'vGrid',
        detail: '纵向网格布局',
        insertText: 'vGrid',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 纵向网格布局 (VGrid)\n\n' +
            '将子控件根据设定的间距和行数有序排列。\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `spaceBetweenX` | X轴间距 | `0` |\n' +
            '| `spaceBetweenY` | Y轴间距 | `0` |\n' +
            '| `row` | 行数 | `1` |\n\n' +
            '**常用场景**: 垂直物品列表。'
        )
    },
    {
        label: 'hStack',
        detail: '横向布局 (Stack)',
        insertText: 'hStack',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 横向布局 (HStack/Stack)\n\n' +
            '将子控件横向排列。\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `spaceBetween` | 子控件之间的间距 | `0` |\n' +
            '| `maxSize` | 一级子控件最大数量 | `64` |\n\n' +
            '**特殊功能**: 子控件可增加 `level` 属性，level越高的越靠前。\n\n' +
            '**常用场景**: 水平按钮组、状态栏。'
        )
    },
    {
        label: 'vStack',
        detail: '竖向布局',
        insertText: 'vStack',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 竖向布局 (VStack)\n\n' +
            '将子控件竖向排列。\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `spaceBetween` | 子控件之间的间距 | `0` |\n' +
            '| `maxSize` | 一级子控件最大数量 | `64` |\n\n' +
            '**特殊功能**: 子控件可增加 `level` 属性，level越高的越靠前。\n\n' +
            '**常用场景**: 垂直菜单、选项列表。'
        )
    },
    {
        label: 'scroll',
        detail: '滚动栏',
        insertText: 'scroll',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 滚动栏 (Scroll)\n\n' +
            '通过滑块移动来显示部分内容的容器。\n\n' +
            '**限制**:\n' +
            '- 只允许有一个子控件\n' +
            '- 子控件只能是布局控件（不能是Tip或Scroll）\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `moveX` | 横向移动百分比 | `0` |\n' +
            '| `moveY` | 纵向移动百分比 | `0` |\n\n' +
            '**使用方式**: 配合滑块控件，通过拖动事件更新 `moveX/moveY`。\n\n' +
            '**示例**: `moveY: self.parent[\'纵向滑块\'].getDragYRatio()`'
        )
    },
    // ========== 游戏内容显示（续）==========
    {
        label: 'model',
        detail: '模特 - 模型渲染',
        insertText: 'model',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 模特 (Model)\n\n' +
            '在UI中渲染一个模型。\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `model` | 模型id | 无 |\n' +
            '| `animation` | 播放动作 | `animation` |\n' +
            '| `followMouse` | 视线是否跟随鼠标 | `false` |\n\n' +
            '**常用场景**: 物品展示、模型预览。'
        )
    },
    {
        label: 'bossBar',
        detail: '多层血条 - UI血条显示',
        insertText: 'bossBar',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 多层血条 (BossBar)\n\n' +
            '用于显示UI血条，该控件不应直接放入UI，而是在插件的boss_bar模块进行配置。\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `textures` | 纹理列表（支持网络资源） | 无 |\n' +
            '| `transitionTime` | 过渡时间（毫秒） | `500` |\n\n' +
            '**可用变量**: `health`、`maxHealth`、`layer`(剩余层数)\n\n' +
            '**注意**: 该控件应该在boss_bar配置文件中使用，而不是直接在UI中。'
        )
    },
    // ========== 特殊控件 ==========
    {
        label: 'compass',
        detail: '罗盘 - 指南针',
        insertText: 'compass',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 罗盘 (Compass)\n\n' +
            '一个长得很像游标卡尺的指南针，联动WayPoint进行更精确的位置指引。\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `background` | 背景纹理（rgba颜色） | `0,0,0,180` |\n' +
            '| `textColor` | 文字颜色 | `255,255,255` |\n' +
            '| `tickColor` | 刻度颜色 | `255,255,255` |\n' +
            '| `directionColor` | 方位颜色 | `255,255,255` |\n' +
            '| `tickInterval` | 刻度间隔 | `5` |\n' +
            '| `majorTickInterval` | 主要刻度间隔 | `15` |\n' +
            '| `showWaypoints` | 显示路标图标 | `true` |\n' +
            '| `waypointFontSize` | 路标文字尺寸 | `32` |\n' +
            '| `waypointIconWidth` | 路标图标宽度 | `16` |\n' +
            '| `waypointIconHeight` | 路标图标高度 | `16` |\n' +
            '| `wayOffsetY` | 路标起始Y偏移 | `0` |\n\n' +
            '**常用场景**: 地图导航、方向指示。'
        )
    },
    {
        label: 'progress',
        detail: '进度条 - 缓动动画',
        insertText: 'progress',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 进度条 (Progress)\n\n' +
            '自带缓动过渡动画的进度条控件。\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `texture` | 纹理（资源路径或rgb） | 无 |\n' +
            '| `progress` | 进度比值（0~1） | `0` |\n' +
            '| `time` | 缓动时间（毫秒） | `100` |\n' +
            '| `mode` | 进度模式 | `0` |\n\n' +
            '**mode 选项**:\n' +
            '- `0` - 从左到右\n' +
            '- `1` - 从右到左\n' +
            '- `2` - 从上到下\n' +
            '- `3` - 从下到上\n\n' +
            '**常用场景**: 经验条、血量条、加载进度。'
        )
    },
    {
        label: 'import',
        detail: '导入器 - 导入其他UI控件',
        insertText: 'import',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 导入器 (Import)\n\n' +
            '将其它UI中的控件导入到当前UI中。\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `node` | 节点路径 | 无 |\n\n' +
            '**使用示例**:\n' +
            '```yaml\n' +
            'import:\n' +
            '  type: import\n' +
            '  attribute:\n' +
            '    node: ~menu.test.adaptive.chat\n' +
            '    # 第一个节点: hud(如果是hud) 或 menu(如果是menu)\n' +
            '    # 第二个节点: 目标ui的id\n' +
            '    # 其余节点: 目标ui的控件路径，用点号分隔\n' +
            '```\n\n' +
            '**注意**: 该控件无子控件。'
        )
    },
    {
        label: 'observer',
        detail: '观察者 - 动态创建/删除控件',
        insertText: 'observer',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 观察者 (Observer)\n\n' +
            '订阅字典类型变量，当变量键数量变化时动态创建/删除控件。\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `maxSize` | 最大数量 | `32` |\n' +
            '| `subscribe` | 订阅变量（必须是字典类型） | 无 |\n' +
            '| `target` | 目标控件（填写控件变量） | 无 |\n\n' +
            '**使用示例**:\n' +
            '```yaml\n' +
            'obs:\n' +
            '  type: observer\n' +
            '  attribute:\n' +
            '    target: val.vStack[\'test\']  # 不要给被复制控件加val\n' +
            '    subscribe: global.testMap\n' +
            'adaptive:\n' +
            '  type: adaptive\n' +
            '  # ... 省略 ...\n' +
            '  children:\n' +
            '    vStack:\n' +
            '      val: "vStack"\n' +
            '      # ... 省略 ...\n' +
            '      children:\n' +
            '        test:\n' +
            '          type: texture\n' +
            '          attribute:\n' +
            '            texts: "\'键：\' + self.key"  # 复制出的控件会有key变量\n' +
            '```\n\n' +
            '**注意**: 该控件无子控件。'
        )
    },
    // ========== 聊天相关 ==========
    {
        label: 'chatTextBox',
        detail: '聊天栏输入框 - 聊天专用输入',
        insertText: 'chatTextBox',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 聊天栏输入框 (ChatTextBox)\n\n' +
            '类似TextBox，但包含专用于聊天栏输入框的特性，可创建补全器子控件。\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `length` | 最大输入长度 | `99999` |\n' +
            '| `editable` | 是否可编辑 | `true` |\n' +
            '| `cursorColor` | 光标颜色 | `~151,255,255` |\n' +
            '| `emptyText` | 空输入时的提示文本 | 无 |\n' +
            '| `canLoseFocus` | 是否可以失去焦点 | `true` |\n' +
            '| `background` | 输入框背景颜色 | 无 |\n' +
            '| `sendClose` | 发送后关闭UI | `TRUE` |\n\n' +
            '**特殊功能**: 可创建Suggestion子控件用于命令补全。\n\n' +
            '**常用场景**: 聊天输入框、命令输入。'
        )
    },
    {
        label: 'suggestion',
        detail: '命令补全器 - 命令补全',
        insertText: 'suggestion',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 命令补全器 (Suggestion)\n\n' +
            '用于聊天栏的命令补全，只能作为ChatTextBox的子控件。\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `background` | 背景色（rgba） | `0,0,0,175` |\n' +
            '| `radius` | 圆角半径 | `3` |\n' +
            '| `spaceBetween` | 每个提示文字的间距 | `5` |\n' +
            '| `backgroundBorder` | 提示文字和背景的间距 | `5` |\n' +
            '| `up` | 位置置于聊天栏上方 | `false` |\n' +
            '| `maxShow` | 最多显示的提示数量 | `5` |\n' +
            '| `textColor` | 提示文字颜色（HEX） | `#FFFFFF` |\n' +
            '| `hoverTextColor` | 悬停提示文字颜色（HEX） | `#87CEEB` |\n\n' +
            '**注意**: 该控件只能作为聊天栏输入框的子控件，且无子控件。'
        )
    },
    {
        label: 'chat',
        detail: '聊天栏 - 聊天消息显示',
        insertText: 'chat',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 聊天栏 (Chat)\n\n' +
            '用于显示聊天消息，支持ArcartX特殊颜色格式、文字图标和卡片消息。\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `border` | 边框宽度 | `5` |\n' +
            '| `spaceBetween` | 每行的间距 | `5` |\n' +
            '| `background` | 背景颜色（rgba字符串） | `0,0,0` |\n' +
            '| `filter` | 过滤（匹配消息开头才显示） | 无 |\n' +
            '| `showCard` | 显示卡片消息 | `true` |\n' +
            '| `exclude` | 排除（排除指定开头的消息） | 无 |\n\n' +
            '**注意**: 该控件无子控件。\n\n' +
            '**常用场景**: 聊天窗口、消息显示。'
        )
    },
    // ========== 布局型（续）==========
    {
        label: 'bossBars',
        detail: '血条排列器 - 自动布局血条',
        insertText: 'bossBars',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 血条排列器 (BossBars)\n\n' +
            '自动创建、移除、布局血条控件，根据服务端配置的BossBar自动处理。\n\n' +
            '**独有属性**:\n' +
            '| 属性 | 说明 | 默认值 |\n' +
            '|------|------|--------|\n' +
            '| `spaceBetween` | 间距 | `0` |\n' +
            '| `maxSize` | 一级子控件最大数量 | `3` |\n\n' +
            '**说明**: 每次创建血条，会根据配置在顶层控件加入 `entityName` 变量，表示当前血条所绑定的实体名称。\n\n' +
            '**注意**: 该控件无子控件。\n\n' +
            '**如何创建血条配置**: 请查看BossBar使用说明。'
        )
    },
];

// point 属性的锚点选项
// 注意：锚点只有顶层组件（父级是UI本身）或者父级是Canvas、Adaptive才会生效
export const point_values = [
    // 基础锚点 - 九点定位
    {
        label: 'top_left',
        detail: '左上角',
        insertText: '~top_left',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 左上角 (top_left)\n\n' +
            '将组件锚点设置在左上角。\n\n' +
            '**特点**：\n' +
            '- 组件位置从父组件左上角开始计算\n' +
            '- x, y 坐标相对于父组件左上角\n\n' +
            '**坐标原点**：父组件左上角'
        )
    },
    {
        label: '~top_left',
        detail: '左上角',
        insertText: '~top_left',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 左上角 (top_left)\n\n' +
            '将组件锚点设置在左上角。\n\n' +
            '**特点**：\n' +
            '- 组件位置从父组件左上角开始计算\n' +
            '- x, y 坐标相对于父组件左上角\n\n' +
            '**坐标原点**：父组件左上角'
        )
    },
    {
        label: 'top_center',
        detail: '顶部中间',
        insertText: '~top_center',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 顶部中间 (top_center)\n\n' +
            '将组件锚点设置在顶部中间。\n\n' +
            '**特点**：\n' +
            '- 组件水平居中，顶部对齐\n' +
            '- x 坐标相对于父组件中心\n' +
            '- y 坐标相对于父组件顶部'
        )
    },
    {
        label: '~top_center',
        detail: '顶部中间',
        insertText: '~top_center',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 顶部中间 (top_center)\n\n' +
            '将组件锚点设置在顶部中间。\n\n' +
            '**特点**：\n' +
            '- 组件水平居中，顶部对齐\n' +
            '- x 坐标相对于父组件中心\n' +
            '- y 坐标相对于父组件顶部'
        )
    },
    {
        label: 'top_right',
        detail: '右上角',
        insertText: '~top_right',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 右上角 (top_right)\n\n' +
            '将组件锚点设置在右上角。\n\n' +
            '**特点**：\n' +
            '- 组件靠右，顶部对齐\n' +
            '- x 坐标相对于父组件右侧\n' +
            '- y 坐标相对于父组件顶部'
        )
    },
    {
        label: '~top_right',
        detail: '右上角',
        insertText: '~top_right',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 右上角 (top_right)\n\n' +
            '将组件锚点设置在右上角。\n\n' +
            '**特点**：\n' +
            '- 组件靠右，顶部对齐\n' +
            '- x 坐标相对于父组件右侧\n' +
            '- y 坐标相对于父组件顶部'
        )
    },
    {
        label: 'middle_left',
        detail: '左中间',
        insertText: '~middle_left',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 左中间 (middle_left)\n\n' +
            '将组件锚点设置在左侧中间。\n\n' +
            '**特点**：\n' +
            '- 组件垂直居中，左侧对齐\n' +
            '- x 坐标相对于父组件左侧\n' +
            '- y 坐标相对于父组件中心'
        )
    },
    {
        label: '~middle_left',
        detail: '左中间',
        insertText: '~middle_left',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 左中间 (middle_left)\n\n' +
            '将组件锚点设置在左侧中间。\n\n' +
            '**特点**：\n' +
            '- 组件垂直居中，左侧对齐\n' +
            '- x 坐标相对于父组件左侧\n' +
            '- y 坐标相对于父组件中心'
        )
    },
    {
        label: 'middle_center',
        detail: '正中间',
        insertText: '~middle_center',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 正中间 (middle_center)\n\n' +
            '将组件锚点设置在正中心。\n\n' +
            '**特点**：\n' +
            '- 组件完全居中\n' +
            '- x, y 坐标都相对于父组件中心\n\n' +
            '**常用场景**：对话框、居中显示的提示信息'
        )
    },
    {
        label: '~middle_center',
        detail: '正中间',
        insertText: '~middle_center',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 正中间 (middle_center)\n\n' +
            '将组件锚点设置在正中心。\n\n' +
            '**特点**：\n' +
            '- 组件完全居中\n' +
            '- x, y 坐标都相对于父组件中心\n\n' +
            '**常用场景**：对话框、居中显示的提示信息'
        )
    },
    {
        label: 'middle_right',
        detail: '右中间',
        insertText: '~middle_right',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 右中间 (middle_right)\n\n' +
            '将组件锚点设置在右侧中间。\n\n' +
            '**特点**：\n' +
            '- 组件垂直居中，右侧对齐\n' +
            '- x 坐标相对于父组件右侧\n' +
            '- y 坐标相对于父组件中心'
        )
    },
    {
        label: '~middle_right',
        detail: '右中间',
        insertText: '~middle_right',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 右中间 (middle_right)\n\n' +
            '将组件锚点设置在右侧中间。\n\n' +
            '**特点**：\n' +
            '- 组件垂直居中，右侧对齐\n' +
            '- x 坐标相对于父组件右侧\n' +
            '- y 坐标相对于父组件中心'
        )
    },
    {
        label: 'bottom_left',
        detail: '左下角',
        insertText: '~bottom_left',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 左下角 (bottom_left)\n\n' +
            '将组件锚点设置在左下角。\n\n' +
            '**特点**：\n' +
            '- 组件靠左，底部对齐\n' +
            '- x 坐标相对于父组件左侧\n' +
            '- y 坐标相对于父组件底部'
        )
    },
    {
        label: '~bottom_left',
        detail: '左下角',
        insertText: '~bottom_left',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 左下角 (bottom_left)\n\n' +
            '将组件锚点设置在左下角。\n\n' +
            '**特点**：\n' +
            '- 组件靠左，底部对齐\n' +
            '- x 坐标相对于父组件左侧\n' +
            '- y 坐标相对于父组件底部'
        )
    },
    {
        label: 'bottom_center',
        detail: '底部中间',
        insertText: '~bottom_center',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 底部中间 (bottom_center)\n\n' +
            '将组件锚点设置在底部中间。\n\n' +
            '**特点**：\n' +
            '- 组件水平居中，底部对齐\n' +
            '- x 坐标相对于父组件中心\n' +
            '- y 坐标相对于父组件底部\n\n' +
            '**常用场景**：底部状态栏、按钮组'
        )
    },
    {
        label: '~bottom_center',
        detail: '底部中间',
        insertText: '~bottom_center',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 底部中间 (bottom_center)\n\n' +
            '将组件锚点设置在底部中间。\n\n' +
            '**特点**：\n' +
            '- 组件水平居中，底部对齐\n' +
            '- x 坐标相对于父组件中心\n' +
            '- y 坐标相对于父组件底部\n\n' +
            '**常用场景**：底部状态栏、按钮组'
        )
    },
    {
        label: 'bottom_right',
        detail: '右下角',
        insertText: '~bottom_right',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 右下角 (bottom_right)\n\n' +
            '将组件锚点设置在右下角。\n\n' +
            '**特点**：\n' +
            '- 组件靠右，底部对齐\n' +
            '- x 坐标相对于父组件右侧\n' +
            '- y 坐标相对于父组件底部\n\n' +
            '**常用场景**：确认/取消按钮组'
        )
    },
    {
        label: '~bottom_right',
        detail: '右下角',
        insertText: '~bottom_right',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 右下角 (bottom_right)\n\n' +
            '将组件锚点设置在右下角。\n\n' +
            '**特点**：\n' +
            '- 组件靠右，底部对齐\n' +
            '- x 坐标相对于父组件右侧\n' +
            '- y 坐标相对于父组件底部\n\n' +
            '**常用场景**：确认/取消按钮组'
        )
    },
    // 水平拉伸锚点
    {
        label: 'horizontal_stretch_top',
        detail: '宽度跟随父级并置于父级顶部',
        insertText: '~horizontal_stretch_top',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 水平拉伸-顶部 (horizontal_stretch_top)\n\n' +
            '宽度跟随父级并置于父级顶部显示。\n\n' +
            '**特点**：\n' +
            '- 组件宽度自动填充父组件宽度\n' +
            '- 高度由自身属性决定\n' +
            '- 垂直位置固定在顶部\n' +
            '- x 坐标被锁定为 0\n\n' +
            '**适用父级**：Canvas、Adaptive、UI根\n\n' +
            '**常用场景**：顶部标题栏、进度条'
        )
    },
    {
        label: '~horizontal_stretch_top',
        detail: '宽度跟随父级并置于父级顶部',
        insertText: '~horizontal_stretch_top',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 水平拉伸-顶部 (horizontal_stretch_top)\n\n' +
            '宽度跟随父级并置于父级顶部显示。\n\n' +
            '**特点**：\n' +
            '- 组件宽度自动填充父组件宽度\n' +
            '- 高度由自身属性决定\n' +
            '- 垂直位置固定在顶部\n' +
            '- x 坐标被锁定为 0\n\n' +
            '**适用父级**：Canvas、Adaptive、UI根\n\n' +
            '**常用场景**：顶部标题栏、进度条'
        )
    },
    {
        label: 'horizontal_stretch_middle',
        detail: '宽度跟随父级并置于父级中间',
        insertText: '~horizontal_stretch_middle',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 水平拉伸-中间 (horizontal_stretch_middle)\n\n' +
            '宽度跟随父级并置于父级中间显示。\n\n' +
            '**特点**：\n' +
            '- 组件宽度自动填充父组件宽度\n' +
            '- 高度由自身属性决定\n' +
            '- 垂直位置居中\n' +
            '- x, y 坐标被锁定\n\n' +
            '**适用父级**：Canvas、Adaptive、UI根\n\n' +
            '**常用场景**：水平分隔线、居中内容条'
        )
    },
    {
        label: '~horizontal_stretch_middle',
        detail: '宽度跟随父级并置于父级中间',
        insertText: '~horizontal_stretch_middle',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 水平拉伸-中间 (horizontal_stretch_middle)\n\n' +
            '宽度跟随父级并置于父级中间显示。\n\n' +
            '**特点**：\n' +
            '- 组件宽度自动填充父组件宽度\n' +
            '- 高度由自身属性决定\n' +
            '- 垂直位置居中\n' +
            '- x, y 坐标被锁定\n\n' +
            '**适用父级**：Canvas、Adaptive、UI根\n\n' +
            '**常用场景**：水平分隔线、居中内容条'
        )
    },
    {
        label: 'horizontal_stretch_bottom',
        detail: '宽度跟随父级并置于父级底部',
        insertText: '~horizontal_stretch_bottom',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 水平拉伸-底部 (horizontal_stretch_bottom)\n\n' +
            '宽度跟随父级并置于父级底部显示。\n\n' +
            '**特点**：\n' +
            '- 组件宽度自动填充父组件宽度\n' +
            '- 高度由自身属性决定\n' +
            '- 垂直位置固定在底部\n' +
            '- x, y 坐标被锁定\n\n' +
            '**适用父级**：Canvas、Adaptive、UI根\n\n' +
            '**常用场景**：底部状态栏、操作按钮栏'
        )
    },
    {
        label: '~horizontal_stretch_bottom',
        detail: '宽度跟随父级并置于父级底部',
        insertText: '~horizontal_stretch_bottom',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 水平拉伸-底部 (horizontal_stretch_bottom)\n\n' +
            '宽度跟随父级并置于父级底部显示。\n\n' +
            '**特点**：\n' +
            '- 组件宽度自动填充父组件宽度\n' +
            '- 高度由自身属性决定\n' +
            '- 垂直位置固定在底部\n' +
            '- x, y 坐标被锁定\n\n' +
            '**适用父级**：Canvas、Adaptive、UI根\n\n' +
            '**常用场景**：底部状态栏、操作按钮栏'
        )
    },
    // 垂直拉伸锚点
    {
        label: 'vertical_stretch_left',
        detail: '高度跟随父级并置于父级左侧',
        insertText: '~vertical_stretch_left',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 垂直拉伸-左侧 (vertical_stretch_left)\n\n' +
            '高度跟随父级并置于父级左侧。\n\n' +
            '**特点**：\n' +
            '- 组件高度自动填充父组件高度\n' +
            '- 宽度由自身属性决定\n' +
            '- 水平位置固定在左侧\n' +
            '- x, y 坐标被锁定\n\n' +
            '**适用父级**：Canvas、Adaptive、UI根\n\n' +
            '**常用场景**：左侧工具栏、侧边栏'
        )
    },
    {
        label: '~vertical_stretch_left',
        detail: '高度跟随父级并置于父级左侧',
        insertText: '~vertical_stretch_left',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 垂直拉伸-左侧 (vertical_stretch_left)\n\n' +
            '高度跟随父级并置于父级左侧。\n\n' +
            '**特点**：\n' +
            '- 组件高度自动填充父组件高度\n' +
            '- 宽度由自身属性决定\n' +
            '- 水平位置固定在左侧\n' +
            '- x, y 坐标被锁定\n\n' +
            '**适用父级**：Canvas、Adaptive、UI根\n\n' +
            '**常用场景**：左侧工具栏、侧边栏'
        )
    },
    {
        label: 'vertical_stretch_center',
        detail: '高度跟随父级并置于父级正中',
        insertText: '~vertical_stretch_center',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 垂直拉伸-正中 (vertical_stretch_center)\n\n' +
            '高度跟随父级并置于父级正中。\n\n' +
            '**特点**：\n' +
            '- 组件高度自动填充父组件高度\n' +
            '- 宽度由自身属性决定\n' +
            '- 水平位置居中\n' +
            '- x, y 坐标被锁定\n\n' +
            '**适用父级**：Canvas、Adaptive、UI根\n\n' +
            '**常用场景**：垂直分隔线、居中侧边栏'
        )
    },
    {
        label: '~vertical_stretch_center',
        detail: '高度跟随父级并置于父级正中',
        insertText: '~vertical_stretch_center',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 垂直拉伸-正中 (vertical_stretch_center)\n\n' +
            '高度跟随父级并置于父级正中。\n\n' +
            '**特点**：\n' +
            '- 组件高度自动填充父组件高度\n' +
            '- 宽度由自身属性决定\n' +
            '- 水平位置居中\n' +
            '- x, y 坐标被锁定\n\n' +
            '**适用父级**：Canvas、Adaptive、UI根\n\n' +
            '**常用场景**：垂直分隔线、居中侧边栏'
        )
    },
    {
        label: 'vertical_stretch_right',
        detail: '高度跟随父级并置于父级右侧',
        insertText: '~vertical_stretch_right',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 垂直拉伸-右侧 (vertical_stretch_right)\n\n' +
            '高度跟随父级并置于父级右侧。\n\n' +
            '**特点**：\n' +
            '- 组件高度自动填充父组件高度\n' +
            '- 宽度由自身属性决定\n' +
            '- 水平位置固定在右侧\n' +
            '- x, y 坐标被锁定\n\n' +
            '**适用父级**：Canvas、Adaptive、UI根\n\n' +
            '**常用场景**：右侧信息面板、属性栏'
        )
    },
    {
        label: '~vertical_stretch_right',
        detail: '高度跟随父级并置于父级右侧',
        insertText: '~vertical_stretch_right',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 垂直拉伸-右侧 (vertical_stretch_right)\n\n' +
            '高度跟随父级并置于父级右侧。\n\n' +
            '**特点**：\n' +
            '- 组件高度自动填充父组件高度\n' +
            '- 宽度由自身属性决定\n' +
            '- 水平位置固定在右侧\n' +
            '- x, y 坐标被锁定\n\n' +
            '**适用父级**：Canvas、Adaptive、UI根\n\n' +
            '**常用场景**：右侧信息面板、属性栏'
        )
    },
    // 完全拉伸
    {
        label: 'stretch_all',
        detail: '完全跟随父级宽高且x和y都锁定为0',
        insertText: '~stretch_all',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 完全拉伸 (stretch_all)\n\n' +
            '完全跟随父级宽高且 x 和 y 都锁定为 0。\n\n' +
            '**特点**：\n' +
            '- 组件宽度和高度自动填充父组件\n' +
            '- x, y 坐标被锁定为 0（无需手动设置）\n' +
            '- 组件会完全覆盖父组件区域\n\n' +
            '**适用父级**：Canvas、Adaptive、UI根\n\n' +
            '**常用场景**：\n' +
            '- 背景图片/遮罩层\n' +
            '- 全屏覆盖层\n' +
            '- 容器背景\n\n' +
            '**注意**：使用此锚点后无需再设置 x, y, width, height'
        )
    },
    {
        label: '~stretch_all',
        detail: '完全跟随父级宽高且x和y都锁定为0',
        insertText: '~stretch_all',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 完全拉伸 (stretch_all)\n\n' +
            '完全跟随父级宽高且 x 和 y 都锁定为 0。\n\n' +
            '**特点**：\n' +
            '- 组件宽度和高度自动填充父组件\n' +
            '- x, y 坐标被锁定为 0（无需手动设置）\n' +
            '- 组件会完全覆盖父组件区域\n\n' +
            '**适用父级**：Canvas、Adaptive、UI根\n\n' +
            '**常用场景**：\n' +
            '- 背景图片/遮罩层\n' +
            '- 全屏覆盖层\n' +
            '- 容器背景\n\n' +
            '**注意**：使用此锚点后无需再设置 x, y, width, height'
        )
    },
];

// slotType 属性的槽位类型选项
export const slotType_values = [
    {
        label: '~Container',
        detail: '容器槽位',
        insertText: '~Container',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 容器槽位\n\n' +
            '通用容器类型槽位。'
        )
    },
    {
        label: '~Backpack',
        detail: '背包槽位',
        insertText: '~Backpack',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 背包槽位\n\n' +
            '玩家背包物品槽位。'
        )
    },
    {
        label: '~Extra',
        detail: '额外槽位',
        insertText: '~Extra',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 额外槽位\n\n' +
            '额外的物品槽位。'
        )
    },
    {
        label: '~Icon',
        detail: '图标槽位',
        insertText: '~Icon',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 图标槽位\n\n' +
            '用于显示图标的槽位。'
        )
    },
    {
        label: '~Hover',
        detail: '悬停槽位',
        insertText: '~Hover',
        kind: vscode.CompletionItemKind.EnumMember,
        documentation: new vscode.MarkdownString(
            '## 悬停槽位\n\n' +
            '用于悬停显示的槽位。'
        )
    },
];
