"use client";

import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";

export default function Hero3D() {
  return (
    // Added pointer-events-none and responsive height (h-[400px] on mobile)
    <div className="absolute top-0 left-0 w-full h-[400px] md:h-[600px] -z-10 opacity-60 dark:opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#4338ca" />
        
        <Sphere args={[1, 100, 200]} scale={2.2}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
        
        {/* Disabled manual rotation to guarantee it doesn't break scrolling, but autoRotate keeps it alive */}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}