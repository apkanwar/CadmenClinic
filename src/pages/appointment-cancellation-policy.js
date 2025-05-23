import { NextSeo } from 'next-seo'

const AppointmentCancellationPolicy = () => (
  <>
    <NextSeo
      title='Our Appointment Cancellation Policy | CADMEN Clinic'
      description='Learn about our appointment cancellation policy, including notice requirements and potential fees, to ensure a smooth experience. Learn more.'
      canonical='https://www.cadmenclinic.ca/appointment-cancellation-policy'
      openGraph={{
        title: 'Our Appointment Cancellation Policy | CADMEN Clinic',
        description:
          'Learn about our appointment cancellation policy, including notice requirements and potential fees, to ensure a smooth experience. Learn more.',
        url: 'https://www.cadmenclinic.ca/appointment-cancellation-policy',
        site_name: 'CADMEN Clinic'
      }}
    />
    <section>
      <article className='prose mx-auto px-5 py-32 lg:prose-xl'>
        <h1 className='entry-title'>Appointment Cancellation Policy</h1>
        <p>
          Please provide a 48-hour notice for cancellations. Failing to cancel
          or reschedule within this timeframe may lead to a $25 cancellation
          fee.
        </p>
        <p>
          We kindly ask guests to arrive 15 minutes ahead of their scheduled
          time.
        </p>
        <p>
          If you&apos;re over 15 minutes late, you might need to either reschedule or
          select a different service.
        </p>
        <p>
          Purchases made at CADMEN Clinic are final. Gratuities are only
          accepted for non-medical procedures. This means you can tip our
          Estheticians, Spa Therapists, and Guest Experience Specialists. Tips
          are a token of appreciation and not obligatory, but they&apos;re always
          welcomed for exceptional service!
        </p>
      </article>
    </section>
  </>
)

export default AppointmentCancellationPolicy
