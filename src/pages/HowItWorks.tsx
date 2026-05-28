import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { CheckCircle2, Tv, Smartphone, Zap } from 'lucide-react';

const steps = [
  {
    title: 'Escolha seu Plano',
    description: 'Selecione o pacote que melhor atende suas necessidades, desde telas únicas até planos familiares.',
    icon: CheckCircle2
  },
  {
    title: 'Solicite seu Teste',
    description: 'Chame nossa equipe no WhatsApp para receber seus dados de acesso imediatos para teste.',
    icon: Zap
  },
  {
    title: 'Instale o Aplicativo',
    description: 'Nossa equipe enviará o link ou o código do player ideal para o seu dispositivo.',
    icon: Smartphone
  },
  {
    title: 'Desfrute do Melhor',
    description: 'Faça o login e tenha acesso instantâneo a milhares de canais, filmes e séries em 4K.',
    icon: Tv
  }
];

export default function HowItWorks() {
  return (
    <main className="bg-black pt-40 pb-32">
      <SEO 
        title="Como Funciona?"
        description="Aprenda como é fácil ter o melhor sistema de streaming do Brasil. 4 passos simples para transformar sua TV."
      />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-8xl font-[900] text-white mb-8 tracking-tighter uppercase leading-[0.9]">
            COMO <span className="text-neon-blue italic">FUNCIONA?</span>
          </h1>
          <p className="text-gray-500 text-xl font-light">
            Transparência e simplicidade. Desenvolvemos um processo de ativação elite para você não perder nem um segundo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[40px] bg-white/[0.02] border border-white/[0.05] relative group"
            >
              <div className="absolute top-10 right-10 text-8xl font-black text-white/[0.02] select-none">
                0{index + 1}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-neon-blue/10 flex items-center justify-center mb-8 border border-neon-blue/20">
                <step.icon className="w-8 h-8 text-neon-blue" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{step.title}</h3>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
