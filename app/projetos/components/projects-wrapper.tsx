"use client"

import { useRef } from "react"
import { useScroll } from "motion/react"
import FXSoftwares from "@/public/okacodes/projetos/fx-softwares-projetos.webp"
import GoViral from "@/public/okacodes/projetos/go-viral-background.webp"
import ZapBarbearia from "@/public/okacodes/projetos/zap-barbearia.webp"
import AnimatedProjectCard from "./animated-project-card"

const ProjectsWrapper = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const projectsData = [
    {
      src: FXSoftwares,
      title: "Fx Softwares",
      desc: "Um e-commerce de alta performance desenvolvido com NextJS + WooCommerce como CMS headless, com foco em desempenho e conversão de vendas.",
      href: "https://fxsoftwares.com.br"
    },
    {
      src: GoViral,
      title: "Go Viral",
      desc: "Projeto desenvolvido com NextJS para ajudar seu vídeo a viralizar no Tiktok e Instagram. É um site de compra de visualizações.",
      href: "https://viralizaaigo.com"
    },
    {
      src: ZapBarbearia,
      title: "Zap Barbearia",
      desc: "Landing Page para um CRM com IA integrado com WhatsApp. Desenvolvido com NextJS + TailwindCSS",
      href: "https://zap-barbearia.vercel.app"
    },
  ]

  return (
    <div ref={containerRef} className="mt-5 flex flex-col w-full relative">
      {projectsData.map((project, i) => {
        // Use a slightly softer scale multiplier so the tight mobile cards don't shrink too fast
        const targetScale = 1 - ((projectsData.length - i) * 0.02)
        return (
          <AnimatedProjectCard
            key={i}
            i={i}
            project={project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        )
      })}
    </div>
  )
}

export default ProjectsWrapper