import Image from "next/image"
import Link from "next/link"
import MainImage from "@/public/okacodes/main-image.webp"

const HeroSection = () => {
  return (
    <section className="mt-6.25 md:mt-12 max-w-200 w-[90%] mx-auto text-center">
      <h1 className="leading-[1.1] text-2xl md:text-[2.5rem] font-bold">Seu negócio cresceu. Está na hora do seu site parar de afastar clientes.</h1>
      <p className="my-4 text-xs md:text-base max-w-[61ch] mx-auto">Somos um estúdio de desenvolvimento especializado em landing pages, e-commerces e sites institucionais. Cuidamos de toda a engenharia, infraestrutura e segurança. Sua única preocupação será atender os novos pedidos.</p>
      <div className="text-sm md:text-base flex justify-center items-center gap-2.5 *:rounded-[100vmax] *:inline-block *:border *:border-[#FF8D2F] *:py-2.5 *:px-5">
        <a className="bg-linear-to-b from-[#FF8D2F] to-[#D55506] text-white" href="https://api.whatsapp.com/send?phone=5592986001909">Fazer um orçamento</a>
        <Link className="text-[#FF8D2F]" href={"/projetos"}>Ver projetos</Link>
      </div>
      <Image
        priority
        fetchPriority="high"
        className="mt-8.75 md:mt-20"
        src={MainImage}
        alt="Site de compra de bots no celular e loja virtual de softwares desenvolvido de pela Okacodes"
      />
    </section>
  )
}

export default HeroSection