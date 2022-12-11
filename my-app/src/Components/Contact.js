import React from 'react'


const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <section name="contact" className="contact">
    <div className="container mt-5">
      <h1>Contact</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="contact__label" htmlFor="name">
            Name
          </label>
          <input className="contact__control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="contact__label" htmlFor="email">
            Email
          </label>
          <input className="contact__control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="contact__label" htmlFor="message">
            Message
          </label>
          <textarea className="contact__control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
    </section>
  )
}
export default Contact;