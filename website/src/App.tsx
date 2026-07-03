import { Routes, Route } from 'react-router-dom';
import { DocLayout } from './layouts/DocLayout';
import { Home } from './pages/Home';
import { Introduction } from './pages/docs/Introduction';
import { Installation } from './pages/docs/Installation';
import { QuickStart } from './pages/docs/QuickStart';
import { Iterators } from './pages/docs/Iterators';
import { Transformers } from './pages/docs/Transformers';
import { Search } from './pages/docs/Search';
import { Playground } from './pages/Playground';
import { Benchmark } from './pages/Benchmark';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<DocLayout />}>
        <Route path="/docs" element={<Introduction />} />
        <Route path="/docs/installation" element={<Installation />} />
        <Route path="/docs/quick-start" element={<QuickStart />} />
        <Route path="/docs/iterators" element={<Iterators />} />
        <Route path="/docs/transformers" element={<Transformers />} />
        <Route path="/docs/search" element={<Search />} />
        <Route path="/benchmark" element={<Benchmark />} />
        {/* Placeholder for other doc pages */}
        <Route path="/docs/:slug" element={
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <h1>Coming Soon</h1>
            <p>This documentation page is currently being updated.</p>
          </div>
        } />
      </Route>
      <Route path="/playground" element={<Playground />} />
    </Routes>
  );
}
