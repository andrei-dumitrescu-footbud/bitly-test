import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { BreweryDetailPage } from './pages/BreweryDetailPage';

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brewery/:id" element={<BreweryDetailPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}