import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  type?: 'website' | 'article';
  schema?: any;
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  ogImage = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800", 
  type = 'website',
  schema
}: SEOProps) {
  const fullTitle = `${title} | LeandroTV+ - IPTV Premium 2026 🚀`;
  const defaultDescription = "LeandroTV+ é a plataforma líder em IPTV e Streaming Premium no Brasil. Estabilidade 4K, suporte 24h e os melhores aplicativos para Smart TV, TV Box e Celular.";

  useEffect(() => {
    document.title = fullTitle;
    
    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || defaultDescription);

    // Open Graph
    const ogProperties = {
      'og:title': fullTitle,
      'og:description': description,
      'og:type': type,
      'og:image': ogImage,
      'og:url': window.location.href,
    };

    Object.entries(ogProperties).forEach(([prop, val]) => {
      let meta = document.querySelector(`meta[property="${prop}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', prop);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', val);
    });

    // Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical || window.location.href);

    // JSON-LD Schema
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) existingSchema.remove();

    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [fullTitle, description, canonical, ogImage, type, schema]);

  return null;
}
