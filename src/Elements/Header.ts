import { Element } from "./Element";

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

    toTDocumentDefinitionContent(): { text: string; style: string } {
        return {
            text: this.text,
            style: "header" + this.level,
        };
    }

    static isHeader(text: string) {
        return text.startsWith("#");
    }
}
