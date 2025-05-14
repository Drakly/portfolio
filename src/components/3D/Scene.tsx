import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment, 
  Text, 
  Float, 
  MeshDistortMaterial, 
  MeshWobbleMaterial,
  Html,
  Sparkles
} from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CanvasWrapper = styled.div`
  height: 60vh;
  width: 100%;
  position: relative;
`;

const LoadingText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
`;

interface JavaCupProps {
  scale?: number;
  position?: [number, number, number];
}

// 3D Java Cup Model
const JavaCup: React.FC<JavaCupProps> = ({ scale = 4, position = [0, 0, 0] }) => {
  const cupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!cupRef.current) return;
    cupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
  });
  
  return (
    <group ref={cupRef} position={position} scale={scale}>
      {/* Base of the cup */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.5, 0.7, 0.2, 32]} />
        <MeshDistortMaterial color="#0074BD" speed={3} distort={0.2} radius={1} />
      </mesh>
      
      {/* Cup body */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
        <MeshWobbleMaterial 
          color="#EA2D2E" 
          factor={0.2} 
          speed={1} 
          roughness={0.3} 
          metalness={0.8}
        />
      </mesh>
      
      {/* Steam */}
      <Sparkles 
        count={50} 
        scale={3} 
        size={1} 
        speed={0.3} 
        color="#5D5FEF" 
        position={[0, 1.5, 0]}
        opacity={0.7}
      />
      
      {/* Handle */}
      <mesh position={[0.65, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.3, 0.1, 16, 32, Math.PI]} />
        <MeshWobbleMaterial 
          color="#0074BD" 
          factor={0.05} 
          speed={1}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
    </group>
  );
};

interface TechItem {
  name: string;
  color: string;
  position: [number, number, number];
}

// Floating brands representing Java ecosystem
const FloatingBrands: React.FC = () => {
  const technologies: TechItem[] = [
    { name: "Spring", color: "#6DB33F", position: [-2.5, 1, -1] },
    { name: "Hibernate", color: "#BCAE79", position: [2.5, -0.5, -1] },
    { name: "Maven", color: "#C71A36", position: [-1.5, -1.5, 0] },
    { name: "JUnit", color: "#25A162", position: [1.5, 1.5, 1] }
  ];
  
  return (
    <group>
      {technologies.map((tech, index) => (
        <Float 
          key={index}
          speed={1 + Math.random() * 2} 
          rotationIntensity={0.5} 
          floatIntensity={2}
        >
          <Text
            position={tech.position}
            fontSize={0.5}
            color={tech.color}
            anchorX="center"
            anchorY="middle"
            maxWidth={2}
          >
            {tech.name}
          </Text>
          <mesh position={[tech.position[0], tech.position[1] - 0.7, tech.position[2]]}>
            <sphereGeometry args={[0.3, 24, 24]} />
            <MeshDistortMaterial
              color={tech.color}
              speed={5}
              distort={0.3}
              radius={1}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

interface CodeParticlesProps {
  count?: number;
}

// Animated code particles
const CodeParticles: React.FC<CodeParticlesProps> = ({ count = 50 }) => {
  const positions = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < count; i++) {
      positions.push([
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ]);
    }
    return positions;
  }, [count]);

  return (
    <group>
      {positions.map((pos, i) => (
        <CodeParticle key={i} position={pos} />
      ))}
    </group>
  );
};

interface CodeParticleProps {
  position: [number, number, number];
}

const CodeParticle: React.FC<CodeParticleProps> = ({ position }) => {
  const mesh = useRef<THREE.Mesh>(null);
  const symbols = ["{ }", "();", "=>", "import", "public", "class", "extends", "@Override"];
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  
  const initialSpeed = useMemo(() => ((Math.random() - 0.5) * 0.05), []);
  
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
    mesh.current.position.y += initialSpeed;
    
    // Reset position when particle goes out of view
    if (mesh.current.position.y > 5) {
      mesh.current.position.y = -5;
    } else if (mesh.current.position.y < -5) {
      mesh.current.position.y = 5;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <Html
        transform
        distanceFactor={10}
        style={{
          color: '#5D5FEF',
          fontSize: '10px',
          opacity: 0.7,
          whiteSpace: 'nowrap'
        }}
      >
        {randomSymbol}
      </Html>
    </mesh>
  );
};

// Split the Scene into separate components to improve loading
const SceneContent: React.FC = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
      
      {/* Lighting */}
      <hemisphereLight intensity={0.3} groundColor="#0a0a1e" />
      <spotLight 
        position={[5, 10, 7.5]} 
        angle={0.15} 
        penumbra={1} 
        intensity={1.5} 
      />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#EA2D2E" />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#0074BD" />
      
      {/* Scene Elements */}
      <JavaCup position={[0, -0.5, 0]} scale={1.5} />
      <FloatingBrands />
      <CodeParticles count={30} />

      {/* Background Environment */}
      <Sparkles count={100} scale={15} size={1} speed={0.3} opacity={0.3} />
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.5} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
      <Environment preset="night" />
    </>
  );
};

// Main Scene Component
const Scene: React.FC = () => {
  return (
    <CanvasWrapper>
      <Canvas style={{ background: 'transparent' }}>
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(10, 10, 30, 0.7)',
          backdropFilter: 'blur(5px)',
          zIndex: 10
        }}
      >
        <LoadingText>Loading 3D Scene...</LoadingText>
      </motion.div>
    </CanvasWrapper>
  );
};

export default Scene; 