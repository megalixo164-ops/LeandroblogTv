export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
  tags?: string[];
  faq?: { question: string; answer: string }[];
  relatedSlugs?: string[];
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface Device {
  name: string;
  description: string;
  icon: string;
}
