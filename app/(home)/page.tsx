import type { Metadata } from "next"
import dynamic from "next/dynamic"
import HeroSection from "./components/hero-section";
import WhySection from "./components/why-section";
import SellSection from "./components/sell-section";

// Below-fold components: code-split to reduce initial JS bundle
const OurServices = dynamic(() => import("./components/our-services"))
const FeaturedProjects = dynamic(() => import("./components/featured-projects"))
const TableSection = dynamic(() => import("./components/table-section"))
const TestimonialsSection = dynamic(() => import("./components/testimonials-section"))
const AboutUsSection = dynamic(() => import("./components/about-us"))
const FaqSection = dynamic(() => import("./components/faq-section"))

export const metadata: Metadata = {
  title: "Sites Profissionais para Empresas — Feitos com Código Sob Medida",
  description: "Transforme seu negócio com um site profissional feito sob medida. Landing Pages, E-commerces e Sites Institucionais de alta performance que vendem 24h por dia. Fale com nossos especialistas.",
  alternates: {
    canonical: "https://okacodes.com",
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quanto tempo demora para o meu site ficar pronto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O prazo exato depende da complexidade do seu projeto. Uma Landing Page de alta conversão leva, em média, de 7 a 15 dias. Já um e-commerce completo ou site institucional robusto leva a partir de 20 dias.',
      },
    },
    {
      '@type': 'Question',
      name: 'Terei custos mensais depois que o site estiver no ar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Existem os custos de infraestrutura: o domínio e a hospedagem, que possuem taxas anuais ou mensais. A Okacodes oferece contratos opcionais de suporte e manutenção por uma mensalidade fixa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vocês dão suporte se der algum problema depois da entrega?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Com certeza. Todo projeto entregue pela Okacodes possui uma garantia técnica contra qualquer bug ou falha no código original.',
      },
    },
    {
      '@type': 'Question',
      name: 'Eu preciso fornecer os textos e as imagens do site?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Precisaremos que nos envie sua logomarca, fotos dos produtos/serviços e as informações básicas do negócio. Nossa equipe guiará você sobre exatamente qual material enviar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como funcionam as formas de pagamento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trabalhamos com 50% de sinal para iniciar o projeto e 50% na entrega do site pronto, testado e aprovado no ar.',
      },
    },
  ],
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhySection />
      <SellSection />
      <OurServices />
      <FeaturedProjects />
      <TableSection />
      <TestimonialsSection />
      <AboutUsSection />
      <FaqSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}

