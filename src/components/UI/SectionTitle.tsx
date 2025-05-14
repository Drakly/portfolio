import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const TitleWrapper = styled(motion.div)<{ center?: boolean }>`
  text-align: ${props => props.center ? 'center' : 'left'};
  margin-bottom: 60px;
`;

const Subtitle = styled(motion.span)<{ light?: boolean }>`
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.light ? 'rgba(255, 255, 255, 0.7)' : 'var(--primary)'};
  margin-bottom: 10px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: var(--primary);
  }
`;

const MainTitle = styled(motion.h2)<{ light?: boolean }>`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.light ? 'var(--light)' : 'var(--dark)'};
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false,
  light = false
}) => {
  return (
    <TitleWrapper center={center} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      {subtitle && (
        <Subtitle light={light} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          {subtitle}
        </Subtitle>
      )}
      <MainTitle light={light} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
        {title}
      </MainTitle>
    </TitleWrapper>
  );
};

export default SectionTitle; 