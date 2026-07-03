import { Routes, Route } from 'react-router-dom';
import { DocLayout } from './layouts/DocLayout';
import { Home } from './pages/Home';
import { Introduction } from './pages/docs/Introduction';
import { Installation } from './pages/docs/Installation';
import { Playground } from './pages/Playground';
import { Benchmark } from './pages/Benchmark';
// I will implement other dummy pages inline or separately

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<DocLayout />}>
        <Route path="/docs" element={<Introduction />} />
        <Route path="/docs/installation" element={<Installation />} />
        <Route path="/benchmark" element={<Benchmark />} />
        {/* Placeholder for other doc pages */}
        <Route path="/docs/:slug" element={
          <div className="prose max-w-none">
            <h1>Coming Soon</h1>
            <p>This documentation page is currently being updated.</p>
          </div>
        } />
      </Route>
      <Route path="/playground" element={<Playground />} />
    </Routes>
  );
}
