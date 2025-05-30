import * as vscode from 'vscode';
import {controls_empty, controls_with_adaptive, tips_adaptive, tips_base, ui_base, ui_full} from "./rule/root";
import {ui_options} from "./rule/ui";
import {ui_actions} from "./rule/uiAction";
import {controls} from "./rule/control";
import {control_attribute} from "./rule/controlAttribute";
import {control_actions} from "./rule/controlAction";
import {control_settings} from "./rule/controlSetting";

export interface CompletionConfig {
    path: string[];
    completions: Array<{
        label: string;
        detail: string;
        insertText: string;
        kind?: vscode.CompletionItemKind;
    }>;
}

export const completionConfigs: CompletionConfig[] = [
    {
        path: [],
        completions: [
            ui_full, ui_base,
            tips_base,tips_adaptive,
            controls_empty, controls_with_adaptive,
        ]
    },
    {
        path: ['ui'],
        completions: ui_options
    },
    {
        path: ['ui','action'],
        completions: ui_actions
    },
    {
        path: ['controls'],
        completions: controls
    },
    {
        path: ['controls','*','children'],
        completions: controls
    },
    {
        path: ['root_control','children'],
        completions: controls
    },
    {
        path: ['*','attribute'],
        completions: control_attribute
    },
    {
        path: ['*','action'],
        completions: control_actions
    },
    {
        path: ['controls', '*'],
        completions: control_settings
    },
    {
        path: ['root_control','children','*'],
        completions: control_settings
    }
];