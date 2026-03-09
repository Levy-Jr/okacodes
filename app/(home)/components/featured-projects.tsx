import Image from "next/image"
import Link from "next/link"
import Fxsoftwares from "@/public/okacodes/fxsoftware-laptop-mockup.webp"
import GoViral from "@/public/okacodes/goviral-cell-phone-mockup.webp"

const FeaturedProjects = () => {

  // QUANDO O VISITANTE CLICAR EM "VER PROJETO", ABRIR UM MODAL COM O IFRAME DA PÁGINA PARA ELE VER O PROJETO SEM PRECISAR SER REDIRECIONADO.

  return (
    <section className="max-w-300 w-[90%] mx-auto mt-20 md:mt-30">
      <h2 className="mb-10 sm:mb-12.5 text-2xl sm:text-[2.5rem] font-bold">Projetos de Destaque</h2>
      <ul className="text-white flex flex-col md:flex-row items-center md:items-stretch gap-5 *:rounded-2xl md:*:rounded-[1.875rem] *:overflow-hidden *:max-w-100 *:md:max-w-none md:*:w-1/2">
        <li>
          <article className="grid grid-rows-2 relative bg-linear-to-b from-[#151929] to-[#162C75]">
            <div
              className="absolute inset-0 bg-[#1A56EB] z-0"
              style={{ clipPath: 'polygon(88% 0, 100% 0%, 100% 100%, 10% 100%)' }}
            />
            <figure className="relative flex flex-col items-center justify-center translate-y-4.5 md:translate-y-6.5">
              <Image
                className="max-w-50 sm:max-w-55 lg:max-w-none"
                src={Fxsoftwares}
                alt="Mockup de um notebook com o site da FxSoftwares"
              />
            </figure>
            <div className="flex flex-col items-center justify-center relative bg-black/50 backdrop-blur-lg">
              <div className="px-7.5 md:px-2 py-4 sm:py-2 lg:py-0 max-w-[50ch] mx-auto">
                <h3 className="text-sm sm:text-xl lg:text-2xl font-semibold">Fx Softwares</h3>
                <p className="mt-1.25 mb-3.5 md:my-2.5 text-white/75 text-[.625rem] sm:text-sm md:text-lg leading-[1.3]">Um e-commerce de alta performance desenvolvido com NextJS + WooCommerce como CMS headless, com foco em desempenho e conversão de vendas.</p>
                <a className="text-[.5rem] sm:text-base font-semibold inline-block rounded-[100vmax] py-2.5 text-center w-full bg-[#0057CF]" href={""}>Ver projeto</a>
              </div>
            </div>
          </article>
        </li>
        <li>
          <article className="grid grid-rows-2 relative bg-black h-full">
            <figure className="relative w-full h-full z-20 pointer-events-none">
              <Image
                className="max-w-50 sm:max-w-55 lg:max-w-none absolute right-1/2 translate-x-1/2"
                src={GoViral}
                alt="Mockup de um celular no site da GoViral"
              />
            </figure>
            <div className="z-20 flex flex-col items-center justify-center relative bg-black/50 backdrop-blur-lg">
              <div className="px-7.5 md:px-2 py-4 sm:py-2 lg:py-0 max-w-[50ch] mx-auto">
                <h3 className="text-sm sm:text-xl lg:text-2xl font-semibold">Go Viral</h3>
                <p className="mt-1.25 mb-3.5 md:my-2.5 text-white/75 text-[.625rem] sm:text-sm md:text-lg leading-[1.3]">Projeto desenvolvido com NextJS para ajudar seu vídeo a viralizar no Tiktok e Instagram. É um site de compra de visualizações.</p>
                <a className="text-[.5rem] sm:text-base font-semibold inline-block rounded-[100vmax] py-2.5 text-center w-full bg-[#F54D4D]" href={""}>Ver projeto</a>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </section>
  )
}

export default FeaturedProjects