import { Element } from "./Elements/Element";
import { Header } from "./Elements/Header";
import { List } from "./Elements/List";
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
    } else if (List.isList(element)) {
        return new List(element);
    } else {
        return new Paragraph(element);
    }
}
