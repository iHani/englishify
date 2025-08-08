# Englishify

Englishify is a TypeScript utility that recursively converts Arabic-Indic digits in any value (string, number, array, object, etc.) to English digits. This project provides a robust function that can be used in various applications where digit conversion is required, including deeply nested data structures.

## Installation

Install the package from npm:

```bash
npm install englishify
# or using pnpm
pnpm add englishify
```

## Usage

You can use the `englishify` function by importing it into your TypeScript or JavaScript files:

```typescript
import { englishify } from 'englishify';

// Strings
console.log(englishify("١٢٣٤٥٦٧٨٩٠")); // "1234567890"

// Numbers
console.log(englishify(٢٠٢٥)); // "2025"

// Arrays
console.log(englishify(["١٢٣", ٤٥٦, "abc", 789])); // ["123", "456", "abc", "789"]

// Objects
console.log(englishify({ a: "١٢٣", b: ٤٥٦, c: ["٧٨٩", { d: "٠" }] }));
// { a: "123", b: "456", c: ["789", { d: "0" }] }

// Deeply nested structures
const input = { a: ["١٢٣", { b: ٤٥٦, c: ["٧٨٩", { d: "٠" }] }] };
console.log(englishify(input));
// { a: ["123", { b: "456", c: ["789", { d: "0" }] }] }
```

### Function Signature

```typescript
englishify(input: any): any
```

- **input**: Any value (string, number, array, object, etc.) containing Arabic-Indic digits (٠١٢٣٤٥٦٧٨٩).
- **returns**: The processed value with all Arabic-Indic digits replaced by English digits (0-9).

### Examples

```typescript
englishify("١٢٣٤٥٦٧٨٩٠"); // "1234567890"
englishify(٢٠٢٥); // "2025"
englishify(["١٢٣", ٤٥٦, "abc", 789]); // ["123", "456", "abc", "789"]
englishify({ a: "١٢٣", b: [٤٥٦, { c: "٧٨٩" }] }); // { a: "123", b: ["456", { c: "789" }] }
englishify(null); // null
englishify(undefined); // undefined
englishify(true); // true
```

## Testing

This project uses Jest for testing. To run the tests, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.