import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TerminalSquare, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { iterateDeep, filterObject, mapObject } from 'object-iteratorz';

export function Playground() {
  const [inputObj, setInputObj] = useState(`{
  "name": "Alice",
  "age": 28,
  "roles": {
    "admin": true,
    "editor": false
  },
  "settings": {
    "theme": "dark"
  }
}`);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [mode, setMode] = useState<'deep' | 'filter' | 'map'>('deep');

  const handleRun = () => {
    setError('');
    setOutput('');
    
    try {
      const parsed = JSON.parse(inputObj);
      
      if (mode === 'deep') {
        const results = [];
        for (const item of iterateDeep(parsed)) {
          results.push(item);
        }
        setOutput(JSON.stringify(results, null, 2));
      } else if (mode === 'filter') {
        // filter out false values
        const result = filterObject(parsed, (v: any) => v !== false);
        setOutput(JSON.stringify(result, null, 2));
      } else if (mode === 'map') {
        const result = mapObject(parsed, (v: any) => typeof v === 'number' ? v * 2 : v);
        setOutput(JSON.stringify(result, null, 2));
      }
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Helmet>
        <title>Playground - object-iteratorz</title>
      </Helmet>
      
      {/* Navbar Minimal */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 max-w-screen-2xl items-center px-4 mx-auto justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <TerminalSquare className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">object-iteratorz</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/docs" className="transition-colors hover:text-foreground/80 text-foreground/60">Documentation</Link>
            <Link to="/playground" className="transition-colors hover:text-foreground/80 text-foreground">Playground</Link>
            <a href="https://github.com/zehan12/object-iteratorz" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground/80 text-foreground/60">GitHub</a>
            <ModeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Playground</h1>
          <div className="flex gap-2">
            <Button variant={mode === 'deep' ? 'default' : 'outline'} onClick={() => setMode('deep')}>iterateDeep</Button>
            <Button variant={mode === 'filter' ? 'default' : 'outline'} onClick={() => setMode('filter')}>filterObject (rm false)</Button>
            <Button variant={mode === 'map' ? 'default' : 'outline'} onClick={() => setMode('map')}>mapObject (num * 2)</Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-muted-foreground">Input Object (JSON)</label>
            <textarea 
              value={inputObj}
              onChange={(e) => setInputObj(e.target.value)}
              className="min-h-[400px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-mono"
            />
            <Button onClick={handleRun} className="mt-4"><Play className="w-4 h-4 mr-2" /> Run</Button>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-muted-foreground">Output</label>
            {error ? (
              <div className="bg-destructive/10 text-destructive border border-destructive rounded-md p-4 text-sm font-mono">
                Error: {error}
              </div>
            ) : (
              <div className="flex-1 border rounded-md overflow-hidden bg-zinc-950">
                {output ? (
                   <CodeBlock code={output} lang="json" className="my-0 border-0 rounded-none h-full" />
                ) : (
                   <div className="text-zinc-500 p-4 text-sm h-full flex items-center justify-center font-mono">Run to see output...</div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
