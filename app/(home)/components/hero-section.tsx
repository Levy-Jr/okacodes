import Image from "next/image"
import Link from "next/link"
import MainImage from "@/public/okacodes/main-image.webp"
import ButtonWhatsapp from "@/public/okacodes/button-whatsapp.svg"
import { WhatsAppLink } from "@/components/whatsapp-link"

const HeroSection = () => {
  return (
    <section className="mt-6.25 md:mt-12 max-w-200 w-[90%] mx-auto text-center">
      <h1
        className="hero-animate hero-animate-delay-1 leading-[1.1] text-2xl md:text-[2.5rem] font-bold"
      >
        Seu negócio cresceu. Está na hora do seu site parar de afastar clientes.
      </h1>
      <p
        className="hero-animate hero-animate-delay-2 my-4 text-xs md:text-base max-w-[61ch] mx-auto"
      >
        Somos um estúdio de desenvolvimento especializado em landing pages, e-commerces e sites institucionais. Cuidamos de toda a engenharia, infraestrutura e segurança. Sua única preocupação será atender os novos pedidos.
      </p>
      <div
        className="hero-animate hero-animate-delay-3 text-sm md:text-base flex justify-center items-center gap-1 md:gap-2.5"
      >
        <WhatsAppLink
          phoneNumber="5592986001909"
          className="group relative inline-flex items-center justify-center gap-1 md:gap-2 overflow-hidden rounded-full bg-linear-to-b from-[#FF8D2F] to-[#D55506] py-2.5 md:py-3 px-5 md:px-7 font-semibold text-white shadow-[0_4px_12px_rgba(255,141,47,0.4)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_20px_-4px_rgba(255,141,47,0.7)] active:translate-y-0 active:scale-95"
        >
          {/* Camada de brilho animado no hover */}
          <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"></span>

          {/* Ícone do WhatsApp */}
          <Image
            className="w-5 h-5 md:w-6 md:h-6"
            src={ButtonWhatsapp}
            alt="Botão do WhatsApp"
          />
          <span className="z-10">Fazer um orçamento</span>
        </WhatsAppLink>
        <Link
          className="inline-block rounded-full border border-[#FF8D2F] py-2.5 px-5 text-[#FF8D2F] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#FF8D2F]/10 hover:shadow-[0_8px_16px_-6px_rgba(255,141,47,0.4)] active:translate-y-0 active:scale-95"
          href="/projetos"
        >
          Ver projetos
        </Link>
      </div>
      <div className="hero-image-animate">
        <Image
          priority
          fetchPriority="high"
          className="mt-8.75 md:mt-20"
          src={MainImage}
          alt="Site de compra de bots no celular e loja virtual de softwares desenvolvido de pela Okacodes"
          sizes="(max-width: 48em) 90vw, 50rem"
        />
      </div>
    </section>
  )
}

export default HeroSection