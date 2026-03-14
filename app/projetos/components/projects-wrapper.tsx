"use client"

import { useRef } from "react"
import { useScroll } from "motion/react"
import AnimatedProjectCard from "./animated-project-card"
import { PROJECTS } from "../data"

const ProjectsWrapper = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const featuredProjects = PROJECTS.slice(0, 3)

  return (
    <div ref={containerRef} className="mt-5 flex flex-col w-full relative">
      {featuredProjects.map((project, i) => {
        // Use a slightly softer scale multiplier so the tight mobile cards don't shrink too fast
        const targetScale = 1 - ((featuredProjects.length - i) * 0.02)
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