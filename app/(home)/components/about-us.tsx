import Image from "next/image"
import OkacodesMockup from "@/public/okacodes/sobre-nos.webp"

const AboutUsSection = () => {
  return (
    <section className="max-w-300 w-[90%] mx-auto mt-30">
      <div className="mb-12.5">
        <h2 className="text-[2.5rem] font-bold">Sobre Nós</h2>
        <p className="mt-2.5">A Okacodes nasceu da nossa vontade de ajudar negócios a superarem a frustração de terem sites lentos, confusos ou que parecem amadores. Nós sabemos que você trabalha duro para entregar o melhor no seu dia a dia, e acreditamos que o seu site precisa transmitir essa mesma excelência e confiança para o seu cliente.</p>
      </div>
      <Image
        src={OkacodesMockup}
        alt="Mockup do site da Okacodes em um monitor"
      />
    </section>
  )
}

export default AboutUsSection