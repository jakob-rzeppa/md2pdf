import { Element } from "./Elements/Element";
import { Header } from "./Elements/Header";
import { Paragraph } from "./Elements/Paragraph";

export function parseDocument(document: string) {
    const elements = document.split("\n\n");

    return elements.map((element) => {
        return toElement(element);
    });
}

export function toElement(element: string): Element {
    if (Header.isHeader(element)) {
        return new Header(element);
    } else {
        return new Paragraph(element);
    }
}
