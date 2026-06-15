import { useState, useEffect } from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-brand-void overflow-hidden flex items-center justify-center">

      {/* Deep black background with sweeping cinematic light */}
      <div className="absolute inset-0 z-0">
        <div className="w-[200%] h-[200%] absolute -top-1/2 -left-1/2 bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#1a1a1a_50%,#000000_100%)] animate-[spin_15s_linear_infinite] opacity-40 mix-blend-screen"></div>
        <div className="absolute inset-0 bg-brand-void/80 backdrop-blur-[100px]"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center mt-12 mix-blend-difference">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[12rem] text-white tracking-tighter opacity-0 animate-[fadeIn_3s_ease-out_1s_forwards] leading-none mix-blend-overlay">
          L'ABSENCE
        </h1>
      </div>

      {/* The Silhouette Watch */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] opacity-0 animate-[fadeIn_4s_ease-in-out_2s_forwards]">
        {/* Ring reflection */}
        <div className="absolute inset-0 rounded-full border border-white/5 shadow-[inset_0_0_100px_rgba(255,255,255,0.02)] overflow-hidden">
           {/* Sweeping glare across the dial */}
           <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-brand-platinum/10 to-transparent w-[300%] h-[300%] animate-[sweep_8s_ease-in-out_infinite]"></div>
        </div>

        {/* Pitch black dial */}
        <div className="absolute inset-2 md:inset-4 rounded-full bg-brand-void border border-black/50 shadow-[0_0_50px_rgba(0,0,0,1)]"></div>

        {/* The single gold element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 md:w-2 md:h-2 rounded-full bg-brand-gold shadow-[0_0_20px_#C5A880]"></div>
      </div>

      {/* CTA Bottom */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 opacity-0 animate-[fadeIn_2s_ease-in-out_3s_forwards]">
        <a href="#inquest" className="group flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold/70 mb-3 font-semibold group-hover:text-brand-gold transition-colors duration-300">Enter</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand-gold/50 to-transparent group-hover:h-16 group-hover:from-brand-gold transition-all duration-500"></div>
        </a>
      </div>

      <style>{`
        @keyframes sweep {
          0% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
          50% { transform: translateX(-10%) translateY(-10%) rotate(180deg); }
          100% { transform: translateX(-50%) translateY(-50%) rotate(360deg); }
        }
      `}</style>

    </section>
  );
};

export default Hero;
