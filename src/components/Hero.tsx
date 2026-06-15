import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, PresentationControls, Float } from "@react-three/drei";
import * as THREE from 'three';

const WatchModel = () => {
  const watchRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (watchRef.current) {
      // Very slow, majestic rotation
      watchRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      watchRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.05;
    }
  });

  return (
    <group ref={watchRef} dispose={null}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Watch Chassis (Bezel) */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <torusGeometry args={[2, 0.2, 64, 128]} />
          <meshStandardMaterial color="#E5E5E7" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Watch Face (Dial) */}
        <mesh position={[0, 0, -0.1]} castShadow receiveShadow>
          <cylinderGeometry args={[1.95, 1.95, 0.2, 64]} />
          <meshStandardMaterial color="#050506" metalness={0.5} roughness={0.2} />
        </mesh>

        {/* Sapphire Crystal (Glass) */}
        <mesh position={[0, 0, 0.15]}>
          <cylinderGeometry args={[1.95, 1.95, 0.05, 64]} />
          <meshPhysicalMaterial
            color="#ffffff"
            metalness={0.1}
            roughness={0}
            transmission={0.9}
            thickness={0.5}
            envMapIntensity={2}
            clearcoat={1}
          />
        </mesh>

        {/* Empty Center Point (The "Absence") */}
        <mesh position={[0, 0, 0.05]}>
          <circleGeometry args={[0.05, 32]} />
          <meshBasicMaterial color="#C5A880" />
        </mesh>
      </Float>
    </group>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-brand-void overflow-hidden flex items-center justify-center">

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none mt-12">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-brand-platinum tracking-wide opacity-0 animate-[fadeIn_2s_ease-in-out_0.5s_forwards]">
          L'ABSENCE
        </h1>
        <p className="mt-6 text-brand-steel text-xs md:text-sm uppercase tracking-[0.4em] opacity-0 animate-[fadeIn_2s_ease-in-out_1.5s_forwards]">
          A monument of absolute stillness.
        </p>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-20 opacity-0 animate-[fadeIn_3s_ease-in-out_1s_forwards]">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#C5A880" />

          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <WatchModel />
          </PresentationControls>

          <Environment preset="studio" />
          <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={20} blur={2} far={4} />
        </Canvas>
      </div>

      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-obsidian/40 via-brand-void to-brand-void pointer-events-none"></div>

      {/* CTA Bottom */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 opacity-0 animate-[fadeIn_2s_ease-in-out_2s_forwards]">
        <a href="#inquest" className="group flex flex-col items-center pointer-events-auto">
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-3 font-semibold group-hover:text-white transition-colors duration-300">Request Invitation</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand-gold to-transparent group-hover:h-16 transition-all duration-500"></div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
