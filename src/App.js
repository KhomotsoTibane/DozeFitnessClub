import React from 'react'
import Hero from './components/Hero/Hero'
import JoinUs from './components/JoinUs/JoinUs'
import Plans from './components/Plans/Plans'
import Programs from './components/Programs/Programs'
import Reasons from './components/Reasons/Reasons'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'

const App = () => {
  return (
    <div className='app'>
      <Hero />
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <JoinUs/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
}

export default App