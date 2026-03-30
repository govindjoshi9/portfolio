import React, { Component, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Stars } from '@react-three/drei';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("WebGL context could not be created or another ThreeJS error occurred.", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
       // Fallback for no WebGL support: Render nothing so the rest of the site works
      return null;
    }
    return this.props.children;
  }
}

const FloatingObject = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 0]} />
        <meshStandardMaterial 
          color="#7c3aed" 
          wireframe={true} 
          emissive="#4c1d95"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

const ThreeScene = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <ErrorBoundary>
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <FloatingObject />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default ThreeScene;
