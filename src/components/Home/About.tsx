import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionTitle from '../UI/SectionTitle';
import Button from '../UI/Button';

const AboutSection = styled.section`
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    left: -200px;
    top: 50%;
    transform: translateY(-50%);
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(93, 95, 239, 0.05), transparent 70%);
    border-radius: 50%;
    z-index: -1;
  }
`;

const AboutContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--gray);
  line-height: 1.8;
  margin-bottom: 30px;
`;

const Skills = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
`;

const Skill = styled(motion.div)`
  background-color: rgba(93, 95, 239, 0.1);
  color: var(--primary);
  font-size: 0.9rem;
  padding: 8px 16px;
  border-radius: 20px;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary);
    color: var(--light);
    transform: translateY(-3px);
  }
`;

const AboutImageWrapper = styled.div`
  position: relative;
  
  @media (max-width: 992px) {
    order: 1;
    width: 80%;
    margin: 0 auto;
  }
`;

const AboutImage = styled(motion.div)`
  width: 100%;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Experience = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  right: -30px;
  background-color: var(--primary);
  color: var(--light);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 30px rgba(93, 95, 239, 0.3);
  
  @media (max-width: 992px) {
    right: -10px;
  }
`;

const ExperienceNumber = styled.span`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
`;

const ExperienceText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

const skillsList = [
  'Java', 'Spring Boot', 'Hibernate', 'JavaScript', 'TypeScript', 
  'React', 'Angular', 'REST APIs', 'SQL', 'MySQL', 'PostgreSQL', 
  'Docker', 'Git', 'Microservices', 'JUnit', 'Maven'
];

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutContent>
          <SectionTitle title="About Me" subtitle="Who I Am" />
          <AboutText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            I'm Kristian Kirilov, a passionate Java Full-Stack Developer with expertise in building robust, scalable applications. With a strong foundation in both backend and frontend technologies, I create end-to-end solutions that deliver exceptional user experiences while maintaining solid architecture.
          </AboutText>
          <AboutText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            My experience includes developing enterprise applications using Spring Boot, Hibernate, and microservices on the backend, paired with React and Angular for interactive frontend interfaces. I'm dedicated to writing clean, maintainable code and implementing best practices throughout the development lifecycle.
          </AboutText>
          <Skills
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {skillsList.map((skill, index) => (
              <Skill 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{ y: -3, backgroundColor: 'var(--primary)', color: 'var(--light)' }}
              >
                {skill}
              </Skill>
            ))}
          </Skills>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button primary as="a" href="https://www.linkedin.com/in/kristian-kirilov-05998531b/" target="_blank" rel="noopener noreferrer">View LinkedIn</Button>
          </motion.div>
        </AboutContent>
        <AboutImageWrapper>
          <AboutImage
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Your professional photo */}
            <img src="/images/Profile_Pic (1).jpeg" alt="Kristian Kirilov - Java Developer" />
          </AboutImage>
          <Experience
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ExperienceNumber>3+</ExperienceNumber>
            <ExperienceText>Years of Experience</ExperienceText>
          </Experience>
        </AboutImageWrapper>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 