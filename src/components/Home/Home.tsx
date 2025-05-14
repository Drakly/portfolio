import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Scene from '../3D/Scene';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SceneContainer = styled.div`
  position: relative;
  padding: 100px 0;
  background-color: #0a0a1e;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(to bottom, rgba(15, 15, 39, 1), rgba(10, 10, 30, 0));
    z-index: 1;
    pointer-events: none;
  }
`;

const SceneOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(10, 10, 30, 0), rgba(15, 15, 39, 1));
  z-index: 1;
  pointer-events: none;
`;

const SceneContentWrapper = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const SceneTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--light);
  margin-bottom: 20px;
  
  span {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SceneSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--gray);
  line-height: 1.6;
  margin-bottom: 40px;
  
  span {
    color: #EA2D2E;
    font-weight: 500;
  }
`;

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <SceneContainer id="3d-scene">
        <SceneContentWrapper>
          <SceneTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Java <span>Ecosystem</span> Visualized
          </SceneTitle>
          <SceneSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            An interactive representation of the <span>Java</span> environment showing core technologies in the ecosystem. Explore the visual metaphor of Java's coffee cup, surrounded by key frameworks and tools.
          </SceneSubtitle>
        </SceneContentWrapper>
        <Scene />
        <SceneOverlay />
      </SceneContainer>
      <Projects />
      <Contact />
    </>
  );
};

export default Home; 