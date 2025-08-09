/**
 * Recursively converts Arabic-Indic digits in any value (string, array, object) to English digits.
 * If the value is a number, it is returned as-is.
 *
 * @param input - The value to process (string, number, array, object, etc.).
 * @returns The processed value with all Arabic-Indic digits replaced by English digits.
 *
 * @example
 * englishify("١٢٣"); // "123"
 * englishify(["١٢٣", ٤٥٦]); // ["123", 456]
 * englishify({ a: "١٢٣", b: [٤٥٦, { c: "٧٨٩" }] }); // { a: "123", b: [456, { c: "789" }] }
 */
export function englishify(input: any): any {
    if (typeof input === "string") {
        return input.replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 1632));
    }
    if (typeof input === "number") {
        return input;
    }
    if (Array.isArray(input)) {
        return input.map(englishify);
    }
    if (input && typeof input === "object") {
        const result: any = {};
        for (const key in input) {
            if (Object.prototype.hasOwnProperty.call(input, key)) {
                result[key] = englishify(input[key]);
            }
        }
        return result;
    }
    return input;
}

/**
 * Recursively converts English digits in any value (string, array, object) to Arabic-Indic digits.
 * If the value is a number, it is returned as-is.
 *
 * @param input - The value to process (string, number, array, object, etc.).
 * @returns The processed value with all English digits replaced by Arabic-Indic digits.
 *
 * @example
 * arabicify("123"); // "١٢٣"
 * arabicify(["123", 456]); // ["١٢٣", 456]
 * arabicify({ a: "123", b: [456, { c: "789" }] }); // { a: "١٢٣", b: [456, { c: "٧٨٩" }] }
 */
export function arabicify(input: any): any {
    if (typeof input === "string") {
        // Correct offset: '0' (48) to '٠' (1632)
        return input.replace(/[0-9]/g, (d) => String.fromCharCode(d.charCodeAt(0) + 1584));
    }
    if (typeof input === "number") {
        return arabicify(input.toString());
    }
    if (Array.isArray(input)) {
        return input.map(arabicify);
    }
    if (input && typeof input === "object") {
        const result: any = {};
        for (const key in input) {
            if (Object.prototype.hasOwnProperty.call(input, key)) {
                result[key] = arabicify(input[key]);
            }
        }
        return result;
    }
    return input;
}