import React from 'react'
import Image from 'next/image'
type Props = {}



function Skills({}: Props) {
  const skills=[
    'javascript',
    'css',
    'firebase',
    'git',
    'html',
    'jquery',
    'react',
    'vscode'
  ]
  return (
    <section className=' mx-auto text-textDark my-4'>
        <h1 className='title'>Skills</h1>
        <ul className='grid grid-cols-4 gap-7 my-8'>
          {skills.map(skill=>
            <li className='text-center'>
                <Image src={`/images/skills/${skill}.svg`} height={50} width={50} />
                <p className=' text-textWhite text-xs capitalize'>{skill}</p>
            </li>
            )}
        </ul>
    </section>
  )
}

export default Skills