import React, { ReactElement } from 'react'

type Props = {}

const Navbar = (props: Props) => {
  const navLinks=[
    'About',
    'Projects',
    'Contact'
  ]
  return (
    <section className='flex justify-between items-center overflow-hidden py-2 bg-gradient-to-b from-black via-black sticky top-0 text-textDark'>
    <img className='h-16 w-16 scale-125' src='/images/icon.png' alt='icon' />
    <ul className='flex items-center pr-4'>
    {navLinks.map((link,i)=>
      <a key={i}><li className='cursor-pointer hover:text-textBlue transition-colors duration-150 group px-4'><text className='font-bold text-textBlue font-mono group-hover:text-textDark duration-150 transition-colors'>0{i+1}.</text><text>{link}</text></li></a>
    )}
    <li>
      <a target='_blank' rel='noreferrer' href="https://drive.google.com/file/d/1QesAw0MQ0Te84yuPx1ohSSCTm4SjBehV/view"><button className='py-2 px-3 border-2 border-textBlue text-textBlue font-bold rounded-md hover:text-textWhite transition-colors duration-300 hover:bg-textBlue'>Resume</button></a>
    </li>
    </ul>
    </section>
  )
}

export default Navbar