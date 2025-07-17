import Image from "next/image"
import Link from "next/link"
import {FaInstagram, FaTiktok } from "react-icons/fa"

export const Footer = () => {
  return (
    <div className="bg-in-blue-main">
        <footer className="max-w-7xl mx-auto px-4 container font-in-poppins">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 pb-16 md:pb-12">
                <div>
                    <p className="pb-4 text-in-gray-text">Servicios</p>
                    <div className="flex flex-col gap-3 text-white text-sm">
                        <Link href="#servicios">
                            Asesoría Integral
                        </Link>
                        <Link href="#servicios">
                            Health Hunting
                        </Link>
                        <Link href="#servicios">
                            Gestión de Operaciones
                        </Link>
                        <Link href="#servicios">
                            Expansión y crecimiento
                        </Link>
                        <Link href="#servicios">
                            Transformación Digital
                        </Link>
                    </div>
                </div>
                <div>
                    <p className="pb-4 text-in-gray-text">Contacto</p>
                    <div className="flex flex-col gap-2 text-white text-sm">
                        <p>comercial@inb2blatam.com</p>
                        <p>+51 943 583 887</p>

                    </div>
                </div>
                <div>
                <p className="pb-4 text-in-gray-text">Redes Sociales</p>
                    {/* <div className="grid grid-cols-2 gap-4 pb-4">
                        <div className="bg-blue-800 rounded-lg col-span-2 py-4">XD</div>
                        <div className="bg-blue-800 rounded-lg py-4">XD</div>
                        <div className="bg-blue-800 rounded-lg py-4">XD</div>
                    </div> */}
                    <div className="flex items-center gap-4">
                        <Link href="https://www.tiktok.com/@inb2.b?_t=ZM-8y6jhmFvG5d&_r=1" target="_blank" rel="noopener noreferrer">
                            <FaTiktok size={22} color="white"/>
                        </Link>
                        <Link href="https://www.instagram.com/inb2.b?igsh=MW9ucXF1M2hnN2x1" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={22} color="white"/>
                        </Link>
                    </div>
                </div>
                
            </div>
            <p className="text-3xl font-in-avantgarde md:text-4xl max-w-2xl font-bold text-white pb-8">Transforma tu idea en un negocios de salud rentable con INB2B</p>
            <div className="w-full max-w-7xl px-4 h-0.5 bg-in-gray-text"></div>
            <div className="flex items-center justify-between py-6">
                <Image 
                    src="/svg/logo-inb2b.svg"
                    alt="logo"
                    width={100}
                    height={50}
                />
                <p className="text-xs text-in-gray-text">© 2025 INB2B</p>
            </div>
        </footer>
    </div>
  )
}
