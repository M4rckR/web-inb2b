import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const HeroNav = () => {
  return (
    <div className='max-w-7xl fixed left-1/2 -translate-x-1/2 top-6 z-20 mx-auto px-10 container bg-white/40 backdrop-blur-xl shadow-lg rounded-3xl'>
        <nav className='flex justify-between items-center py-6 text-white font-in-poppins'>
            <div className='flex gap-6'>
                <Link href="/">Nosotros</Link>
                <Link href="/">Servicios</Link>
                <Link href="/">Unete al equipo</Link>
            </div>
            <Image src="/svg/logo-inb2b.svg" alt="Logo" width={151} height={50} />
            <div className='flex items-center gap-6'>
                <Link href="/">InAcademy</Link>
                <Link href="/">Health Business Club</Link>
                <Link className='bg-in-cyan text-white px-8 py-2 rounded-full transition-all duration-300 hover:bg-in-cyan/80' href="/">Contactanos</Link>
            </div>
        </nav>
    </div>
  )
}
