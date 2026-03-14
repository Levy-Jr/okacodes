"use client"

import Image from "next/image"
import PositiveIcon from "@/public/okacodes/positivo.svg"
import NegativeIcon from "@/public/okacodes/x.svg"
import { motion } from "motion/react"
import { staggerContainer, staggerItem } from "@/components/animated-section"

const TableData = () => {
  const criteriaData = [
    {
      name: "Entregar uma máquina de vendas (Foco em lucro)",
      ia: false,
      cheap: false,
      oka: true
    },
    {
      name: "Design focado no usuário (UX/UI)",
      ia: false,
      cheap: false,
      oka: true
    },
    {
      name: "Código seguro, rápido e sem bugs",
      ia: false,
      cheap: false,
      oka: true
    },
    {
      name: "Suporte humano quando você precisa",
      ia: false,
      cheap: false,
      oka: true
    },
    {
      name: "Criar em segundos (Foco em velocidade)",
      ia: true,
      cheap: false,
      oka: false
    },
    {
      name: "Cobrar o menor preço (Foco em ser barato)",
      ia: false,
      cheap: true,
      oka: false
    },
  ];

  return (
    <motion.table
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="mt-17.5 min-w-full w-max border-collapse"
    >
      <thead>
        <tr>
          <th className="text-left text-2xl md:text-[2.5rem] font-bold pb-10 pt-4 pr-8 align-bottom">
            Critério
          </th>
          <th className="text-center text-2xl md:text-[2.5rem] font-bold pb-10 pt-4 px-6 border-l border-black/10 align-bottom">
            IA
          </th>
          <th className="text-center text-2xl md:text-[2.5rem] font-bold pb-10 pt-4 px-6 border-l border-black/10 align-bottom">
            Serviço barato
          </th>
          <th className="text-center text-2xl md:text-[2.5rem] font-bold pb-10 pt-4 px-6 border-l border-black/10 align-bottom">
            Okacodes
          </th>
        </tr>
      </thead>
      <tbody>
        {criteriaData.map((row, index) => (
          <motion.tr
            key={index}
            variants={staggerItem}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xs md:text-base *:max-w-[18ch]"
          >
            <td className="text-left py-5 pr-8">
              {row.name}
            </td>
            <td className="text-center py-6 px-3 md:px-6 border-l border-black/10">
              <div className="flex justify-center items-center h-full">
                {row.ia ? <Image src={PositiveIcon} alt="Positivo" /> : <Image src={NegativeIcon} alt="Negativo" />}
              </div>
            </td>
            <td className="text-center py-6 px-3 md:px-6 border-l border-black/10">
              <div className="flex justify-center items-center h-full">
                {row.cheap ? <Image src={PositiveIcon} alt="Positivo" /> : <Image src={NegativeIcon} alt="Negativo" />}
              </div>
            </td>
            <td className="text-center py-6 px-3 md:px-6 border-l  border-black/10">
              <div className="flex justify-center items-center h-full">
                {row.oka ? <Image src={PositiveIcon} alt="Positivo" /> : <Image src={NegativeIcon} alt="Negativo" />}
              </div>
            </td>
          </motion.tr>
        ))}
      </tbody>
    </motion.table>
  )
}

export default TableData
