import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CodeBlock } from '@/components/ui/CodeBlock';

export function QuickStart() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <Helmet>
        <title>Quick Start - object-iteratorz</title>
      </Helmet>
      
      <h1>Quick Start</h1>
      <p className="lead text-xl text-muted-foreground mt-4 mb-8">
        Get up and running with object-iteratorz in minutes.
      </p>

      <h2>Basic Usage</h2>
      <p>Here is a simple example of how to use the <code>iterate</code> function to traverse a nested object.</p>

      <CodeBlock
        lang="typescript"
        code={`import { iterate } from 'object-iteratorz';

const user = {
  id: 1,
  profile: {
    name: 'Alice',
    active: true
  }
};

for (const { key, value, path } of iterate(user)) {
  console.log(\`\${path.join('.')}: \${value}\`);
}`}
      />

      <pre className="!bg-secondary !p-4 !rounded-lg border">
        <code>
{`// Output:
// id: 1
// profile.name: Alice
// profile.active: true`}
        </code>
      </pre>

      <h2>Next Steps</h2>
      <p>
        Check out the <a href="/docs/iterators">Iterators</a> page to learn about more advanced traversal techniques.
      </p>
    </div>
  );
}
