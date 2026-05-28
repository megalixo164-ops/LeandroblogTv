import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blog';
import { ChevronLeft, Calendar, User, Clock, ArrowRight } from 'lucide-react';
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
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
        <Link to="/blog" className="text-blue-500 hover:underline">Voltar para o Blog</Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const readingTime = Math.ceil(post.content.split(' ').length / 200);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [post.image],
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "description": post.excerpt,
    ...(post.faq && {
      "mainEntity": post.faq.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    })
  };

  return (
    <article className="bg-black text-white pt-40 pb-32 relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-neon-blue z-[101] origin-left"
        style={{ scaleX }}
      />
      
      <SEO 
        title={post.title}
        description={post.excerpt}
        ogImage={post.image}
        schema={schema}
      />
      
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs items={[
          { label: 'Portal', href: '/blog' },
          { label: post.category, href: `/blog?search=${post.category}` },
          { label: 'Artigo' }
        ]} />

        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-2/3">
            <header className="mb-20">
              <div className="flex flex-wrap gap-6 items-center mb-10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                <span className="px-4 py-1.5 bg-neon-blue text-black rounded-full font-[900]">
                  {post.category}
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-neon-blue" />
                  {new Date(post.date).toLocaleDateString('pt-BR')}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-neon-blue" />
                  {readingTime} MIN DE LEITURA
                </div>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-[900] mb-12 leading-[1.1] tracking-tighter uppercase max-w-4xl">
                {post.title}
              </h1>

              <div className="flex items-center gap-5 py-8 border-y border-white/[0.05]">
                <div className="w-14 h-14 rounded-2xl bg-neon-blue/10 flex items-center justify-center border border-neon-blue/20">
                  <User className="text-neon-blue w-7 h-7" />
                </div>
                <div>
                  <p className="text-white font-[900] text-lg uppercase tracking-tight">{post.author}</p>
                  <p className="text-neon-blue/60 text-[10px] font-black uppercase tracking-widest">LEANDRO TV+ SPECIALIST</p>
                </div>
              </div>
            </header>

            <div className="relative aspect-video rounded-[32px] md:rounded-[60px] overflow-hidden mb-20 border border-white/[0.08] glow-cyan">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover image-brand"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="prose prose-invert prose-blue max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-p:text-gray-400 prose-p:text-xl prose-p:font-light prose-p:leading-relaxed mb-32 post-content">
               <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {post.faq && post.faq.length > 0 && (
              <div className="mb-32">
                <h2 className="text-3xl font-black text-white mb-10 uppercase tracking-tighter">
                  DÚVIDAS SOBRE <span className="text-neon-blue">ESTE TEMA</span>
                </h2>
                <InteractiveFAQ items={post.faq} />
              </div>
            )}

            <div className="p-12 md:p-16 rounded-[40px] md:rounded-[60px] bg-white/[0.02] border border-white/[0.05] relative overflow-hidden text-center backdrop-blur-3xl group mb-20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-neon-blue/5 blur-[100px] pointer-events-none" />
              <h3 className="text-3xl md:text-5xl font-[900] text-white mb-6 uppercase tracking-tighter relative z-10 leading-tight">
                PRONTO PARA <span className="text-neon-blue italic">DOMINAR SUA SMART TV?</span>
              </h3>
              <p className="text-gray-500 text-xl mb-10 max-w-2xl mx-auto font-light relative z-10">
                Transforme seu entretenimento hoje com a tecnologia de elite da LeandroTV+.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
                <button 
                  onClick={() => window.open(`https://wa.me/5500000000000?text=${encodeURIComponent("Olá! Estou lendo o artigo sobre " + post.title + " e gostaria de tirar uma dúvida.")}`, '_blank')}
                  className="inline-flex px-12 py-6 bg-gradient-to-r from-neon-blue to-deep-blue text-black rounded-3xl font-[900] text-xl uppercase tracking-tight hover:scale-105 active:scale-95 transition-all shadow-2xl"
                >
                  CONSULTAR ESPECIALISTA
                </button>
                <Link 
                  to="/teste-gratis"
                  className="inline-flex px-12 py-6 bg-white/5 border border-white/10 text-white rounded-3xl font-[900] text-xl uppercase tracking-tight hover:bg-white/10 transition-all backdrop-blur-md text-center justify-center items-center"
                >
                  RESGATAR TESTE
                </Link>
              </div>
            </div>
          </div>

          {/* Article Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-16">
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="text-white font-[900] text-xs uppercase tracking-[0.3em] mb-10 border-l-2 border-neon-blue pl-4">
                    RELACIONADOS
                  </h3>
                  <div className="space-y-10">
                    {relatedPosts.map((rp) => (
                      <Link to={`/blog/${rp.slug}`} key={rp.id} className="block group">
                        <div className="aspect-video rounded-3xl overflow-hidden mb-5 border border-white/10">
                          <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h4 className="text-gray-200 font-black uppercase tracking-tight text-lg group-hover:text-neon-blue transition-colors leading-tight">
                          {rp.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-10 rounded-[40px] bg-gradient-to-br from-neon-blue/20 to-transparent border border-neon-blue/20">
                <ArrowRight className="text-neon-blue w-10 h-10 mb-6" />
                <h4 className="text-white font-[900] text-xl uppercase tracking-tighter mb-4">SUPORTE VIP 24H</h4>
                <p className="text-gray-500 text-sm font-light mb-8 leading-relaxed">
                  Problemas com sua lista? Nosso time de especialistas está disponível 24 horas por dia para garantir sua diversão.
                </p>
                <button 
                  onClick={() => window.open(`https://wa.me/5500000000000?text=${encodeURIComponent("Olá! Preciso de suporte técnico sobre minha assinatura.")}`, '_blank')}
                  className="inline-flex w-full justify-center py-4 bg-neon-blue text-black rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all"
                >
                  ACESSAR SUPORTE AGORA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
