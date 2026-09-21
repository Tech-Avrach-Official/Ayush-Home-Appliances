import React from 'react'
import Navbar from '../../components/Navbar'
import ContactTop from './components/ContactTop'
import ContactDetail from './components/ContactDetails'
import Footer from '../../components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <ContactTop/>
      <ContactDetail/>
      <Footer/>
    </div>
  )
}

export default Contact
