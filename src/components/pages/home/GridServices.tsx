import { Button } from "@/components/ui/button"
import { Calendar1Icon } from "lucide-react"
import Image from "next/image"

export const GridServices = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-6 font-in-poppins">
        <article className="bg-in-blue-dark col-span-1 sm:col-span-2 sm:row-span-2 lg:row-span-3 lg:col-span-6 py-8 px-6 rounded-xl space-y-6">
            <div className="space-y-2">
                <h3 className="font-in-lato text-xl lg:text-2xl">Asesoría Integral</h3>
                <p>Planificación, implementación y categorización</p>
            </div>
            <Image 
                src="/images/service-one.png"
                alt="Health Hunting" 
                width={500} 
                height={300} 
                className="w-full object-cover "
            />
        </article>
        <article className="bg-in-blue-dark rounded-xl py-8 px-6 md:col-span-1 lg:col-span-6">
            <div className="grid grid-cols-5 items-center">
                <div className="space-y-2 col-span-4">
                    <h3 className="font-in-lato text-xl lg:text-2xl">Health Hunting</h3>
                    <p>Reclutamiento médico, administrativo, y gerencial</p>
                </div>
                <div className="col-span-1">
                    <Image 
                        src="/images/service-two.png" 
                        alt="Health Hunting" 
                        width={100} 
                        height={100} 
                        className="h-full w-full hidden lg:block"
                    />
                </div>
            </div>
            
        </article>
        <article className="bg-in-blue-dark py-8 px-6 relative rounded-xl space-y-4 lg:col-span-6 overflow-hidden lg:row-span-2">
            <div className="space-y-2">
                <h3 className="font-in-lato text-xl lg:text-2xl ">Gestión de Operaciones</h3>
                <p className="lg:w-1/2">Protocolos, KPIs, auditoría y cultura organizacional</p>
            </div>
            <div className="flex items-center gap-4">
                <Button className="hidden bg-in-blue-dark hover:bg-in-blue-dark/80 cursor-pointer border py-6 rounded-full border-in-cyan text-white mb-0 lg:flex">
                    <Calendar1Icon/>
                    Agendar una reunion 
                </Button>
            <Image 
                src="/images/service-three.png" 
                alt="Gestión de Operaciones"
                width={300} 
                height={100}
                className="absolute hidden lg:block bottom-0 right-0 h-[180px] w-[240px] rounded-tl-2xl object-cover"
            />
            </div>
        </article>
         <article className="bg-in-blue-dark pt-8 pb-8 lg:pb-0 px-6 space-y-4 rounded-xl flex flex-col md:col-span-2 lg:col-span-7 ">
            <div className="space-y-2">
                <h3 className="font-in-lato text-xl lg:text-2xl">Expansión y crecimiento</h3>
                <p>Nuevas sedes, modelos escalables y consultoría para inversores</p>
            </div>

            <div className="flex items-center gap-4">
                <Button className="bg-in-blue-dark hover:bg-in-blue-dark/80 cursor-pointer border py-6 rounded-full border-in-cyan text-white self-start">
                    <Calendar1Icon/>
                    Agendar una reunion
                </Button>
                <Image 
                    src="/images/service-four.png" 
                    alt="Expansión y crecimiento"
                    width={180} 
                    height={180}
                    className="h-[180px] w-[180px] rounded-tl-2xl ml-auto hidden lg:block"
                />
            </div>
        </article> 
        <article className="lg:col-span-5 bg-in-blue-dark pt-8 pb-8 lg:pb-0 px-6 rounded-xl flex flex-col space-y-6">
            <div className="space-y-2">
                <h3 className="font-in-lato text-xl lg:text-2xl">Transformación Digital</h3>
                <p>Automatización, dashboards y digitalización clínica</p>
            </div>
            <Image 
                src="/images/service-five.png" 
                alt="Transformación Digital"
                width={480} 
                height={220}
                className="hidden lg:block rounded-tl-2xl rounded-b-2xl lg:rounded-b-none mx-auto lg:mt-auto"
            />
        </article>
    </section>
  )
}
