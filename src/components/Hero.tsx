import { useState, useEffect } from "react";


const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-screen bg-brand-void overflow-hidden flex items-center justify-center">
      {/* Dynamic lighting background based on mouse position */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-screen transition-transform duration-100 ease-out"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(197, 168, 128, 0.15) 0%, transparent 50%)`
        }}
      ></div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center mt-12">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-brand-platinum tracking-wide opacity-0 animate-[fadeIn_2s_ease-in-out_0.5s_forwards]">
          L'ABSENCE
        </h1>
        <p className="mt-6 text-brand-steel text-xs md:text-sm uppercase tracking-[0.4em] opacity-0 animate-[fadeIn_2s_ease-in-out_1.5s_forwards]">
          A monument of absolute stillness.
        </p>
      </div>

      {/* The Watch (Interactive SVG Sphere) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-64 h-64 md:w-96 md:h-96 opacity-0 animate-[fadeIn_3s_ease-in-out_1s_forwards]">
        <div
          className="w-full h-full rounded-full relative shadow-[0_0_60px_rgba(0,0,0,0.8)] border border-brand-steel/10 transition-transform duration-75 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${-mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`,
            background: 'linear-gradient(145deg, #1a1a1c, #050506)',
          }}
        >
          {/* Bezel */}
          <div className="absolute inset-2 rounded-full border border-brand-gold/20 flex items-center justify-center bg-[#0a0a0c]">
            {/* Inner Dial (Empty) */}
            <div
              className="absolute inset-4 rounded-full bg-[#050506] shadow-inner"
              style={{
                background: `radial-gradient(circle at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 30}%, #1f1f22 0%, #050506 70%)`
              }}
            ></div>

            {/* The "Absence" Center */}
            <div className="w-2 h-2 rounded-full bg-brand-gold/80 shadow-[0_0_10px_rgba(197,168,128,0.5)]"></div>
          </div>

          {/* Reflection overlay */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none transition-transform duration-75 ease-out"
            style={{
              transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
            }}
          ></div>
        </div>
      </div>

      {/* CTA Bottom */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 opacity-0 animate-[fadeIn_2s_ease-in-out_2s_forwards]">
        <a href="#inquest" className="group flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-3 font-semibold group-hover:text-white transition-colors duration-300">Request Invitation</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand-gold to-transparent group-hover:h-16 transition-all duration-500"></div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
