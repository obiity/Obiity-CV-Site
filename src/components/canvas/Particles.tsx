import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 3000;

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Obiity lion colors: orange vif → ambre doré → orange profond
    const colorA = new THREE.Color('#FF7A2F');  // orange primary
    const colorB = new THREE.Color('#FFB347');  // amber secondary
    const colorC = new THREE.Color('#E05A20');  // deep orange

    // Use a local seed variable and inline the LCG generator to avoid closures
    let seed = 12345;

    for (let i = 0; i < count; i++) {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      const x = (seed / 4294967296 - 0.5) * 40;

      seed = (seed * 1664525 + 1013904223) % 4294967296;
      const y = (seed / 4294967296 - 0.5) * 40;

      seed = (seed * 1664525 + 1013904223) % 4294967296;
      const z = (seed / 4294967296 - 0.5) * 40;

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
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [count]);

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
