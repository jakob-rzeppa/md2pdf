import { Element } from "./Elements/Element";

export class Intermediate {
    name: string;
    content: Element[];

    constructor(name: string, content: Element[]) {
        this.name = name;
        this.content = content;
    }

    public encodeToPdf() {
        return null;
    }
}
