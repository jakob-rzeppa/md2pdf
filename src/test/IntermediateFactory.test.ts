import * as assert from "assert";
import { splitDocument } from "../IntermediateFactory";

suite("IntermediateFactory", () => {
    suite("splitDocument", () => {
        test("expected input", () => {
            const document = "Heading\n\nParagraph";

            const result = splitDocument(document);

            assert.deepStrictEqual(result, ["Heading", "Paragraph"]);
        });

        test("extra newlines", () => {
            const document = "Heading\n\n\n\nParagraph";

            const result = splitDocument(document);

            assert.deepStrictEqual(result, ["Heading", "Paragraph"]);
        });

        test("only one newline", () => {
            const document = "Heading\nParagraph";

            const result = splitDocument(document);

            assert.deepStrictEqual(result, ["Heading\nParagraph"]);
        });

        test("extra newlines before and after", () => {
            const document = "\n\n\nHeading\n\nParagraph\n";

            const result = splitDocument(document);

            assert.deepStrictEqual(result, ["Heading", "Paragraph"]);
        });

        test("empty lines", () => {
            const document =
                "\n\n \n\n\n   \n \n  \n\n  \nHeading\n\n \n\n\nParagraph\n\n \n\n   \n\n \n\n\n";

            const result = splitDocument(document);

            assert.deepStrictEqual(result, ["Heading", "Paragraph"]);
        });
    });
});
