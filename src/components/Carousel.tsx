import React from 'react';

const MODELS = [
  { id: '1', name: 'The Absolute', description: 'Polished Platinum. Black Jade. Eternal.', image: '/images/model1.jpeg' },
  { id: '2', name: 'The Void', description: 'Damascus Steel. Obsidian Crystal. Infinite.', image: '/images/model2.jpeg' },
  { id: '3', name: 'The Monolith', description: '18ct Satin Gold. Raw Meteorite. Untamed.', image: '/images/model3.jpeg' },
  { id: '4', name: 'The Zenith', description: 'Matte Titanium. Vantablack. Weightless.', image: '/images/model4.jpeg' },
  { id: '5', name: 'The Eclipse', description: 'Brushed Carbon. Sapphire Glass. Silent.', image: '/images/model5.jpeg' },
  { id: '6', name: 'The Singularity', description: 'Forged Composites. Pure Diamond. Absolute.', image: '/images/model6.jpeg' },
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

              {/* Asset Container */}
              <div className="w-full aspect-square bg-brand-obsidian/50 border border-brand-steel/10 rounded-sm mb-8 relative overflow-hidden flex items-center justify-center">

                {/* Image Asset (Scaled slightly to push watermark outwards) */}
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover scale-105 group-hover/item:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Overlays to obscure the Gemini Watermark (bottom right) and blend edges */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050506]/90 pointer-events-none"></div>

                {/* Specific bottom-right corner patch for Gemini logo */}
                <div className="absolute bottom-0 right-0 w-32 h-24 bg-gradient-to-tl from-[#050506] via-[#050506]/90 to-transparent pointer-events-none"></div>
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
