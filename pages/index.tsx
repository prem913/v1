import type { NextPage } from "next";
import Head from "next/head";
import Aboutme from "../components/Aboutme";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/skills";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Premchand</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <div>
        <Navbar />
        <main className="mx-auto w-[93%] px-4 lg:w-3/4">
          <Header />
          <Aboutme />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Home;
