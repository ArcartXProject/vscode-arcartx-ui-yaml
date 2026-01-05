import * as vscode from 'vscode';
import { StructureCompletionProvider } from './completion/structure/structure'
import { VariableCompletionProvider } from './completion/shimmer/variable';
import { TempVariableCompletionProvider } from './completion/shimmer/tempVariable';


export function activate(context: vscode.ExtensionContext) {

    const structureCompletionProvider = vscode.languages.registerCompletionItemProvider(
        'arcartx-ui-yaml',
        new StructureCompletionProvider(),
        '?', '/', '.'
    );


    const variableCompletionProvider = vscode.languages.registerCompletionItemProvider(
        'arcartx-ui-yaml',
        new VariableCompletionProvider(),
        '.' 
    );

    const tempVariableCompletionProvider = vscode.languages.registerCompletionItemProvider(
        'arcartx-ui-yaml',
        new TempVariableCompletionProvider()
    );

    context.subscriptions.push(structureCompletionProvider, variableCompletionProvider, tempVariableCompletionProvider);
}


export function deactivate() {}
