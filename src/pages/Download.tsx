import React, { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import { Apple, Smartphone, Monitor, Laptop, Zap, Tv, Search, MessageSquare, ShieldCheck, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const categories = [
  { id: 'all', label: 'Todos', icon: Zap },
  { id: 'tv', label: 'Smart TV', icon: Tv },
  { id: 'box', label: 'TV Box / Stick', icon: Monitor },
  { id: 'mobile', label: 'Celular', icon: Smartphone },
  { id: 'pc', label: 'Computador', icon: Laptop },
];

const apps = [
  { 
    id: 1,
    name: 'XCIPTV Player', 
    category: 'box',
    device: 'Android TV / Fire Stick',
    stability: 'Elite',
    ease: 'Muito Alta',
    tags: ['Recomendado', 'Interface 4K'],
    icon: Monitor,
    recommendation: 'Ideal para quem busca uma interface idêntica aos grandes streamings.' 
  },
  { 
    id: 2,
    name: 'IPTV Smarters Pro', 
    category: 'tv',
    device: 'Samsung / LG / Android',
    stability: 'Máxima',
    ease: 'Alta',
    tags: ['Clássico', 'Ultra Leve'],
    icon: Tv,
    recommendation: 'O aplicativo mais compatível do mundo. Funciona em quase qualquer Smart TV.' 
  },
  { 
    id: 3,
    name: 'Tivimate Premium', 
    category: 'box',
    device: 'Nvidia Shield / Mi Box',
    stability: 'Profissional',
    ease: 'Média',
    tags: ['Avançado', 'Customizável'],
    icon: Monitor,
    recommendation: 'A experiência definitiva de TV a cabo premium para dispositivos Android potentes.' 
  },
  { 
    id: 4,
    name: 'Smart STB', 
    category: 'tv',
    device: 'Samsung Tizen / LG WebOS',
    stability: 'Alta',
    ease: 'Alta',
    tags: ['Nativo', 'Estável'],
    icon: Tv,
    recommendation: 'Transforma sua Smart TV em um receptor profissional sem precisar de fios.' 
  },
  { 
    id: 5,
    name: 'LeandroTV Mobile', 
    category: 'mobile',
    device: 'Android / iOS',
    stability: 'Otimizada',
    ease: 'Máxima',
    tags: ['Portátil', '4K Mobile'],
    icon: Smartphone,
    recommendation: 'Leve todo o seu entretenimento no bolso com carregamento ultra rápido.' 
  },
  { 
    id: 6,
    name: 'Web Player Elite', 
    category: 'pc',
    device: 'Windows / Mac / Linux',
    stability: 'Direta',
    ease: 'Instante',
    tags: ['Sem Instalação', 'Navegador'],
    icon: Laptop,
    recommendation: 'Assista diretamente pelo seu navegador favorito sem baixar nada.' 
  },
];

export default function Download() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      const matchesCategory = activeCategory === 'all' || app.category === activeCategory;
      const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           app.device.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleConsultancy = (appName?: string) => {
    const text = appName 
      ? `Olá! Quero saber qual o melhor aplicativo para meu dispositivo. Me interessei pelo ${appName}.`
      : "Olá! Quero saber qual o melhor aplicativo para meu dispositivo.";
    window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className="bg-black pt-40 pb-32 min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-deep-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <SEO 
        title="Central de Aplicativos Premium"
        description="Descubra o melhor aplicativo para sua Smart TV, TV Box ou Celular. Recomendação inteligente via WhatsApp com nossos especialistas."
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            RECOMENDAÇÃO INTELIGENTE
          </div>
          <h1 className="text-5xl md:text-8xl font-[900] text-white mb-8 tracking-tighter uppercase leading-[0.9]">
            CENTRAL DE <span className="text-neon-blue italic">APLICATIVOS</span>
          </h1>
          <p className="text-gray-500 text-xl font-light max-w-2xl leading-relaxed">
            Cada dispositivo exige uma configuração única. Nossos especialistas ajudam você a encontrar o player ideal para sua TV hoje.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="flex flex-wrap gap-2 lg:flex-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-3 ${
                  activeCategory === cat.id 
                    ? 'bg-neon-blue text-black shadow-[0_0_20px_rgba(0,217,255,0.3)]' 
                    : 'bg-white/5 text-gray-500 hover:text-white border border-white/5 hover:border-white/10'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
          
          <div className="relative lg:w-96">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Buscar dispositivo ou app..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-sm text-white focus:outline-none focus:border-neon-blue/50 transition-all"
            />
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredApps.map((app) => (
              <motion.div
                layout
                key={app.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="p-10 rounded-[40px] bg-white/[0.02] border border-white/[0.05] hover:border-neon-blue/20 transition-all group backdrop-blur-3xl flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    <app.icon className="w-8 h-8 text-neon-blue" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {app.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-[8px] font-black uppercase tracking-widest rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-3xl font-[900] text-white mb-2 uppercase tracking-tighter">{app.name}</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-[10px] font-black uppercase tracking-widest mb-6">
                    <ShieldCheck className="w-3 h-3 text-neon-blue" />
                    {app.device}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Estabilidade</div>
                      <div className="text-xs font-black text-white">{app.stability}</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Dificuldade</div>
                      <div className="text-xs font-black text-white">{app.ease}</div>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm font-light mb-10 leading-relaxed italic">
                    "{app.recommendation}"
                  </p>
                </div>
                
                <button 
                  onClick={() => handleConsultancy(app.name)}
                  className="w-full py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-neon-blue hover:text-black transition-all group/btn"
                >
                  <MessageSquare className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  Descobrir Melhor App
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 rounded-[60px] bg-gradient-to-br from-neon-blue/10 to-transparent border border-neon-blue/10 relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-[900] text-white uppercase tracking-tighter mb-8 max-w-4xl mx-auto leading-tight">
            NÃO ENCONTROU O SEU <span className="text-neon-blue italic">DISPOSITIVO?</span>
          </h2>
          <p className="text-gray-500 text-xl font-light mb-12 max-w-2xl mx-auto">
            Nosso suporte técnico possui soluções personalizadas para qualquer aparelho conectado à internet.
          </p>
          <button 
            onClick={() => handleConsultancy()}
            className="inline-flex items-center gap-4 px-12 py-6 bg-neon-blue text-black rounded-3xl font-black text-sm uppercase tracking-tight hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(0,217,255,0.2)]"
          >
            Falar com Especialista VIP
          </button>
        </motion.div>
      </div>
    </main>
  );
}
