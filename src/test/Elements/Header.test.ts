import * as assert from "assert";
import { Header } from "../../Elements/Header";

suite("Header Test Suite", () => {
    suite("Header Class", () => {
        test("Header #", () => {
            const text = "# Header";

            const header = new Header(text);

            assert.strictEqual(header.text, "Header");
            assert.strictEqual(header.level, 1);

            const tDocumentDefinitionContent =
                header.toTDocumentDefinitionContent();
            assert.strictEqual(tDocumentDefinitionContent.text, "Header");
            assert.strictEqual(tDocumentDefinitionContent.style, "header1");
        });

        test("Header ####", () => {
            const text = "#### Header";

            const header = new Header(text);

            assert.strictEqual(header.text, "Header");
            assert.strictEqual(header.level, 4);

            const tDocumentDefinitionContent =
                header.toTDocumentDefinitionContent();
            assert.strictEqual(tDocumentDefinitionContent.text, "Header");
            assert.strictEqual(tDocumentDefinitionContent.style, "header4");
        });

        test("Header #####", () => {
            const text = "##### Header";

            assert.throws(() => {
                new Header(text);
            }, new Error("Header level cannot be greater than 4"));
        });
    });

    suite("isHeader Function", () => {
        test("Header #", () => {
            const text = "# Header";

            assert.strictEqual(Header.isHeader(text), true);
        });

        test("Header ####", () => {
            const text = "#### Header";

            assert.strictEqual(Header.isHeader(text), true);
        });
    });
});
