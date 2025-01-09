import { Element } from "./Elements/Element";
import { createHeading } from "./Elements/Heading/HeadingFactory";
import { createParagraph } from "./Elements/Paragraph/ParagraphFactory";
import { Intermediate } from "./Intermediate";

export function createIntermediate(
    name: string,
    document: string
): Intermediate {
    const elementText = splitDocument(document);

    const elements = toElements(elementText);

    return new Intermediate(name, elements);
}

export function splitDocument(document: string): string[] {
    return document
        .split("\n\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0);
}

const identifier = new Map<string, (text: string) => Element>([
    ["#", (text) => createHeading(text)],
    ["", (text) => createParagraph(text)],
]);

export function toElements(elementText: string[]): Element[] {
    return elementText.map((text) => {
        for (const [id, factory] of identifier) {
            if (text.startsWith(id)) {
                return factory(text);
            }
        }
        throw new Error("Unknown element");
    });
}
