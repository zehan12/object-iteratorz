import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CodeBlock } from '@/components/ui/CodeBlock';

export function Introduction() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <Helmet>
        <title>Introduction - object-iteratorz</title>
      </Helmet>
      
      <h1>Introduction</h1>
      <p className="lead text-xl text-muted-foreground mt-4 mb-8">
        The ultimate JavaScript/TypeScript toolkit for object iteration, traversal, and manipulation.
      </p>
      
      <p>
        <code>object-iteratorz</code> is a modern, zero-dependency, and type-safe utility library that takes the pain out of working with JavaScript objects. Whether you're traversing deeply nested configurations, transforming simple flat objects, or searching for specific properties, <code>object-iteratorz</code> provides clean, performant, and elegant APIs using modern JavaScript features like generators.
      </p>

      <h2>Why use it?</h2>
      <ul>
        <li><strong>Zero Dependencies</strong>: Keeps your bundle size incredibly small.</li>
        <li><strong>TypeScript First</strong>: Designed with TypeScript to offer strict type safety out of the box.</li>
        <li><strong>Highly Performant</strong>: Uses modern ES6 features (like generators) to minimize memory overhead.</li>
        <li><strong>Deep Traversal</strong>: Iterate deeply through nested objects with ease.</li>
        <li><strong>Comprehensive API</strong>: Iterators, transformers (map, filter, reduce), and path-based search utilities.</li>
      </ul>

      <h2>Quick Example</h2>
      <CodeBlock code={`import { filterObject } from 'object-iteratorz';

const data = { a: 1, b: null, c: 3 };
const activeUsers = filterObject(data, v => v !== null);

// activeUsers is { a: 1, c: 3 }`} />
    </div>
  );
}
