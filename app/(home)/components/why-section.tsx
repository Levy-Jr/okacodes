import { cn } from "@/lib/utils"
import MemojiOne from "@/public/okacodes/memoji-1.svg"
import MemojiTwo from "@/public/okacodes/memoji-2.svg"
import MemojiThree from "@/public/okacodes/memoji-3.svg"
import MemojiFour from "@/public/okacodes/memoji-4.svg"
import MemojiFive from "@/public/okacodes/memoji-5.svg"
import MemojiSix from "@/public/okacodes/memoji-6.svg"
import MemojiSeven from "@/public/okacodes/memoji-7.svg"
import MemojiEight from "@/public/okacodes/memoji-8.svg"
import Image from "next/image"
import AnimatedSection, { slideLeft, slideRight } from "@/components/animated-section"
import ButtonWhatsapp from "@/public/okacodes/button-whatsapp.svg"
import { WhatsAppLink } from "@/components/whatsapp-link"

interface MemojiItem {
  id: string;
  src: string;
}

interface ScrollColumnProps {
  items: MemojiItem[];
  direction: 'up' | 'down';
  speed?: string;
}

const WhySection = () => {
  const COLUMN_1_DATA = [
    { id: '1-1', src: MemojiOne },
    { id: '1-2', src: MemojiEight },
    { id: '1-3', src: MemojiSeven }
  ];

  const COLUMN_2_DATA = [
    { id: '2-1', src: MemojiFive },
    { id: '2-2', src: MemojiSix },
    { id: '2-3', src: MemojiThree }
  ];

  const COLUMN_3_DATA = [
    { id: '3-1', src: MemojiTwo },
    { id: '3-2', src: MemojiFour },
    { id: '3-3', src: MemojiEight }
  ];

  const ScrollColumn: React.FC<ScrollColumnProps> = ({ items, direction, speed = "8s" }) => {
    // CRITICAL: Duplicate the array 4 times to create an extremely long track.
    // Translating by -50% shifts it perfectly by exactly 2 sets, eliminating any empty space bugs.
    const duplicatedItems = [...items, ...items, ...items, ...items];

    return (
      <div className="relative h-full w-38.5 overflow-visible">
        <div
          className={cn("absolute top-0 w-full flex flex-col items-center", direction === 'up' ? 'animate-scroll-up' : 'animate-scroll-down')}
          style={{ animationDuration: speed }}
        >
          {duplicatedItems.map((item, index) => (
            <Image
              className="w-full pb-3"
              key={`${item.id}-${index}`}
              src={item.src}
              alt="Memoji dentro de um card"
              width={154}
              height={154}
              sizes="9.625rem"
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-black text-white relative overflow-hidden">
      <div className="max-w-300 w-[90%] mx-auto flex flex-col md:flex-row md:items-center relative z-10">
        <AnimatedSection
          variants={slideLeft}
          duration={0.8}
          className="pt-10 md:py-17 max-w-[51ch] mx-auto md:mx-0 w-full md:w-2/3 lg:w-3/5"
        >
          <p>Por que ter um site?</p>
          <h2 className="text-[2rem] lg:text-[2.5rem] leading-[1.1] my-2.5 font-bold">Milhões de pessoas estão comprando pela internet.</h2>
          <p className="text-sm">Enquanto você lê isso, o mundo todo está comprando online agora. Garanta sua fatia desse mercado com um site profissional feito para atrair clientes e gerar lucro real para o seu bolso.</p>
          <WhatsAppLink
            phoneNumber="5592986001909"
            className="mt-2.5 group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-b from-[#FF8D2F] to-[#D55506] py-3 px-7 font-semibold text-white shadow-[0_4px_12px_rgba(255,141,47,0.4)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_20px_-4px_rgba(255,141,47,0.7)] active:translate-y-0 active:scale-95"
          >
            {/* Camada de brilho animado no hover */}
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"></span>

            {/* Ícone do WhatsApp */}
            <Image
              src={ButtonWhatsapp}
              alt="WhatsApp"
            />
            <span className="z-10">Fazer um orçamento</span>
          </WhatsAppLink>
        </AnimatedSection>
      </div>
      <AnimatedSection
        variants={slideRight}
        duration={0.9}
        delay={0.2}
        className="w-full md:w-1/3 lg:w-5/12 relative md:absolute md:inset-y-0 md:right-0 overflow-hidden flex md:justify-end items-center h-70 md:h-auto pointer-events-none mt-17.5 md:mt-0 pb-10 md:pb-0 z-0"
      >
        <div className="w-full flex justify-center md:justify-end gap-3 h-full transform sm:scale-100 md:origin-right md:pr-4">
          <ScrollColumn items={COLUMN_1_DATA} direction="up" />
          <ScrollColumn items={COLUMN_2_DATA} direction="down" />
          <ScrollColumn items={COLUMN_3_DATA} direction="up" />
        </div>
        <div className="md:hidden absolute top-0 left-0 w-full h-5 bg-linear-to-b from-black to-transparent pointer-events-none z-10" />
        <div className="md:hidden absolute bottom-0 left-0 w-full h-5 bg-linear-to-t from-black to-transparent pointer-events-none z-10" />
      </AnimatedSection>
    </section>
  )
}

export default WhySection