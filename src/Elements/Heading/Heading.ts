import { Element } from "../Element";

export class Heading implements Element {
    content: string;
    level: number;

    constructor(level: number, content: string) {
        this.level = level;
        this.content = content;
    }

    public encodeToPdf(): null {
        return null;
    }
}
