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
