"use client"

import Image from "next/image"
import Link from "next/link"
import MainImage from "@/public/okacodes/main-image.webp"
import { motion, type Variants } from "motion/react"
import ButtonWhatsapp from "@/public/okacodes/button-whatsapp.svg"
import { WhatsAppLink } from "@/components/whatsapp-link"

const heroVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const HeroSection = () => {
  return (
    <motion.section
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="mt-6.25 md:mt-12 max-w-200 w-[90%] mx-auto text-center"
    >
      <motion.h1
        variants={itemVariants}
        className="leading-[1.1] text-2xl md:text-[2.5rem] font-bold"
      >
        Seu negócio cresceu. Está na hora do seu site parar de afastar clientes.
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="my-4 text-xs md:text-base max-w-[61ch] mx-auto"
      >
        Somos um estúdio de desenvolvimento especializado em landing pages, e-commerces e sites institucionais. Cuidamos de toda a engenharia, infraestrutura e segurança. Sua única preocupação será atender os novos pedidos.
      </motion.p>
      <motion.div
        variants={itemVariants}
        className="text-sm md:text-base flex justify-center items-center gap-1 md:gap-2.5"
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
      </motion.div>
      <motion.div variants={imageVariants}>
        <Image
          priority
          fetchPriority="high"
          className="mt-8.75 md:mt-20"
          src={MainImage}
          alt="Site de compra de bots no celular e loja virtual de softwares desenvolvido de pela Okacodes"
          sizes="(max-width: 48em) 90vw, 50rem"
        />
      </motion.div>
    </motion.section>
  )
}

export default HeroSection