import React from 'react'
import { HeroSection } from './homepage-content/HeroSection'
import { BoostiveFeature } from './homepage-content/BoostiveFeature'
import { TipsSection } from './homepage-content/TipsSection'

export const Homepage = () => {
  return (
    <div>
        <HeroSection />
        <BoostiveFeature />
        <TipsSection />
    </div>
  )
}
