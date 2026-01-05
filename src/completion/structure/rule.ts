import * as vscode from 'vscode';
import {controls_empty, controls_with_adaptive, tips_adaptive, tips_base, ui_base, ui_full} from "./rule/root";
import {ui_options} from "./rule/ui";
import {ui_actions} from "./rule/uiAction";
import {packetHandler_options} from "./rule/uiPacketHandler";
import {self_functions} from "./rule/uiSelf";
import {controls} from "./rule/control";
import {control_attribute} from "./rule/controlAttribute";
import {control_actions} from "./rule/controlAction";
import {control_settings} from "./rule/controlSetting";
import {hud_names, match_values} from "./rule/uiValue";
import {type_values, point_values, slotType_values} from "./rule/controlAttributeValue";
import {task_settings, task_templates} from "./rule/uiTaskSettings";
import {task_type_values} from "./rule/uiTaskTypeValues";

export interface CompletionConfig {
    path: string[];
    completions: Array<{
        label: string;
        detail: string;
        insertText: string;
        kind?: vscode.CompletionItemKind;
        documentation?: vscode.MarkdownString;
    }>;
}

// 属性值补全映射表
export const attributeValueMap: Map<string, Array<{
    label: string;
    detail: string;
    insertText: string;
    kind?: vscode.CompletionItemKind;
    documentation?: vscode.MarkdownString;
}>> = new Map([
    ['type', type_values],
    ['point', point_values],
    ['slotType', slotType_values],
    ['task_type', task_type_values],
]);

// ========== 根级别配置 ==========
// 当路径为空（在根级别）时，返回顶层配置
const root_level: CompletionConfig[] = [
    {
        path: [],
        completions: [
            ui_full, ui_base,
            tips_base, tips_adaptive,
            controls_empty, controls_with_adaptive,
        ]
    },
];

// ========== ui 级别配置 ==========
const ui_level: CompletionConfig[] = [
    // ui 块
    { path: ['ui'], completions: ui_options },
    { path: ['ui', 'hide'], completions: hud_names },
    { path: ['ui', 'match'], completions: match_values },
    { path: ['ui', 'action'], completions: ui_actions },
    { path: ['ui', 'packetHandler'], completions: packetHandler_options },
    { path: ['ui', 'action', '*'], completions: self_functions },
    { path: ['ui', 'packetHandler', '*'], completions: self_functions },
];

// ========== controls 级别配置 ==========
const controls_level: CompletionConfig[] = [
    // controls 块 - 在 controls: 根级别显示控件模板补全
    { path: ['controls'], completions: controls },
    { path: ['ui', 'controls'], completions: controls },

    // 控件内部 - 在控件内部（如 controls.遮罩: 下）同时显示控件设置和控件模板
    // 合并 control_settings 和 controls，方便添加子控件或配置当前控件
    { path: ['controls', '*'], completions: [...control_settings, ...controls] },
    { path: ['ui', 'controls', '*'], completions: [...control_settings, ...controls] },
    { path: ['*', 'children', '*'], completions: [...control_settings, ...controls] },
    { path: ['root_control', 'children', '*'], completions: [...control_settings, ...controls] },

    // 子控件 - 在控件内部的 children: 下显示控件模板补全
    { path: ['controls', '*', 'children'], completions: controls },
    { path: ['ui', 'controls', '*', 'children'], completions: controls },
    { path: ['*', 'children', '*', 'children'], completions: controls },
    { path: ['root_control', 'children'], completions: controls },
    { path: ['root_control', 'children', '*', 'children'], completions: controls },
];

// ========== 属性配置 ==========
// 通配符匹配：以 attribute 结尾的路径
const attribute_level: CompletionConfig[] = [
    // 支持任意深度的 attribute 路径
    // 通过通配符匹配算法，['controls', '*', 'attribute'] 可以匹配 ['ui', 'controls', 'xxx', 'attribute']
    { path: ['*', 'attribute'], completions: control_attribute },
];

// ========== 触发器配置 ==========
const action_level: CompletionConfig[] = [
    // 以 action 结尾的路径
    { path: ['*', 'action'], completions: control_actions },
    { path: ['ui', '*', 'action'], completions: control_actions },

    // 触发器脚本内容（self 函数）
    { path: ['*', 'action', '*'], completions: self_functions },
    { path: ['ui', '*', 'action', '*'], completions: self_functions },
];

// ========== UI 定时任务配置 ==========
const tasks_level: CompletionConfig[] = [
    // tasks 块 - 显示任务模板（delay-task, loop-task）
    { path: ['tasks'], completions: task_templates },
    { path: ['ui', 'tasks'], completions: task_templates },
    // 任务项内部 - 显示任务属性（type, time, cycle, run）
    { path: ['tasks', '*'], completions: task_settings },
    { path: ['ui', 'tasks', '*'], completions: task_settings },
];

// 合并所有配置
export const completionConfigs: CompletionConfig[] = [
    ...root_level,
    ...ui_level,
    ...controls_level,
    ...attribute_level,
    ...action_level,
    ...tasks_level,
];
