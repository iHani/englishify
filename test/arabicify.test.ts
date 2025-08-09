import { arabicify } from '../src';

describe('arabicify', () => {
    it('should convert English digits to Arabic-Indic digits in strings', () => {
        expect(arabicify("1234567890")).toBe("١٢٣٤٥٦٧٨٩٠");
        expect(arabicify("Phone: 0123-456")).toBe("Phone: ٠١٢٣-٤٥٦");
        expect(arabicify("Test 123")).toBe("Test ١٢٣");
        expect(arabicify("No digits here")).toBe("No digits here");
        expect(arabicify("Mixed 123 and ٤٥٦")).toBe("Mixed ١٢٣ and ٤٥٦");
        expect(arabicify("In 2025, news was published")).toBe("In ٢٠٢٥, news was published");
    });

    it('should return numbers as-is', () => {
        expect(arabicify(2025)).toBe("٢٠٢٥");
        expect(arabicify(0)).toBe("٠");
    });

    it('should convert English digits in arrays', () => {
        expect(arabicify(["123", "456", "abc", 789])).toEqual(["١٢٣", "٤٥٦", "abc", "٧٨٩"]);
        expect(arabicify([])).toEqual([]);
    });

    it('should convert English digits in objects', () => {
        expect(arabicify({ a: "123", b: "456", c: "abc", d: 789 })).toEqual({ a: "١٢٣", b: "٤٥٦", c: "abc", d: "٧٨٩" });
        expect(arabicify({})).toEqual({});
    });

    it('should convert deeply nested structures', () => {
        const input = { a: ["123", { b: "456", c: ["789", { d: "0" }] }] };
        const expected = { a: ["١٢٣", { b: "٤٥٦", c: ["٧٨٩", { d: "٠" }] }] };
        expect(arabicify(input)).toEqual(expected);
    });

    it('should return an empty string if input is empty string', () => {
        expect(arabicify("")).toBe("");
    });

    it('should handle non-digit characters', () => {
        expect(arabicify("abc")).toBe("abc");
        expect(arabicify("مرحبا")).toBe("مرحبا");
    });

    it('should return input as is for null, undefined, boolean, or function', () => {
        expect(arabicify(null)).toBe(null);
        expect(arabicify(undefined)).toBe(undefined);
        expect(arabicify(true)).toBe(true);
        expect(arabicify(false)).toBe(false);
        const fn = () => { };
        expect(arabicify(fn)).toBe(fn);
    });
});