import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ContributorsSection from '../components/ContributorsSection'
import WhatWeDo from '../components/WhatWeDo'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <ContributorsSection/>
      <WhatWeDo/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default Home
