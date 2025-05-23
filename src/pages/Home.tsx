import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
import Team from '../components/Team';
import Gallery from '../components/Gallery';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      transition={{ duration: 0.6 }}
    >
      <Hero />
      <About />
      <Events />
      <Team />
      <Gallery />
    </motion.div>
  );
};

export default Home;