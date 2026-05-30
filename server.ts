import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Technical SEO: robots.txt
  app.get("/robots.txt", (req, res) => {
    res.type("text/plain");
    res.send(`User-agent: *
Allow: /
Sitemap: ${process.env.APP_URL || "http://localhost:3000"}/sitemap.xml`);
  });

  // Technical SEO: sitemap.xml
  app.get("/sitemap.xml", (req, res) => {
    res.type("application/xml");
    const baseUrl = process.env.APP_URL || "http://localhost:3000";
    const pages = [
      "", "/blog", "/como-funciona", "/faq", "/contato", "/teste-gratis",
      "/melhor-iptv", "/iptv-smart-tv", "/futebol-online", "/iptv-samsung", "/android-tv", "/iptv-tv-box", "/aplicativo-iptv",
      "/blog/melhor-aplicativo-iptv-smart-tv-2026",
      "/blog/configurar-iptv-smart-tv-samsung-passo-a-passo",
      "/blog/iptv-travando-10-maneiras-de-resolver",
      "/blog/melhor-tv-box-iptv-streaming-2026",
      "/blog/xciptv-vs-iptv-smarters-qual-e-melhor",
      "/blog/como-assistir-futebol-smart-tv-sem-travar",
      "/blog/melhorar-qualidade-iptv-no-wi-fi",
      "/blog/melhores-aplicativos-para-tv-box-2026",
      "/blog/fire-stick-vale-a-pena-para-iptv",
      "/blog/guia-completo-deixar-iptv-mais-rapido"
    ];
    
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(p => `<url><loc>${baseUrl}${p}</loc><priority>${p === '' ? '1.0' : '0.8'}</priority></url>`).join('')}
</urlset>`);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
