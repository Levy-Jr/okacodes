import AnimatedSection, { slideLeft } from "@/components/animated-section";
import TableData from "./table-data";

const TableSection = () => {
  return (
    <section className="mt-30 max-w-300 w-[90%] mx-auto">
      <AnimatedSection variants={slideLeft} duration={0.8}>
        <div className="max-w-[50ch]">
          <h2 className="font-bold text-[2.5rem] leading-[1.2]">A diferença entre profissionais e amadores</h2>
          <p className="mt-3">Com o seu site sendo desenvolvido pela Okacodes, os sites dos seus concorrentes vão parecer que foram feitos por amadores.</p>
        </div>
      </AnimatedSection>
      <div className="overflow-hidden overflow-x-auto">
        <TableData />
      </div>
    </section>
  )
}

export default TableSection