import { motion, useScroll, useSpring } from 'motion/react';
import { Home, Tv, Download, HelpCircle, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { icon: Home, label: 'Início', path: '/' },
  { icon: Tv, label: 'Portal', path: '/blog' },
  { icon: Download, label: 'Apps', path: '/downloads' },
  { icon: HelpCircle, label: 'FAQ', path: '/faq' },
  { icon: MessageCircle, label: 'Teste', path: '/teste-gratis', highlight: true },
];

export default function MobileNav() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-blue z-[101] origin-left"
        style={{ scaleX }}
      />

      {/* Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-2xl border-t border-white/[0.05] px-6 py-4 pb-8">
        <div className="flex items-center justify-between gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex flex-col items-center gap-1.5 transition-all ${
                  item.highlight 
                    ? 'bg-neon-blue text-black px-5 py-2 rounded-2xl scale-110 -translate-y-2' 
                    : isActive ? 'text-neon-blue' : 'text-gray-500'
                }`}
              >
                <item.icon className={item.highlight ? 'w-5 h-5' : 'w-5 h-5'} />
                {!item.highlight && (
                   <span className="text-[8px] font-black uppercase tracking-widest">{item.label}</span>
                )}
                {isActive && !item.highlight && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-1 w-1 h-1 bg-neon-blue rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
