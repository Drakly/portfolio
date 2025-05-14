import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionTitle from '../components/UI/SectionTitle';
import ProjectCard from '../components/UI/ProjectCard';

const ProjectsPageSection = styled.section`
  padding: 120px 0;
  min-height: 100vh;
  background-color: var(--dark);
  
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

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PageIntro = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto 60px;
  text-align: center;
`;

const IntroText = styled.p`
  font-size: 1.1rem;
  color: var(--gray);
  line-height: 1.8;
  margin: 20px 0;
`;

// Generate placeholder image URLs with specific colors for each project
const getPlaceholderImage = (index: number, title: string) => {
  const colors = ['5D5FEF', 'EA2D2E', '0074BD', '6DB33F', 'F89820', 'FF5A00'];
  const color = colors[index % colors.length];
  const text = title.replace(/\s+/g, '+');
  return `https://dummyimage.com/600x400/0F0F27/${color}/fff&text=${text}`;
};

// Extended projects list with the featured projects and additional ones
const allProjects = [
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
  },
  {
    id: 4,
    title: 'CVMatchAI',
    description: 'CVMatchAI is an AI-powered web application that analyzes and matches user resumes with job postings using artificial intelligence. The system extracts key information from resumes, evaluates their compatibility with job offers, and provides improvement suggestions.',
    image: '/images/CVMatchAI.png', // Will use placeholder
    technologies: ['Java', 'Spring Boot', 'OpenAI GPT API', 'JWT'],
    github: 'https://github.com/Drakly/ResumeAi-main'
  },
  {
    id: 5,
    title: 'DocuBrainAI',
    description: 'DocuBrainAI is an AI-powered web application that analyzes and matches user resumes with job postings using artificial intelligence. The system extracts key information from resumes, evaluates their compatibility with job offers, and provides improvement suggestions.',
    image: '/images/DocuBrain.png', // Will use placeholder
    technologies: ['Java', 'Spring', 'React', 'PostgreSQL'],
    github: 'https://github.com/Drakly/DocuBrainClean/tree/main/docubrain'
  },
  {
    id: 6,
    title: 'ChatBOT',
    description: 'A full-stack chat bot application built with Spring Boot and React, featuring a clean UI inspired by Cursor design.',
    image: '/images/ChatBot.png', // Will use placeholder
    technologies: ['Java', 'JavaFX', 'PostgreSQL'],
    github: 'https://github.com/Drakly/chat_bot'
  }
];

const ProjectsPage: React.FC = () => {
  return (
    <ProjectsPageSection>
      <Container>
        <PageIntro
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle 
            title="My Projects Portfolio" 
            subtitle="All Projects" 
            center 
            light
          />
          <IntroText>
            Below is a comprehensive collection of my work, showcasing various Java-based applications and systems I've developed. 
            Each project represents different aspects of my skills in backend development, API design, database management, and frontend integration.
          </IntroText>
        </PageIntro>
        
        <ProjectsGrid>
          {allProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image || getPlaceholderImage(index, project.title)}
              technologies={project.technologies}
              link={project.link}
              github={project.github}
              index={index}
            />
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsPageSection>
  );
};

export default ProjectsPage; 