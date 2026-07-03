import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { iterateDeep, filterObject } from 'object-iteratorz';

export function Benchmark() {
  const [running, setRunning] = useState(false);
  const [results, setResults] = useState<{name: string, ops: number, time: number}[]>([]);

  const runBenchmark = () => {
    setRunning(true);
    setResults([]);
    
    // Allow UI to update before blocking thread
    setTimeout(() => {
      const data = {
        a: 1, b: 2, c: { d: 3, e: { f: 4, g: 5 } }, h: [1, 2, 3, { i: 6 }]
      };
      
      const newResults = [];

      // Test iterateDeep
      let start = performance.now();
      let count = 0;
      for (let i = 0; i < 100000; i++) {
        for (const _ of iterateDeep(data)) { count++; }
      }
      let end = performance.now();
      newResults.push({ name: 'iterateDeep', ops: 100000, time: end - start });

      // Test filterObject
      start = performance.now();
      count = 0;
      for (let i = 0; i < 100000; i++) {
        const res = filterObject(data, (v) => v !== null);
      }
      end = performance.now();
      newResults.push({ name: 'filterObject', ops: 100000, time: end - start });

      setResults(newResults);
      setRunning(false);
    }, 100);
  };

  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <Helmet>
        <title>Benchmark - object-iteratorz</title>
      </Helmet>
      
      <h1>Performance Benchmark</h1>
      <p className="lead text-xl text-muted-foreground mt-4 mb-8">
        Run live benchmarks in your browser to see how fast object-iteratorz is.
      </p>

      <div className="my-8">
        <Button onClick={runBenchmark} disabled={running}>
          {running ? 'Running...' : 'Run Benchmarks'}
        </Button>
      </div>

      {results.length > 0 && (
        <div className="not-prose border rounded-lg overflow-hidden bg-background">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="px-6 py-3 font-medium">Operation</th>
                <th className="px-6 py-3 font-medium">Operations Count</th>
                <th className="px-6 py-3 font-medium">Time (ms)</th>
                <th className="px-6 py-3 font-medium">Ops/sec</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {results.map((r, i) => (
                <tr key={i} className="bg-background hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 font-medium">{r.name}</td>
                  <td className="px-6 py-4">{r.ops.toLocaleString()}</td>
                  <td className="px-6 py-4">{r.time.toFixed(2)} ms</td>
                  <td className="px-6 py-4 font-mono text-emerald-600 dark:text-emerald-400">
                    {Math.floor((r.ops / r.time) * 1000).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
