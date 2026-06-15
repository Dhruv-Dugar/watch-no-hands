import React, { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PresentationControls, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from 'three';

const DistortedTimeGraphic = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow scale={1.5}>
        <icosahedronGeometry args={[1, 128]} />
        {/* A fluid, distorted dark material representing the warping of time */}
        <MeshDistortMaterial
          color="#0a0a0c"
          distort={0.4}
          speed={1.5}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={2}
        />
      </mesh>

      {/* Surrounding gold dust / stars */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={100}
            array={new Float32Array(300).map(() => (Math.random() - 0.5) * 10)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#C5A880" transparent opacity={0.5} />
      </points>
    </group>
  );
};

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 md:py-48 bg-brand-void relative overflow-hidden border-t border-brand-obsidian">
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
          <div className="md:col-span-4 md:col-start-8 mt-16 md:mt-0 relative group h-[400px] md:h-[600px]">
            {/* Interactive 3D Graphic */}
            <div className="absolute inset-0 bg-brand-void border border-white/5 group-hover:border-brand-gold/30 transition-colors duration-700 overflow-hidden">
              <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.1} />
                <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} color="#C5A880" />

                <PresentationControls
                  global
                  config={{ mass: 1, tension: 170, friction: 26 }}
                  rotation={[0, -0.3, 0]}
                  polar={[-Math.PI / 4, Math.PI / 4]}
                  azimuth={[-Math.PI / 4, Math.PI / 4]}
                >
                  <DistortedTimeGraphic />
                </PresentationControls>

                <Environment preset="city" />
              </Canvas>
            </div>

            <div className="absolute -bottom-8 -left-8 md:-left-16 z-20 w-48 md:w-64 pointer-events-none">
              <p className="font-serif italic text-xl md:text-2xl text-brand-gold leading-snug drop-shadow-lg">
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
