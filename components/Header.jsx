'use client'

import Link from 'next/link'
import Image from 'next/image'

// Import components
import { useEffect, useState } from 'react'
import Nav from './Nav'
import NavMobile from './NavMobile'
import Socials from './Socials'

const Header = () => {
  const [bg, setBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })
  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-50 transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        <Link href='/'>
          <Image
            src='/assets/img/logo2.svg'
            width={172}
            height={35}
            alt='company logo'
          />
        </Link>
        {/* nav */}
        <div className='hidden lg:block'>
          <Nav />
        </div>
        {/* socials */}
        <div className='hidden lg:block'>
          <Socials />
        </div>
        {/* nav mobile */}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  )
}
export default Header
