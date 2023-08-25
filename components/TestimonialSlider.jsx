'use client'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

// import swiper react comp
import { Swiper, SwiperSlide } from 'swiper/react'

//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import './swiper.css'

import { Autoplay, Pagination } from 'swiper/modules'

// import required modules
import { testimonials } from '@/constants'
import Image from 'next/image'

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorPosition, authorName, authorText } = item
          return (
            <SwiperSlide key={index}>
              <div className='flex flex-col lg:flex-row gap-12 lg:gap-32 mb-12 lg:mb-0'>
                <div className='w-48 h-48 lg:w-[328px] lg:h-[328px]'>
                  <Image className='rounded-2xl' src={authorImg} alt='' />
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
