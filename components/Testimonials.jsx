import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

// import components
import TestimonialSlider from './TestimonialSlider'

const Testimonials = () => {
  return (
    <section id='testimonials' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2
            className={`${playfair.className} section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block`}
          >
            What other people say
          </h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            suscipit officia non a ipsum beatae vel ipsa est ratione nisi!
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  )
}
export default Testimonials
