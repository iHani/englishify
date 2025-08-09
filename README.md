# Englishify

[![npm version](https://img.shields.io/npm/v/englishify.svg)](https://www.npmjs.com/package/englishify)
[![GitHub stars](https://img.shields.io/github/stars/iHani/englishify.svg?style=social)](https://github.com/iHani/englishify)

**Englishify** is a simple utility for converting numbers between Arabic-Indic digits (٠١٢٣٤٥٦٧٨٩) and English digits (0123456789) in any data structure.  
It is perfect for cleaning, correcting, or normalizing numeric input in strings, arrays, objects, and deeply nested data.

---

## ✨ Quick Example

```typescript
import { englishify, arabicify } from 'englishify';

// Convert Arabic-Indic digits to English digits
englishify("١٢٣٤٥"); // "12345"

// Convert English digits to Arabic-Indic digits
arabicify("يوجد 420 نتيجة"); // "يوجد ٤٢٠ نتيجة"
```

---

## 🚀 Installation

Install using npm or pnpm:

```bash
npm install englishify
# or
pnpm add englishify
```

---

## 📝 API

```typescript
englishify(input: any): any
arabicify(input: any): any
```

- **input**: Any value (string, number, array, object, etc.) containing digits to convert.
- **returns**: The same structure, with all digits converted. Numbers are returned as-is.

---

## 💡 Usage Examples

### Strings

```typescript
englishify("١٢٣٤٥٦٧٨٩٠"); // "1234567890"
arabicify("1234567890");   // "١٢٣٤٥٦٧٨٩٠"
```

### Numbers

```typescript
englishify('٢٠٢٥'); // 2025
englishify(2025);  // 2025

arabicify('٢٠٢٥'); // '٢٠٢٥'
arabicify(2025);  // '٢٠٢٥'

```

### Arrays

```typescript
englishify(["١٢٣", "٤٥٦", "abc", 789]); // ["123", "456", "abc", 789]
arabicify(["123", "456", "abc", 789]);  // ["١٢٣", "٤٥٦", "abc", 789]
```

### Objects

```typescript
englishify({ a: "١٢٣", b: "٤٥٦", c: "abc", d: 789 });
// { a: "123", b: "456", c: "abc", d: 789 }

arabicify({ a: "123", b: "456", c: "abc", d: 789 });
// { a: "١٢٣", b: "٤٥٦", c: "abc", d: 789 }
```

### Deeply Nested Structures

```typescript
const input = { a: ["١٢٣", { b: "٤٥٦", c: ["٧٨٩", { d: "٠" }] }] };
englishify(input);
// { a: ["123", { b: "456", c: ["789", { d: "0" }] }] }

const input2 = { a: ["123", { b: "456", c: ["789", { d: "0" }] }] };
arabicify(input2);
// { a: ["١٢٣", { b: "٤٥٦", c: ["٧٨٩", { d: "٠" }] }] }
```

### Other Types

```typescript
englishify(null); // null
englishify(undefined); // undefined
englishify(true); // true

arabicify(null); // null
arabicify(undefined); // undefined
arabicify(false); // false
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

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🌐 Links

- [GitHub Repository](https://github.com/iHani/englishify)
- [NPM Package](https://www.npmjs.com/package/englishify)