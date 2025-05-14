import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  index?: number;
}

const Card = styled(motion.div)`
  background-color: #0F0F27;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    
    .project-image {
      transform: scale(1.05);
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 220px;
  
  @media (max-width: 768px) {
    height: 180px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const Content = styled.div`
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--light);
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: var(--gray);
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const Tech = styled.span`
  font-size: 0.8rem;
  padding: 4px 10px;
  background-color: rgba(93, 95, 239, 0.1);
  color: var(--primary);
  border-radius: 20px;
`;

const Links = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: var(--light);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  
  &:hover {
    color: var(--primary);
  }
`;

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  link,
  github,
  index = 0
}) => {
  return (
    <Card
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <ImageContainer>
        <ProjectImage 
          src={image} 
          alt={title} 
          className="project-image"
        />
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Technologies>
          {technologies.map((tech, i) => (
            <Tech key={i}>{tech}</Tech>
          ))}
        </Technologies>
        <Links>
          {link && (
            <ProjectLink 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Live Preview
            </ProjectLink>
          )}
          {github && (
            <ProjectLink 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              View Code
            </ProjectLink>
          )}
        </Links>
      </Content>
    </Card>
  );
};

export default ProjectCard; 