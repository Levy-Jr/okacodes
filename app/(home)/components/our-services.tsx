"use client"

import Image from "next/image"
import ECommerce from "@/public/okacodes/e-commerce.svg"
import LandingPage from "@/public/okacodes/landing-page.svg"
import Institutional from "@/public/okacodes/sites-institucionais.svg"
import AnimatedSection, { fadeUp, staggerContainer, staggerItem } from "@/components/animated-section"
import { motion } from "motion/react"

const OurServices = () => {
  return (
    <section className="max-w-300 w-[90%] mx-auto">
      <AnimatedSection variants={fadeUp}>
        <h2 className="text-center text-2xl sm:text-[2.5rem] font-bold">Nossos serviços</h2>
      </AnimatedSection>
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 sm:mt-12.5 flex flex-col md:flex-row gap-4 *:p-5.5 sm:*:p-7.5 *:border *:border-black/10 *:rounded-[1.25rem] [&_h2]:my-1.75 sm:[&_h2]:my-2.5 [&_h2]:leading-none [&_h2]:text-sm sm:[&_h2]:text-xl [&_h2]:font-semibold [&_p]:text-xs sm:[&_p]:text-base [&_p]:max-w-[36ch] [&_p]:leading-[1.2] [&_p]:text-black/75"
      >
        <motion.li
          variants={staggerItem}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          <Image
            src={ECommerce}
            alt="Ícone de uma caixa"
          />
          <h2>E-commerces</h2>
          <p>Lojas virtuais rápidas, integradas com meios de pagamento (Mercado Pago, Stripe) e prontas para vender 24h.</p>
        </motion.li>
        <motion.li
          variants={staggerItem}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.25
          }}
        >
          <Image
            src={Institutional}
            alt="Ícone de prédios"
          />
          <h2>Sites Institucionais</h2>
          <p>A vitrine profissional da sua empresa na internet, passando credibilidade e autoridade.</p>
        </motion.li>
        <motion.li
          variants={staggerItem}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.5
          }}
        >
          <Image
            src={LandingPage}
            alt="Ícone de um monitor"
          />
          <h2>Landing Pages</h2>
          <p>Páginas de alta conversão para capturar leads e maximizar o retorno dos seus anúncios.</p>
        </motion.li>
      </motion.ul>
    </section>
  )
}

export default OurServices