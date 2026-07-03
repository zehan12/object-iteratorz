import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CodeBlock } from '@/components/ui/CodeBlock';

export function Iterators() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <Helmet>
        <title>Iterators - object-iteratorz</title>
      </Helmet>
      
      <h1>Iterators</h1>
      <p className="lead text-xl text-muted-foreground mt-4 mb-8">
        Functions for traversing objects using JavaScript generators.
      </p>

      <h2><code>iterate()</code></h2>
      <p>
        The primary function for deeply traversing an object. It yields an <code>IteratorYieldResult</code> for every primitive value or object node found.
      </p>

      <CodeBlock
        lang="typescript"
        code={`import { iterate } from 'object-iteratorz';

const data = { a: 1, b: { c: 2 } };

for (const node of iterate(data)) {
  console.log(node.path, node.value);
}`}
      />

      <h3>Options</h3>
      <ul>
        <li><code>maxDepth</code> (number): Stop traversing after a certain depth.</li>
        <li><code>includeObjects</code> (boolean): Yield intermediate objects instead of just leaf nodes.</li>
      </ul>

      <h2><code>iterateKeys()</code> and <code>iterateValues()</code></h2>
      <p>
        Convenience wrappers around <code>iterate</code> that yield only the keys or values.
      </p>

      <CodeBlock
        lang="typescript"
        code={`import { iterateValues } from 'object-iteratorz';

const data = { a: 1, b: { c: 2 } };

for (const value of iterateValues(data)) {
  console.log(value); // Logs 1, then 2
}`}
      />
    </div>
  );
}
