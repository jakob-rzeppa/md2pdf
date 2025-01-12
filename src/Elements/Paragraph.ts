import { Element } from "./Element";

export interface TDocumentDefinitionContentParagraph {
    text: string;
    style: string;
}

export class Paragraph implements Element {
    text: string;

    constructor(text: string) {
        this.text = text;
    }

    toTDocumentDefinitionContent(): TDocumentDefinitionContentParagraph {
        return {
            text: this.text,
            style: "paragraph",
        };
    }

    static isParagraph(text: string) {
        return true;
    }
}
