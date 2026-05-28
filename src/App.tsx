import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Article from './pages/Article';
import HowItWorks from './pages/HowItWorks';
import Download from './pages/Download';
import FAQPage from './pages/FAQPage';
import Contact from './pages/Contact';
import TesteGratis from './pages/TesteGratis';
import MelhorIPTV from './pages/MelhorIPTV';
import IPTVSmartTV from './pages/IPTVSmartTV';
import FutebolOnline from './pages/FutebolOnline';
import IPTVSamsung from './pages/IPTVSamsung';
import AndroidTV from './pages/AndroidTV';
import TVBoxIPTV from './pages/TVBoxIPTV';
import AplicativoIPTV from './pages/AplicativoIPTV';
import MobileNav from './components/MobileNav';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col selection:bg-blue-500 selection:text-white">
        <ScrollToTop />
        <Header />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Article />} />
            <Route path="/como-funciona" element={<HowItWorks />} />
            <Route path="/downloads" element={<Download />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/teste-gratis" element={<TesteGratis />} />
            <Route path="/melhor-iptv" element={<MelhorIPTV />} />
            <Route path="/iptv-smart-tv" element={<IPTVSmartTV />} />
            <Route path="/futebol-online" element={<FutebolOnline />} />
            <Route path="/iptv-samsung" element={<IPTVSamsung />} />
            <Route path="/android-tv" element={<AndroidTV />} />
            <Route path="/iptv-tv-box" element={<TVBoxIPTV />} />
            <Route path="/aplicativo-iptv" element={<AplicativoIPTV />} />
          </Routes>
        </div>

        <WhatsAppButton />
        <MobileNav />
        <Footer />
      </div>
    </Router>
  );
}
