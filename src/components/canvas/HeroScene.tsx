import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import Particles from './Particles';

const HeroScene = () => {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
      
      <color attach="background" args={['#0A0A0A']} />
      
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} color="#00F0FF" />
      <directionalLight position={[-10, -10, -10]} intensity={1} color="#9D00FF" />
      
      <Particles />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2 + 0.2}
        minPolarAngle={Math.PI / 2 - 0.2}
      />
      
      {/* Post-processing could be added here later (Bloom, etc.) for that AAA look */}
    </Canvas>
  );
};

export default HeroScene;
