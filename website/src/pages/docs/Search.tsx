import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CodeBlock } from '@/components/ui/CodeBlock';

export function Search() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <Helmet>
        <title>Search - object-iteratorz</title>
      </Helmet>
      
      <h1>Search</h1>
      <p className="lead text-xl text-muted-foreground mt-4 mb-8">
        Utilities to find keys and values within objects.
      </p>

      <h2><code>findKey()</code></h2>
      <p>
        Searches for a specific key within an object and returns its value and path.
      </p>

      <CodeBlock
        lang="typescript"
        code={`import { findKey } from 'object-iteratorz';

const data = { config: { users: { active: true } } };
const result = findKey(data, 'active');
// { value: true, path: ['config', 'users', 'active'] }`}
      />

      <h2><code>findValue()</code></h2>
      <p>
        Searches for a specific value within an object and returns its path.
      </p>

      <CodeBlock
        lang="typescript"
        code={`import { findValue } from 'object-iteratorz';

const data = { config: { api: 'https://example.com' } };
const result = findValue(data, 'https://example.com');
// { path: ['config', 'api'], key: 'api', value: 'https://example.com' }`}
      />
    </div>
  );
}
