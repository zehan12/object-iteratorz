import React, { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, GitBranch, TerminalSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { cn } from '@/lib/utils';

const SIDEBAR_NAV = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Quick Start', href: '/docs/quick-start' },
    ]
  },
  {
    title: 'Core Concepts',
    items: [
      { title: 'Iterators', href: '/docs/iterators' },
      { title: 'Transformers', href: '/docs/transformers' },
      { title: 'Search', href: '/docs/search' },
    ]
  },
  {
    title: 'Guides',
    items: [
      { title: 'Usage & Examples', href: '/docs/examples' },
      { title: 'TypeScript Support', href: '/docs/typescript' },
      { title: 'Performance', href: '/docs/performance' },
      { title: 'Best Practices', href: '/docs/best-practices' },
    ]
  }
];

export function DocLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center px-4 mx-auto">
          <div className="md:hidden mr-4">
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <TerminalSquare className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">object-iteratorz</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/docs" className="transition-colors hover:text-foreground/80 text-foreground">Docs</Link>
            <Link to="/playground" className="transition-colors hover:text-foreground/80 text-foreground/60">Playground</Link>
            <Link to="/benchmark" className="transition-colors hover:text-foreground/80 text-foreground/60">Benchmark</Link>
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <a href="https://github.com/zehan12/object-iteratorz" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <GitBranch className="h-4 w-4" />
                </Button>
              </a>
              <ModeToggle />
            </nav>
          </div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 mx-auto px-4">
        {/* Sidebar */}
        <aside className={cn(
          "fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto border-r pr-6 py-6",
          menuOpen ? "block bg-background absolute left-4 right-4" : "hidden"
        )}>
          <div className="w-full">
            {SIDEBAR_NAV.map((group, i) => (
              <div key={i} className="pb-4">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">{group.title}</h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  {group.items.map((item, j) => (
                    <NavLink
                      key={j}
                      to={item.href}
                      end={item.href === '/docs'}
                      className={({ isActive }) => cn(
                        "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                        isActive ? "font-medium text-foreground bg-muted" : "text-muted-foreground"
                      )}
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0 max-w-3xl">
            <Outlet />
          </div>
        </main>
      </div>

      <footer className="border-t py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto px-4">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by <a href="#" className="font-medium underline underline-offset-4">Zehan</a>. The source code is available on <a href="https://github.com/zehan12/object-iteratorz" className="font-medium underline underline-offset-4">GitHub</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}
