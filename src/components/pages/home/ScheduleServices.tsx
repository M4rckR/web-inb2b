import { Button } from "@/components/ui/button"
import { GridServices } from "@/components/pages/home/GridServices"
import { CalendarIcon } from "lucide-react"
import Link from "next/link"

export const ScheduleServices = () => {
  return (
    <div id="servicios"  className="bg-in-blue-main text-white md:pb-16">
        <section data-aos="fade-up" data-aos-duration="1000" className="max-w-7xl mx-auto px-4 container space-y-6 md:space-y-16">
            <div data-aos="fade-up" data-aos-duration="1000">
              <h2 className="text-2xl md:text-base font-bold md:font-normal font-in-lato md:font-in-poppins text-white pb-4 text-center md:text-left ">Nuestros servicios </h2>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                  <p className="font-in-avantgarde text-base md:text-4xl font-medium px-4 md:px-0 max-w-[600px] text-center tracking-wider md:text-left hidden md:block">Soluciones digitales para hacer crecer tu proyecto en salud</p>
                  <Link 
                    className="cta-wsp-custom" 
                    href="https://wa.me/51943583887?text=¡Hola!%20Vi%20su%20web%20y%20me%20gustaría%20obtener%20más%20información%20sobre%20INB2B"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                  <Button className="cursor-pointer bg-in-cyan hidden md:flex font-in-poppins py-6 rounded-full transition-all duration-300 hover:bg-in-cyan/80 text-in-blue-base px-12">
                      <CalendarIcon className="w-4 h-4" />
                      Agendar una reunión
                  </Button>
                  </Link>
              </div>
            </div>
            <GridServices />
        </section>
    </div>
  )
}
