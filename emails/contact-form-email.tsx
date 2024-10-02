interface ContactFormEmailProps {
  name: string
  email: string
  phone: string
  message: string
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  phone,
  message
}) => (
  <div className='flex flex-col gap-3'>
    <h1>Contact form submission</h1>
    <p>
      From <strong>{name}</strong> at {email}
      <br />
      <strong>phone:{phone}</strong>
    </p>
    <div>
      <h2>Message:</h2>
      <p>{message}</p>
    </div>
  </div>
)

export default ContactFormEmail
