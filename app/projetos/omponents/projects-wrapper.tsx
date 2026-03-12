"use client"

import Image from "next/image"
import FXSoftwares from "@/public/okacodes/fx-softwares-projetos.webp"
import GoViral from "@/public/okacodes/go-viral-background.webp"
import ZapBarbearia from "@/public/okacodes/zap-barbearia.webp"
import ProjectsArrow from "@/public/okacodes/seta-projetos.svg"

const ProjectsWrapper = () => {
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
    <ul className="grid gap-1.5 sm:gap-2 md:gap-5.5">
      {projectsData.map((project, index) => (
        <li className="text-white " key={index}>
          <article className="relative aspect-1200/644">
            <Image
              fill
              src={project.src}
              alt={`Background da ${project.title}`}
            />
            <div className="absolute bottom-[6.5%] max-w-[85%] w-full right-1/2 translate-x-1/2 flex justify-between">
              <div className="max-w-[18.7ch] sm:max-w-[30ch] md:max-w-[40ch] lg:max-w-[68ch]">
                <h2 className="text-[.625rem] sm:text-xl md:text-2xl lg:text-[2rem] font-semibold">{project.title}</h2>
                <p className="text-white/75 text-[.4375rem] sm:text-xs md:text-base lg:text-2xl sm:mt-1.5">{project.desc}</p>
              </div>
              <a rel="noopener noreferrer" target="_blank" className="inline-block max-w-5 sm:max-w-10 md:max-w-14 lg:max-w-none self-end mb-4" aria-label="Ver projeto" href={project.href}>
                <Image
                  src={ProjectsArrow}
                  alt="Seta"
                />
              </a>
            </div>
          </article>
        </li>
      ))}
    </ul>
  )
}

export default ProjectsWrapper