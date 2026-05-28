import { Calendar, User, Clock, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { BlogPost } from '../types';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const readingTime = Math.ceil(post.content.split(' ').length / 200);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white/[0.02] border border-white/[0.05] rounded-[40px] overflow-hidden hover:border-white/10 transition-all backdrop-blur-sm"
    >
      <Link to={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden border-b border-white/[0.05]">
        <img 
          src={post.image} 
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out image-brand"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        <div className="absolute top-6 left-6">
          <span className="px-4 py-1.5 bg-neon-blue text-black rounded-full text-[9px] font-[900] uppercase tracking-widest shadow-xl">
            {post.category}
          </span>
        </div>

        <div className="absolute bottom-6 right-6 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
            <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>
      </Link>

      <div className="p-10">
        <div className="flex items-center gap-5 text-[10px] font-black uppercase tracking-widest text-gray-500 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-neon-blue" />
            {new Date(post.date).toLocaleDateString('pt-BR')}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-neon-blue" />
            {readingTime} MIN
          </div>
        </div>

        <h3 className="text-2xl font-[900] text-white mb-5 group-hover:text-neon-blue transition-colors leading-[1.2] tracking-tight uppercase">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        
        <p className="text-gray-500 text-sm mb-8 line-clamp-2 font-light leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
            <User className="w-4 h-4 text-neon-blue" />
          </div>
          <span className="text-white font-bold text-[11px] uppercase tracking-tight">{post.author}</span>
        </div>
      </div>
    </motion.article>
  );
}
