"use client";

import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";

export default function Hero3D() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if the device is mobile (less than 768px width)
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    
    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 1. Prevent Hydration Mismatch (Return null on server)
  if (!isMounted) return null;

  // 2. Prevent Mobile GPU Crash (Return static gradient on mobile)
  if (isMobile) {
    return (
      <div className="absolute top-0 left-0 w-full h-[400px] -z-10 opacity-60 dark:opacity-40 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
    );
  }

  // 3. Render WebGL ONLY on Desktop/Tablet
  return (
    <div className="absolute top-0 left-0 w-full h-[600px] -z-10 opacity-60 dark:opacity-40 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 5] }}
        // Performance optimization: limit pixel ratio on high-DPI screens
        dpr={[1, 1.5]} 
        // Tell Three.js not to constantly render if nothing changes (optional, but good)
        frameloop="demand" 
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#4338ca" />
        
        <Sphere args={[1, 64, 64]} scale={2.2}> {/* Reduced geometry detail from 100/200 to 64/64 */}
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
        
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}