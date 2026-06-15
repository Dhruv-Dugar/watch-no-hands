import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 md:py-48 bg-brand-void relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">

          {/* Left Block - Statement */}
          <div className="md:col-span-5 md:col-start-2">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-tight text-brand-platinum mb-8">
              Time is a constraint for those who <span className="italic text-brand-gold">serve</span> it.
            </h2>
            <div className="w-16 h-px bg-brand-gold mb-8"></div>
            <p className="font-sans text-brand-platinum/60 text-sm md:text-base leading-relaxed mb-6 font-light">
              For those who command it, time is merely an environment. L'Absence represents the ultimate rebellion against the anxiety of the ticking hand.
            </p>
            <p className="font-sans text-brand-platinum/60 text-sm md:text-base leading-relaxed font-light">
              A monument of absolute stillness, designed for the solitary few whose presence dictates the schedule of the world.
            </p>
          </div>

          {/* Right Block - Vibe Image/Graphic */}
          <div className="md:col-span-4 md:col-start-8 mt-16 md:mt-0 relative group">
            {/* Abstract visual representing 'Absence' */}
            <div className="aspect-[3/4] w-full bg-brand-obsidian relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:border-brand-gold/30 transition-colors duration-700">
              {/* Subtle lighting effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-void via-transparent to-brand-void/50 z-10"></div>

              {/* Central minimalist element */}
              <div className="w-32 h-32 rounded-full border border-brand-steel/20 shadow-[0_0_40px_rgba(197,168,128,0.05)] flex items-center justify-center">
                 <div className="w-24 h-24 rounded-full border border-brand-steel/10"></div>
              </div>

              {/* Decorative corner markers */}
              <div className="absolute top-6 left-6 w-1 h-1 bg-brand-gold/50"></div>
              <div className="absolute bottom-6 right-6 w-1 h-1 bg-brand-gold/50"></div>
            </div>

            <div className="absolute -bottom-8 -left-8 md:-left-16 z-20 w-48 md:w-64">
              <p className="font-serif italic text-xl md:text-2xl text-brand-gold leading-snug">
                "You do not set meetings. Meetings form everywhere around you go."
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-obsidian to-transparent -translate-y-1/2 z-0"></div>
    </section>
  );
};

export default Philosophy;
