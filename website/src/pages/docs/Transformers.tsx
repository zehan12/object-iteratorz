import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CodeBlock } from '@/components/ui/CodeBlock';

export function Transformers() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <Helmet>
        <title>Transformers - object-iteratorz</title>
      </Helmet>
      
      <h1>Transformers</h1>
      <p className="lead text-xl text-muted-foreground mt-4 mb-8">
        Functions for transforming and mapping objects.
      </p>

      <h2><code>mapObject()</code></h2>
      <p>
        Applies a mapping function to every deeply nested primitive value in an object.
      </p>

      <CodeBlock
        lang="typescript"
        code={`import { mapObject } from 'object-iteratorz';

const data = { a: 1, b: { c: 2 } };
const doubled = mapObject(data, (v) => typeof v === 'number' ? v * 2 : v);
// { a: 2, b: { c: 4 } }`}
      />

      <h2><code>filterObject()</code></h2>
      <p>
        Removes properties that do not satisfy a predicate function.
      </p>

      <CodeBlock
        lang="typescript"
        code={`import { filterObject } from 'object-iteratorz';

const data = { a: 1, b: null, c: { d: undefined, e: 2 } };
const cleaned = filterObject(data, (v) => v != null);
// { a: 1, c: { e: 2 } }`}
      />

      <h2><code>reduceObject()</code></h2>
      <p>
        Reduces an object to a single value.
      </p>

      <CodeBlock
        lang="typescript"
        code={`import { reduceObject } from 'object-iteratorz';

const data = { a: 1, b: { c: 2 } };
const sum = reduceObject(data, (acc, node) => acc + (node.value as number), 0);
// 3`}
      />
    </div>
  );
}
