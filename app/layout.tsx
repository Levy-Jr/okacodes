import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Okacodes | Estúdio de Desenvolvimento",
  description: "A Okacodes é um estúdio de desenvolvimento focado em Landing Pages, E-commerces, Sites Institucionais e Blogs. Não utilizamos templates prontos e genéricos, construímos o site usando código para maximizar a performance e o design.",
};

export const inter = Inter({
  subsets: ['latin'],
});

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
      </body>
    </html>
  );
}
