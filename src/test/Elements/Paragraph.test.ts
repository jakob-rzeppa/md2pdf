import * as assert from "assert";

import { Paragraph } from "../../Elements/Paragraph";

suite("Paragraph Test Suite", () => {
    suite("Paragraph Class", () => {
        test("Paragraph", () => {
            const text = "Paragraph";

            const paragraph = new Paragraph(text);

            assert.strictEqual(paragraph.text, "Paragraph");

            const tDocumentDefinitionContent =
                paragraph.toTDocumentDefinitionContent();
            assert.strictEqual(tDocumentDefinitionContent.text, "Paragraph");
            assert.strictEqual(tDocumentDefinitionContent.style, "paragraph");
        });
    });

    suite("isParagraph Function", () => {
        test("Paragraph", () => {
            const text = "Paragraph";

            assert.strictEqual(Paragraph.isParagraph(text), true);
        });
    });
});
