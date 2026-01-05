import * as vscode from 'vscode';

export const control_attribute = [
    {
        label: 'enable',
        detail: '是否开启[默认: true] - 关闭后触发器将不会触发',
        insertText: 'enable: ${1|true,false|}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'visible',
        detail: '是否可见[默认: true] - 关闭后将不可见',
        insertText: 'visible: ${1|true,false|}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'limitControl',
        detail: '限制显示所用的组件[默认: 空]',
        insertText: 'limitControl: ${1:组件对象}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'minDragX',
        detail: '最小拖动X[默认: 0]',
        insertText: 'minDragX: ${1:0}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'minDragY',
        detail: '最小拖动Y[默认: 0]',
        insertText: 'minDragY: ${1:0}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'maxDragX',
        detail: '最大拖动X[默认: 0]',
        insertText: 'maxDragX: ${1:0}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'maxDragY',
        detail: '最大拖动Y[默认: 0]',
        insertText: 'maxDragY: ${1:0}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'scale',
        detail: '缩放比例[默认: 1]',
        insertText: 'scale: ${1:1}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'width',
        detail: '宽度[默认: 0]',
        insertText: 'width: ${1:宽度}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'height',
        detail: '高度[默认: 0]',
        insertText: 'height: ${1:高度}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'x',
        detail: 'X坐标[默认: 0] - 相对于父组件',
        insertText: 'x: ${1:0}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'y',
        detail: 'Y坐标[默认: 0] - 相对于父组件',
        insertText: 'y: ${1:0}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'alpha',
        detail: '透明度[默认: 1]',
        insertText: 'alpha: ${1:1}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'point',
        detail: '锚点[默认: top_left]',
        insertText: 'point: ~',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 锚点位置\n\n' +
            '**默认值**: `top_left`\n\n' +
            '设置控件的锚点位置，决定控件的对齐方式和坐标计算方式。\n\n' +
            '**注意**: 锚点只有顶层组件（父级是UI本身）或者父级是 Canvas、Adaptive 时才会生效。\n\n' +
            '**基础锚点（9点定位）**:\n' +
            '- `top_left` - 左上角\n' +
            '- `top_center` - 顶部中间\n' +
            '- `top_right` - 右上角\n' +
            '- `middle_left` - 左中间\n' +
            '- `middle_center` - 正中间\n' +
            '- `middle_right` - 右中间\n' +
            '- `bottom_left` - 左下角\n' +
            '- `bottom_center` - 底部中间\n' +
            '- `bottom_right` - 右下角\n\n' +
            '**拉伸锚点（需要父级为 Canvas/Adaptive/UI根）**:\n' +
            '- `horizontal_stretch_top` - 宽度跟随父级，置于顶部\n' +
            '- `horizontal_stretch_middle` - 宽度跟随父级，置于中间\n' +
            '- `horizontal_stretch_bottom` - 宽度跟随父级，置于底部\n' +
            '- `vertical_stretch_left` - 高度跟随父级，置于左侧\n' +
            '- `vertical_stretch_center` - 高度跟随父级，置于正中\n' +
            '- `vertical_stretch_right` - 高度跟随父级，置于右侧\n' +
            '- `stretch_all` - 完全跟随父级宽高\n\n' +
            '输入 `point: ~` 后会显示所有选项的详细说明。'
        )
    },
    {
        label: 'rotate',
        detail: '旋转角度[默认: 0]',
        insertText: 'rotate: ${1:0}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'middleScale',
        detail: '中间缩放比例[默认: 1] - 从正中心缩放',
        insertText: 'middleScale: ${1:1}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'tip',
        detail: '提示信息[默认: 空] - 只用于包含tip的组件',
        insertText: 'tip: ~${1:提示内容}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'texts',
        detail: '文本内容[默认: 空] - 只用于包含文本显示的组件',
        insertText: 'texts: ~${1:文本内容}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'center',
        detail: '文字居中[默认: false] - 只用于包含文本显示的组件',
        insertText: 'center: ${1|true,false|}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'lineSpace',
        detail: '行间距[默认: 16] - 只用于包含文本显示的组件',
        insertText: 'lineSpace: ${1:16}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'font',
        detail: '字体[默认: 空] - 只用于包含文本显示的组件',
        insertText: 'font: ~${1:字体.ttf}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'fontSize',
        detail: '字体大小[默认: 16] - 只用于包含文本显示的组件',
        insertText: 'fontSize: ${1:16}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'shadow',
        detail: '渲染阴影[默认: false] - (Text独有)',
        insertText: 'shadow: true',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'limit',
        detail: '字数显示限制[默认: 999999] - 限制最大显示文字数',
        insertText: 'limit: ${1:999999}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'through',
        detail: '是否穿透[默认: false] - 穿透后不阻挡下方组件交互',
        insertText: 'through: ${1|true,false|}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'normal',
        detail: '常态显示内容 (Texture、9SliceTexture、Slot含有)',
        insertText: 'normal: ~${1|~255\\,255\\,255,资源路径|}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'hover',
        detail: '鼠标悬停上方显示的内容 (Texture、9SliceTexture、Slot含有)',
        insertText: 'hover: ~${1|~255\\,255\\,255,资源路径|}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'left',
        detail: '左侧分割线[默认: 0] (9SliceTexture独有)',
        insertText: 'left: ${1:0}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'right',
        detail: '右侧分割线[默认: 0] (9SliceTexture独有)',
        insertText: 'right: ${1:0}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'top',
        detail: '上侧分割线[默认: 0] (9SliceTexture独有)',
        insertText: 'top: ${1:0}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'bottom',
        detail: '下侧分割线[默认: 0] (9SliceTexture独有)',
        insertText: 'bottom: ${1:0}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'textureWidth',
        detail: '贴图宽度[默认: 0] (9SliceTexture独有)',
        insertText: 'textureWidth: ${1:0}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'textureHeight',
        detail: '贴图高度[默认: 0] (9SliceTexture独有)',
        insertText: 'textureHeight: ${1:0}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'length',
        detail: '最大输入长度[默认: 99999] (TextBox独有)',
        insertText: 'length: ${1:99999}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'allowNewLine',
        detail: '是否允许换行[默认: false] (TextBox独有)',
        insertText: 'allowNewLine: ${1|true,false|}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'editable',
        detail: '是否可编辑[默认: true] (TextBox独有)',
        insertText: 'editable: ${1|true,false|}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'cursorColor',
        detail: '光标颜色[默认: ~151,255,255] (TextBox独有)',
        insertText: 'cursorColor: ~${1:151,255,255}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'uneditableTextColor',
        detail: '不可编辑时的文字颜色[默认: ~190,190,190] (TextBox独有)',
        insertText: 'uneditableTextColor: ~${1:190,190,190}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'textColor',
        detail: '文字颜色[默认: ~255,255,255] (TextBox独有)',
        insertText: 'textColor: ~${1:255,255,255}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'emptyText',
        detail: '输入框为空时的提示文本 (TextBox独有)',
        insertText: 'emptyText: ~${1:提示文本}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'canLoseFocus',
        detail: '是否可以失去焦点[默认: true] (TextBox独有)',
        insertText: 'canLoseFocus: ${1|true,false|}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'background',
        detail: '输入框背景颜色 (TextBox独有)',
        insertText: 'background: ~${1:255,255,255}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'passwordChar',
        detail: '密码字符 (TextBox独有)',
        insertText: 'passwordChar: ~${1:※}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'uuid',
        detail: '渲染实体uuid[默认: 当前客户端玩家自身uuid] (Entity独有)',
        insertText: 'uuid: ~${1:self}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'hideTag',
        detail: '是否渲染名称标签[默认: false] (Entity独有)',
        insertText: 'hideTag: ${1|true,false|}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'followMouse',
        detail: '视线是否跟随鼠标[默认: false] (Entity独有)',
        insertText: 'followMouse: ${1|true,false|}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'slotType',
        detail: '槽位类型[默认: Backpack] (Slot独有)',
        insertText: 'slotType: ~',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 槽位类型\n\n' +
            '**默认值**: `Backpack`\n' +
            '**适用控件**: Slot（物品槽位）\n\n' +
            '设置物品槽位的类型，决定槽位可以存放和操作的物品类型。\n\n' +
            '**可选类型**:\n' +
            '- `Container` - 容器槽位\n' +
            '- `Backpack` - 背包槽位（玩家背包物品）\n' +
            '- `Extra` - 额外槽位\n' +
            '- `Icon` - 图标槽位\n' +
            '- `Hover` - 悬停槽位\n\n' +
            '输入 `slotType: ~` 后会显示所有选项的详细说明。'
        )
    },
    {
        label: 'id',
        detail: '槽位ID[默认: 0] (Slot独有)',
        insertText: 'id: ${1:0}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'itemScale',
        detail: '物品缩放比例[默认: 1.0] (Slot独有)',
        insertText: 'itemScale: ${1:1.0}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'spaceBetweenX',
        detail: 'X轴间距[默认: 0] (HGrid、VGrid含有)',
        insertText: 'spaceBetweenX: ${1:0}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'spaceBetweenY',
        detail: 'Y轴间距[默认: 0] (HGrid、VGrid含有)',
        insertText: 'spaceBetweenY: ${1:0}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'column',
        detail: '列数[默认: 1] (HGrid独有)',
        insertText: 'column: ${1:1}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'row',
        detail: '行数[默认: 1] (VGrid独有)',
        insertText: 'row: ${1:1}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'spaceBetween',
        detail: '间距[默认: 0] (HStack、VStack含有)',
        insertText: 'spaceBetween: ${1:0}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'moveX',
        detail: '横向移动百分比[默认: 0] (Scroll独有)',
        insertText: 'moveX: ${1:0}',
        kind: vscode.CompletionItemKind.Property
    },
    {
        label: 'moveY',
        detail: '纵向移动百分比[默认: 0] (Scroll独有)',
        insertText: 'moveY: ${1:0}',
        kind: vscode.CompletionItemKind.Property
    },
]