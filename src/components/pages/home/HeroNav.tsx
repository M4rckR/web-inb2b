import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const HeroNav = () => {
  return (
    <div className="px-4 md:px-0">
      <div
        style={{
          background:
            "linear-gradient(127deg, rgba(255, 255, 255, 0.40) 12.11%, rgba(255, 255, 255, 0.10) 73.08%)", // Más oscuro para mejor contraste
          boxShadow: "0px 2.874px 17.246px -0.719px rgba(0, 0, 0, 0.20)", // Sombra más marcada
          backdropFilter: "blur(14px)",
        }}
        className="container max-w-7xl md:fixed md:left-1/2 md:-translate-x-1/2 md:top-6 md:z-30 mx-auto px-10 rounded-3xl"
      >
        <nav className="flex justify-between items-center py-4 md:py-6 text-gray-100 font-in-poppins">
          <div className="hidden lg:flex flex-col lg:flex-row gap-6">
            <Link href="#nosotros">Nosotros</Link>
            <Link href="#servicios">Servicios</Link>
          </div>
          <Image
            className="mr-auto w-24 lg:w-auto lg:mx-auto"
            src="/svg/logo-inb2b.svg"
            alt="Logo"
            width={151}
            height={50}
          />
          <div className="hidden lg:flex flex-col lg:flex-row items-center gap-6">
            <Link href="#inacademy">InAcademy</Link>
            <Link href="#health-business-club">Health Business Club</Link>
            <Link
              className="bg-in-cyan text-black px-8 py-2 rounded-full transition-all duration-300 hover:bg-in-cyan/80"
              href="#contactanos"
            >
              Contáctanos
            </Link>
          </div>

          <div className="hidden">
            <Sheet>
              <SheetTrigger>
                <Image
                  src="/svg/hamburguer.svg"
                  alt="Menu"
                  width={36}
                  height={36}
                  className="my-auto"
                />  
              </SheetTrigger>
              <SheetContent className="bg-in-blue-dark border-none">
                <SheetHeader className="text-white bg-in-blue-dark pt-12 space-y-2">
                  <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                  <Link href="#nosotros">Nosotros</Link>
                  <Link href="#servicios">Servicios</Link>
                  <Link href="#inacademy">InAcademy</Link>
                  <Link href="#health-business-club">Health Business Club</Link>
                  <Link href="#contactanos">Contactanos</Link>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </div>
  );
};
