import React from 'react'

const ContactForm = (): JSX.Element => {
  function submitHandler(e: React.FormEvent): void {
    e.preventDefault()
  }

  return (
    <form className="pr-20" onSubmit={submitHandler}>
      <label htmlFor="fname">Name</label>
      <br />
      <input
        className="mb-3 bg-black appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none"
        mb-10
        type="text"
        id="name"
        name="name"
      />
      <br />
      <label htmlFor="fname">E-Mail</label>
      <br />
      <input
        className="mb-3 bg-black appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none"
        type="email"
        id="email"
        name="email"
      />
      <br />
      <label htmlFor="fname">Phone</label>
      <br />
      <input
        className="mb-3 bg-black appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none"
        type="phone"
        id="phone"
        name="phone"
      />
      <br />
      <label className="" htmlFor="text">
        Text
      </label>
      <br />
      <textarea
        className="mb-3 bg-black appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none"
        id="text"
        name="text"
      />
      <br />
      <input
        className="mb-3 bg-black appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none"
        type="submit"
        value="Senden"
      />
    </form>
  )
}

export default ContactForm
