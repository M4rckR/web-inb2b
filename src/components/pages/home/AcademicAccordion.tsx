"use client";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const AcademicAccordion = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(0);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? index : index);
  };

  return (
    <div className="mt-16">
      <section className="hidden md:flex gap-4 text-white text-lg font-in-poppins">
        <div
          className={`relative bg-in-bg-cards/10 rounded-3xl p-8 overflow-hidden ${
            expandedCard === 0 ? "cursor-pointer w-3/6" : "w-1/6"
          } transition-all duration-300`}
        >
          <p
            className={`line-clamp-1 mb-4 max-h-[52px] overflow-hidden transition-all duration-300 ${
              expandedCard === 0 ? "line-clamp-none" : ""
            }`}
          >
            Diplomados internacionales en gestión, tecnologías en salud y
            estrategia clínica
          </p>
          <div
            className="absolute bottom-8 cursor-pointer left-1/2 -translate-x-1/2"
            onClick={() => toggleCard(0)}
          >
            {expandedCard === 0 ? null : <Plus color="#00BEB4" size={32} />}
          </div>

          <Image
            src="/images/image-accordion-1.png"
            alt="Academic Accordion 1"
            width={300}
            height={100}
            className={`${
              expandedCard === 0 ? "opacity-100" : "opacity-0"
            } h-[240px] w-full transition-all duration-300 object-cover rounded-3xl`}
          />
        </div>
        <div
          className={`relative bg-in-bg-cards/10 rounded-3xl p-8 overflow-hidden ${
            expandedCard === 1 ? "cursor-pointer w-3/6" : "w-1/6"
          } transition-all duration-300`}
        >
          <p
            className={`line-clamp-1 mb-4 max-h-[52px] overflow-hidden transition-all duration-300 ${
              expandedCard === 1 ? "line-clamp-none" : ""
            }`}
          >
            Sesiones informativas y experiencias modelo con ponentes globales
          </p>
          <div
            className="absolute bottom-8 cursor-pointer left-1/2 -translate-x-1/2"
            onClick={() => toggleCard(1)}
          >
            {expandedCard === 1 ? null : <Plus color="#00BEB4" size={32} />}
          </div>
          <Image
            src="/images/image-accordion.png"
            alt="Academic Accordion 1"
            width={300}
            height={100}
            className={`${
              expandedCard === 1 ? "opacity-100" : "opacity-0"
            } h-[240px] w-full transition-all duration-300 object-cover rounded-3xl`}
          />
        </div>
        <div
          className={`relative bg-in-bg-cards/10 rounded-3xl p-8  overflow-hidden ${
            expandedCard === 2 ? "cursor-pointer w-3/6" : "w-1/6"
          } transition-all duration-300`}
        >
          <p
            className={`line-clamp-1 mb-4 max-h-[52px] overflow-hidden transition-all duration-300 ${
              expandedCard === 2 ? "line-clamp-none" : ""
            }`}
          >
            Acompañamiento para viajes académicos y pasantías especializadas
          </p>
          <div
            className="absolute bottom-8 cursor-pointer left-1/2 -translate-x-1/2"
            onClick={() => toggleCard(2)}
          >
            {expandedCard === 2 ? null : <Plus color="#00BEB4" size={32} />}
          </div>
          <Image
            src="/images/image-accordion.png"
            alt="Academic Accordion 1"
            width={300}
            height={100}
            className={`${
              expandedCard === 2 ? "opacity-100" : "opacity-0"
            } h-[240px] w-full transition-all duration-300 object-cover rounded-3xl`}
          />
        </div>
        <div
          className={`bg-in-bg-cards/10 relative rounded-3xl p-8 overflow-hidden ${
            expandedCard === 3 ? "cursor-pointer w-3/6" : "w-1/6"
          } transition-all duration-300`}
        >
          <p
            className={`line-clamp-1 mb-4 max-h-[52px] overflow-hidden transition-all duration-300 ${
              expandedCard === 3 ? "line-clamp-none" : ""
            }`}
          >
            Descuentos exclusivos INB2B para nuestros aliados y clientes
          </p>
          <div
            className="absolute bottom-8 cursor-pointer left-1/2 -translate-x-1/2"
            onClick={() => toggleCard(3)}
          >
            {expandedCard === 3 ? null : <Plus color="#00BEB4" size={32} />}
          </div>
          <Image
            src="/images/image-accordion.png"
            alt="Academic Accordion 1"
            width={300}
            height={100}
            className={`${
              expandedCard === 3 ? "opacity-100" : "opacity-0"
            } h-[240px] w-full transition-all duration-300 object-cover rounded-3xl`}
          />
        </div>
      </section>
      <section className="md:hidden font-in-poppins px-4">
        <Accordion className="text-white space-y-4" type="single" collapsible>
          <AccordionItem className="bg-[#D9D9D9]/10 p-4 border-none rounded-3xl" value="item-1">
            <AccordionTrigger className="text-xl">Diplomados internacionales en gestión, tecnologías en salud y
            estrategia clínica</AccordionTrigger>
            <AccordionContent>
              <Image src="/images/image-accordion-1.png" alt="Academic Accordion 1" width={300} height={100} className="h-[240px] w-full transition-all duration-300 object-cover rounded-3xl" />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="bg-[#D9D9D9]/10 p-4 border-none rounded-3xl" value="item-2">
            <AccordionTrigger className="text-xl">Sesiones informativas y experiencias modelo con ponentes globales</AccordionTrigger>
            <AccordionContent>
              <Image src="/images/image-accordion.png" alt="Academic Accordion 1" width={300} height={100} className="h-[240px] w-full transition-all duration-300 object-cover rounded-3xl" />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="bg-[#D9D9D9]/10 p-4 border-none rounded-3xl" value="item-3">
            <AccordionTrigger className="text-xl">Acompañamiento para viajes académicos y pasantías especializadas</AccordionTrigger>
            <AccordionContent>
              <Image src="/images/image-accordion.png" alt="Academic Accordion 1" width={300} height={100} className="h-[240px] w-full transition-all duration-300 object-cover rounded-3xl" />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="bg-[#D9D9D9]/10 p-4 border-none rounded-3xl" value="item-4">
            <AccordionTrigger className="text-xl">Descuentos exclusivos INB2B para nuestros aliados y clientes</AccordionTrigger>
            <AccordionContent>
              <Image src="/images/image-accordion.png" alt="Academic Accordion 1" width={300} height={100} className="h-[240px] w-full transition-all duration-300 object-cover rounded-3xl" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      {/* <AcademicAccordionMobile /> */}
    </div>
  );
};
