"use client"

import Link from "next/link"
import ProjectsWrapper from "./omponents/projects-wrapper"
import { useState } from "react"
import ProjectsGrid from "./omponents/projects-grid"

const ProjetosPage = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false)

  return (
    <main className="max-w-300 w-[90%] mx-auto mt-10">
      <h1 className="text-2xl md:text-5xl max-w-[25ch] mx-auto font-bold text-center mb-12.5">Histórias de sucesso que ajudamos a construir.</h1>
      {showMoreProjects ?
        <ProjectsGrid />
        :
        <>
          <ProjectsWrapper />
          <div className="grid place-content-center">
            <button onClick={() => setShowMoreProjects(!showMoreProjects)} className="cursor-pointer mt-15 text-sm bg-linear-to-b from-[#FF8D2F] to-[#D55506] text-white rounded-[.625rem] border border-[#FF8D2F] inline-block py-2.5 px-5" >Mostrar mais projetos</button>
          </div>
        </>
      }
    </main>
  )
}

export default ProjetosPage