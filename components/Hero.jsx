import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

import Image from 'next/image'
import BackgroundDesign from './BackroundDesign'

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          {/* left side */}
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent mb-[22px]'>
              Hey, I&apos;m Prabir <span className=''>👋</span>
            </p>
            <h1
              className={`${playfair.className} text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]`}
            >
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit
              tenetur quis exercitationem?
            </p>
            <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'>
              Work with me
            </button>
          </div>
          {/* right side */}
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <BackgroundDesign className='absolute left-[72%] xl:left-[63%] top-4 h-[810px] w-[810px] -translate-x-1/3 stroke-gray-800/40 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:top-36 xl:ml-0' />
            {/* <BackgroundDesign /> */}
            <Image
              src={'/assets/img/pk.png'}
              width={530}
              height={600}
              alt='prabir'
              className='realtive z-10'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
