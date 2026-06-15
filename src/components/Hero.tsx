import { useState, useEffect } from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-brand-void overflow-hidden flex flex-col items-center justify-center">

      {/* Provocative Typographic Hero */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">

        <h1 className="font-serif text-5xl md:text-8xl lg:text-[10rem] text-brand-platinum tracking-tighter opacity-0 animate-[fadeIn_2s_ease-out_0.5s_forwards] leading-none mb-4">
          F*CK
        </h1>
        <h2 className="font-serif text-4xl md:text-7xl lg:text-9xl text-brand-gold italic opacity-0 animate-[fadeIn_2s_ease-out_1s_forwards] leading-none mb-12">
          ASKING FOR THE TIME.
        </h2>

        <div className="w-16 h-px bg-brand-steel/30 mb-12 opacity-0 animate-[fadeIn_2s_ease-out_2s_forwards]"></div>

        <p className="font-sans text-brand-steel text-xs md:text-sm uppercase tracking-[0.4em] opacity-0 animate-[fadeIn_2s_ease-in-out_2.5s_forwards] max-w-xl leading-loose">
          Time is the ultimate constraint of the working class.
          <br /><br />
          <span className="text-brand-platinum">L'ABSENCE.</span> A monument of absolute stillness.
        </p>
      </div>

      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-obsidian/40 via-brand-void to-brand-void pointer-events-none"></div>

      {/* CTA Bottom */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 opacity-0 animate-[fadeIn_2s_ease-in-out_3s_forwards]">
        <a href="#inquest" className="group flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-3 font-semibold group-hover:text-white transition-colors duration-300">Enter The Waitlist</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand-gold to-transparent group-hover:h-16 transition-all duration-500"></div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
