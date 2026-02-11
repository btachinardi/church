import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar.component';
import { ScrollToTop } from './components/scroll-to-top.component';
import { HomePage } from './pages/home.page';
import { CrusadePage } from './pages/crusade.page';

export function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/crusade/:slug" element={<CrusadePage />} />
      </Routes>
    </div>
  );
}
