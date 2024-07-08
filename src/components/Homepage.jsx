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
          <TipsSection />
        </section>
    </div>
  )
}
