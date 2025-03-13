"use client";
import React, { useRef } from 'react';
import Header from './components/header';
import Banner from './components/banner';
import About from './components//about'
import Services from './components/services';
import Parallax from './components/parallax';
import Studies from './components/studies';
import Careers from './components/careers';
import Partners from './components/partners';
import Footer from './components/footer';


const page = () => {

  return (
    <>
     <Header/>
      <main>
        <Banner/>
        <About/>
        <Services/>
        <Parallax />
        <Studies/>
        <Careers />
        <Partners />
      </main>
      <Footer />
    </>
  )
}

export default page
