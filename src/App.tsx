import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesPricing } from './components/ServicesPricing';
import { ProcessSection } from './components/ProcessSection';
import { ExampleProjects } from './components/ExampleProjects';
import { LeadCaptureSection } from './components/LeadCaptureSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ServicePackage } from './types';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | null>(null);

  const handleSelectService = (pkg: ServicePackage) => {
    setSelectedPackage(pkg);
  };

  return (
    <div className="min-h-screen bg-[#E7E4DE] text-[#222222] flex flex-col font-sans selection:bg-[#23374D] selection:text-white">
      {/* 1. Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Services and pricing combined: "Simple services. Clear prices." */}
        <ServicesPricing onSelectService={handleSelectService} />

        {/* 4. Three-step process */}
        <ProcessSection />

        {/* 5. Two simple example projects */}
        <ExampleProjects />

        {/* 6. Contact form with preselected service package */}
        <LeadCaptureSection selectedPackage={selectedPackage} />

        {/* 7. Three short FAQs */}
        <FaqSection />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
