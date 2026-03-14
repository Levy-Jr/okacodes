"use client"

import { motion } from "motion/react"
import Image from "next/image"
import ApprovedOrder from "@/public/okacodes/pedido-aprovado.svg"
import { cn } from "@/lib/utils"

const ApprovedOrderComponent = ({ className, index = 0 }: { className?: string, index?: number }) => {
  return (
    <motion.p
      initial={{ opacity: 0, scale: 0.8, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.5 + (index * 0.4) // Atraso base + escalonamento matemático
      }}
      className={cn("font-semibold z-10 absolute bg-white/10 backdrop-blur-sm flex items-center gap-[.625em] py-[.625em] px-[1.25em] rounded-[100vmax] border border-white", className)}
    >
      <Image
        src={ApprovedOrder}
        alt="Bolsa de compras"
      />
      Novo pedido aprovado!
    </motion.p>
  )
}

export default ApprovedOrderComponent
