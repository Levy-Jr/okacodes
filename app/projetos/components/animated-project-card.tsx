"use client"

import { useRef } from "react"
import { useScroll, useTransform, motion, MotionValue, useSpring } from "motion/react"
import Image, { StaticImageData } from "next/image"
import ProjectsArrow from "@/public/okacodes/seta-projetos.svg"

type ProjectCardProps = {
  project: {
    src: StaticImageData
    title: string
    desc: string
    href: string
  }
  i: number
  progress: MotionValue<number>
  range: number[]
  targetScale: number
}

export default function AnimatedProjectCard({ project, i, progress, range, targetScale }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Add spring physics to make the scroll animation buttery smooth
  const smoothProgress = useSpring(progress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Scale down the card behind as the user scrolls past it
  // First card scales down when moving away, others scale down to make room
  const scale = useTransform(smoothProgress, range, [1, targetScale])

  // Parallax effect for the image inside the card
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  })

  const smoothImageProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  const imageScale = useTransform(smoothImageProgress, [0, 1], [1.2, 1])

  return (
    <div
      ref={containerRef}
      className="w-full h-[55vh] md:h-screen flex items-center justify-center sticky top-[15vh] md:top-5"
    >
      <motion.div
        style={{ scale, top: i === 0 ? "0" : `calc(-2rem + ${i * 1.5}rem)` }}
        className="relative flex flex-col items-center w-full"
      >
        <article className="relative w-full aspect-1200/644 rounded-2xl md:rounded-4xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
            <Image
              fill
              src={project.src}
              alt={`Background da ${project.title}`}
              className="object-cover"
              sizes="(max-width: 48em) 90vw, 75rem"
            />
          </motion.div>
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-[6.5%] max-w-[85%] w-full right-1/2 translate-x-1/2 flex justify-between">
            <div className="max-w-[18.7ch] sm:max-w-[30ch] md:max-w-[40ch] lg:max-w-[68ch]">
              <h2 className="text-[.625rem] sm:text-xl md:text-2xl lg:text-[2rem] font-semibold text-white">{project.title}</h2>
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
      </motion.div>
    </div>
  )
}
