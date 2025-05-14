import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../UI/SectionTitle';
import ProjectCard from '../UI/ProjectCard';
import Button from '../UI/Button';

const ProjectsSection = styled.section`
  padding: 100px 0;
  background-color: rgba(15, 15, 39, 0.7);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(93, 95, 239, 0.1), transparent 70%);
    border-radius: 50%;
    z-index: 0;
  }
`;

const ProjectsContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
  margin-bottom: 50px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ViewAllWrapper = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const projects = [
  {
    id: 1,
    title: 'DareX Wallet Application',
    description: 'A secure digital wallet system with transaction management, multi-currency support, and advanced encryption for financial data protection.',
    image: '/images/DareXWallet.png',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
    link: 'https://example.com',
    github: 'https://github.com/Drakly/DareXApp'
  },
  {
    id: 2,
    title: 'Email Management System',
    description: 'Enterprise email management solution with automated filtering, scheduling, and analytics dashboard for corporate communication.',
    image: '/images/EmailSystem.png',
    technologies: ['Java', 'Spring MVC', 'Hibernate', 'Angular'],
    link: 'https://example.com',
    github: 'https://github.com/Drakly/EmailSystem2.0'
  },
  {
    id: 3,
    title: 'Smart Expense Management System',
    description: 'Distributed system based on microservices architecture with service discovery, load balancing, and containerized deployment.',
    image: '/images/SEMS.png',
    technologies: ['Java', 'Spring Cloud', 'Docker', 'Kubernetes'],
    link: 'https://example.com',
    github: 'https://github.com/Drakly/sems'
  }
];

const Projects: React.FC = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle 
            title="Featured Projects" 
            subtitle="My Work" 
            center 
            light
          />
        </motion.div>
        
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              link={project.link}
              github={project.github}
              index={index}
            />
          ))}
        </ProjectGrid>
        
        <ViewAllWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button primary as={Link} to="/projects">
              View All Projects
            </Button>
          </motion.div>
        </ViewAllWrapper>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects; 