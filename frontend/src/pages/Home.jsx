import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import DashboardGrid from '../components/DashboardGrid';
import LatestUpdates from '../components/LatestUpdates';
import TeachingsSection from '../components/TeachingsSection';
import MediaLibrary from '../components/MediaLibrary';
import Infrastructure from '../components/Infrastructure';
import Branches from '../components/Branches';

// Reusable orange line divider
const SectionDivider = () => (
  <div className="max-w-7xl mx-auto px-4 my-2 relative z-10">
    <div className="h-px w-full bg-orange-200/80"></div>
  </div>
);

export default function Home() {
  return (
    <main className="relative z-10 pb-10">
      <HeroCarousel />
      
      <DashboardGrid />
      
      <SectionDivider />
      <LatestUpdates />
      
      <TeachingsSection />
      
      <SectionDivider />
      <MediaLibrary />
      <br />
      
      <SectionDivider />
      <Infrastructure />
      <br />
      
      <SectionDivider />
      <Branches />
    </main>
  );
}