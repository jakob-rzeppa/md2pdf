import * as assert from "assert";
import { List } from "../../Elements/List";

suite("List Test Suite", () => {
    suite("List Class", () => {
        test("List -", () => {
            const text = "- Item 1\n- Item 2\n- Item 3";

            const list = new List(text);

            assert.deepStrictEqual(list.items, ["Item 1", "Item 2", "Item 3"]);

            const tDocumentDefinitionContent =
                list.toTDocumentDefinitionContent();
            assert.deepStrictEqual(tDocumentDefinitionContent.ul, [
                {
                    text: "Item 1",
                    style: "paragraph",
                },
                {
                    text: "Item 2",
                    style: "paragraph",
                },
                {
                    text: "Item 3",
                    style: "paragraph",
                },
            ]);
            assert.strictEqual(tDocumentDefinitionContent.style, "list");
        });
    });

    suite("isList Function", () => {
        test("List -", () => {
            const text = "- Item 1\n- Item 2\n- Item 3";

            assert.strictEqual(List.isList(text), true);
        });
    });
});
