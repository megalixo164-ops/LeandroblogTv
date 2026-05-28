import { Tv, Monitor, Laptop, Smartphone, Tablet, Apple } from 'lucide-react';
import { motion } from 'motion/react';

const devices = [
  { name: 'Smart TV', icon: Tv },
  { name: 'TV Box', icon: Monitor },
  { name: 'Computador', icon: Laptop },
  { name: 'Xiaomi / FireStick', icon: Apple }, // Representing stick devices
  { name: 'Android', icon: Smartphone },
  { name: 'iPhone / iPad', icon: Tablet },
];

export default function Devices() {
  return (
    <section id="dispositivos" className="py-32 bg-black border-y border-white/[0.03]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              DOMÍNIO <span className="text-neon-blue">MULTI-TELA</span>
            </h2>
            <p className="text-gray-500 text-xl mb-12 leading-relaxed font-light">
              Sem barreiras. Nossa tecnologia é compatível com absolutamente todos os sistemas modernos de entretenimento.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {devices.map((device, index) => (
                <motion.div 
                  key={device.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col items-center gap-4 p-8 rounded-[32px] bg-white/[0.02] border border-white/[0.05] hover:bg-neon-blue/5 hover:border-neon-blue/20 transition-all cursor-default"
                >
                  <device.icon className="w-10 h-10 text-neon-blue" />
                  <span className="text-white font-bold text-sm tracking-tight">{device.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-neon-blue/10 blur-[120px] rounded-full animate-pulse" />
            <div className="relative aspect-video rounded-[40px] bg-gradient-to-br from-white/5 to-transparent border border-white/[0.08] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden flex items-center justify-center group">
               {/* Futuristic UI Interface Simulation */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,217,255,0.1),transparent_70%)]" />
               <div className="relative z-10 w-full max-w-md px-10">
                 <motion.div
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="p-8 rounded-3xl bg-black/60 backdrop-blur-3xl border border-neon-blue/30 shadow-[0_0_50px_rgba(0,217,255,0.15)]"
                 >
                   <div className="flex items-center gap-4 mb-4">
                     <div className="w-12 h-12 rounded-2xl bg-neon-blue/10 flex items-center justify-center border border-neon-blue/20">
                       <Tv className="w-6 h-6 text-neon-blue" />
                     </div>
                     <div>
                       <div className="h-2 w-32 bg-neon-blue/20 rounded-full mb-2" />
                       <div className="h-2 w-20 bg-neon-blue/10 rounded-full" />
                     </div>
                   </div>
                   <div className="space-y-4">
                     <div className="h-24 w-full bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full border-4 border-neon-blue/20 border-t-neon-blue animate-spin" />
                     </div>
                     <div className="flex gap-2">
                       <div className="h-8 flex-1 bg-neon-blue text-black rounded-lg text-[8px] font-black flex items-center justify-center uppercase tracking-widest">Connected</div>
                       <div className="h-8 w-12 bg-white/5 rounded-lg" />
                     </div>
                   </div>
                 </motion.div>
               </div>
               
               <div className="absolute bottom-8 left-8 right-8 p-8 rounded-[32px] bg-black/40 backdrop-blur-xl border border-white/10">
                 <p className="text-neon-blue font-black text-xl mb-1 flex items-center gap-2 uppercase tracking-tighter">
                    <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse shadow-[0_0_10px_#00d9ff]" />
                    SISTEMA: LEANDRO TV OS
                 </p>
                 <p className="text-gray-300 text-lg font-light italic">Processamento de imagem 60FPS otimizado.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
