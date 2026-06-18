import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  // Reduce count slightly for performance, increase size for 'dust' feel
  const count = 1500;

  const { geometry, positionsData } = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const posData = []; // Store original position and random phase for organic movement

    // Obiity lion colors: orange vif → ambre doré → blanc chaud
    const colorA = new THREE.Color('#FF7A2F');  // orange primary
    const colorB = new THREE.Color('#FFB347');  // amber secondary
    const colorC = new THREE.Color('#FFFFFF');  // white glow

    let seed = 12345;

    for (let i = 0; i < count; i++) {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      const x = (seed / 4294967296 - 0.5) * 60; // wider spread

      seed = (seed * 1664525 + 1013904223) % 4294967296;
      const y = (seed / 4294967296 - 0.5) * 60;

      seed = (seed * 1664525 + 1013904223) % 4294967296;
      const z = (seed / 4294967296 - 0.5) * 60;

      positions[i * 3]     = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      seed = (seed * 1664525 + 1013904223) % 4294967296;
      const r = seed / 4294967296;

      const base = r < 0.5 ? colorA : r < 0.8 ? colorB : colorC;

      seed = (seed * 1664525 + 1013904223) % 4294967296;
      const mixAmount = (seed / 4294967296) * 0.5;

      const mix = base.clone().lerp(r < 0.5 ? colorB : colorA, mixAmount);
      colors[i * 3]     = mix.r;
      colors[i * 3 + 1] = mix.g;
      colors[i * 3 + 2] = mix.b;

      posData.push({
        x, y, z,
        rx: Math.random() * Math.PI * 2, // phase
        ry: Math.random() * Math.PI * 2,
        rz: Math.random() * Math.PI * 2,
        speed: 0.1 + Math.random() * 0.3
      });
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    return { geometry: geo, positionsData: posData };
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      const time = state.clock.getElapsedTime();

      // Organic floating movement
      for (let i = 0; i < count; i++) {
        const data = positionsData[i];
        
        // Gentle drifting using sine waves
        positions[i * 3]     = data.x + Math.sin(time * data.speed + data.rx) * 0.5;
        positions[i * 3 + 1] = data.y + Math.cos(time * data.speed * 0.8 + data.ry) * 0.5;
        positions[i * 3 + 2] = data.z + Math.sin(time * data.speed * 1.2 + data.rz) * 0.5;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;

      // Extremely slow rotation of the whole cloud
      pointsRef.current.rotation.y = time * 0.02;
      pointsRef.current.rotation.x = time * 0.01;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.15} // larger, softer
        vertexColors
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
