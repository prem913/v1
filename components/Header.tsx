import anime from 'animejs'
import React, { useEffect, useRef } from 'react'
import {
  ExternalIcon,
  GitHubIcon,
  LinkedinIcon,
} from './icons'

type Props = {}

function Header({}: Props) {
  const titleRef=useRef<HTMLDivElement>(null)
  const gIconRef=useRef<HTMLAnchorElement>(null)
  const lIconRef=useRef<HTMLAnchorElement>(null)
  const resumeRef=useRef<HTMLAnchorElement>(null)
  useEffect(()=>{
    let animation;
    if(titleRef.current && gIconRef.current && lIconRef.current && resumeRef.current){
    
    animation=anime.timeline({
      duration:500,
      easing:'cubicBezier(.5, .05, .1, .3)'

    });
    animation
    .add({
      targets:[titleRef.current],
      opacity:[0,1],
      translateY:['-10%',0],
      delay:anime.stagger(200,{start:200}),
    })
    .add({
      targets:[gIconRef.current,lIconRef.current,resumeRef.current],
      opacity:[0,1],
      translateY:['40%',0],
      delay:anime.stagger(300),
    })

  }
  },[])
  return (
    <section className=' py-24'>
    <div ref={titleRef} className=' -translate-y-full opacity-0 text-center md:text-left md:w-3/4 space-y-6'>
      <h2 className=' text-2xl sm:text-3xl'>Hello , I am</h2>
      <h1 className=' text-4xl sm:text-5xl font-extrabold inline-block'>Premchand</h1>
      <b className=' text-textBlue text-6xl'>.</b>
      <p className=' text-textDark my-4 leading-relaxed text-justify'>
      I’m a student at National Institute of Technology Raipur with a keen interest in coding and passionate about creating interactive applications and experiences on the web.
      </p>
    </div>
    <div>
      <div className='flex mt-3 justify-center md:justify-start'>
        <a ref={gIconRef} href="https://github.com/prem913" title='Github' className='text-textDark h-5 w-5 p-2 mx-2 box-content hover:text-textBlue'>
          <GitHubIcon classes='h-full w-full' />
        </a>
        <a ref={lIconRef} href="https://www.linkedin.com/in/premchand-maddikuntla-23699b201/" title='Linkedin' className='text-textDark h-5 w-5 p-2 mx-2 box-content hover:text-textBlue'>
          <LinkedinIcon classes='h-full w-full' />
        </a>
      </div>
      <div className='flex justify-center md:hidden'>
        <a
        ref={resumeRef}
        className='py-2 font-light text-textBlue mx-auto flex items-center '
        href="https://drive.google.com/file/d/1QesAw0MQ0Te84yuPx1ohSSCTm4SjBehV/view">
          <p className='mx-1' >Resume</p>
          <ExternalIcon classes='h-4 w-4' />
        </a>
      </div>
    </div>
    </section>
  )
}

export default Header