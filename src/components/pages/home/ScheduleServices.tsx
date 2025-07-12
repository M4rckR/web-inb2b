import { Button } from "@/components/ui/button"
import { GridServices } from "@/components/pages/home/GridServices"
import { CalendarIcon } from "lucide-react"

export const ScheduleServices = () => {
  return (
    <div className="bg-in-blue-main text-white py-16 md:py-32">
        <section className="max-w-7xl mx-auto px-4 container space-y-16">
            <div>
              <h2 className="text-3xl md:text-base font-bold md:font-normal font-in-lato md:font-in-poppins text-white pb-4 text-center md:text-left ">Nuestros servicios </h2>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                  <p className="font-in-lato text-base md:text-4xl font-medium px-4 max-w-[600px] text-center md:text-left">Soluciones digitales para hacer crecer tu proyecto en salud.</p>
                  <Button className="bg-in-cyan font-in-poppins py-6 rounded-full transition-all duration-300 hover:bg-in-cyan/80 text-in-blue-base px-12">
                      <CalendarIcon className="w-4 h-4" />
                      Agendar una reunión
                  </Button>
              </div>
            </div>
            <GridServices />
        </section>
    </div>
  )
}
