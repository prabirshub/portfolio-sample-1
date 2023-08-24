import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
// import components
import Projects from './Projects'
const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2
            className={`${playfair.className} section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block`}
          >
            My latest work
          </h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque
            quod rerum nulla obcaecati quibusdam quam reprehenderit illo neque
            asperiores.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  )
}
export default Portfolio
