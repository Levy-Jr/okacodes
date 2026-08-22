import type { Metadata } from "next"
import dynamic from "next/dynamic"
import ProjectsGrid from "./components/projects-grid"

const ProjectsWrapper = dynamic(() => import("./components/projects-wrapper"))
import { PageTracker } from "@/lib/page-tracker"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Projetos",
  description: "Conheça os projetos desenvolvidos pela Okacodes. E-commerces, Landing Pages e Sites Institucionais de alta performance para empresas reais.",
  alternates: {
    canonical: "https://okacodes.com/projetos",
  },
}

const ProjetosPage = async ({ searchParams }: { searchParams: Promise<{ view?: string }> }) => {
  const params = await searchParams
  const showGrid = params.view === "all"

  return (
    <main className="max-w-300 w-[90%] mx-auto mt-10 mb-20 text-black">
      <h1 className="text-2xl md:text-5xl max-w-[25ch] mx-auto font-bold text-center mb-12.5">Histórias de sucesso que ajudamos a construir.</h1>
      <PageTracker eventName="ViewContent" contentName="Pagina_Projetos" />

      {!showGrid ? (
        <div>
          <ProjectsWrapper />
          <div className="grid place-content-center">
            <Link
              href="?view=all"
              className="group relative inline-flex items-center justify-center gap-1 md:gap-2 overflow-hidden rounded-[.625rem] bg-linear-to-b from-[#FF8D2F] to-[#D55506] py-2.5 px-5 font-semibold text-white shadow-[0_4px_12px_rgba(255,141,47,0.4)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_20px_-4px_rgba(255,141,47,0.7)] active:translate-y-0 active:scale-95"
            >
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"></span>
              <span className="z-10">Mostrar mais projetos</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <ProjectsGrid />
        </div>
      )}
    </main>
  )
}

export default ProjetosPage