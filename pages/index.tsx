import type { NextPage } from 'next'
import Head from 'next/head'
import Aboutme from '../components/Aboutme'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Skills from '../components/skills'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&display=swap" rel="stylesheet"/>  
    </Head>
  return (
    <div>
      <Navbar />
      <main className='mx-auto w-[93%] px-4 lg:w-3/4'>
      <Header />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
    </div>
  )

}

export default Home
