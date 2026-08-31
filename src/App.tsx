import React from 'react';
import { ImageSlotProvider } from './context/ImageSlotContext';
import { NavigationRail } from './components/NavigationRail';
import { HeroSection } from './components/HeroSection';
import { ConceptGenesisSection } from './components/ConceptGenesisSection';
import { InteractiveStudyWorkspace } from './components/InteractiveStudyWorkspace';
import { ExplodedAssemblySection } from './components/ExplodedAssemblySection';
import { IterationChronicle } from './components/IterationChronicle';
import { MaterialCraftLab } from './components/MaterialCraftLab';
import { SpecificationSheet } from './components/SpecificationSheet';

export default function App() {
  return (
    <ImageSlotProvider>
      <div className="min-h-screen bg-[#EDE9E0] text-[#221F1A] selection:bg-[#8A4E28] selection:text-[#EDE9E0] relative">
        {/* Fixed Navigation Rail for larger screens */}
        <NavigationRail />

        {/* Main Content Area */}
        <main className="w-full lg:pl-16">
          <HeroSection />
          <ConceptGenesisSection />
          <InteractiveStudyWorkspace />
          <ExplodedAssemblySection />
          <IterationChronicle />
          <MaterialCraftLab />
          <SpecificationSheet />
        </main>
      </div>
    </ImageSlotProvider>
  );
}
