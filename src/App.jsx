// App.jsx
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Divider from './components/sections/divider'
import ProjectsSection from './components/sections/ProjectsSection'
import Footer from './components/layout/Footer'
import IntroV3 from './components/sections/IntroV3'
import ProjectPage from './pages/ProjectPage'
import AboutSection from './components/sections/AboutSection'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-['Geist_Mono'] cursor-crosshair">
      <Routes>
        {/* Home (index) */}
        <Route
          index
          element={
            <>
              <Navbar />
              <main className="w-full flex flex-col relative top-0 lg:top-0">
                <IntroV3 />
                <Divider text="projects" backgroundColor="bg-stone-900" />
                <ProjectsSection />
                <Divider text="about" backgroundColor="bg-stone-900" />
                <AboutSection />
                <Footer />
              </main>
            </>
          }
        />

        {/* Project page(s) */}
        <Route
          path="project/kikkerland"
          element={
            <ProjectPage
              projectName="Kikkerland"
              projectAbout="Highlighting projects designed and developed for Kikkerland's Spring and Fall 2025 collections."
              projectMainImg='CB1.jpg'
              tags={['Fusion 360', '3D Scanning', 'Rhino 8', 'Adobe Illustrator', 'CMF', 'Spec Sheets', '3D Prototyping']}
              subprojects={[
                { id: 1, title: 'Catnip Bubbles', description: 'Design and development of injection-molded plastic item in two skews.', images: ['CB1.jpg', 'CB2.jpg', 'CB3.jpg'] },
                { id: 2, title: 'Mini Flower Press', description: 'A pocket-sized flower press for nature lovers, featuring an innovative accordion-style design.', images: ['FP1.jpg', 'FP2.jpg', 'FP3.jpg', 'FP4.jpg']},
                { id: 3, title: 'Spray n Play', description: 'Catnip-infused wool balls that will drive your cat crazy. Original design by Donald Corey.', images: ['SP1.jpg', 'SP2.jpg', 'SP3.png'] },
                { id: 4, title: 'Cat Lady Magnets', description: 'Designed by Mone Misawa. Role: creation of production material through 3D scanning and CAD.', images: ['CLM1.jpg', 'CLM2.jpg', 'CLM3.jpg', 'CLM4.jpg', 'CLM5.jpg', 'CLM6.jpg'] }
              ]}
            />
          }
        />

        {/* Fallback: redirect anything unknown to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
