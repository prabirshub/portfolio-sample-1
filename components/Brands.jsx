// import brands data
import { brands } from '@/constants'
import Image from 'next/image'

const Brands = () => {
  return (
    <section className='min-h-[146px] bg-tertiary flex items-center'>
      <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'>
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <Image src={brand.img} alt='' className='p-2' />
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Brands
