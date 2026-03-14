"use client"

import { useState } from "react"
import Image from "next/image"
import ArrowFaq from "@/public/okacodes/seta-faq.svg"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { staggerContainer, staggerItem } from "@/components/animated-section"

const faqData = [
  {
    question: "Quanto tempo demora para o meu site ficar pronto?",
    answer: "O prazo exato depende da complexidade do seu projeto. Uma Landing Page de alta conversão leva, em média, de 7 a 15 dias. Já um e-commerce completo ou site institucional robusto leva a partir de 20 dias. Na Okacodes, trabalhamos com cronogramas profissionais: não fazemos nada “nas coxas”, mas se prometemos uma data de entrega, seu site estará no ar exatamente naquele dia."
  },
  {
    question: "Terei custos mensais depois que o site estiver no ar?",
    answer: "Para qualquer site existir na internet, existem os custos de infraestrutura: o domínio (seu endereço www) e a hospedagem (o servidor onde o site mora), que possuem taxas anuais ou mensais das próprias plataformas. Além disso, nós da Okacodes oferecemos contratos opcionais de suporte e manutenção. Se você não tem tempo para atualizar o site, fazer backups ou monitorar a segurança, nossa equipe cuida de tudo isso por uma mensalidade fixa, enquanto você foca apenas em vender."
  },
  {
    question: "Vocês dão suporte se der algum problema depois da entrega?",
    answer: "Com certeza. Todo projeto entregue pela Okacodes possui uma garantia técnica contra qualquer bug ou falha no código original que nós desenvolvemos. Nosso código é limpo e testado antes da entrega. Caso no futuro você precise adicionar novos recursos, criar novas páginas ou alterar o design, nossos clientes têm acesso preferencial aos nossos planos de manutenção ou pacotes de atualização avulsos."
  },
  {
    question: "Eu preciso fornecer os textos e as imagens do site?",
    answer: "Sim. Como você é o maior especialista na sua própria empresa, precisaremos que nos envie sua logomarca, fotos dos produtos/serviços e as informações básicas do negócio. Mas não se preocupe: nossa equipe guiará você sobre exatamente qual material enviar e nós faremos os ajustes na copy (textos) para garantir que tudo fique com foco em vendas."
  },
  {
    question: "Como funcionam as formas de pagamento?",
    answer: "Trabalhamos com o modelo padrão e seguro do mercado: 50% de sinal para reservar o seu espaço na nossa agenda de desenvolvimento e iniciarmos o projeto, e os 50% finais apenas na entrega do site pronto, testado e aprovado no ar."
  },
]

const FaqList = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <motion.ul
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="mt-12.5 md:ml-12.5"
    >
      {faqData.map((item, i) => (
        <motion.li
          variants={staggerItem}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="not-first:mt-10 relative"
          key={i}
        >
          <button
            onClick={() => {
              activeIndex === i ? setActiveIndex(null) : setActiveIndex(i)
            }}
            className="text-start cursor-pointer mb-2.5 text-2xl md:text-[1.75rem] font-medium flex items-start md:items-center gap-2.5"
          >
            <Image
              className={cn("transition-transform duration-300 mt-1.5 md:mt-0", activeIndex === i && "rotate-180")}
              src={ArrowFaq}
              alt="Seta para expansão"
            />
            <h4>{item.question}</h4>
          </button>
          <div
            className={cn(
              "ml-8.5 grid transition-all duration-300 ease-in-out overflow-hidden",
              activeIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}
          >
            <p className="overflow-hidden text-xl md:text-2xl leading-[1.3] text-black/75">
              {item.answer}
            </p>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default FaqList
