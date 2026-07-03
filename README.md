# object-iteratorz

> The ultimate JavaScript/TypeScript toolkit for object iteration, traversal, and manipulation.

[![npm version](https://badge.fury.io/js/object-iteratorz.svg)](https://badge.fury.io/js/object-iteratorz)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`object-iteratorz` is a modern, zero-dependency, and type-safe utility library that takes the pain out of working with JavaScript objects. Whether you're traversing deeply nested configurations, transforming simple flat objects, or searching for specific properties, `object-iteratorz` provides clean, performant, and elegant APIs using modern JavaScript features like generators.

## Features

- 🚀 **Zero Dependencies**: Keeps your bundle size incredibly small.
- 💻 **TypeScript First**: Designed with TypeScript to offer strict type safety out of the box.
- ⚡ **Highly Performant**: Uses modern ES6 features (like generators) to minimize memory overhead.
- 🌳 **Deep Traversal**: Iterate deeply through nested objects with ease.
- 🧰 **Comprehensive API**: Iterators, transformers (map, filter, reduce), and path-based search utilities.

## Installation

```bash
npm install object-iteratorz
# or
yarn add object-iteratorz
# or
pnpm add object-iteratorz
```

## Quick Start

```ts
import { iterateDeep, filterObject } from 'object-iteratorz';

const data = {
  user: { name: 'Alice', active: true },
  settings: { notifications: false }
};

// Deep iteration
for (const { path, key, value } of iterateDeep(data)) {
  console.log(`${path.join('.')}: ${value}`);
}

// Filtering
const activeUsers = filterObject({ a: 1, b: null, c: 3 }, v => v !== null);
```

## Documentation

For full documentation, visit our [documentation website](https://object-iteratorz-docs.com).

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to get started.

## License

[MIT](./LICENSE)
