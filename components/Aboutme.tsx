import anime from 'animejs'
import React, { useEffect, useRef } from 'react'

type Props = {}

function Aboutme({}: Props) {
  const cardRef=useRef<HTMLElement>(null);
  useEffect(()=>{
    anime({
      targets:cardRef.current,
      opacity:[0,1],
      translateY:['100%',0],
      duration:1000,
      easing:'cubicBezier(.5, .05, .1, .3)'
    })
  },[])
  return (
    <section ref={cardRef} className=' text-textDark'>
        <h1 className='title'>ABOUT ME</h1>
          Hello !! Thanks for visiting my Portfolio. My name is Premchand and I am a student at NIT Raipur.
          <br /><br />
          While my experiences as an undergraduate have been diverse until this time. I found myself interested
          in coding and learned many different technologies in the world of web . I want to keep learning and build things 
          because its fun to me.
          <br /><br />
          Over a span of 2 years or so, I have accumulated different skills and experimented with different library, frameworks and languages
    </section>
  )
}

export default Aboutme