// import social data
import { social } from '@/constants'
import Link from 'next/link'

const Socials = () => {
  return (
    <ul className='flex space-x-6'>
      {social.map((item, index) => {
        return (
          <li
            className='flex justify-center items-center text-accent'
            key={index}
          >
            <Link className='text-base ' href={item.href}>
              {item.icon}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
export default Socials
