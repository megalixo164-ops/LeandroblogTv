import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
      <Link to="/" className="flex items-center gap-1 hover:text-neon-blue transition-colors">
        <Home className="w-3 h-3" />
        HOME
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-3 h-3 opacity-30" />
          {item.href ? (
            <Link to={item.href} className="hover:text-neon-blue transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-neon-blue/60">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
