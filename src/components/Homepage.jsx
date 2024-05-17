import React from 'react'
import { HeroHomepage } from './homepage-content/HeroHomepage'
import { BoostiveFeature } from './homepage-content/BoostiveFeature'
import { TipsSection } from './homepage-content/TipsSection'

export const Homepage = () => {
  return (
    <div>
        <HeroHomepage />
        <BoostiveFeature />
        <section className='px-6 pb-12 md:px-12'>
          <h1 className='text-center text-1xl md:text-2xl xl:text-3xl font-bold tracking-tight mb-8'>Tim Capstone</h1>
          <TipsSection />
        </section>
    </div>
  )
}
