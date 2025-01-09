import * as assert from "assert";
import { createParagraph } from "../../../elements/paragraph/ParagraphFactory";

suite("ParagraphFactory", () => {
    test("expected input", () => {
        const text = "Paragraph";

        const paragraph = createParagraph(text);

        assert.strictEqual(paragraph.content, "Paragraph");
    });
});
