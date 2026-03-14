import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";

const BASE_URL = 'https://okacodes.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Okacodes | Estúdio de Desenvolvimento Web para Empresas",
    template: "%s | Okacodes",
  },
  description: "A Okacodes é um estúdio de desenvolvimento especializado em Landing Pages, E-commerces e Sites Institucionais de alta performance. Sem templates — código sob medida para maximizar suas vendas.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    siteName: 'Okacodes',
    title: 'Okacodes | Estúdio de Desenvolvimento Web para Empresas',
    description: 'Sites profissionais feitos com código sob medida. Landing Pages, E-commerces e Sites Institucionais que vendem 24h por dia.',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Okacodes — Estúdio de Desenvolvimento Web' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Okacodes | Estúdio de Desenvolvimento Web para Empresas',
    description: 'Sites profissionais feitos com código sob medida. Landing Pages, E-commerces e Sites Institucionais que vendem 24h por dia.',
    images: ['/opengraph-image.png'],
  },
};

const inter = Inter({
  subsets: ['latin'], display: "swap",
});

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Okacodes',
  url: BASE_URL,
  logo: `${BASE_URL}/okacodes/logo-header.svg`,
  description: 'Estúdio de desenvolvimento web especializado em Landing Pages, E-commerces e Sites Institucionais de alta performance para empresas.',
  telephone: '+55-92-98600-1909',
  areaServed: 'BR',
  priceRange: '$$',
  sameAs: [
    'https://www.instagram.com/okacodesbrasil/',
    'https://x.com/Okacodesdev',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '3168930659954237');
              fbq('track', 'PageView');
            `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=3168930659954237&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
