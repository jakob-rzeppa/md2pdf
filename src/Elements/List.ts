import { Element } from "./Element";
import { Paragraph, TDocumentDefinitionContentParagraph } from "./Paragraph";

export interface TDocumentDefinitionContentList {
    ul: TDocumentDefinitionContentParagraph[];
    style: string;
}

export class List implements Element {
    items: string[];

    constructor(text: string) {
        this.items = text
            .split("\n")
            .map((item) => item.trim().slice(1).trim());
    }

    toTDocumentDefinitionContent(): TDocumentDefinitionContentList {
        return {
            ul: [
                ...this.items.map((item) => {
                    return new Paragraph(item).toTDocumentDefinitionContent();
                }),
            ],
            style: "list",
        };
    }

    static isList(text: string) {
        return text.startsWith("-");
    }
}
