import Image from "next/image"
import { AcademicAccordion } from "./AcademicAccordion"

export const AcademicAlliances = () => {
  return (
    <div className="bg-in-blue-main pb-16">
        <section className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center space-y-8 md:space-y-0">
                <div className="text-white space-y-6">
                    <h2 className="font-in-avantgarde text-2xl md:text-3xl lg:text-4xl text-center md:text-left font-semibold tracking-wider">Diplomados, sesiones internacionales y alianzas académicas</h2>
                    <p className="font-in-poppins text-center md:text-left">INB2B promueve la formación continua de líderes en salud a través de alianzas académicas con instituciones internacionales como la Universidad de Manresa (UVic-UCC) en España y otras universidades líderes en innovación en salud.</p>
                </div>
                <div className="flex justify-center">
                    <Image src="/images/diplomados-secciones.png" alt="Academic Alliances" width={300} height={300} />
                </div>
            </div>
        <AcademicAccordion />
        </section>
    </div>
  )
}
