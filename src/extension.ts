// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { createIntermediate } from "./IntermediateFactory";
import PdfPrinter from "pdfmake";
import { createWriteStream } from "fs";
import { TDocumentDefinitions, TFontDictionary } from "pdfmake/interfaces";
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "md2pdf" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    const disposable = vscode.commands.registerCommand(
        "md2pdf.convertOpenFileToPdf",
        () => {
            const activeTextEditor = vscode.window.activeTextEditor;

            if (!activeTextEditor) {
                vscode.window.showErrorMessage("No active file found");

                return;
            }

            const document = activeTextEditor.document.getText();

            const intermediate = createIntermediate(
                activeTextEditor.document.fileName,
                document
            );

            // TODO: get it to work with relative paths
            var fonts: TFontDictionary = {
                Roboto: {
                    normal: "/Users/jakob/Documents/GitHub/md2pdf/fonts/Roboto-Italic.ttf",
                    bold: "/Users/jakob/Documents/GitHub/md2pdf/fonts/Roboto-Medium.ttf",
                    italics:
                        "/Users/jakob/Documents/GitHub/md2pdf/fonts/Roboto-Italic.ttf",
                    bolditalics:
                        "/Users/jakob/Documents/GitHub/md2pdf/fonts/Roboto-MediumItalic.ttf",
                },
            };

            var printer = new PdfPrinter(fonts);

            var docDefinition: TDocumentDefinitions = {
                content: [
                    {
                        text: "Paragraphs can also by styled without using named-styles (this one sets fontSize to 25)",
                        fontSize: 25,
                    },
                ],
            };

            var pdfDoc = printer.createPdfKitDocument(docDefinition);
            pdfDoc.pipe(
                createWriteStream(activeTextEditor.document.fileName + ".pdf")
            );
            pdfDoc.end();

            vscode.window.showInformationMessage("PDF created!");
        }
    );

    context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
