import React, { useEffect, useState } from 'react';

interface NavSection {
  id: string;
  num: string;
  label: string;
  labelArabic?: string;
}

const SECTIONS: NavSection[] = [
  { id: 'hero', num: '00', label: 'Index', labelArabic: 'المقدمة' },
  { id: 'concept', num: '01', label: 'Genesis', labelArabic: 'النشأة' },
  { id: 'workspace', num: '02', label: 'Interactive Study', labelArabic: 'الدراسة التفاعلية' },
  { id: 'exploded', num: '03', label: 'Assembly', labelArabic: 'التجميع والطبقات' },
  { id: 'iteration', num: '04', label: 'Chronicle', labelArabic: 'التطور والمراجعات' },
  { id: 'materials', num: '05', label: 'Craft Lab', labelArabic: 'المواد والحرفة' },
  { id: 'specs', num: '06', label: 'Specifications', labelArabic: 'المخطط والمواصفات' }
];

export const NavigationRail: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.35;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 bottom-0 w-16 hidden lg:flex flex-col items-center py-10 z-40 pointer-events-auto select-none"
      aria-label="Portfolio progress rail"
    >
      {/* Central continuous thread */}
      <div className="absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-px bg-[#221F1A]/15 pointer-events-none" />

      {/* Top Monogram */}
      <button
        onClick={() => scrollTo('hero')}
        className="relative z-10 w-9 h-9 rounded-full bg-[#E4DFD3] border border-[#221F1A]/20 flex items-center justify-center font-mono-plex text-xs font-semibold text-[#8A4E28] hover:border-[#8A4E28] hover:scale-105 transition-all shadow-xs mb-8"
        title="Scroll to top"
      >
        TH
      </button>

      {/* Section dots */}
      <div className="flex-1 flex flex-col justify-between items-center py-4 w-full">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <div key={sec.id} className="relative group flex items-center justify-center">
              <button
                onClick={() => scrollTo(sec.id)}
                className={`relative z-10 rounded-full transition-all duration-300 flex items-center justify-center ${
                  isActive
                    ? 'w-4 h-4 bg-[#8A4E28] ring-4 ring-[#8A4E28]/20 scale-110'
                    : 'w-2.5 h-2.5 bg-[#E4DFD3] border border-[#5B564C] hover:scale-125 hover:border-[#8A4E28]'
                }`}
                aria-label={`Jump to section ${sec.num} ${sec.label}`}
              />

              {/* Hover Tooltip Card */}
              <div className="absolute left-12 px-3 py-1.5 bg-[#221F1A] text-[#EDE9E0] rounded shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50 flex items-center gap-2 translate-x-1 group-hover:translate-x-2">
                <span className="font-mono-plex text-xs text-[#C59B27] font-semibold">{sec.num}</span>
                <span className="text-xs font-medium">{sec.label}</span>
                <span className="text-xs text-[#EDE9E0]/50 font-arabic border-l border-white/20 pl-2">{sec.labelArabic}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom chapter counter */}
      <div className="relative z-10 font-mono-plex text-[10px] text-[#5B564C] tracking-widest uppercase">
        {SECTIONS.find((s) => s.id === activeSection)?.num || '00'}
      </div>
    </nav>
  );
};
