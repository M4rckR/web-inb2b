import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const Community = () => {
  return (
    <div className="relative bg-in-blue-main">
      <div className="relative">
          <Image 
              src="/images/semi-ellipse.png" 
              alt="Wave" 
              width={900} 
              height={100} 
              unoptimized
              className="w-full absolute -mt-64" 
            />


      </div>
      <div className=" relative z-10">
        <div className="space-y-8">
          <h2 className="text-white text-center text-4xl font-in-lato">
          Comunidad & <br /> Eventos Regionales
          </h2>
          <p className="text-white text-center font-in-poppins max-w-3xl text-lg mx-auto">
          Estamos construyendo una comunidad regional activa en WhatsApp, conformada por líderes de proyectos de salud en Perú, Ecuador, Panamá y más.
          </p>
        </div>

        <section className="max-w-6xl mx-auto px-4 container py-24">
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-7">
              <div className="space-y-16 mb-8">

                <div>
                  <p className="font-in-lato text-xl text-in-cyan pb-2">En esta comunidad encontrarás:</p>
                  <ul className="text-white pl-6 font-in-poppins">
                    <li className="list-disc">Consejos prácticos sobre gestión, marketing y expansión</li>
                    <li className="list-disc">Invitaciones a eventos digitales y presenciales</li>
                    <li className="list-disc">Lanzamiento de programas, contenidos y convocatorias INB2B</li>
                    <li className="list-disc">Espacios de colaboración entre empresarios del sector</li>
                  </ul>
                </div>

                <div>
                  <p className="font-in-lato text-xl text-in-cyan pb-2">Además, organizamos periódicamente:</p>
                  <ul className="text-white pl-6 font-in-poppins">
                    <li className="list-disc">Eventos presenciales y experiencias de networking en ciudades clave</li>
                    <li className="list-disc">Talleres y desayunos ejecutivos para clínicas y consultorios en crecimiento</li>
                    <li className="list-disc">Espacios colaborativos con universidades y actores del ecosistema salud</li>
                  </ul>
                </div>


              </div>
              <Button className="bg-in-cyan hover:bg-in-cyan/80 rounded-full text-lg py-6 px-10">
                <Link href="/community">
                  Unirme ahora
                </Link>
              </Button>
            </div>
            <div className="col-span-5">
              <Image  src="/images/comunidad-image.png" alt="Community" width={500} height={500} className="w-full h-full object-cover mx-auto" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
