'use client'

import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

// import testimonils data
import { testimonials } from '@/constants'

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import '../app/swiper.css'

// import required modules
import { Autoplay, Pagination } from 'swiper'
import Image from 'next/image'

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        Pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={{ Autoplay, Pagination }}
        className='mySwiper'
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorPosition } = item
          return (
            <SwiperSlide key={index}>
              <div className='flex flex-col lg:flex-row gap-12 lg:gap-32'>
                <div className='w-48 h-48 lg:w-[328px] lg:h-[328px]'>
                  <Image src={authorImg} alt='' className='rounded-2xl' />
                </div>
                <div className='flex flex-col max-w-3xl'>
                  <h5
                    className={`${playfair.className} text-2xl mb-8 italic font-normal`}
                  >
                    {authorText}
                  </h5>
                  <div>
                    <p className='text-lg text-accent'>{authorName}</p>
                    <p>{authorPosition}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
export default TestimonialSlider
