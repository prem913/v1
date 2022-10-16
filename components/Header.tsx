import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <section className=' py-24'>
    <div className='text-center md:text-left md:w-3/4 space-y-6'>
      <h2 className=' text-2xl sm:text-3xl'>Hello , I am</h2>
      <h1 className=' text-4xl sm:text-5xl font-extrabold inline-block'>Premchand</h1>
      <b className=' text-textBlue text-6xl'>.</b>
      <p className=' text-textDark my-4 leading-relaxed text-justify'>
      I’m a student at National Institute of Technology Raipur with a keen interest in coding and passionate about creating interactive applications and experiences on the web.
      </p>
    </div>
    </section>
  )
}

export default Header