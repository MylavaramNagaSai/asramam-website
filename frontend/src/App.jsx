import Navbar from './components/Navbar'
import FloatingOms from './components/FloatingOms'
import HeroCarousel from './components/HeroCarousel'
import DashboardGrid from './components/DashboardGrid'
import LatestUpdates from './components/LatestUpdates'
import TeachingsSection from './components/TeachingsSection'
import MediaLibrary from './components/MediaLibrary'
import Infrastructure from './components/Infrastructure'
import Branches from './components/Branches'
import Footer from './components/Footer'

// We create a reusable orange line divider right here
const SectionDivider = () => (
  <div className="max-w-7xl mx-auto px-4 my-2 relative z-10">
    <div className="h-px w-full bg-orange-200/80"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-[#FFFBF7] relative">
      <FloatingOms /> 
      <Navbar />
      
      <main className="relative z-10 pb-10">
        <HeroCarousel />
        
        <DashboardGrid />
        
        <SectionDivider />
        <LatestUpdates />
        
       
        <TeachingsSection />
        <SectionDivider />
        <MediaLibrary />
        <br></br>
        <SectionDivider />
        <Infrastructure />
        <br></br>
        <SectionDivider />
        <Branches />
        
      </main>

      <Footer />
    </div>
  )
}

export default App