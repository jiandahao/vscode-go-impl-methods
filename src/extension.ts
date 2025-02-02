// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as _ from 'lodash';
import { provideInterfaces, provideMethods } from './interfaces-provider';
import { InterfaceStubsGenerator, InterfaceExtractor } from './interfaces-stubs-generator';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  let disposable = vscode.commands.registerCommand('goimpl.ImplementInterfaceMethods', () => {
    const generator = new InterfaceStubsGenerator(vscode.window.activeTextEditor);
    const receiver = generator.parse();
    if (!receiver) {
      return;
    }

    const quickPick = vscode.window.createQuickPick();
    quickPick.placeholder = "Which interface would you like to implement?";
    const debounced = _.debounce((value) => {
      provideInterfaces(value, (interfaces) => {
        const items = _.map(interfaces, (label) => ({ label }));
        quickPick.items = items;
      });
    }, 400, { trailing: true });

    quickPick.onDidChangeValue(value => {
      debounced(value);
    });

    quickPick.onDidChangeSelection(selection => {
      if (selection[0]) {
        generator.implement(selection[0].label, receiver);
      }
      quickPick.hide();
    });

    quickPick.onDidHide(() => {
      quickPick.dispose();
    });
    quickPick.show();
  });

  let extractInterface = vscode.commands.registerCommand('goimpl.ExtractInterface', () => {
      const extractor = new InterfaceExtractor(vscode.window.activeTextEditor);
      const receiver = extractor.parse();
      if (!receiver) {
        return;
      }

      const quickPick = vscode.window.createQuickPick();
      quickPick.placeholder = "Which structure would you like to extract?";
      const debounced = _.debounce((value) => {
        provideMethods(value, (interfaces) => {
          const items = _.map(interfaces, (label) => ({ label }));
          quickPick.items = items;
        });
      }, 400, { trailing: true });
  
      quickPick.onDidChangeValue(value => {
        debounced(value);
      });
  
      quickPick.onDidChangeSelection(selection => {
        if (selection[0]) {
          extractor.extract(selection[0].label, receiver);
        }
        quickPick.hide();
      });
  
      quickPick.onDidHide(() => {
        quickPick.dispose();
      });
      quickPick.show();
  });

  context.subscriptions.push(disposable, extractInterface);
}

// this method is called when your extension is deactivated
export function deactivate() { }
