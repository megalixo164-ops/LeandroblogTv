import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Devices from '../components/Devices';
import SocialProof from '../components/SocialProof';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blog';
import { motion } from 'motion/react';

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "StreamFlow Premium",
    "url": window.location.origin,
    "description": "Streaming premium para Smart TV, TV Box e Celular. Estabilidade e alta definição.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${window.location.origin}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <main className="bg-black">
      <SEO 
        title="Streaming Elite para Smart TV e TV Box"
        description="A melhor experiência LeandroTV+ em 2026. Streaming 4K, estabilidade garantida e suporte VIP. Solicite seu acesso premium via WhatsApp."
        schema={schema}
      />
      
      <Hero />
      <Benefits />
      <Devices />
      <SocialProof />

      {/* Blog Preview Section */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                LEANDRO<span className="text-neon-blue">INSIGHTS</span>
              </h2>
              <p className="text-gray-500 text-xl font-light">
                Tutoriais avançados, comparativos de hardware e as últimas tendências do entretenimento digital.
              </p>
            </div>
            <a 
              href="/blog" 
              className="px-8 py-4 rounded-[20px] bg-white/[0.03] border border-white/[0.05] text-white font-black tracking-widest text-[10px] uppercase hover:bg-neon-blue hover:text-black transition-all glow-cyan-hover"
            >
              ACESSAR TODOS OS ARTIGOS
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.slice(0, 3).map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="teste" className="py-32 bg-black relative border-t border-white/[0.03]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 rounded-[60px] bg-white/[0.02] border border-white/[0.05] backdrop-blur-3xl overflow-hidden relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-full bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none" />
            
            <h2 className="text-4xl md:text-7xl font-[900] text-white mb-8 tracking-tighter uppercase leading-[1.1]">
              Eleve sua Experiência <br/><span className="text-neon-blue italic">Para o Próximo Nível</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Junte-se à comunidade LeandroTV+ e descubra por que somos o serviço mais elogiado de 2026. Ativação em segundos.
            </p>
            <a 
              href="/teste-gratis"
              className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-neon-blue to-deep-blue text-black rounded-3xl font-[900] text-2xl shadow-[0_20px_40px_-10px_rgba(0,217,255,0.4)] hover:scale-105 active:scale-95 transition-all uppercase tracking-tight"
            >
              LIBERAR ACESSO AGORA
            </a>
            <p className="mt-8 text-neon-blue/60 text-xs font-black tracking-widest uppercase flex items-center justify-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
              SISTEMA OPERACIONAL 100% ONLINE
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
