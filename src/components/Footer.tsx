import { Tv, Instagram, Twitter, Facebook, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Col */}
          <div className="space-y-8">
            <a href="/" className="flex items-center gap-1">
              <span className="text-2xl font-black tracking-tighter text-white">
                LEANDRO<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-deep-blue">TV+</span>
              </span>
            </a>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              Referência em tecnologia de streaming premium em 2026. Qualidade inquestionável, suporte humano e ativação elite.
            </p>
            <div className="flex gap-5">
               {[Instagram, Twitter, Facebook].map((Icon, i) => (
                 <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-gray-500 hover:bg-neon-blue hover:text-black transition-all glow-cyan-hover">
                   <Icon className="w-6 h-6" />
                 </a>
               ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-8">NAVEGAÇÃO</h4>
            <ul className="space-y-4">
              {[
                { name: 'Início', href: '/' },
                { name: 'Como Funciona', href: '/como-funciona' },
                { name: 'Teste Grátis', href: '/teste-gratis' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-500 hover:text-neon-blue transition-colors font-medium">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-8">SOLUÇÕES</h4>
            <ul className="space-y-4">
              {[
                { name: 'Melhor IPTV 2026', href: '/melhor-iptv' },
                { name: 'IPTV Smart TV', href: '/iptv-smart-tv' },
                { name: 'Samsung Tizen', href: '/iptv-samsung' },
                { name: 'Android TV', href: '/android-tv' },
                { name: 'TV Box / Fire Stick', href: '/iptv-tv-box' },
                { name: 'Futebol Online', href: '/futebol-online' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-500 hover:text-neon-blue transition-colors font-medium">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-8">SEGURANÇA</h4>
            <ul className="space-y-4">
              <li><a href="/privacidade" className="text-gray-500 hover:text-neon-blue transition-colors font-medium">Privacidade</a></li>
              <li><a href="/termos" className="text-gray-500 hover:text-neon-blue transition-colors font-medium">Termos de Uso</a></li>
              <li className="pt-6">
                <div className="p-6 rounded-[24px] bg-neon-blue/10 border border-neon-blue/20">
                  <p className="text-neon-blue text-[10px] font-black uppercase mb-3 tracking-widest text-glow">PLANOS EXCLUSIVOS</p>
                  <a href="#" className="flex items-center gap-2 text-white text-lg font-bold hover:underline">
                    Ver todos os pacotes <ExternalLink className="w-4 h-4 text-neon-blue" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-700 text-xs tracking-widest font-black uppercase">
            © {currentYear} LEANDRO TV+ . ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-2 text-[10px] text-gray-800 font-bold tracking-widest uppercase">
             <span>ENGINEERED FOR EXTREME SEO PERF ☄️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
