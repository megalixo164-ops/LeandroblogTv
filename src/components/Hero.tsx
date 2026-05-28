import { motion } from 'motion/react';
import { Play, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-neon-blue/10 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-deep-blue/10 blur-[150px] rounded-full" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
              </span>
              EXCLUSIVIDADE & PERFORMANCE
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[900] text-white leading-[0.9] mb-8 tracking-tighter">
              LEANDRO<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-deep-blue italic">TV+</span><br/>
              <span className="text-4xl md:text-6xl lg:text-7xl opacity-90">O Futuro do Seu Entretenimento</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-light">
              A maior e mais estável plataforma de streaming premium. 4K HDR nativo, sem travamentos e com ativação imediata.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/teste-gratis"
                className="flex items-center justify-center gap-4 px-12 py-6 bg-gradient-to-r from-neon-blue to-deep-blue text-black rounded-3xl font-[900] text-xl glow-cyan-strong transition-all uppercase tracking-tight"
              >
                <Play className="w-6 h-6 fill-current" />
                Começar Experiência Premium
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Image/Element */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 opacity-50 pointer-events-none"
      >
        <div className="relative aspect-square bg-gradient-to-br from-blue-500/20 to-transparent rounded-full border border-blue-500/20 animate-pulse" />
      </motion.div>
    </section>
  );
}
