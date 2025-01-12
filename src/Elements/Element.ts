import { TDocumentDefinitionContentHeader } from "./Header";
import { TDocumentDefinitionContentList } from "./List";
import { TDocumentDefinitionContentParagraph } from "./Paragraph";

export interface Element {
    toTDocumentDefinitionContent():
        | TDocumentDefinitionContentHeader
        | TDocumentDefinitionContentParagraph
        | TDocumentDefinitionContentList;
}
