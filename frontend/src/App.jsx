import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Components (These show on EVERY page)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingOms from './components/FloatingOms';
import VisitorCounter from './components/VisitorCounter';

// Pages
import Home from './pages/Home';
import GenericPage from './pages/GenericPage';
import AsramamHistory from './pages/AsramamHistory'; 
import FounderProfile from './pages/FounderProfile';
import DailySchedule from './pages/DailySchedule';
import DevoteeAccommodation from './pages/DevoteeAccommodation'; 
import Goshala from './pages/Goshala';
import JagadambaMahadevi from './pages/JagadambaMahadevi';
import MuraliKrishna from './pages/MuraliKrishna';
import BhagavanDattatreya from './pages/BhagavanDattatreya';
import BhagavanSatyanarayanaSwami from './pages/BhagavanSatyanarayanaSwami';
import HanumatSametaSitaRamaLakshman from './pages/HanumatSametaSitaRamaLakshman';
import SriLakshmiGanapathiSwami from './pages/SriLakshmiGanapathiSwami';
import SriGowriShankarMandir from './pages/SriGowriShankarMandir'; 
import DhyanaMandir from './pages/DhyanaMandir';
import VenkaMambaSamadhi from './pages/VenkaMambaSamadhi'; 
import AdhistanaMandiram from './pages/AdhistanaMandiram';
import DarshanTimings from './pages/DarshanTimings';
import SpiritualBooks from './pages/SpiritualBooks'; 
import AudioArchives from './pages/AudioArchives'; 
import ViswaMimamsaMagazine from './pages/ViswaMimamsaMagazine';
import Committees from './pages/Committees';
import RouteMap from './pages/RouteMap';
import AllAsramamImages from './pages/AllAsramamImages';
import MaharshiAnnaprasadam from './pages/MaharshiAnnaprasadam';
import SriTarakeswara from './pages/SriTarakeswara';
import UpcomingFestivals from './pages/UpcomingFestivals';
import EHundi from './pages/EHundi';
import AnnadanamTrust from './pages/AnnadanamTrust';
import GosalaTrust from './pages/GosalaTrust';
import ContactUs from './pages/ContactUs';
import Lineage from './pages/Lineage';
import Philosophy from './pages/Philosophy';
import VideoDiscourses from './pages/VideoDiscourses';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative font-sans flex flex-col">
        
        {/* Global Background Elements & Header */}
        <FloatingOms /> 
        <Navbar />
        
        {/* Main Content Area */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/asramam-history" element={<AsramamHistory />} />
            <Route path="/founder-profile" element={<FounderProfile />} />
            <Route path="/daily-schedule" element={<DailySchedule />} />
            <Route path="/devotee-accommodation" element={<DevoteeAccommodation />} />
            <Route path="/goshala-(cow-shelter)" element={<Goshala />} />
            <Route path="/jagadamba-mahadevi" element={<JagadambaMahadevi />} />
            <Route path="/bhagavan-murali-krishna" element={<MuraliKrishna />} />
            <Route path="/bhagavan-dattatreya" element={<BhagavanDattatreya />} />
            <Route path="/bhagavan-satyanarayana-swami" element={<BhagavanSatyanarayanaSwami />} />
            <Route path="/hanumat-sameta-sita-rama-lakshman" element={<HanumatSametaSitaRamaLakshman />} />
            <Route path="/sri-lakshmi-ganapathi-swami" element={<SriLakshmiGanapathiSwami />} />
            <Route path="/sri-gowri-shankar-mandir" element={<SriGowriShankarMandir />} />
            <Route path="/dhyana-mandir" element={<DhyanaMandir />} />
            <Route path="/venka-mamba-samadhi-(bhakthuralu)" element={<VenkaMambaSamadhi />} />
            <Route path="/about-the-mandiram" element={<AdhistanaMandiram />} />
            <Route path="/darshan-timings" element={<DarshanTimings />} />
            <Route path="/spiritual-books" element={<SpiritualBooks />} />
            <Route path="/audio-archives" element={<AudioArchives />} />
            <Route path="/sri-viswa-mimamsa-monthly-(magazine)" element={<ViswaMimamsaMagazine />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/route-map" element={<RouteMap />} />
            <Route path="/all-asramam-images" element={<AllAsramamImages />} />
            <Route path="/:pageName" element={<GenericPage />} />
            <Route path="/maharshi-annaprasadam" element={<MaharshiAnnaprasadam />} />
            <Route path="/sri-tarakeswara-swami" element={<SriTarakeswara />} />
            <Route path="/upcoming-festivals" element={<UpcomingFestivals />} />
            <Route path="/e-hundi" element={<EHundi />} />
            <Route path="/annadanam-trust" element={<AnnadanamTrust />} />
            <Route path="/gosala-trust" element={<GosalaTrust />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/lineage-(peethadhipatulu)" element={<Lineage />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/video-discourses" element={<VideoDiscourses />} />
          </Routes>

        </div>

        {/* Global Footer Components */}
        <VisitorCounter />
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;