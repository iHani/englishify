import { englishify } from '../src/englishify';

describe('englishify', () => {
    it('should convert Arabic-Indic digits to English digits in strings', () => {
        expect(englishify("١٢٣٤٥٦٧٨٩٠")).toBe("1234567890");
        expect(englishify("Phone: ٠١٢٣-٤٥٦")).toBe("Phone: 0123-456");
        expect(englishify("Test ١٢٣")).toBe("Test 123");
        expect(englishify("No digits here")).toBe("No digits here");
        expect(englishify("Mixed ١٢٣ and 456")).toBe("Mixed 123 and 456");
        expect(englishify("في عام ٢٠٢٥ تم نشر الخبر")).toBe("في عام 2025 تم نشر الخبر");
    });

    it('should convert Arabic-Indic digits in numbers', () => {
        expect(englishify("١٢٣٤٥٦٧٨٩٠")).toBe("1234567890");
        expect(englishify(2025)).toBe(2025);
    });

    it('should convert Arabic-Indic digits in arrays', () => {
        expect(englishify(["١٢٣", "٤٥٦", "abc", 789])).toEqual(["123", "456", "abc", 789]);
        expect(englishify([])).toEqual([]);
    });

    it('should convert Arabic-Indic digits in objects', () => {
        expect(englishify({ a: "١٢٣", b: "٤٥٦", c: "abc", d: 789 })).toEqual({ a: "123", b: "456", c: "abc", d: 789 });
        expect(englishify({})).toEqual({});
    });

    it('should convert deeply nested structures', () => {
        const input = { a: ["١٢٣", { b: "٤٥٦", c: ["٧٨٩", { d: "٠" }] }] };
        const expected = { a: ["123", { b: "456", c: ["789", { d: "0" }] }] };
        expect(englishify(input)).toEqual(expected);
    });

    it('should return an empty string if input is empty string', () => {
        expect(englishify("")).toBe("");
    });

    it('should handle non-Arabic-Indic characters', () => {
        expect(englishify("abc")).toBe("abc");
        expect(englishify("123")).toBe("123");
    });

    it('should return input as is for null, undefined, boolean, or function', () => {
        expect(englishify(null)).toBe(null);
        expect(englishify(undefined)).toBe(undefined);
        expect(englishify(true)).toBe(true);
        expect(englishify(false)).toBe(false);
        const fn = () => { };
        expect(englishify(fn)).toBe(fn);
    });
});
