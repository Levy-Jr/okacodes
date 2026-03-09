import Image from "next/image"
import ECommerce from "@/public/okacodes/e-commerce.svg"
import LandingPage from "@/public/okacodes/landing-page.svg"
import Institutional from "@/public/okacodes/sites-institucionais.svg"

const OurServices = () => {
  return (
    <section className="max-w-300 w-[90%] mx-auto">
      <h2 className="text-center text-2xl sm:text-[2.5rem] font-bold">Nossos serviços</h2>
      <ul className="mt-10 sm:mt-12.5 flex flex-col md:flex-row gap-4 *:p-5.5 sm:*:p-7.5 *:border *:border-black/10 *:rounded-[1.25rem] [&_h2]:my-1.75 sm:[&_h2]:my-2.5 [&_h2]:leading-none [&_h2]:text-sm sm:[&_h2]:text-xl [&_h2]:font-semibold [&_p]:text-xs sm:[&_p]:text-base [&_p]:max-w-[36ch] [&_p]:leading-[1.2] [&_p]:text-black/75">
        <li>
          <Image
            src={ECommerce}
            alt="Ícone de uma caixa"
          />
          <h2>E-commerces</h2>
          <p>Lojas virtuais rápidas, integradas com meios de pagamento (Mercado Pago, Stripe) e prontas para vender 24h.</p>
        </li>
        <li>
          <Image
            src={Institutional}
            alt="Ícone de prédios"
          />
          <h2>Sites Institucionais</h2>
          <p>A vitrine profissional da sua empresa na internet, passando credibilidade e autoridade.</p>
        </li>
        <li>
          <Image
            src={LandingPage}
            alt="Ícone de um monitor"
          />
          <h2>Landing Pages</h2>
          <p>Páginas de alta conversão para capturar leads e maximizar o retorno dos seus anúncios.</p>
        </li>
      </ul>
    </section>
  )
}

export default OurServices