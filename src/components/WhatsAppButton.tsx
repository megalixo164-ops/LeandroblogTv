import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/5500000000000?text=Olá! Gostaria de falar com um especialista para encontrar o melhor aplicativo para minha TV.";

  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', damping: 15, stiffness: 300, delay: 1 }}
      whileHover={{ scale: 1.1, translateY: -5 }}
      whileTap={{ scale: 0.9 }}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] w-20 h-20 bg-black/40 backdrop-blur-xl border border-neon-blue/40 text-neon-blue rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,217,255,0.3)] cursor-pointer group"
      aria-label="Fale com LeandroTV+"
    >
      <motion.div
        animate={{ 
          boxShadow: ["0 0 20px rgba(0,217,255,0.2)", "0 0 40px rgba(0,217,255,0.5)", "0 0 20px rgba(0,217,255,0.2)"] 
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full"
      />

      <MessageCircle className="w-10 h-10 relative z-10" />
      
      {/* Tooltip-like badge */}
      <div className="absolute right-full mr-6 bg-black/60 backdrop-blur-2xl border border-neon-blue/20 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none shadow-2xl">
        RECOMENDAÇÃO <span className="text-neon-blue">VIP</span> ⚡
      </div>
      
      {/* Redesigned Notification */}
      <span className="absolute -top-1 -right-1 flex h-6 w-6 relative z-20">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-40"></span>
        <span className="relative inline-flex rounded-full h-6 w-6 bg-neon-blue text-black border-2 border-black flex items-center justify-center text-[10px] font-black">
          1
        </span>
      </span>
    </motion.a>
  );
}
