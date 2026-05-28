import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

interface InteractiveFAQProps {
  items: FAQItem[];
}

export default function InteractiveFAQ({ items }: InteractiveFAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="rounded-[24px] bg-white/[0.02] border border-white/[0.05] overflow-hidden transition-all hover:border-neon-blue/20"
        >
          <button
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
          >
            <span className="text-lg md:text-xl font-bold text-white group-hover:text-neon-blue transition-colors">
              {item.question}
            </span>
            <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all ${activeIndex === index ? 'bg-neon-blue text-black' : 'text-neon-blue'}`}>
              {activeIndex === index ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </div>
          </button>
          
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 md:px-8 pb-8 text-gray-500 leading-relaxed text-lg border-t border-white/[0.03] pt-6">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
