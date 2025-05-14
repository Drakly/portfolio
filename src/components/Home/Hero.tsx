import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../UI/Button';
import { scrollToElement } from '../../utils/scrollToElement';

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(93, 95, 239, 0.1), transparent 50%);
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -50px;
    right: -50px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 184, 0, 0.1), transparent 60%);
    z-index: -1;
  }
`;

const HeroContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--light);
  line-height: 1.2;
  margin-bottom: 20px;
  
  span {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--gray);
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 500px;
  
  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroCTA = styled(motion.div)`
  display: flex;
  gap: 20px;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 15px;
  margin-top: 40px;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(93, 95, 239, 0.1);
  color: var(--primary);
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary);
    color: var(--light);
    transform: translateY(-5px);
  }
`;

const HeroImage = styled.div`
  position: relative;
  
  @media (max-width: 992px) {
    order: 1;
    width: 80%;
    margin: 0 auto;
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  z-index: -1;
`;

const Hero: React.FC = () => {
  const handleCTAClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement(sectionId, -80);
  };

  return (
    <HeroSection id="hero">
      <HeroContainer>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Kristian Kirilov - <span>Java Full-Stack</span> Developer
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building enterprise-grade applications with Spring Boot, Hibernate, and modern JavaScript frameworks. Creating robust, scalable and maintainable software solutions.
          </HeroSubtitle>
          <HeroCTA
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button primary as="a" href="#contact" onClick={handleCTAClick('contact')}>Get in Touch</Button>
            <Button as="a" href="#projects" onClick={handleCTAClick('projects')}>View My Work</Button>
          </HeroCTA>
          <SocialLinks
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <SocialLink 
              href="https://github.com/Drakly" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </SocialLink>
            <SocialLink 
              href="https://www.linkedin.com/in/kristian-kirilov-05998531b/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </SocialLink>
          </SocialLinks>
        </HeroContent>
        <HeroImage>
          <FloatingElement
            style={{
              width: '300px',
              height: '300px',
              top: '-50px',
              right: '-50px',
              background: 'rgba(93, 95, 239, 0.2)',
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <FloatingElement
            style={{
              width: '200px',
              height: '200px',
              bottom: '0',
              left: '0',
              background: 'rgba(255, 184, 0, 0.15)',
            }}
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 1,
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Replace with Java or Spring Boot icon */}
            <div style={{ width: '100%', height: '500px', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 128 128">
                <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"></path>
                <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"></path>
                <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"></path>
                <path fill="#EA2D2E" d="M76.491 1.587s12.968 12.976-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815 8.548-12.834 32.229-19.059 26.998-39.667z"></path>
                <path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 0 2.875 2.381 17.647 3.331z"></path>
              </svg>
            </div>
          </motion.div>
        </HeroImage>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero; 