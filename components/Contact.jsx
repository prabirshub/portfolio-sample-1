import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

// import contact data
import { contact } from '@/constants'

const Contact = () => {
  return (
    <section id='contact' className='section bg-primary'>
      <div className='container mx-auto'>
        {/* section title */}
        <div className='flex flex-col items-center text-center'>
          <h2
            className={`${playfair.className} section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block`}
          >
            Contact me
          </h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            accusamus vero enim corrupti ullam consequatur porro ad assumenda
            esse officiis!
          </p>
        </div>
        <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
          {/* Contact Info */}
          <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item

              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className={`${playfair.className} text-xl mb-1`}>
                      {title}
                    </h4>
                    <p className='mb-1'>{subtitle}</p>
                    <p className='text-accent'>{description}</p>
                  </div>
                </div>
              )
            })}
          </div>
          {/* contact form */}
          <form className='space-y-8 w-full max-w-[780px]'>
            <div className='flex gap-8'>
              <input className='input' type='text' placeholder='Your name' />
              <input className='input' type='email' placeholder='Your email' />
            </div>
            <input type='text' className='input ' placeholder='Subject' />
            <textarea
              className='textarea'
              placeholder='Your message'
            ></textarea>
            <button className='btn btn-lg bg-accent hover:bg-accent-hover'>
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Contact
