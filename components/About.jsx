import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

// import image
import aboutImg from '../public/assets/img/about.png'
import Image from 'next/image'

const About = () => {
  return (
    <section id='about' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <Image
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={aboutImg}
            alt='Prabir Singh'
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2
                className={`${playfair.className} text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block`}
              >
                Prabir Singh
              </h2>
              <p className='mb-4 text-accent'>Freelance Web Developer</p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur consequuntur atque quos blanditiis id deserunt natus
                eaque aperiam vitae pariatur. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, repellat.
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
