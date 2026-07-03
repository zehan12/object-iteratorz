import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CodeBlock } from '@/components/ui/CodeBlock';

export function Installation() {
  return (
    <div className="prose max-w-none">
      <Helmet>
        <title>Installation - object-iteratorz</title>
      </Helmet>
      
      <h1>Installation</h1>
      <p className="lead text-xl text-muted-foreground mt-4 mb-8">
        How to install and set up object-iteratorz in your project.
      </p>

      <div className="bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 my-6">
        <h3 className="text-amber-800 dark:text-amber-300 font-medium m-0 mb-2">Note on naming</h3>
        <p className="text-amber-700 dark:text-amber-400 m-0 text-sm">
          The name <code>object-iterator</code> was already taken on npm, so the package is published as <strong><code>object-iteratorz</code></strong>.
        </p>
      </div>

      <p>You can install the package using your preferred package manager:</p>

      <h3>npm</h3>
      <CodeBlock code="npm install object-iteratorz" lang="bash" />
      
      <h3>yarn</h3>
      <CodeBlock code="yarn add object-iteratorz" lang="bash" />
      
      <h3>pnpm</h3>
      <CodeBlock code="pnpm add object-iteratorz" lang="bash" />
      
      <h3>bun</h3>
      <CodeBlock code="bun add object-iteratorz" lang="bash" />

      <h2>Importing</h2>
      <p>Once installed, you can import any of the utilities you need:</p>
      
      <CodeBlock code={`import { iterateDeep, mapObject } from 'object-iteratorz';`} lang="typescript" />
    </div>
  );
}
