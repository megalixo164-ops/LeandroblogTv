import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import { blogPosts, categories } from '../data/blog';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Blog() {
  const [searchParams] = useSearchParams();
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

  const popularPosts = useMemo(() => blogPosts.slice(0, 4), []);

  return (
    <main className="bg-black pt-40 pb-32">
      <SEO 
        title={searchQuery ? `Busca: ${searchQuery}` : "Portal de Tecnologia & Streaming - LeandroTV+"}
        description="Explore o portal de conhecimento LeandroTV+. Tutoriais premium, análises de hardware e as melhores dicas para transformar seu entretenimento."
      />
      
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs items={[{ label: 'Portal' }]} />
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="mb-16">
              <h1 className="text-5xl md:text-8xl font-[900] text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                PORTAL<span className="text-neon-blue italic">TECH</span>
              </h1>
              
              {searchQuery && (
                <p className="text-gray-500 text-xl font-light mb-8">
                  Mostrando resultados para: <span className="text-neon-blue font-bold">"{searchQuery}"</span>
                </p>
              )}

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-12">
                {['Tudo', ...categories].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
                      activeCategory === cat 
                        ? 'bg-neon-blue text-black shadow-[0_0_20px_rgba(0,217,255,0.3)]' 
                        : 'bg-white/5 text-gray-500 hover:text-white border border-white/5 hover:border-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {filteredPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white/[0.02] rounded-[40px] border border-white/[0.05]">
                <p className="text-gray-500 text-xl font-light">Nenhum artigo encontrado para sua busca.</p>
                <button 
                  onClick={() => { setActiveCategory('Tudo'); }}
                  className="mt-6 text-neon-blue font-black uppercase tracking-widest text-xs hover:underline"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-16">
              {/* Popular Posts */}
              <div>
                <h3 className="text-white font-[900] text-xs uppercase tracking-[0.3em] mb-10 border-l-2 border-neon-blue pl-4">
                  MAIS LIDAS
                </h3>
                <div className="space-y-8">
                  {popularPosts.map((post, i) => (
                    <a href={`/blog/${post.slug}`} key={post.id} className="flex gap-5 group items-start">
                      <div className="text-2xl font-black text-white/10 group-hover:text-neon-blue transition-colors italic">0{i+1}</div>
                      <div>
                        <h4 className="text-gray-300 font-bold leading-tight group-hover:text-white transition-colors mb-2">
                          {post.title}
                        </h4>
                        <span className="text-[9px] font-black text-neon-blue/60 uppercase tracking-widest">
                          {post.category}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/[0.05] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/5 blur-3xl rounded-full" />
                <h3 className="text-white font-black text-xl uppercase tracking-tighter mb-4 relative z-10">NEWSLETTER</h3>
                <p className="text-gray-500 text-sm font-light mb-8 relative z-10 leading-relaxed">
                  Receba as novidades da LeandroTV+ direto no seu e-mail.
                </p>
                <div className="flex flex-col gap-3 relative z-10">
                  <input 
                    type="email" 
                    placeholder="Seu melhor e-mail" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-xs text-white focus:outline-none focus:border-neon-blue transition-all"
                  />
                  <button className="w-full py-4 bg-neon-blue text-black rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all">
                    INSCREVER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
