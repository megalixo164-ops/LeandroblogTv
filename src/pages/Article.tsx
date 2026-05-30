import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blog';
import { ChevronLeft, Calendar, User, Clock, ArrowRight, Share2, MessageCircle, Star, Zap } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import InteractiveFAQ from '../components/InteractiveFAQ';
import BlogCard from '../components/BlogCard';

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-6">
        <h1 className="text-4xl font-black mb-8 tracking-tighter uppercase text-center">Artigo não encontrado</h1>
        <Link to="/blog" className="px-10 py-5 bg-neon-blue text-black rounded-2xl font-[900] uppercase tracking-widest hover:scale-105 transition-all">
          Voltar para o Portal
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const readingTime = Math.ceil(post.content.split(' ').length / 200);

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(post.title + " - Confira no portal LeandroTV+: " + window.location.href)}`, '_blank');
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [post.image],
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": "Streaming Specialist"
    },
    "description": post.excerpt,
    "publisher": {
      "@type": "Organization",
      "name": "LeandroTV+",
      "logo": {
        "@type": "ImageObject",
        "url": "https://leandrotv.plus/logo.png"
      }
    }
  };

  return (
    <article className="bg-[#050505] text-white pt-40 pb-32 relative overflow-hidden">
      {/* Barra de Progresso Superior */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-neon-blue z-[200] origin-left shadow-[0_0_20px_rgba(0,217,255,0.5)]"
        style={{ scaleX }}
      />
      
      <SEO 
        title={post.title}
        description={post.excerpt}
        ogImage={post.image}
        schema={schema}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[
            { label: 'Portal Tech', href: '/blog' },
            { label: post.category, href: `/blog?search=${post.category}` },
            { label: 'Artigo' }
          ]} />

          <div className="flex flex-col lg:flex-row gap-20 items-start mt-12">
            {/* Coluna Principal: Conteúdo */}
            <div className="lg:w-[65%]">
              <header className="mb-20">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap gap-6 items-center mb-10 text-[10px] font-black uppercase tracking-[0.25em]"
                >
                  <span className="px-6 py-2 bg-neon-blue text-black rounded-xl font-[900] shadow-[0_0_20px_rgba(0,217,255,0.3)]">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4 text-neon-blue/60" />
                    {new Date(post.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-4 h-4 text-neon-blue/60" />
                    {readingTime} MIN DE LEITURA
                  </div>
                  <div className="flex items-center gap-2 text-neon-blue font-black italic">
                    <Star className="w-3 h-3 fill-current" />
                    CONTEÚDO VERIFICADO
                  </div>
                </motion.div>
                
                <h1 className="text-5xl md:text-8xl font-[900] mb-12 leading-[1.05] tracking-tighter uppercase">
                  {post.title}
                </h1>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-10 border-y border-white/[0.05]">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-neon-blue/20 to-transparent flex items-center justify-center border border-white/10 group overflow-hidden relative">
                      <User className="text-neon-blue w-10 h-10 relative z-10" />
                      <div className="absolute inset-0 bg-neon-blue/5 blur-xl group-hover:bg-neon-blue/20 transition-colors" />
                    </div>
                    <div>
                      <p className="text-white font-[900] text-xl uppercase tracking-tighter mb-1">{post.author}</p>
                      <p className="text-neon-blue/70 text-[11px] font-black uppercase tracking-[0.2em]">Especialista LeandroTV+</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button onClick={shareOnWhatsApp} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-neon-blue hover:text-black hover:border-neon-blue transition-all group">
                      <MessageCircle className="w-5 h-5" />
                    </button>
                    <button className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </header>

              <div className="relative rounded-[40px] md:rounded-[80px] overflow-hidden mb-24 border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
              </div>

              {/* Renderização do Conteúdo com Estilo Premium */}
              <div className="prose prose-invert prose-2xl max-w-none 
                prose-headings:font-black prose-headings:uppercase prose-headings:tracking-widest prose-headings:text-white
                prose-p:text-gray-400 prose-p:font-light prose-p:leading-[1.8] prose-p:mb-12
                prose-strong:text-white prose-strong:font-black
                prose-ul:text-gray-400 prose-li:mb-4
                mb-32 post-content selection:bg-neon-blue selection:text-black">
                 <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {post.faq && post.faq.length > 0 && (
                <div className="mb-32">
                  <h2 className="text-4xl font-black text-white mb-12 uppercase tracking-tighter border-l-8 border-neon-blue pl-8 text-wrap">
                    DÚVIDAS <span className="text-neon-blue">SOBRE O TEMA</span>
                  </h2>
                  <InteractiveFAQ items={post.faq} />
                </div>
              )}

              {/* CTA Final de Conversão */}
              <div className="p-16 md:p-24 rounded-[60px] md:rounded-[100px] bg-gradient-to-br from-neon-blue/10 to-transparent border border-neon-blue/20 relative overflow-hidden text-center group mb-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/10 blur-[150px] pointer-events-none rounded-full" />
                <Star className="w-16 h-16 text-neon-blue mx-auto mb-10 opacity-50 group-hover:scale-125 transition-transform duration-700" />
                <h3 className="text-4xl md:text-7xl font-[900] text-white mb-8 uppercase tracking-tighter leading-tight italic text-wrap">
                  EXPERIÊNCIA <span className="text-neon-blue">LEANDROTV+</span>
                </h3>
                <p className="text-gray-400 text-2xl mb-16 max-w-3xl mx-auto font-light leading-relaxed">
                  Não perca mais tempo com listas amadoras. Nossos especialistas estão prontos para configurar o melhor do entretenimento no seu dispositivo agora mesmo.
                </p>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                  <button 
                    onClick={() => window.open(`https://wa.me/5500000000000?text=${encodeURIComponent("Olá! Acabei de ler o artigo '" + post.title + "' no Portal e gostaria de falar com um especialista sobre Vu Player Pro.")}`, '_blank')}
                    className="w-full md:w-auto px-16 py-8 bg-neon-blue text-black rounded-[40px] font-black text-2xl uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-4 group"
                  >
                    FALAR COM ESPECIALISTA
                    <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
                  </button>
                  <Link 
                    to="/teste-gratis"
                    className="w-full md:w-auto px-16 py-8 bg-white/5 border border-white/10 text-white rounded-[40px] font-black text-2xl uppercase tracking-tighter hover:bg-white/10 transition-all backdrop-blur-md"
                  >
                    TESTE GRÁTIS
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar Sticky em Desktop */}
            <aside className="lg:w-[30%] lg:sticky lg:top-40 space-y-24">
              <div>
                <h3 className="text-white font-[900] text-[10px] uppercase tracking-[0.4em] mb-12 flex items-center gap-4 border-b border-white/10 pb-6 text-wrap">
                  <Star className="w-4 h-4 text-neon-blue fill-current" />
                  CONTEÚDOS RELACIONADOS
                </h3>
                <div className="space-y-12">
                  {relatedPosts.map((rp) => (
                    <Link to={`/blog/${rp.slug}`} key={rp.id} className="block group">
                      <div className="aspect-[16/9] rounded-[32px] overflow-hidden mb-6 border border-white/5 group-hover:border-neon-blue/30 transition-colors">
                        <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <h4 className="text-gray-200 font-[900] uppercase tracking-tighter text-2xl group-hover:text-neon-blue transition-colors leading-[1.1]">
                        {rp.title}
                      </h4>
                    </Link>
                  ))}
                  {relatedPosts.length === 0 && (
                    <p className="text-gray-500 font-light italic text-sm">Explore mais dicas e tutoriais em nossa home.</p>
                  )}
                </div>
              </div>

              {/* Card de Consultoria no Sidebar */}
              <div className="p-12 rounded-[50px] bg-white/[0.02] border border-white/5 backdrop-blur-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                   <div className="w-16 h-16 rounded-3xl bg-neon-blue/10 flex items-center justify-center mb-8 border border-neon-blue/20">
                     <Zap className="text-neon-blue w-8 h-8 fill-current" />
                   </div>
                   <h4 className="text-white font-[900] text-3xl uppercase tracking-tighter mb-6 leading-none">SUPORTE<br/><span className="text-neon-blue italic">ELITE</span></h4>
                   <p className="text-gray-500 text-lg font-light mb-10 leading-relaxed">
                     Instalação passo a passo e suporte em tempo real para seu dispositivo.
                   </p>
                   <button 
                     onClick={() => window.open('https://wa.me/5500000000000', '_blank')}
                     className="w-full py-6 bg-white text-black rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-neon-blue transition-colors shadow-2xl"
                   >
                     ACESSAR AGORA
                   </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Decorative Lights */}
      <div className="fixed top-1/4 -right-1/4 w-[800px] h-[800px] bg-neon-blue/5 blur-[150px] rounded-full pointer-events-none opacity-50" />
      <div className="fixed -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none opacity-30" />
    </article>
  );
}
