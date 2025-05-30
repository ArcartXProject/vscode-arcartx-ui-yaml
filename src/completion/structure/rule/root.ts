import * as vscode from 'vscode';

export const ui_full = {
    label: 'ui-full',
    detail: '创建完整的UI配置模板(包含所有配置项)',
    insertText: [
        'ui:',
        '  # 注：如果值为默认值，可删除为默认值的配置项使结构精简',
        '  match: [] # 替换原版UI - 可在客户端日志打开想替换的UI查看ID填入此处 非脚本',
        '  hide: [] # 隐藏HUD 如为ArcartX的HUD填入ID即可 原版ID查看文档 非脚本',
        '  transfer: ${1|true,false|} # 是否传递交互至HUD false为默认值 脚本',
        '  itemSize: ${2:16} # 物品拿起时的渲染大小 16为默认值 脚本',
        '  through: ${3|true,false|} # 是否穿透点击 false为默认值 脚本',
        '  escClose: ${4|true,false|} # 是否允许ESC关闭 true为默认值 脚本',
        '  background: ${5|true,false|} # 是否渲染背景 true为默认值 脚本',
        '  closeDied: ${6|true,false|} # 死亡时是否关闭UI true为默认值 脚本',
        '  show: ${7|true,false|} # 默认是否显示 true为默认值 脚本',
        '  jei: ${8|true,false|} # 是否显示JEI侧边栏（需要JEI） false为默认值 脚本',
        '  level: ${9:0} # HUD显示层级 越大越靠后 默认值0 脚本',
        '  isHud: ${10|true,false|} # 是否是HUD false为默认值 脚本',
        '  action: # 动作（触发器）',
        '    # 在这里添加UI触发器',
        '  packetHandler: # 包处理器',
        '    # 在这里添加包处理器',
    ].join('\n'),
    kind: vscode.CompletionItemKind.Snippet
}
export const ui_base = {
    label: 'ui-base',
    detail: 'ui基础设定',
    insertText: 'ui: # 可通过触发补全继续增加设定，如果全用默认值可完全删除该配置块 \n  match: []\n',
    kind: vscode.CompletionItemKind.Snippet
}
export const tips_base = {
    label: 'tip-base',
    detail: '创建基础Tip配置模板',
    insertText: [
        'tip:',
        '  match: ${1:匹配ID}',
        'root_control:',
        '  type: tip',
        '  children:',
        '    ${5:# 在这里添加Tip内容}'
    ].join('\n'),
    kind: vscode.CompletionItemKind.Snippet
}
export const tips_adaptive = {
    label: 'tip-adaptive',
    detail: '创建基础Tip配置模板（启用适配尺寸）',
    insertText: [
        'tip:',
        '  match: ${1:匹配ID}',
        'root_control:',
        '  type: tip',
        '  attribute:',
        '    width: ${2:1920}',
        '    height: ${3:1080}',
        '    autoScale: true',
        '  children:',
        '    ${5:# 在这里添加Tip内容}'
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
        '          width: ${2:800}',
        '          height: ${3:600}',
        '        children:',
        '          ${4:# 在这里添加UI内容}'
    ].join('\n'),
    kind: vscode.CompletionItemKind.Snippet
}