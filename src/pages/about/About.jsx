import React from 'react'
import AboutTop from './components/AboutTop'
import Navbar from '../../components/Navbar'
import AboutSection from './components/AboutSection'
import OurStory from './components/OurStory'
import WhyChooseUs from '../home/components/WhyChooseUs'
import AboutCta from './components/AboutCta'
import Footer from '../../components/Footer'

const About = () => {
  return (
    <div>
        <Navbar/>
        <AboutTop/>
        <AboutSection/>
        <OurStory/>
        <WhyChooseUs/>
        <AboutCta/>
        <Footer/>
    </div>
  )
}

export default About
