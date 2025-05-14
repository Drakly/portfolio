import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background-color: #0A0A1B;
  padding: 60px 0 30px;
`;

const FooterInner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LogoSection = styled(FooterSection)`
  @media (max-width: 768px) {
    order: 3;
  }
`;

const FooterLogo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--light);
  
  span {
    color: var(--primary);
  }
`;

const FooterText = styled.p`
  color: var(--gray);
  font-size: 0.9rem;
  line-height: 1.6;
`;

const FooterHeading = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--light);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: var(--primary);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FooterLink = styled.a`
  color: var(--gray);
  font-size: 0.9rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
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

const Copyright = styled.div`
  text-align: center;
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--gray);
  font-size: 0.9rem;
  width: 90%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <LogoSection>
          <FooterLogo>
            kristian<span>.dev</span>
          </FooterLogo>
          <FooterText>
            A creative developer focused on building beautiful and functional web experiences.
          </FooterText>
          <SocialLinks>
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
              href="https://linkedin.com" 
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
        </LogoSection>
        
        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLinks>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/projects">Projects</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Contact Info</FooterHeading>
          <FooterLinks>
            <FooterLink href="mailto:kirilov.kristian1337@gmail.com">kirilov.kristian1337@gmail.com</FooterLink>
            <FooterText>Sofia, Bulgaria</FooterText>
          </FooterLinks>
        </FooterSection>
      </FooterInner>
      
      <Copyright>
        © {new Date().getFullYear()} Portfolio. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 