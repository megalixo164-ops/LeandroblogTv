import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Rocket, ShieldCheck, Zap, MessageCircle } from 'lucide-react';

export default function TesteGratis() {
  return (
    <main className="bg-black pt-40 pb-32">
      <SEO 
        title="Resgatar Teste Grátis"
        description="Experimente o melhor sistema de streaming premium do Brasil por 2 horas totalmente grátis. Sem compromisso."
      />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            DISPONIBILIDADE IMEDIATA
          </div>
          <h1 className="text-5xl md:text-8xl font-[900] text-white mb-8 tracking-tighter uppercase leading-[0.9]">
            RESGATE SEU <span className="text-neon-blue italic">TESTE GRÁTIS</span>
          </h1>
          <p className="text-gray-500 text-xl font-light">
            Sinta o poder da estabilidade e qualidade 4K antes de decidir. Transforme sua maneira de assistir TV agora.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Zap, title: 'Ativação Instantânea', desc: 'Dados enviados na hora' },
            { icon: Rocket, title: 'Catálogo Completo', desc: 'Acesso total liberado' },
            { icon: ShieldCheck, title: 'Sem Cartão', desc: 'Não pede dados bancários' },
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-[32px] bg-white/[0.02] border border-white/[0.05] text-center">
              <div className="w-12 h-12 rounded-2xl bg-neon-blue/10 flex items-center justify-center border border-neon-blue/20 mx-auto mb-6">
                <item.icon className="w-6 h-6 text-neon-blue" />
              </div>
              <h4 className="text-white font-[900] uppercase tracking-tight text-lg mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-12 md:p-16 rounded-[60px] bg-gradient-to-br from-neon-blue to-deep-blue text-center shadow-[0_40px_80px_-20px_rgba(0,217,255,0.4)]"
          >
             <h2 className="text-3xl md:text-5xl font-black text-black mb-6 uppercase tracking-tighter">
               VAMOS COMEÇAR?
             </h2>
             <p className="text-black/70 text-lg mb-10 font-bold">
               Nossa ativação é feita de forma personalizada por um especialista para garantir que você tenha a melhor configuração.
             </p>
             <button 
              onClick={() => window.open(`https://wa.me/5500000000000?text=${encodeURIComponent("Olá! Gostaria de resgatar meu teste grátis de 2 horas.")}`, '_blank')}
              className="inline-flex items-center gap-4 px-12 py-6 bg-black text-white rounded-3xl font-[900] text-xl uppercase tracking-widest hover:scale-105 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
             >
                <Zap className="w-6 h-6 text-neon-blue" />
                ATIVAR MEU ACESSO
             </button>
             <p className="mt-8 text-black/40 text-[10px] font-black uppercase tracking-widest">
                * Sujeito à disponibilidade técnica conforme demanda.
             </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
