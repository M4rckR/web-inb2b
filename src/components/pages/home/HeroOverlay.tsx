import Image from "next/image"
import { HeroNav } from "./HeroNav"
import Link from "next/link"

export const HeroOverlay = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat md:h-[100vh] relative p-[0.1px]">
        <Image src="/images/hero/hero-photo.png" alt="Hero Home" fill className="object-cover absolute top-0 left-0 -z-10" />
        <div className="absolute inset-0 bg-black/50 -z-10"></div>
        <div className="mt-6">
          <HeroNav />
        </div>

        <div className="max-w-7xl mx-auto px-4 container relative space-y-6 top-1/2 -translate-y-1/2 text-white">
          <h1 className=" text-5xl w-1/2 max-w-2xl font-in-lato">Transformamos ideas 
          en negocios de salud rentables en LATAM </h1>
          <div className="font-in-poppins flex items-center gap-4">
            <p className="text-lg">¿Tienes un proyecto en salud?</p>
            <Link className="bg-in-cyan px-6 py-2 rounded-full" href="/">Conversemos</Link>
          </div>
        </div>
    </div>
  )
}
