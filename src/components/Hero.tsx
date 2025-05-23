import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ParticleBackground from './ParticleBackground';

interface BrainModelProps {
  wireframe?: boolean;
}

const AnimatedSphere: React.FC<BrainModelProps> = ({ wireframe = true }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });
  
  return (
    <mesh ref={meshRef} rotation={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial
        color="#0ff"
        wireframe={wireframe}
        emissive="#0ff"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* 3D Model */}
      <div className="absolute inset-0 z-10 opacity-60">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <AnimatedSphere />
        </Canvas>
      </div>
      
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-20"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-white to-neon-magenta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AIML COMMUNITY
            <span className="block text-white text-2xl md:text-3xl mt-2">Manipal University Jaipur</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Exploring the frontiers of Artificial Intelligence and Machine Learning through innovation, collaboration, and excellence.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#about" 
              className="px-8 py-3 rounded-md bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-medium hover:shadow-neon-cyan transition duration-300"
            >
              Explore
            </a>
            <a 
              href="#" 
              className="px-8 py-3 rounded-md bg-dark-700 border border-neon-cyan text-white font-medium hover:bg-dark-600 transition duration-300"
            >
              Join Us
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
        <motion.div 
          className="w-6 h-10 rounded-full border-2 border-neon-cyan flex justify-center p-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div className="w-1 h-2 rounded-full bg-neon-cyan" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;