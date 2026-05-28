import SEO from '../components/SEO';
import InteractiveFAQ from '../components/InteractiveFAQ';

const faqs = [
  {
    question: "Como funciona o IPTV do LeandroTV+?",
    answer: "Nossa tecnologia transmite canais de TV, filmes e séries via internet. Você não precisa de antenas ou cabos físicos, apenas uma conexão estável e um dos nossos aplicativos recomendados instalados no seu dispositivo."
  },
  {
    question: "IPTV trava muito nos dias de jogos?",
    answer: "O maior diferencial do LeandroTV+ é a estabilidade. Utilizamos servidores de entrega de conteúdo (CDN) distribuídos, o que evita sobrecarga nos horários de pico. Se você tem pelo menos 30MB de internet estável, sua diversão está garantida sem travamentos."
  },
  {
    question: "Qual internet ideal para IPTV 4K?",
    answer: "Para canais em HD, 15MB são suficientes. Para conteúdos em Full HD e 4K, recomendamos conexões de 50MB a 100MB. O uso do cabo de rede azul (LAN) é extremamente recomendado para Smart TVs e TV Boxes."
  },
  {
    question: "Funciona em Smart TV Samsung e LG?",
    answer: "Sim! Somos compatíveis com quase todas as Smart TVs. Recomendamos apps como IPTV Smarters Pro, XCIPTV ou Smart STB para Samsung (Tizen) e LG (WebOS)."
  },
  {
    question: "IPTV funciona no Fire Stick da Amazon?",
    answer: "Com certeza. O Fire Stick é um dos melhores dispositivos para streaming. Basta instalar o aplicativo Downloader e seguir o tutorial rápido que enviamos via WhatsApp."
  },
  {
    question: "Como melhorar a qualidade do streaming?",
    answer: "Além do cabo de rede, você pode mudar o DNS do seu roteador para o do Google (8.8.8.8) e limpar o cache do aplicativo semanalmente para manter o sistema sempre rápido."
  },
  {
    question: "Posso testar antes de assinar?",
    answer: "Sim, oferecemos um teste grátis para que você comprove a qualidade de imagem e estabilidade do sinal. Peça seu teste agora clicando no botão do WhatsApp."
  }
];

export default function FAQPage() {
  return (
    <main className="bg-black pt-40 pb-32">
      <SEO 
        title="Dúvidas Frequentes (FAQ)"
        description="Encontre respostas para as principais dúvidas sobre o LeandroTV+. Configuração, pagamentos e suporte técnico."
      />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <h1 className="text-5xl md:text-8xl font-[900] text-white mb-8 tracking-tighter uppercase leading-[0.9]">
            BASE DE <span className="text-neon-blue italic">CONHECIMENTO</span>
          </h1>
          <p className="text-gray-500 text-xl font-light">
            Tudo o que você precisa saber para dominar o entretenimento digital elite.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <InteractiveFAQ items={faqs} />
          
          <div className="mt-24 p-12 md:p-16 rounded-[60px] bg-white/[0.02] border border-white/[0.05] text-center backdrop-blur-3xl">
             <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Ainda tem dúvidas?</h3>
             <p className="text-gray-500 text-lg font-light mb-10">Nosso time de suporte está online agora no WhatsApp para te ajudar!</p>
             <a 
              href="https://wa.me/5500000000000"
              className="inline-flex px-10 py-5 bg-neon-blue text-black rounded-2xl font-[900] text-sm uppercase tracking-[0.2em] hover:scale-105 transition-all"
             >
                Falar com Suporte VIP
             </a>
          </div>
        </div>
      </div>
    </main>
  );
}
