import { Element } from "./Element";
import { Paragraph, TDocumentDefinitionContentParagraph } from "./Paragraph";

export interface TDocumentDefinitionContentList {
    ul: (
        | TDocumentDefinitionContentParagraph
        | TDocumentDefinitionContentList
    )[];
    style?: string;
}

export class List implements Element {
    items: { content: string; level: number }[];

    constructor(text: string) {
        const texts = text.split("\n");

        this.items = texts.map((item) => {
            const level = item.search(/\S/) / 2;
            return { content: item.trim().slice(1).trim(), level: level };
        });
    }

    toTDocumentDefinitionContent(): TDocumentDefinitionContentList {
        return {
            ul: [
                ...this.items.map((item) => {
                    if (item.level === 0) {
                        return new Paragraph(
                            item.content
                        ).toTDocumentDefinitionContent();
                    }

                    const res: TDocumentDefinitionContentList = {
                        ul: [],
                    };
                    let currentLevel = res;
                    for (let i = 1; i < item.level; i++) {
                        if (currentLevel.ul.length === 0) {
                            currentLevel.ul.push({ ul: [] });
                        }
                        currentLevel = currentLevel
                            .ul[0] as TDocumentDefinitionContentList;
                    }
                    currentLevel.ul.push(
                        new Paragraph(
                            item.content
                        ).toTDocumentDefinitionContent()
                    );
                    return res;
                }),
            ],
            style: "list",
        };
    }

    static isList(text: string) {
        return text.trim().startsWith("-");
    }
}
