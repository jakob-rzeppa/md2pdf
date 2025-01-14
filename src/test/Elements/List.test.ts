import * as assert from "assert";
import { List } from "../../Elements/List";

suite("List Test Suite", () => {
    suite("List Class", () => {
        test("List -", () => {
            const text = "- Item 1\n- Item 2\n- Item 3";

            const list = new List(text);

            assert.deepStrictEqual(list.items, [
                {
                    content: "Item 1",
                    level: 0,
                },
                {
                    content: "Item 2",
                    level: 0,
                },
                {
                    content: "Item 3",
                    level: 0,
                },
            ]);

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

        test("List   -", () => {
            const text = "  - Item 1\n  - Item 2\n  - Item 3";

            const list = new List(text);

            assert.deepStrictEqual(list.items, [
                {
                    content: "Item 1",
                    level: 1,
                },
                {
                    content: "Item 2",
                    level: 1,
                },
                {
                    content: "Item 3",
                    level: 1,
                },
            ]);

            const tDocumentDefinitionContent =
                list.toTDocumentDefinitionContent();
            assert.deepStrictEqual(tDocumentDefinitionContent.ul, [
                {
                    ul: [
                        {
                            text: "Item 1",
                            style: "paragraph",
                        },
                    ],
                },
                {
                    ul: [
                        {
                            text: "Item 2",
                            style: "paragraph",
                        },
                    ],
                },
                {
                    ul: [
                        {
                            text: "Item 3",
                            style: "paragraph",
                        },
                    ],
                },
            ]);
            assert.strictEqual(tDocumentDefinitionContent.style, "list");
        });

        test("List - List", () => {
            const text =
                "- Item 1\n  - Item 1.1\n  - Item 1.2\n- Item 2\n- Item 3";

            const list = new List(text);

            assert.deepStrictEqual(list.items, [
                {
                    content: "Item 1",
                    level: 0,
                },
                {
                    content: "Item 1.1",
                    level: 1,
                },
                {
                    content: "Item 1.2",
                    level: 1,
                },
                {
                    content: "Item 2",
                    level: 0,
                },
                {
                    content: "Item 3",
                    level: 0,
                },
            ]);

            const tDocumentDefinitionContent =
                list.toTDocumentDefinitionContent();
            assert.deepStrictEqual(tDocumentDefinitionContent.ul, [
                {
                    text: "Item 1",
                    style: "paragraph",
                },
                {
                    ul: [
                        {
                            text: "Item 1.1",
                            style: "paragraph",
                        },
                    ],
                },
                {
                    ul: [
                        {
                            text: "Item 1.2",
                            style: "paragraph",
                        },
                    ],
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

        test("List   -", () => {
            const text = "  - Item 1\n  - Item 2\n  - Item 3";

            assert.strictEqual(List.isList(text), true);
        });
    });
});
