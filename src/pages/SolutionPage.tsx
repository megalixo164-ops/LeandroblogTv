import SEO from '../components/SEO';
import { motion } from 'motion/react';
import InteractiveFAQ from '../components/InteractiveFAQ';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface SolutionPageProps {
  keyword: string;
  title: string;
  description: string;
  content: string;
  faqs: { question: string; answer: string }[];
}

export default function SolutionPage({ keyword, title, description, content, faqs }: SolutionPageProps) {
  return (
    <main className="bg-black pt-40 pb-32">
      <SEO 
        title={title}
        description={description}
      />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            SOLUÇÃO ELITE: {keyword}
          </div>
          <h1 className="text-5xl md:text-8xl font-[900] text-white mb-8 tracking-tighter uppercase leading-[0.9]">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? 'text-neon-blue italic' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className="text-gray-500 text-xl font-light leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2">
            <div className="prose prose-invert prose-blue max-w-none prose-p:text-gray-400 prose-p:text-xl prose-p:font-light prose-p:leading-relaxed mb-20 text-content">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-black text-white mb-10 uppercase tracking-tighter">
                DÚVIDAS SOBRE <span className="text-neon-blue">{keyword}</span>
              </h2>
              <InteractiveFAQ items={faqs} />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div className="p-10 rounded-[40px] bg-gradient-to-br from-neon-blue to-deep-blue text-black">
                <Zap className="w-12 h-12 mb-6 fill-current" />
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 leading-tight">RESGATE SEU ACESSO PREMIUM</h3>
                <p className="font-bold text-black/70 mb-8">
                  Não perca mais tempo com sistemas lentos e travamentos constantes.
                </p>
                <Link 
                  to="/teste-gratis"
                  className="inline-flex w-full justify-center py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all"
                >
                  TESTE GRÁTIS AGORA
                </Link>
              </div>

              <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/[0.05] backdrop-blur-3xl">
                <h4 className="text-white font-[900] uppercase tracking-widest text-[10px] mb-8">POR QUE NÓS?</h4>
                <ul className="space-y-6">
                  {[
                    { icon: ShieldCheck, text: 'Privacidade Total' },
                    { icon: CheckCircle2, text: 'Suporte 24/7' },
                    { icon: ArrowRight, text: 'Sem Fidelidade' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 group">
                      <item.icon className="w-5 h-5 text-neon-blue group-hover:scale-110 transition-transform" />
                      <span className="text-gray-400 font-bold text-sm uppercase tracking-tight">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
