import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import { blogPosts, categories } from '../data/blog';
import Breadcrumbs from '../components/Breadcrumbs';
import { Search, TrendingUp, Zap, Star, LayoutGrid, Clock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>('Tudo');
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = activeCategory === 'Tudo' || post.category === activeCategory;
      const matchesSearch = !searchQuery || 
        post.title.toLowerCase().includes(searchQuery) || 
        post.excerpt.toLowerCase().includes(searchQuery) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchQuery));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredPost = useMemo(() => blogPosts[0], []);
  const popularPosts = useMemo(() => blogPosts.slice(1, 5), []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <main className="bg-black pt-40 pb-32 min-h-screen">
      <SEO 
        title={searchQuery ? `Busca: ${searchQuery}` : "Portal de Tecnologia & Streaming - LeandroTV+"}
        description="Explore o portal de conhecimento LeandroTV+. Tutoriais premium, análises de hardware e as melhores dicas para transformar seu entretenimento."
      />
      
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs items={[{ label: 'Portal Tech' }]} />
        
        {/* Portal Header */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-neon-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4"
              >
                <Zap className="w-4 h-4 fill-current" />
                Knowledge Base 2026
              </motion.div>
              <h1 className="text-6xl md:text-9xl font-[900] text-white tracking-tighter uppercase leading-[0.85]">
                TECH<span className="text-neon-blue italic">PORTAL</span>
              </h1>
            </div>
            
            <div className="relative w-full max-w-md group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-neon-blue transition-colors" />
              <input 
                type="text"
                placeholder="Pesquisar por IPTV, Apps ou Hardware..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 pl-16 pr-8 text-white focus:outline-none focus:border-neon-blue/50 focus:bg-white/[0.08] transition-all placeholder:text-gray-600 font-light"
              />
            </div>
          </div>

          {/* Categories Grid/Scroll */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {['Tudo', ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all border whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-neon-blue text-black border-neon-blue shadow-[0_0_30px_rgba(0,217,255,0.2)]' 
                    : 'bg-white/5 text-gray-500 hover:text-white border-white/5 hover:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {!searchQuery && activeCategory === 'Tudo' && (
          <div className="mb-24">
            <h2 className="text-white font-[900] text-xs uppercase tracking-[0.3em] mb-10 flex items-center gap-4">
              <Star className="w-4 h-4 text-neon-blue" />
              EM DESTAQUE
            </h2>
            <Link to={`/blog/${featuredPost.slug}`} className="group block">
              <div className="relative aspect-[21/9] rounded-[40px] md:rounded-[60px] overflow-hidden border border-white/10 glow-cyan">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-5 py-2 bg-neon-blue text-black rounded-xl font-black text-[9px] uppercase tracking-widest">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-2 text-white/60 text-[9px] font-black uppercase tracking-widest">
                      <Clock className="w-4 h-4" />
                      5 MIN LEITURA
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-7xl font-[900] text-white leading-[1.1] tracking-tighter uppercase mb-6 max-w-4xl group-hover:text-neon-blue transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-400 text-xl md:text-2xl font-light max-w-2xl line-clamp-2">
                    {featuredPost.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Main Feed */}
          <div className="lg:w-2/3">
            <h2 className="text-white font-[900] text-xs uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
              <LayoutGrid className="w-4 h-4 text-neon-blue" />
              {activeCategory === 'Tudo' ? 'ÚLTIMAS ATUALIZAÇÕES' : activeCategory.toUpperCase()}
            </h2>

            <AnimatePresence mode="popLayout">
              {filteredPosts.length > 0 ? (
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                  {filteredPosts.map((post, index) => (
                    <BlogCard key={post.id} post={post} index={index} />
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-32 bg-white/[0.02] rounded-[40px] border border-dashed border-white/10"
                >
                  <p className="text-gray-500 text-2xl font-light mb-8 italic">Putz, não encontramos nada aqui...</p>
                  <button 
                    onClick={() => { setActiveCategory('Tudo'); setSearchParams({}); }}
                    className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all"
                  >
                    Resetar Filtros
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar Portal */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-20">
              {/* Popular Sections */}
              <div>
                <h3 className="text-white font-[900] text-xs uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
                  <TrendingUp className="w-4 h-4 text-neon-blue" />
                  MAIS ACESSADOS
                </h3>
                <div className="space-y-10">
                  {popularPosts.map((post, i) => (
                    <Link to={`/blog/${post.slug}`} key={post.id} className="group flex gap-6 items-start">
                      <span className="text-4xl font-black text-white/10 group-hover:text-neon-blue transition-colors leading-none italic">
                        0{i+1}
                      </span>
                      <div>
                        <div className="text-[10px] font-black text-neon-blue uppercase tracking-widest mb-2 opacity-60">
                          {post.category}
                        </div>
                        <h4 className="text-white text-xl font-bold leading-tight group-hover:text-neon-blue transition-colors">
                          {post.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Vu Player Pro Hub CTA */}
              <div className="relative p-10 rounded-[40px] bg-gradient-to-br from-neon-blue/20 via-black to-black border border-neon-blue/30 overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <Zap className="w-10 h-10 text-neon-blue mb-6" />
                <h4 className="text-white font-[900] text-2xl tracking-tighter uppercase mb-4">
                  VU PLAYER <span className="text-neon-blue italic">PRO HUB</span>
                </h4>
                <p className="text-gray-500 text-sm font-light mb-8 leading-relaxed">
                  Tudo o que você precisa saber sobre o aplicativo n°1 de 2026. Tutoriais, dicas e performance.
                </p>
                <button 
                  onClick={() => setActiveCategory('Vu Player Pro')}
                  className="w-full py-5 bg-neon-blue text-black rounded-2xl font-[900] text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] transition-all"
                >
                  VER CONTEÚDO EXCLUSIVO
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Specialist CTA */}
              <div className="p-10 rounded-[40px] bg-white/[0.03] border border-white/10 backdrop-blur-3xl">
                <h4 className="text-white font-black text-xl mb-4 uppercase tracking-tighter">CONSULTORIA VIP</h4>
                <p className="text-gray-500 text-sm font-light mb-8">
                  Dúvida sobre qual configuração usar? Nosso especialista técnico está online.
                </p>
                <button 
                   onClick={() => window.open('https://wa.me/5500000000000', '_blank')}
                   className="w-full py-4 border border-white/10 hover:bg-white text-white hover:text-black rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all"
                >
                  FALAR AGORA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
