import { Element } from "../Element";

export class Paragraph implements Element {
    content: string;

    constructor(textToParse: string) {
        this.content = textToParse;
    }

    public encodeToPdf(): null {
        return null;
    }
}
