import { Zap, Tv, ShieldCheck, RefreshCcw, Headphones, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    title: 'Sem Travamentos',
    description: 'Servidores de elite com balanceamento de carga para garantir fluidez total.',
    icon: Zap,
    color: 'text-yellow-400'
  },
  {
    title: 'Alta Qualidade',
    description: 'Conteúdo em SD, HD, FHD e 4K HDR para a melhor experiência visual.',
    icon: Tv,
    color: 'text-blue-400'
  },
  {
    title: 'Smart TV & Apps',
    description: 'Compatível com Samsung, LG, Android e as principais marcas do mercado.',
    icon: ShieldCheck,
    color: 'text-green-400'
  },
  {
    title: 'Atualizações',
    description: 'Novos títulos e melhorias de app adicionados semanalmente sem custo.',
    icon: RefreshCcw,
    color: 'text-purple-400'
  },
  {
    title: 'Suporte 24/7',
    description: 'Equipe técnica disponível para te ajudar em qualquer momento do dia.',
    icon: Headphones,
    color: 'text-pink-400'
  },
  {
    title: 'Multi-Telas',
    description: 'Assista no celular, tablet, computador ou na TV simultaneamente.',
    icon: Smartphone,
    color: 'text-orange-400'
  }
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-32 bg-black relative">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            TECNOLOGIA DE <span className="text-neon-blue">ELITE</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-xl font-light">
            Infraestrutura robusta projetada para entregar estabilidade máxima em qualquer dispositivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[40px] bg-white/[0.02] border border-white/[0.05] hover:border-neon-blue/30 transition-all group backdrop-blur-sm"
            >
              <div className={`w-16 h-16 rounded-[24px] bg-neon-blue/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-neon-blue/20`}>
                <benefit.icon className={`w-9 h-9 text-neon-blue glow-cyan`} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
