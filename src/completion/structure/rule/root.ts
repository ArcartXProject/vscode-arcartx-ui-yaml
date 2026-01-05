import * as vscode from 'vscode';

export const ui_full = {
    label: 'ui-full',
    detail: '创建完整的UI配置模板(包含所有配置项)',
    insertText: [
        'ui:',
        '  # 值为默认时可省略该配置项',
        '',
        '  # === UI配置 ===',
        '  match: []           # 替换原版界面ID，支持[regex]前缀正则 [非脚本]',
        '  hide: []            # 隐藏的HUD列表 [非脚本]',
        '',
        '  # === Menu设置 ===',
        '  itemSize: ${1:16}           # 拿起物品渲染大小 [默认: 16] [脚本]',
        '  through: ${2|true,false|}   # 穿透点击 [默认: false] [脚本]',
        '  escClose: ${3|true,false|}  # ESC关闭 [默认: true] [脚本]',
        '  background: ${4|true,false|} # 渲染半透明背景 [默认: true] [脚本]',
        '  closeDied: ${5|true,false|} # 死亡时关闭 [默认: true] [脚本]',
        '  show: ${6|true,false|}      # 是否渲染 [默认: true] [脚本]',
        '  jei: ${7|true,false|}       # 显示JEI侧边栏 [默认: false] [脚本]',
        '',
        '  # === HUD设置 ===',
        '  level: ${8:0}               # 渲染优先级，越大越靠后 [默认: 0] [脚本]',
        '  isHud: ${9|true,false|}     # 标识为HUD类型 [默认: false] [非脚本]',
        '  defaultOpen: ${10|true,false|} # 加载后自动打开 [默认: true] [非脚本]',
        '',
        '  # === 高级配置 ===',
        '  action:             # UI触发器',
        '  packetHandler:      # 数据包处理器',
    ].join('\n'),
    kind: vscode.CompletionItemKind.Snippet
}
export const ui_base = {
    label: 'ui-base',
    detail: 'ui基础设定',
    insertText: 'ui: # 输入 ? 触发补全添加更多配置项\n  match: []\n',
    kind: vscode.CompletionItemKind.Snippet
}
export const tips_base = {
    label: 'tip-base',
    detail: '创建基础Tip配置模板',
    insertText: [
        'tip:',
        '  match: ${1:匹配ID}',
        '',
        'root_control:',
        '  type: tip',
        '  children:',
        '    ${2:# Tip内容}',
    ].join('\n'),
    kind: vscode.CompletionItemKind.Snippet
}
export const tips_adaptive = {
    label: 'tip-adaptive',
    detail: '创建基础Tip配置模板（启用适配尺寸）',
    insertText: [
        'tip:',
        '  match: ${1:匹配ID}',
        '',
        'root_control:',
        '  type: tip',
        '  attribute:',
        '    width: ${2:1920}',
        '    height: ${3:1080}',
        '    autoScale: true',
        '  children:',
        '    ${4:# Tip内容}',
    ].join('\n'),
    kind: vscode.CompletionItemKind.Snippet
}
export const controls_empty = {
    label: 'controls-empty',
    detail: '空控件列表',
    insertText: 'controls:\n  ',
    kind: vscode.CompletionItemKind.Property
}
export const controls_with_adaptive = {
    label: 'controls-with-adaptive',
    detail: '创建基础控件结构(自适应布局)',
    insertText: [
        'controls:',
        '  adaptive:',
        '    type: adaptive',
        '    attribute:',
        '      point: ~middle_center',
        '      width: 1920',
        '      height: 1080',
        '    children:',
        '      main:',
        '        type: canvas',
        '        attribute:',
        '          point: ~middle_center',
        '          width: ${1:800}',
        '          height: ${2:600}',
        '        children:',
        '          ${3:# UI内容}',
    ].join('\n'),
    kind: vscode.CompletionItemKind.Snippet
}