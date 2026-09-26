import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemComparison } from './components/ProblemComparison';
import { KeyFeatures } from './components/KeyFeatures';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { MunicipalHeatmap } from './components/MunicipalHeatmap';
import { TargetAudience } from './components/TargetAudience';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar
        onOpenSimulator={() => scrollToSection('simulator')}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section with Name, Acronym & verbatim annotation under 200 chars */}
        <Hero
          onScrollToFeatures={() => scrollToSection('features')}
          onScrollToSimulator={() => scrollToSection('simulator')}
        />

        {/* 2. The Problem: Current systems breakdown & 15m vs 30s comparison */}
        <ProblemComparison />

        {/* 3. Key Features: AI Deduplication, AI Categorization, Voting & Heatmap */}
        <KeyFeatures />

        {/* Live Working Interactive Simulator */}
        <InteractiveSimulator />

        {/* Municipal Heatmap Dashboard */}
        <MunicipalHeatmap />

        {/* 4. Target Audience: Citizens vs. Local Governments + Savings Calculator */}
        <TargetAudience />
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}
