import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Box, Layers, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { CodeBlock } from '@/components/ui/CodeBlock';

const codeExample = `import { iterateDeep, filterObject } from 'object-iteratorz';

const userConfig = {
  theme: 'dark',
  features: {
    beta: true,
    experimental: {
      newUI: false
    }
  }
};

// Deeply iterate over nested objects
for (const { path, key, value } of iterateDeep(userConfig)) {
  console.log(path.join('.'), '=', value);
}`;

export function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Helmet>
        <title>object-iteratorz - The Ultimate Object Toolkit</title>
        <meta name="description" content="Modern, zero-dependency, and type-safe utility library for object iteration, traversal, and manipulation." />
      </Helmet>
      
      {/* Navbar Minimal */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 max-w-screen-2xl items-center px-4 mx-auto justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-bold sm:inline-block">object-iteratorz</span>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/docs" className="transition-colors hover:text-foreground/80 text-foreground">Documentation</Link>
            <Link to="/playground" className="transition-colors hover:text-foreground/80 text-foreground/60">Playground</Link>
            <a href="https://github.com/zehan12/object-iteratorz" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground/80 text-foreground/60">GitHub</a>
            <ModeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto px-4">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              The ultimate <span className="text-primary">Object Toolkit</span> for JavaScript.
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Iterate, traverse, transform, and search JavaScript objects with zero dependencies. Highly performant, fully typed, and built for modern apps.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              <Link to="/docs">
                <Button size="lg" className="h-12 px-8 text-base">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base" onClick={() => {
                navigator.clipboard.writeText('npm install object-iteratorz');
              }}>
                npm install object-iteratorz
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8 md:py-12 lg:py-24 max-w-5xl">
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl">High Performance</h3>
              <p className="text-muted-foreground text-sm">Uses ES6 Generators to minimize memory overhead. Iterate over massive objects safely.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Box className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl">Zero Dependencies</h3>
              <p className="text-muted-foreground text-sm">Lightweight and bloat-free. Won't increase your bundle size.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl">Type Safe</h3>
              <p className="text-muted-foreground text-sm">First-class TypeScript support with strong typing for all functions.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8 md:py-12 lg:py-24 border-t bg-muted/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-8">See it in action</h2>
            <CodeBlock code={codeExample} lang="typescript" />
          </div>
        </section>
      </main>
      
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto px-4">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by Zehan.
          </p>
        </div>
      </footer>
    </div>
  );
}
