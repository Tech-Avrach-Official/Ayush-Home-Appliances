import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import Contact from './components/Contact'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <WhyChooseUs/>
      <Testimonials/>
     <div className='px-2'>
       <CallToAction/>
     </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
