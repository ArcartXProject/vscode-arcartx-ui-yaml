import * as vscode from 'vscode';

export const control_settings = [
    {
        label: 'val',
        detail: '控件常量名[非脚本]',
        insertText: 'val: ${1:常量名}',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 控件常量名\n\n' +
            '- **脚本支持**: 否\n' +
            '- **默认值**: 无\n\n' +
            '为控件设置一个常量名称，方便在脚本中通过 `val.常量名` 快速访问此控件。\n\n' +
            '**使用示例**:\n' +
            '```\n' +
            'myButton:\n' +
            '  val: myButton\n' +
            '  # ...\n' +
            '```\n' +
            '```\n' +
            '# 脚本中访问\n' +
            'val.myButton.visible = false\n' +
            '```\n\n' +
            '**优点**: 比使用 `val.root[\'myButton\']` 更简洁易读。'
        )
    },
    {
        label: 'type',
        detail: '设置控件类型',
        insertText: 'type: ',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 控件类型\n\n' +
            '- **脚本支持**: 否\n' +
            '- **默认值**: 无（必需）\n\n' +
            '设置控件的类型，决定控件的渲染方式和可用属性。\n\n' +
            '**可选类型**:\n\n' +
            '| 类型 | 说明 |\n' +
            '|------|------|\n' +
            '| `texture` | 普通图片控件 |\n' +
            '| `text` | 文本控件 |\n' +
            '| `9sliceTexture` | 九宫格图片（可拉伸） |\n' +
            '| `textBox` | 文本输入框 |\n' +
            '| `entity` | 实体渲染控件 |\n' +
            '| `slot` | 物品槽位 |\n' +
            '| `canvas` | 画布容器 |\n' +
            '| `adaptive` | 自适应容器 |\n' +
            '| `hGrid` | 水平网格布局 |\n' +
            '| `vGrid` | 垂直网格布局 |\n' +
            '| `hStack` | 水平堆叠布局 |\n' +
            '| `vStack` | 垂直堆叠布局 |\n' +
            '| `scroll` | 滚动容器 |'
        )
    },
    {
        label: 'attribute',
        detail: '控件属性列表',
        insertText: 'attribute:\n  ',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 控件属性\n\n' +
            '定义控件的属性列表。\n\n' +
            '**常用属性**:\n' +
            '- `width/height` - 宽高\n' +
            '- `x/y` - 位置坐标\n' +
            '- `point` - 锚点位置\n' +
            '- `alpha` - 透明度\n' +
            '- `enable/visible` - 启用/可见状态\n\n' +
            '输入 `/` 查看所有可用属性。'
        )
    },
    {
        label: 'children',
        detail: '控件子控件表',
        insertText: 'children:\n  ',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 子控件\n\n' +
            '定义此控件的子控件，形成嵌套结构。\n\n' +
            '**说明**:\n' +
            '- 子控件的位置相对于父控件\n' +
            '- 支持多层嵌套\n' +
            '- 父控件的属性会影响子控件（如 `enable`, `visible`）\n\n' +
            '输入 `/` 查看可用的控件模板。'
        )
    },
    {
        label: 'action',
        detail: '控件触发器',
        insertText: 'action:\n  ',
        kind: vscode.CompletionItemKind.Property,
        documentation: new vscode.MarkdownString(
            '## 控件触发器\n\n' +
            '定义控件的事件触发器，当特定事件发生时执行对应的脚本。\n\n' +
            '**常用触发器**:\n' +
            '| 触发器 | 说明 |\n' +
            '|--------|------|\n' +
            '| `click` | 点击事件 |\n' +
           '| `hover` | 鼠标悬停 |\n' +
            '| `leave` | 鼠标离开 |\n' +
            '| `scroll` | 滚动事件 |\n' +
            '| `create` | 创建时触发 |\n' +
            '| `tick` | 每帧触发 |\n\n' +
            '输入 `/` 查看所有可用的触发器。'
        )
    }
]
