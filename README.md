# Englishify

[![npm version](https://img.shields.io/npm/v/englishify.svg)](https://www.npmjs.com/package/englishify)
[![GitHub stars](https://img.shields.io/github/stars/iHani/englishify.svg?style=social)](https://github.com/iHani/englishify)

**Englishify** is a simple TypeScript/JavaScript utility that converts Arabic-Indic digits (٠١٢٣٤٥٦٧٨٩) to English digits (0123456789) in any value.  
It works with strings, arrays, objects, and even deeply nested structures—making it perfect for form inputs, APIs, and data cleaning.

---

## 🚀 Installation

Install using npm or pnpm:

```bash
npm install englishify
# or
pnpm add englishify
```

---

## ✨ Usage

Import and use the `englishify` function in your project:

```typescript
import { englishify } from 'englishify';

// Convert Arabic-Indic digits to English digits in strings
console.log(englishify("١٢٣٤٥٦٧٨٩٠")); // "1234567890"

// Convert numbers to English digits in strings
console.log(englishify("رقم: ١٢٣٤٥")); // "رقم: 12345"

// Convert a number (returns the number as-is)
console.log(englishify(2025)); // 2025

// Convert an array
console.log(englishify(["١٢٣", "٤٥٦", "abc", 789]));
// ["123", "456", "abc", 789]

// Convert an object
console.log(englishify({ a: "١٢٣", b: "٤٥٦", c: "abc", d: 789 }));
// { a: "123", b: "456", c: "abc", d: 789 }

// Convert deeply nested structures
const input = { a: ["١٢٣", { b: "٤٥٦", c: ["٧٨٩", { d: "٠" }] }] };
console.log(englishify(input));
// { a: ["123", { b: "456", c: ["789", { d: "0" }] }] }
```

---

## 📝 API

```typescript
englishify(input: any): any
```

- **input**: Any value (string, number, array, object, etc.) containing Arabic-Indic digits.
- **returns**: The same structure, with all Arabic-Indic digits replaced by English digits. Numbers are returned as-is.

---

## 💡 Examples

```typescript
englishify("١٢٣٤٥٦٧٨٩٠"); // "1234567890"
englishify(٢٠٢٥); // 2025
englishify(["١٢٣", "٤٥٦", "abc", 789]); // ["123", "456", "abc", 789]
englishify({ a: "١٢٣", b: [ "٤٥٦", { c: "٧٨٩" } ] }); // { a: "123", b: ["456", { c: "789" }] }
englishify(null); // null
englishify(undefined); // undefined
englishify(true); // true
```

---

## 🧪 Testing

This project uses [Jest](https://jestjs.io/) for testing.  
To run the tests:

```bash
npm test
```

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to [open an issue](https://github.com/iHani/englishify/issues) or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.