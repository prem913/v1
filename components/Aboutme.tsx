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
        <p className=' leading-loose text-justify'>
        Hello, my name is Premchand, a third-year student at the National Institute of Technology Raipur.
         I am a full-stack developer with a passion for coding and a strong interest in the field of IT.
         I have experience in web development, using technologies such as HTML, CSS, JavaScript, Node.js and Python.
          I am excited to continue building my skills and experience in the field, and am always looking for new challenges and opportunities to grow as a developer. 
          On this website, you will find a collection of my projects and accomplishments, showcasing my skills and abilities as a developer.
           Thank you for visiting my portfolio and I look forward to connecting with you.
           </p>
    </section>
  )
}

export default Aboutme