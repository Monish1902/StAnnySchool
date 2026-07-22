import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Facilities } from './components/Facilities';
import { Curriculum } from './components/Curriculum';
import { Reviews } from './components/Reviews';
import { TimingsAndLocation } from './components/TimingsAndLocation';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Banner */}
        <Hero />

        {/* School Overview, Philosophy & History (Est. 1996) */}
        <Overview />

        {/* Campus Facilities (Medical, Washrooms, Science Labs, Sports) */}
        <Facilities />

        {/* Curriculum & Medium of Instruction */}
        <Curriculum />

        {/* Verified Parent Reviews & 4.1 Star Rating Showcase */}
        <Reviews />

        {/* Campus Location & Contact Details */}
        <TimingsAndLocation />
      </main>

      {/* Educational Footer */}
      <Footer />
    </div>
  );
}


