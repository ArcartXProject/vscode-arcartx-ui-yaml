import * as vscode from 'vscode';


export class TempVariableCompletionProvider implements vscode.CompletionItemProvider {
    private tmpVariables: Set<string> = new Set();

    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.CompletionItem[] {
        
        this.collectTmpVariables(document);
        
        const line = document.lineAt(position).text;
        const linePrefix = line.substring(0, position.character);
        
        if (linePrefix.match(/(var|val|global|client|server)\.$/)) {
            return [];
        }

        if (this.isInString(document, position)) {
            return [];
        }

        const suggestions: vscode.CompletionItem[] = [];
        
        for (const varName of this.tmpVariables) {
            const item = new vscode.CompletionItem(varName, vscode.CompletionItemKind.Variable);
            item.documentation = '临时变量';
            item.detail = `临时变量: ${varName}`;
            item.sortText = '1' + varName;
            suggestions.push(item);
        }

        return suggestions;
    }

    private collectTmpVariables(document: vscode.TextDocument) {
        this.tmpVariables.clear();
        const text = document.getText();
        
        const patterns = [
            /^(\s*)([a-zA-Z_]\w*)\s*=/gm,
            /for\s*\(\s*([a-zA-Z_]\w*)\s+in\s+/g,
        ];

        patterns.forEach(pattern => {
            let match;
            while ((match = pattern.exec(text)) !== null) {
                const varName = match[match.length - 1]; 
                
                if (!this.isKeywordOrReserved(varName)) {
                    this.tmpVariables.add(varName);
                }
            }
        });
    }

    private isKeywordOrReserved(word: string): boolean {
        const reserved = [
            'if', 'else', 'elif', 'for', 'in', 'while', 'switch', 'case', 'async',
            'break', 'next', 'return', 'true', 'false', 'var', 'val', 'global',
            'client', 'server', 'self', 'args',  'range'
        ];
        return reserved.includes(word);
    }

    private isInString(document: vscode.TextDocument, position: vscode.Position): boolean {
        const line = document.lineAt(position).text;
        const beforeCursor = line.substring(0, position.character);
        
        const singleQuotes = (beforeCursor.match(/'/g) || []).length;
        const doubleQuotes = (beforeCursor.match(/"/g) || []).length;
        
        return (singleQuotes % 2 === 1) || (doubleQuotes % 2 === 1);
    }
}