import React from 'react';

const MODELS = [
  { id: '1', name: 'The Absolute', description: 'Polished Platinum. Black Jade. Eternal.', imagePrompt: 'A highly photorealistic, dramatic side-profile macro shot of a sleek circular platinum watch with no hands. The dial is deep black jade. Minimalist, expensive, dark luxury.' },
  { id: '2', name: 'The Void', description: 'Damascus Steel. Obsidian Crystal. Infinite.', imagePrompt: 'A photorealistic, dramatic macro shot of a watch made of dark folded Damascus steel. The dial is pure black obsidian. Vantablack background. No hands.' },
  { id: '3', name: 'The Monolith', description: '18ct Satin Gold. Raw Meteorite. Untamed.', imagePrompt: 'A photorealistic, dramatic macro shot of a brushed satin gold watch with no hands. The dial features a dark, textured raw meteorite pattern. Cinematic lighting.' },
  { id: '4', name: 'The Zenith', description: 'Matte Titanium. Vantablack. Weightless.', imagePrompt: 'A sleek, minimalist titanium watch with absolutely no hands or markers. The face is so dark it looks like a black hole. Hovering in a dark void.' },
];

const Carousel: React.FC = () => {
  return (
    <section id="customizer" className="py-24 md:py-48 bg-brand-void relative overflow-hidden border-t border-brand-obsidian">
      <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-brand-platinum mb-6">The Collection</h2>
        <p className="font-sans text-brand-steel text-sm tracking-[0.2em] uppercase">Time is immaterial. Presence is everything.</p>
      </div>

      {/* Infinite Carousel Container */}
      <div className="relative w-full flex overflow-x-hidden group">

        {/* Track */}
        <div className="flex animate-[scroll_30s_linear_infinite] group-hover:[animation-play-state:paused] w-max">
          {[...MODELS, ...MODELS, ...MODELS].map((model, index) => (
            <div key={`${model.id}-${index}`} className="w-[300px] md:w-[450px] mx-4 md:mx-8 flex-shrink-0 flex flex-col items-center group/item cursor-pointer">
              {/* Image / Graphic Placeholder */}
              <div className="w-full aspect-square bg-brand-obsidian/50 border border-brand-steel/10 rounded-sm mb-8 flex items-center justify-center relative overflow-hidden">
                {/* Simulated Watch graphic */}
                <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-[#050506] to-[#1a1a1c] shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-brand-platinum/10 group-hover/item:scale-105 transition-transform duration-700 ease-out"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-void/80 pointer-events-none"></div>
              </div>

              {/* Details */}
              <h3 className="font-serif text-xl md:text-2xl text-brand-platinum mb-2">{model.name}</h3>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-steel/70">{model.description}</p>

              <div className="mt-8 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] uppercase tracking-[0.2em] border-b border-brand-gold text-brand-gold pb-1">Inquire</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </section>
  );
};

export default Carousel;
