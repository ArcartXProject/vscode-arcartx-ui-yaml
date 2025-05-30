import * as vscode from 'vscode';


export class VariableCompletionProvider implements vscode.CompletionItemProvider {
    private declaredVariables: Map<string, Set<string>> = new Map();

    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
    ): vscode.CompletionItem[] {
        
        this.collectVariables(document);
        
        const line = document.lineAt(position).text;
        const linePrefix = line.substring(0, position.character);
        
        const scopeMatch = linePrefix.match(/(var|val|global|client|server)\.$/);
        if (!scopeMatch) {
            return [];
        }

        const scope = scopeMatch[1];
        const variables = this.declaredVariables.get(scope) || new Set();
        const suggestions: vscode.CompletionItem[] = [];
        
        for (const varName of variables) {
            const item = new vscode.CompletionItem(varName, vscode.CompletionItemKind.Variable);
            item.documentation = `${scope} 作用域中的变量`;
            item.detail = `${scope}.${varName}`;
            suggestions.push(item);
        }

        return suggestions;
    }

    private collectVariables(document: vscode.TextDocument) {
        this.declaredVariables.clear();
        const text = document.getText();
        
        const scopedVariableRegex = /(var|val|global|client|server)\.(\w+)\s*=/g;
        let match;

        while ((match = scopedVariableRegex.exec(text)) !== null) {
            const scope = match[1];
            const varName = match[2];
            if (!this.declaredVariables.has(scope)) {
                this.declaredVariables.set(scope, new Set());
            }
            this.declaredVariables.get(scope)!.add(varName);
        }
    }
}