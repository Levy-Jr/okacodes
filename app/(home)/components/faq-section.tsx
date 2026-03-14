import AnimatedSection, { fadeUp } from "@/components/animated-section"
import FaqList from "./faq-list"

const FaqSection = () => {
  const faqData = [
    {
      question: "Quanto tempo demora para o meu site ficar pronto?",
      answer: "O prazo exato depende da complexidade do seu projeto. Uma Landing Page de alta conversão leva, em média, de 7 a 15 dias. Já um e-commerce completo ou site institucional robusto leva a partir de 20 dias. Na Okacodes, trabalhamos com cronogramas profissionais: não fazemos nada \u201Cnas coxas\u201D, mas se prometemos uma data de entrega, seu site estará no ar exatamente naquele dia."
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

  return (
    <section className="max-w-300 w-[90%] mx-auto mt-30">
      <AnimatedSection variants={fadeUp}>
        <h2 className="text-[2rem] md:text-5xl font-bold">Tem dúvidas sobre a gente?</h2>
        <h3 className="text-2xl md:text-4xl text-black/75 mt-2.5">Temos as respostas!</h3>
      </AnimatedSection>
      <FaqList />
    </section >
  )
}

export default FaqSection