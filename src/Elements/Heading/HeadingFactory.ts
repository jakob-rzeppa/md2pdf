import { Heading } from "./Heading";

export function createHeading(text: string) {
    const validationError = isInvalid(text);
    if (validationError) {
        throw validationError;
    }

    const { level, content } = parse(text);
    return new Heading(level, content);
}

const validationConditions = new Map<(text: string) => boolean, string>([
    [(text: string) => text.startsWith("#"), "Not a heading"],
    [
        (text: string) => {
            let level = 0;
            while (text[level] === "#") {
                level++;
            }
            return level <= 6;
        },
        "Heading level too high",
    ],
    [
        (text: string) => {
            let level = 0;
            while (text[level] === "#") {
                level++;
            }
            return text[level] === " ";
        },
        "No space after #",
    ],
    [
        (text: string) => {
            let level = 0;
            while (text[level] === "#") {
                level++;
            }
            return text.slice(level).trim().length > 0;
        },
        "No content after #",
    ],
]);

export function isInvalid(text: string): Error | undefined {
    for (const [validationCondition, message] of validationConditions) {
        if (!validationCondition(text)) {
            return new Error(message);
        }
    }
}

export function parse(textToParse: string) {
    let level = 0;
    while (textToParse[level] === "#") {
        level++;
    }
    return { level, content: textToParse.slice(level + 1) };
}
