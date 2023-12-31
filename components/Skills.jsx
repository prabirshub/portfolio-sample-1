// import skills data
import { skills } from '@/constants'
import Image from 'next/image'

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-8 md:grid-flow-row'>
          {skills.map((skill, index) => {
            return (
              <div className='flex items-center justify-center' key={index}>
                <Image src={skill.image} alt='skils' />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default Skills
