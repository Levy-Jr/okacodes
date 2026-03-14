import Image from "next/image"
import CheckIcon from "@/public/okacodes/otimizando-suas-vendas.svg"
import Link from "next/link"
import AnimatedSection, { fadeUp, scaleUp } from "@/components/animated-section"
import ButtonWhatsapp from "@/public/okacodes/button-whatsapp.svg"
import { WhatsAppLink } from "@/components/whatsapp-link"
import ApprovedOrderComponent from "./approved-order-component"

const SellSection = () => {
  return (
    <section className="my-20 md:my-30 max-w-300 w-full mx-auto">
      <AnimatedSection variants={fadeUp} className="max-w-[30ch] sm:max-w-[64ch] mx-auto text-center">
        <p className="text-sm sm:text-base flex justify-center items-center gap-2.5 font-semibold text-[#00D02A]">
          <Image
            src={CheckIcon}
            alt="Ícone de verificado"
          />
          Otimizando suas vendas
        </p>
        <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold">Venda de segunda a segunda.</h2>
        <p className="text-xs sm:text-base mb-3.75">Com um site você poderá vender 24h por dia, conseguindo até mesmo fazer vendas enquanto dorme, tudo no piloto automático.</p>
        <div className="flex items-center justify-center gap-1 md:gap-4 text-xs sm:text-base">
          {/* Botão Primário: Foco total na conversão (WhatsApp) */}
          <WhatsAppLink
            phoneNumber="5592986001909"
            className="group relative inline-flex items-center justify-center gap-1 md:gap-2 overflow-hidden rounded-[.625rem] bg-linear-to-b from-[#FF8D2F] to-[#D55506] py-2.5 md:py-3 px-3.5 md:px-7 font-semibold text-white shadow-[0_4px_12px_rgba(255,141,47,0.4)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_20px_-4px_rgba(255,141,47,0.7)] active:translate-y-0 active:scale-95"
          >
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"></span>
            <Image
              className="w-5 h-5 md:w-6 md:h-6"
              src={ButtonWhatsapp}
              alt="Botão do WhatsApp"
            />
            <span className="z-10">Falar com especialistas</span>
          </WhatsAppLink>

          {/* Botão Secundário: Sem sombra estática, sem competir com o principal */}
          <Link
            className="inline-flex items-center justify-center rounded-[.625rem] bg-[#F9F9F9] py-2.5 md:py-3 px-5 md:px-7 font-medium text-black transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#EBEBEB] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] active:translate-y-0 active:scale-95"
            href="/projetos"
          >
            Ver projetos
          </Link>
        </div>
      </AnimatedSection>
      <AnimatedSection variants={scaleUp} duration={0.9} delay={0.15} className="text-white mt-12.5 h-110 md:max-h-110 overflow-hidden lg:rounded-[1.25rem] relative after:absolute after:inset-0 after:opacity-30 after:bg-linear-to-b after:from-black after:to-[#666]/0">
        <video className="w-full h-full object-cover object-top" poster="/okacodes/poster-sem-estresse.webp" preload="metadata" playsInline autoPlay muted loop>
          <source src="/okacodes/sem-estresse.webm" type="video/webm" />
        </video>

        {/* Instâncias com o prop 'index' para gerar o stagger effect */}
        <ApprovedOrderComponent index={0} className="text-[.625rem] md:text-sm lg:text-base top-[15%] md:top-[20%] left-[55%] sm:left-[70%] md:left-[15%] [&_img]:max-w-2.75 md:[&_img]:max-w-none" />

        <ApprovedOrderComponent index={1} className="text-[.5rem] md:text-sm lg:text-base [&_img]:max-w-2.75 md:[&_img]:max-w-none top-[25%] md:top-[40%] left-[1.5%] md:left-[2%]" />

        <ApprovedOrderComponent index={2} className="hidden md:flex bottom-[27%] left-[10%] text-xs [&_img]:max-w-4.5" />

        <h3 className="w-max text-shadow-lg absolute font-bold text-[2rem] md:text-[2.5rem] translate-y-1/2 bottom-1/2 translate-x-1/2 right-1/2 z-20">Sem estresse.</h3>

        <ApprovedOrderComponent index={3} className="hidden md:flex top-[30%] right-[15%] text-xs [&_img]:max-w-4.5" />

        <ApprovedOrderComponent index={4} className="text-[.625rem] bottom-[20%] md:bottom-[45%] right-[15%] md:right-[1%] [&_img]:max-w-3.75" />

        <ApprovedOrderComponent index={5} className="hidden md:flex text-sm lg:text-base bottom-[27%] right-[14.5%]" />
      </AnimatedSection>
    </section>
  )
}

export default SellSection