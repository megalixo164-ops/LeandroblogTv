import { useState, useEffect } from 'react';
import { Menu, X, Smartphone, Tv, MessageSquare, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SmartSearchBar from './SearchBar';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Como Funciona', href: '/como-funciona' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-blue-500/20 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-1">
          <span className="text-2xl font-black tracking-tighter text-white">
            LEANDRO<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-deep-blue">TV+</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-400 hover:text-neon-blue transition-colors font-medium text-sm tracking-wide"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 pl-4 border-l border-white/10">
            <SmartSearchBar />
            <a 
              href="#teste" 
              className="px-6 py-2.5 bg-gradient-to-r from-neon-blue to-deep-blue hover:brightness-110 text-black rounded-full text-sm font-black transition-all transform hover:scale-105 glow-cyan"
            >
              TESTE GRÁTIS
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-blue-500/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-blue-400 py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#teste"
                className="bg-blue-600 text-white text-center py-3 rounded-xl font-bold"
              >
                Solicitar Teste Grátis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
