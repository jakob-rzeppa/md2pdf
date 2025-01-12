import { Element } from "./Element";
import { TDocumentDefinitionContentParagraph } from "./Paragraph";

export interface TDocumentDefinitionContentHeader {
    text: string;
    style: string;
}

export class Header implements Element {
    text: string;
    level: number;

    constructor(text: string) {
        this.level = text.split("#").length - 1;
        if (this.level > 4) {
            throw new Error("Header level cannot be greater than 4");
        }
        this.text = text.replace(/#/g, "").trim();
    }

    toTDocumentDefinitionContent(): TDocumentDefinitionContentHeader {
        return {
            text: this.text,
            style: "header" + this.level,
        };
    }

    static isHeader(text: string) {
        return text.startsWith("#");
    }
}
