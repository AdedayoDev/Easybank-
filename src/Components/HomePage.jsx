import React from 'react'
import Hero from './Hero'
import LatestArticles, { HowItWorks } from './LatestArticles'
import Banner from './Banner'


const HomePage = () => {
  return (
    <section>
      <Hero/>
      <LatestArticles/>
      <HowItWorks/>
      <Banner/>
    </section>
  )
}

export default HomePage
