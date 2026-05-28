import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function SmartSearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/blog?search=${encodeURIComponent(query)}`);
      setIsOpen(false);
      setQuery('');
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-neon-blue hover:bg-white/5 transition-all"
      >
        <Search className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-neon-blue hover:text-black transition-all"
            >
              <X />
            </button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full max-w-3xl"
            >
              <h2 className="text-neon-blue text-xs font-black tracking-[0.3em] uppercase mb-6 text-center">
                O QUE VOCÊ ESTÁ PROCURANDO?
              </h2>
              <form onSubmit={handleSearch} className="relative">
                <input
                  autoFocus
                  type="text"
                  placeholder="Ex: Melhor TV Box 2026..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-white/10 py-6 text-4xl md:text-6xl font-black text-white focus:outline-none focus:border-neon-blue placeholder:text-gray-800 transition-all uppercase tracking-tighter"
                />
                <button 
                  type="submit"
                  className="absolute right-0 bottom-6 text-neon-blue hover:scale-110 transition-transform"
                >
                  <Search className="w-10 h-10" />
                </button>
              </form>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                 <p className="text-gray-600 text-xs font-bold uppercase tracking-widest w-full text-center mb-2">Buscas Populares:</p>
                 {['Configurar Samsung', 'TV Box 2026', 'IPTV Fire Stick', 'Como funciona'].map(tag => (
                   <button 
                    key={tag}
                    onClick={() => { setQuery(tag); }}
                    className="px-6 py-2 rounded-full bg-white/5 border border-white/5 text-gray-400 text-[10px] font-black uppercase hover:border-neon-blue/30 hover:text-neon-blue transition-all"
                   >
                     {tag}
                   </button>
                 ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
