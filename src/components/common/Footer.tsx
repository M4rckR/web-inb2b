import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"

export const Footer = () => {
  return (
    <div className="bg-in-blue-main">
        <footer className="max-w-7xl mx-auto px-4 container font-in-poppins">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 pb-12">
                <div>
                    <p className="pb-4 text-in-gray-text">Servicios</p>
                    <div className="flex flex-col gap-2 text-white text-sm">
                        <Link href="#">
                            Asesoría Legal
                        </Link>
                        <Link href="#">
                            Health Hunting
                        </Link>
                        <Link href="#">
                            Gestión de Operaciones
                        </Link>
                        <Link href="#">
                            Expansión y crecimiento
                        </Link>
                        <Link href="#">
                            Transformación Digital
                        </Link>
                    </div>
                </div>
                <div>
                    <p className="pb-4 text-in-gray-text">Contacto</p>
                    <div className="flex flex-col gap-2 text-white text-sm">
                        <p>Lorem ipsum @exemple.com</p>
                        <p>+51 999 999 999</p>

                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-2 gap-4 pb-4">
                        <div className="bg-blue-800 rounded-lg col-span-2 py-4">XD</div>
                        <div className="bg-blue-800 rounded-lg py-4">XD</div>
                        <div className="bg-blue-800 rounded-lg py-4">XD</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="#">
                            <FaFacebookF size={22} color="white"/>
                        </Link>
                        <Link href="#">
                            <FaTiktok size={22} color="white"/>
                        </Link>
                        <Link href="#">
                            <FaInstagram size={22} color="white"/>
                        </Link>
                        <Link href="#">
                            <FaYoutube size={22} color="white"/>
                        </Link>
                    </div>
                </div>
                
            </div>
            <p className="text-3xl md:text-4xl font-in-lato max-w-2xl font-bold text-white pb-8">+70 proyectos, 3 países y 
            5 años transformando ideas </p>
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
