"use client"

import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import GoViral from "@/public/okacodes/go-viral.svg"
import ActiveTrack from "@/public/okacodes/active-track.svg"
import Usystem from "@/public/okacodes/usystem.webp"
import AnimatedSection, { fadeUp } from "@/components/animated-section"

const TestimonialsSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ])

  const testimonialsData = [
    {
      logo: GoViral,
      brand: "Go-Viral",
      customer: "Pedro Henrique",
      desc: '"Antes eu tinha que ficar horas e horas no whatsapp para fechar novos pedidos, mas isso tudo mudou quando fiz meu sistema com a Okacodes."'
    },
    {
      logo: ActiveTrack,
      brand: "Active Track",
      customer: "Emmanuel Augusto",
      desc: '"Profissionais com excelente criatividade, não foi necessário ajustes na ideia inicial deles! Sempre muito eficaz e disposto a entender o projeto!"'
    },
    {
      logo: Usystem,
      brand: "Usystem",
      customer: "Raphael Martinez",
      desc: '"Excelentes profissionais, atenciosos, educados e muito bom desenvolvedor, estou extremamente satisfeito e impressionado com o resultado!"'
    },
  ]

  return (
    <AnimatedSection as="section" variants={fadeUp} duration={0.8} className="max-w-300 w-[90%] mx-auto mt-30">
      <h2 className="text-2xl leading-[1.2] md:text-[2.5rem] font-bold text-center">O que dizem sobre a Okacodes?</h2>
      <div className="mt-12.5 overflow-hidden" ref={emblaRef}>
        <ul className="flex">
          {testimonialsData.map((item, i) => (
            <li className="flex-[0_0_100%] flex flex-col md:flex-row-reverse md:justify-between items-center gap-6 px-4" key={i} >
              <div className="max-w-[45ch]">
                <h3 className="text-2xl md:text-[2.5rem] leading-[1.3] font-bold">{item.customer}</h3>
                <p className="mt-5 md:text-2xl">{item.desc}</p>
              </div>
              <Image src={item.logo} alt={item.brand} />
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  )
}

export default TestimonialsSection