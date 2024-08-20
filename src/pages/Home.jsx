import React from 'react'
import HomeBanner from '@/components/Home/HomeBanner'
import TechSection from '@/components/Home/TechSection'
import ProjectGallery from '@/components/projects/ProjectGallery'
function Home() {
  return (
    <div>
      <HomeBanner />
      <ProjectGallery />
      <TechSection />
      
      
    </div>
  )
}

export default Home