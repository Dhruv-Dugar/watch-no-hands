import { useState } from "react";


type Material = {
  id: string;
  name: string;
  description: string;
  color: string;
  finish: string;
};

const CHASSIS: Material[] = [
  { id: 'plat', name: 'Polished Platinum', description: 'Mirror-finished, dense, and eternal.', color: '#E5E5E7', finish: 'linear-gradient(135deg, #e5e5e7 0%, #b0b0b5 100%)' },
  { id: 'damascus', name: 'Damascus Steel', description: 'Folded alloy. Every pattern unique.', color: '#7E7E82', finish: 'repeating-linear-gradient(45deg, #7e7e82, #7e7e82 2px, #5a5a5e 2px, #5a5a5e 4px)' },
  { id: 'gold', name: '18ct Satin Gold', description: 'Brushed matte gold. Understated weight.', color: '#C5A880', finish: 'linear-gradient(135deg, #c5a880 0%, #8a7352 100%)' },
];

const DIALS: Material[] = [
  { id: 'jade', name: 'Black Jade', description: 'Unbroken depth. Hand-polished to a liquid finish.', color: '#050506', finish: 'radial-gradient(circle, #1a1a1c 0%, #000000 100%)' },
  { id: 'obsidian', name: 'Obsidian Crystal', description: 'Volcanic glass, absolute zero transparency.', color: '#121214', finish: 'linear-gradient(180deg, #1f1f22 0%, #050506 100%)' },
  { id: 'meteorite', name: 'Raw Meteorite', description: 'Extraterrestrial iron. Untamed texture.', color: '#333336', finish: 'repeating-radial-gradient(circle, #333336, #333336 2px, #222224 3px, #222224 4px)' },
];

const STRAPS: Material[] = [
  { id: 'croc', name: 'Niloticus Crocodile', description: 'Matte black scales, hand-stitched with platinum thread.', color: '#111', finish: '#111' },
  { id: 'titanium', name: 'Textured Titanium', description: 'Micro-blasted links. Featherweight architecture.', color: '#444', finish: '#444' },
  { id: 'obsidian-links', name: 'Obsidian Links', description: 'Carved stone. Cool to the touch.', color: '#0a0a0c', finish: '#0a0a0c' },
];

const Customizer: React.FC = () => {
  const [chassis, setChassis] = useState<Material>(CHASSIS[0]);
  const [dial, setDial] = useState<Material>(DIALS[0]);
  const [strap, setStrap] = useState<Material>(STRAPS[0]);

  return (
    <section id="customizer" className="py-24 md:py-48 bg-brand-obsidian relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <h2 className="font-serif text-3xl md:text-5xl text-brand-platinum mb-6">The Commission</h2>
          <p className="font-sans text-brand-steel text-sm tracking-[0.2em] uppercase">Configure your personal monument.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Visualizer */}
          <div className="flex justify-center items-center h-96 relative">
             {/* Strap Top */}
             <div className="absolute top-0 w-24 h-32 rounded-t-sm transition-all duration-700" style={{ background: strap.finish }}></div>

             {/* The Watch */}
             <div className="relative z-10 w-64 h-64 rounded-full flex items-center justify-center transition-all duration-700 shadow-2xl" style={{ background: chassis.finish }}>
               <div className="w-[90%] h-[90%] rounded-full flex items-center justify-center transition-all duration-700 border border-black/20" style={{ background: dial.finish }}>
                  <div className="w-1 h-1 rounded-full bg-brand-platinum/50"></div>
               </div>
             </div>

             {/* Strap Bottom */}
             <div className="absolute bottom-0 w-24 h-32 rounded-b-sm transition-all duration-700" style={{ background: strap.finish }}></div>
          </div>

          {/* Controls */}
          <div className="space-y-12">

            {/* Chassis Selector */}
            <div>
              <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-brand-steel mb-6 border-b border-brand-steel/20 pb-2">I. The Chassis</h3>
              <div className="grid grid-cols-3 gap-4">
                {CHASSIS.map(m => (
                  <button
                    key={m.id}
                    onClick={() => setChassis(m)}
                    className={`text-left p-4 border transition-all duration-300 ${chassis.id === m.id ? 'border-brand-gold bg-brand-gold/5' : 'border-brand-steel/20 hover:border-brand-platinum/50'}`}
                  >
                    <div className="w-full h-1 bg-brand-void mb-4" style={{ background: m.finish }}></div>
                    <h4 className="font-serif text-brand-platinum text-sm mb-1">{m.name}</h4>
                    <p className="font-sans text-brand-steel/60 text-[10px] hidden md:block">{m.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Dial Selector */}
            <div>
              <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-brand-steel mb-6 border-b border-brand-steel/20 pb-2">II. The Dial</h3>
              <div className="grid grid-cols-3 gap-4">
                {DIALS.map(m => (
                  <button
                    key={m.id}
                    onClick={() => setDial(m)}
                    className={`text-left p-4 border transition-all duration-300 ${dial.id === m.id ? 'border-brand-gold bg-brand-gold/5' : 'border-brand-steel/20 hover:border-brand-platinum/50'}`}
                  >
                    <div className="w-full h-1 bg-brand-void mb-4" style={{ background: m.finish }}></div>
                    <h4 className="font-serif text-brand-platinum text-sm mb-1">{m.name}</h4>
                    <p className="font-sans text-brand-steel/60 text-[10px] hidden md:block">{m.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Strap Selector */}
            <div>
              <h3 className="font-sans text-[10px] uppercase tracking-[0.3em] text-brand-steel mb-6 border-b border-brand-steel/20 pb-2">III. The Binding</h3>
              <div className="grid grid-cols-3 gap-4">
                {STRAPS.map(m => (
                  <button
                    key={m.id}
                    onClick={() => setStrap(m)}
                    className={`text-left p-4 border transition-all duration-300 ${strap.id === m.id ? 'border-brand-gold bg-brand-gold/5' : 'border-brand-steel/20 hover:border-brand-platinum/50'}`}
                  >
                    <div className="w-full h-1 bg-brand-void mb-4" style={{ background: m.finish }}></div>
                    <h4 className="font-serif text-brand-platinum text-sm mb-1">{m.name}</h4>
                    <p className="font-sans text-brand-steel/60 text-[10px] hidden md:block">{m.description}</p>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Status Line */}
        <div className="mt-24 pt-8 border-t border-brand-steel/10 flex flex-col md:flex-row justify-between items-center">
           <p className="font-serif italic text-brand-platinum/80 text-lg mb-4 md:mb-0">
             "{chassis.name} encapsulating {dial.name.toLowerCase()}."
           </p>
           <div className="text-right">
             <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-steel">Production cycle: 14 months</p>
             <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-gold mt-1">Allocation limit: 12 pieces per annum</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Customizer;
