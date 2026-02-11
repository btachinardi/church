import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home.page';
import { CrusadePage } from './pages/crusade.page';

export function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/crusade/:slug" element={<CrusadePage />} />
      </Routes>
    </div>
  );
}
