"use client"

import Image from "next/image"
import FXSoftwares from "@/public/okacodes/fx-softwares-projetos.webp"
import GoViral from "@/public/okacodes/go-viral-background.webp"
import ZapBarbearia from "@/public/okacodes/zap-barbearia.webp"
import { cn } from "@/lib/utils"

const ProjectsGrid = () => {
  const projectsData = [
    {
      id: "1",
      src: FXSoftwares,
      title: "Fx Softwares",
      category: "E-commerce",
      desc: "Um e-commerce de alta performance desenvolvido com NextJS + WooCommerce como CMS headless, com foco em desempenho e conversão de vendas.",
      href: "https://fxsoftwares.com.br"
    },
    {
      id: "2",
      src: GoViral,
      title: "Go Viral",
      category: "E-commerce",
      desc: "Projeto desenvolvido com NextJS para ajudar seu vídeo a viralizar no Tiktok e Instagram. É um site de compra de visualizações.",
      href: "https://viralizaaigo.com"
    },
    {
      id: "3",
      src: ZapBarbearia,
      title: "Zap Barbearia",
      category: "Landing Page",
      desc: "Landing Page para um CRM com IA integrado com WhatsApp. Desenvolvido com NextJS + TailwindCSS",
      href: "https://zap-barbearia.vercel.app"
    },
  ]

  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-10.5 sm:gap-5.5">
      {projectsData.map((project, i) => (
        <li key={i}>
          <article className="h-full grid place-content-between">
            <Image
              src={project.src}
              alt={`Imagem do site ${project.title}`}
            />
            <p
              className={cn("mt-2 md:mt-2.5 w-fit py-1 px-4 md:py-1.25 md:px-5 font-semibold text-[.5rem] md:text-[.625rem] rounded-[100vmax]",
                project.category === "E-commerce" && "bg-[#FF8D2F]/10 text-[#FF8D2F]",
                project.category === "Landing Page" && "bg-[#E10303]/10 text-[#E10303]",
                project.category === "Site institucional" && "bg-[#4903E1]/10 text-[#4903E1]",
              )}
            >{project.category}</p>
            <h2 className="mt-3 md:mt-3.75 leading-none font-bold md:text-xl">{project.title}</h2>
            <p className="mt-2 md:mt-2.5 mb-4 sm:mb-2.5 md:mb-5 leading-[1.3] text-sm md:text-base">{project.desc}</p>
            <a className="py-2 md:py-2.5 rounded-[.625rem] inline-block w-full text-center text-sm md:text-base bg-linear-to-b from-[#FF8D2F] to-[#D55506] text-white" href={project.href}>Ver projeto</a>
          </article>
        </li>
      ))}
    </ul>
  )
}

export default ProjectsGrid