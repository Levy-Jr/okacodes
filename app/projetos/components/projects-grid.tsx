import Image from "next/image"
import { PROJECTS } from "../data"
import { cn } from "@/lib/utils"

const ProjectsGrid = () => {


  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-10.5 sm:gap-5.5">
      {PROJECTS.map((project, i) => (
        <li key={i}>
          <article className="h-full grid place-content-between">
            <Image
              src={project.src}
              alt={`Imagem do site ${project.title}`}
              sizes="(max-width: 40em) 90vw, (max-width: 64em) 45vw, 30vw"
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
            <a 
              className="group relative overflow-hidden rounded-[.625rem] inline-block w-full text-center py-2 md:py-2.5 text-sm md:text-base font-semibold bg-linear-to-b from-[#FF8D2F] to-[#D55506] text-white shadow-[0_4px_12px_rgba(255,141,47,0.4)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_20px_-4px_rgba(255,141,47,0.7)] active:translate-y-0 active:scale-95" 
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver projeto ${project.title}`}
            >
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"></span>
              <span className="relative z-10">Ver projeto</span>
            </a>
          </article>
        </li>
      ))}
    </ul>
  )
}

export default ProjectsGrid