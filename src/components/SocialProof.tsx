import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    name: 'Carlos Eduardo',
    role: 'Usuário Smart TV',
    content: 'Depois de testar vários, o LeandroTV+ foi o único que realmente entregou 4K sem travar no meu Wi-Fi. Suporte nota 10!',
    rating: 5,
    avatar: 'CE'
  },
  {
    name: 'Mariana Santos',
    role: 'Assinante Premium',
    content: 'O aplicativo XCIPTV que eles recomendaram é sensacional. Parece o Netflix de tão organizado. Recomendo muito!',
    rating: 5,
    avatar: 'MS'
  },
  {
    name: 'João Pedro',
    role: 'Fã de Esportes',
    content: 'Assisto todos os jogos da Champions em 4K. Estabilidade monstra mesmo em dias de pico. O melhor do mercado.',
    rating: 5,
    avatar: 'JP'
  }
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            CONFIANÇA & AUTORIDADE
          </div>
          <h2 className="text-4xl md:text-6xl font-[900] text-white uppercase tracking-tighter mb-6">
            A ESCOLHA DE QUEM <span className="text-neon-blue italic">NÃO ACEITA MENOS</span>
          </h2>
          
          <div className="flex items-center justify-center gap-8 md:gap-16 mt-12">
            <div>
              <div className="text-3xl md:text-5xl font-black text-white mb-2">+15k</div>
              <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Usuários Ativos</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="text-3xl md:text-5xl font-black text-white mb-2">99.9%</div>
              <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Uptime Real</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="text-3xl md:text-5xl font-black text-white mb-2">4.9/5</div>
              <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Avaliação Média</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[40px] bg-white/[0.02] border border-white/[0.05] relative group hover:border-neon-blue/20 transition-all"
            >
              <Quote className="absolute top-10 right-10 w-12 h-12 text-white/[0.03] group-hover:text-neon-blue/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-neon-blue text-neon-blue" />
                ))}
              </div>

              <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 relative z-10 italic">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-neon-blue/10 flex items-center justify-center font-black text-neon-blue border border-neon-blue/20">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="text-white font-[900] text-sm uppercase tracking-tight flex items-center gap-2">
                    {review.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-neon-blue" />
                  </h4>
                  <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
