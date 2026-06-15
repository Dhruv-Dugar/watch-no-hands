import { useState, useEffect } from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-brand-void overflow-hidden flex flex-col items-center justify-center">

      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-void/60 z-10"></div>
        {/* Replace with actual video tag when asset is generated via Gemini */}
        <div className="w-full h-full bg-[#050506] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-void via-brand-obsidian to-[#111112] animate-[pulse_10s_ease-in-out_infinite]"></div>

          <div className="z-10 font-sans text-brand-steel/30 text-xs tracking-widest uppercase border border-brand-steel/10 px-8 py-4 rounded-sm backdrop-blur-md">
            [ Placeholder: Luxury Lifestyle Motion Graphic ]
          </div>
        </div>
      </div>

      {/* Hero Content Overlay */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center justify-between h-full py-32 text-center">

        {/* Top Header */}
        <div className="flex flex-col items-center opacity-0 animate-[fadeIn_2s_ease-out_0.5s_forwards]">
          <div className="w-px h-16 bg-brand-gold mb-8"></div>
          <p className="font-sans text-brand-gold text-[9px] uppercase tracking-[0.5em] mb-4">
            Allocation limit: 12 pieces
          </p>
        </div>

        {/* Center Title */}
        <div className="flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-8xl lg:text-[9rem] text-brand-platinum tracking-widest opacity-0 animate-[fadeIn_3s_ease-out_1s_forwards] leading-none mb-6 drop-shadow-2xl">
            L'ABSENCE
          </h1>
          <p className="font-sans text-brand-platinum/70 text-xs md:text-sm uppercase tracking-[0.4em] max-w-lg opacity-0 animate-[fadeIn_2s_ease-out_2s_forwards] leading-loose">
            You do not set meetings. Meetings form everywhere around you go.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center opacity-0 animate-[fadeIn_2s_ease-out_3s_forwards]">
          <a href="#inquest" className="group flex flex-row items-center border border-brand-gold/30 hover:border-brand-gold bg-brand-void/50 backdrop-blur-md px-12 py-5 transition-all duration-500">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold group-hover:text-white transition-colors duration-300">
              Submit Dossier
            </span>
          </a>
        </div>

      </div>

    </section>
  );
};

export default Hero;
