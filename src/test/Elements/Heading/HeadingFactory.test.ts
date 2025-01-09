import * as assert from "assert";
import { parse, isInvalid } from "../../../Elements/Heading/HeadingFactory";

suite("HeadingFactory", () => {
    suite("parse", () => {
        test("level 1", () => {
            const text = "# Heading";

            const { level, content } = parse(text);

            assert.strictEqual(content, "Heading");
            assert.strictEqual(level, 1);
        });

        test("level 4", () => {
            const text = "#### Heading";

            const { level, content } = parse(text);

            assert.strictEqual(content, "Heading");
            assert.strictEqual(level, 4);
        });
    });

    suite("isInvalid", () => {
        test("Valid heading", () => {
            const text = "# Heading";

            const error = isInvalid(text);

            assert.strictEqual(error, undefined);
        });

        test("Not a heading", () => {
            const text = "Heading";

            const error = isInvalid(text);

            assert.strictEqual(error?.message, "Not a heading");
        });

        test("Heading level too high", () => {
            const text = "####### Heading";

            const error = isInvalid(text);

            assert.strictEqual(error?.message, "Heading level too high");
        });

        test("No space after #", () => {
            const text = "#Heading";

            const error = isInvalid(text);

            assert.strictEqual(error?.message, "No space after #");
        });

        test("No content after #", () => {
            const text = "# ";

            const error = isInvalid(text);

            assert.strictEqual(error?.message, "No content after #");
        });
    });
});
