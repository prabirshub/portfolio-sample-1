'use client'

import { useState, useEffect } from 'react'

// import link
import { Link, animateScroll as scroll } from 'react-scroll'

// import icon
import { ChevronUpIcon } from '@heroicons/react/24/outline'
const BackToTopBtn = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false)
    })
  })

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className='bg-accent w-12 h-12 hover:bg-accent-hover text-white rounded-full fixed right-10 md:right-24 bottom-48 md:bottom-24 cursor-pointer flex justify-center items-center transition-all z-40'
      >
        <ChevronUpIcon className='w-6 h-6' />
      </button>
    )
  )
}
export default BackToTopBtn
