import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import TarotPage from './pages/TarotPage';
import ZodiacPage from './pages/ZodiacPage';
import IChingPage from './pages/IChingPage';
import MeihuaPage from './pages/MeihuaPage';
import BaziPage from './pages/BaziPage';
import DreamPage from './pages/DreamPage';
import NumerologyPage from './pages/NumerologyPage';
import FortunePage from './pages/FortunePage';

const pages = {
  home: Home,
  tarot: TarotPage,
  zodiac: ZodiacPage,
  iching: IChingPage,
  meihua: MeihuaPage,
  bazi: BaziPage,
  dream: DreamPage,
  numerology: NumerologyPage,
  fortune: FortunePage,
};

export default function App() {
  const [page, setPage] = useState('home');
  const PageComponent = pages[page] || Home;

  return (
    <div className="app-container">
      <header className="app-header" onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>
        <div className="app-title">天 机 阁</div>
        <div className="app-subtitle">东 西 方 占 卜 · 命 理 · 星 象</div>
      </header>
      <PageComponent onNavigate={setPage} />
    </div>
  );
}
