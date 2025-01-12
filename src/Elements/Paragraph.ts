import { Element } from "./Element";

export class Paragraph implements Element {
    text: string;

    constructor(text: string) {
        this.text = text;
    }

    toTDocumentDefinitionContent(): { text: string; style: string } {
        return {
            text: this.text,
            style: "paragraph",
        };
    }

    static isParagraph(text: string) {
        return true;
    }
}
