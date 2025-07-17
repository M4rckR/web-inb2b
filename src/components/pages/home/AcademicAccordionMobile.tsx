"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export const AcademicAccordionMobile = () => {
  return (
    <section className="md:hidden font-in-poppins px-4 py-8">
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem 
          value="item-1" 
          className="border border-white/20 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm"
        >
          <AccordionTrigger className="px-6 py-4 text-white hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-in-cyan rounded-full"></div>
              <span className="text-left font-medium">
                Diplomados internacionales en gestión, tecnologías en salud y estrategia clínica
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <Image
                src="/images/image-accordion.png"
                alt="Diplomados internacionales"
                width={400}
                height={250}
                className="w-full rounded-lg"
              />
              <p className="text-white/90 text-sm leading-relaxed">
                Programas de formación especializada en gestión sanitaria, 
                tecnologías emergentes y estrategias clínicas avanzadas para 
                profesionales del sector salud.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem 
          value="item-2" 
          className="border border-white/20 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm"
        >
          <AccordionTrigger className="px-6 py-4 text-white hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-in-cyan rounded-full"></div>
              <span className="text-left font-medium">Sesiones...</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="w-full h-48 bg-gradient-to-br from-in-cyan/20 to-in-blue-main/30 rounded-lg flex items-center justify-center">
                <span className="text-in-cyan text-6xl">+</span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Sesiones especializadas y contenido adicional próximamente.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem 
          value="item-3" 
          className="border border-white/20 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm"
        >
          <AccordionTrigger className="px-6 py-4 text-white hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-in-cyan rounded-full"></div>
              <span className="text-left font-medium">Acompañami...</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="w-full h-48 bg-gradient-to-br from-in-cyan/20 to-in-blue-main/30 rounded-lg flex items-center justify-center">
                <span className="text-in-cyan text-6xl">+</span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Programas de acompañamiento y mentoría personalizada.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem 
          value="item-4" 
          className="border border-white/20 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm"
        >
          <AccordionTrigger className="px-6 py-4 text-white hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-in-cyan rounded-full"></div>
              <span className="text-left font-medium">Descuentos...</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="w-full h-48 bg-gradient-to-br from-in-cyan/20 to-in-blue-main/30 rounded-lg flex items-center justify-center">
                <span className="text-in-cyan text-6xl">+</span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Descuentos especiales y ofertas exclusivas para miembros.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
