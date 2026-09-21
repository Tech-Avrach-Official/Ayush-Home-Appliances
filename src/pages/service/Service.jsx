import React from 'react'
import Navbar from '../../components/Navbar'
import ServiceTop from './components/ServiceTop'
import ServicesOverview from './components/ServicesOverview'
import ServicesDetail from './components/ServicesDetail'
import AboutCta from '../about/components/AboutCta'
import Footer from '../../components/Footer'

const Service = () => {
  return (
    <div>
      <Navbar/>
      <ServiceTop/>
      <ServicesOverview/>
      <ServicesDetail/>
      <AboutCta/>
      <Footer/>
    </div>
  )
}

export default Service
