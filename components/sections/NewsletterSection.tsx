import EmailForm from '../EmailForm'

export default function NewsletterSection() {
    return (
        <section className='px-5 py-[5vh] md:px-[6vw] lg:px-[12vw] bg-[--clr-blue-base] flex flex-row gap-20 items-center'>
          <div>
            <h2 className='ft-cooper text-white'>Subscribe to our newsletter coming September 2024.</h2>
            
          </div>
          <div>
          <EmailForm/>
          </div>
        </section>
    )
}