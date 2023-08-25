// import socials data
import { social } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          {/* social icons */}
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { icon, href } = item
              return (
                <Link className='text-accent text-base' key={index} href={href}>
                  {icon}
                </Link>
              )
            })}
          </div>

          {/* logo */}
          <div>
            <Image
              src='/assets/img/logo2.svg'
              width={172}
              height={35}
              alt='company logo'
            />
          </div>
          {/* copyright */}
          <p>&copy; 2023 Prabir Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
