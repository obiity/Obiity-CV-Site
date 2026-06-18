import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';
import Particles from './Particles';

const SceneContent = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame(() => {
    if (cameraRef.current) {
      // Very smooth Parallax effect based on scroll
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;

      // Parallax movement: Camera moves slightly down and forward as we scroll
      const targetY = scrollProgress * -8; // Move down 8 units over full scroll
      const targetZ = 10 - (scrollProgress * 5); // Zoom in slightly from 10 to 5

      // Lerp for smooth cinematic movement
      cameraRef.current.position.y = THREE.MathUtils.lerp(cameraRef.current.position.y, targetY, 0.05);
      cameraRef.current.position.z = THREE.MathUtils.lerp(cameraRef.current.position.z, targetZ, 0.05);
      
      // Look slightly up as we move down to keep scene centered
      cameraRef.current.lookAt(0, targetY * 0.5, 0);
    }
  });

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 10]} fov={60} />
      
      <color attach="background" args={['#050505']} /> {/* Slightly darker for premium contrast */}
      
      <ambientLight intensity={0.2} />
      {/* Orange Glow */}
      <directionalLight position={[10, 10, 10]} intensity={1.2} color="#FF7A2F" />
      {/* White / Cyan Glow */}
      <directionalLight position={[-10, -10, -10]} intensity={0.8} color="#00F0FF" />
      
      <Particles />
      <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={0.5} />
      
      {/* Disable user controls since we want to control the camera via scroll */}
      {/* 
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2 + 0.2}
        minPolarAngle={Math.PI / 2 - 0.2}
      />
      */}
    </>
  );
};

const HeroScene = () => {
  return (
    <Canvas 
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}
      gl={{ alpha: false, antialias: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]} // limit pixel ratio for performance
    >
      <SceneContent />
    </Canvas>
  );
};

export default HeroScene;
