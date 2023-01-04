import React, { useEffect } from 'react'
import Image from 'next/image'
import useElementOnScreen from '../hooks/useElementOnScreen'
import anime from 'animejs'
type Props = {}

function Skills({}: Props) {
                                                                                                                                                                                                                                                                                                   
  const {containerRef:cardRef,isVisible,ratio} = useElementOnScreen({
    callback:()=>{
      const animation=anime({
        targets:'.skills',
        opacity:[0,1],
        translateY:['40%',0],
        duration:1000,
        easing:'cubicBezier(.5, .05, .1, .3)',
        autoplay:false
      })
      console.log(animation.duration*ratio)
        animation.seek(animation.duration*ratio)
          console.log(ratio)
    }
  });
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
    <section ref={cardRef} className='skills mx-auto text-textDark my-4'>
        <h1 className='title'>Skills</h1>
        <ul className='grid grid-cols-4 gap-7 my-8'>
          {skills.map(skill=>
            <li key={skill} className='text-center'>
                <Image alt={skill} src={`/images/skills/${skill}.svg`} height={50} width={50} />
                <p className=' text-textWhite text-xs capitalize'>{skill}</p>
            </li>
            )}
        </ul>
    </section>
  )
}

export default Skills