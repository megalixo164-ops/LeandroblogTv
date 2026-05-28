import SEO from '../components/SEO';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <main className="bg-black pt-40 pb-32">
      <SEO 
        title="Contato & Suporte"
        description="Entre em contato com a equipe LeandroTV+. Suporte técnico, financeiro e parcerias."
      />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-8xl font-[900] text-white mb-8 tracking-tighter uppercase leading-[0.9]">
            FALE <span className="text-neon-blue italic">CONOSCO</span>
          </h1>
          <p className="text-gray-500 text-xl font-light">
            Estamos prontos para atender você com a velocidade que o seu entretenimento exige.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            {[
              { icon: MessageSquare, title: 'Atendimento Especializado', detail: 'Consulte o melhor player para sua Smart TV' },
              { icon: Mail, title: 'E-mail Corporativo', detail: 'contato@leandrotvplus.com' },
              { icon: ShieldCheck, title: 'Suporte Elite', detail: 'Disponibilidade 24h para assinantes premium' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-neon-blue/10 flex items-center justify-center border border-neon-blue/20 shrink-0">
                  <item.icon className="w-7 h-7 text-neon-blue" />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-xl font-light">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-10 md:p-12 rounded-[40px] bg-white/[0.02] border border-white/[0.05] backdrop-blur-3xl">
             <form className="space-y-6">
               <div className="space-y-2">
                 <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] ml-2">Nome Completo</label>
                 <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-blue transition-all" placeholder="Seu nome..." />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] ml-2">E-mail</label>
                 <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-blue transition-all" placeholder="email@exemplo.com" />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] ml-2">Mensagem</label>
                 <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-blue transition-all resize-none" placeholder="Como podemos ajudar?"></textarea>
               </div>
               <button className="w-full py-5 bg-neon-blue text-black rounded-2xl font-[900] uppercase tracking-widest text-sm hover:scale-105 transition-all flex items-center justify-center gap-3">
                 <Send className="w-4 h-4" />
                 Enviar Mensagem
               </button>
             </form>
          </div>
        </div>
      </div>
    </main>
  );
}
