import Image from "next/image"
import CheckIcon from "@/public/okacodes/otimizando-suas-vendas.svg"
import ApprovedOrder from "@/public/okacodes/pedido-aprovado.svg"
import { cn } from "@/lib/utils"
import Link from "next/link"

const ApprovedOrderComponent = ({ className }: { className?: string }) => {
  return (
    <p className={cn("font-semibold z-10 absolute bg-white/10 backdrop-blur-sm flex items-center gap-[.625em] py-[.625em] px-[1.25em] rounded-[100vmax] border border-white", className)}>
      <Image
        src={ApprovedOrder}
        alt="Bolsa de compras"
      />
      Novo pedido aprovado!
    </p>
  )
}

const SellSection = () => {
  return (
    <section className="my-20 md:my-30 max-w-300 w-full mx-auto">
      <div className="max-w-[30ch] sm:max-w-[64ch] mx-auto text-center">
        <p className="text-sm sm:text-base flex justify-center items-center gap-2.5 font-semibold text-[#00D02A]">
          <Image
            src={CheckIcon}
            alt="Ícone de verificado"
          />
          Otimizando suas vendas
        </p>
        <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold">Venda de segunda a segunda.</h2>
        <p className="text-xs sm:text-base mb-3.75">Com um site você poderá vender 24h por dia, conseguindo até mesmo fazer vendas enquanto dorme, tudo no piloto automático.</p>
        <div className="text-xs sm:text-base flex justify-center items-center gap-2.5 *:inline-block *:py-[.625em] *:px-[1.25em] *:rounded-[.625rem]">
          <Link className="bg-[#F9F9F9] text-black shadow-[0_0_.25rem_0_rgba(0,0,0,.2)]" href={"/projetos"}>Ver projetos</Link>
          <a className="border border-[#FF8D2F] bg-linear-to-b from-[#FF8D2F] to-[#D55506] text-white" href="https://api.whatsapp.com/send?phone=5592986001909">Falar com especialistas</a>
        </div>
      </div>
      <div className="text-white mt-12.5 h-110 md:max-h-110 overflow-hidden lg:rounded-[1.25rem] relative after:absolute after:inset-0 after:opacity-30 after:bg-linear-to-b after:from-black after:to-[#666]/0">
        <video className="w-full h-full object-cover object-top" playsInline autoPlay muted loop>
          <source src="/okacodes/sem-estresse.webm" />
        </video>
        <ApprovedOrderComponent className="text-[.625rem] md:text-sm lg:text-base top-[15%] md:top-[20%] left-[55%] sm:left-[70%] md:left-[15%] [&_img]:max-w-2.75 md:[&_img]:max-w-none" />
        <ApprovedOrderComponent className="text-[.5rem] md:text-sm lg:text-base [&_img]:max-w-2.75 md:[&_img]:max-w-none top-[25%] md:top-[40%] left-[1.5%] md:left-[2%]" />
        <ApprovedOrderComponent className="hidden md:flex bottom-[27%] left-[10%] text-xs [&_img]:max-w-4.5" />
        <h3 className="w-max text-shadow-lg absolute font-bold text-[2rem] md:text-[2.5rem] translate-y-1/2 bottom-1/2 translate-x-1/2 right-1/2 z-20">Sem estresse.</h3>
        <ApprovedOrderComponent className="hidden md:flex top-[30%] right-[15%] text-xs [&_img]:max-w-4.5" />
        <ApprovedOrderComponent className="text-[.625rem] bottom-[20%] md:bottom-[45%] right-[15%] md:right-[1%] [&_img]:max-w-3.75" />
        <ApprovedOrderComponent className="hidden md:flex text-sm lg:text-base bottom-[27%] right-[14.5%]" />
      </div>
    </section>
  )
}

export default SellSection