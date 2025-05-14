import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionTitle from '../UI/SectionTitle';
import Button from '../UI/Button';

const ContactSection = styled.section`
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -150px;
    left: -150px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255, 184, 0, 0.1), transparent 70%);
    border-radius: 50%;
    z-index: -1;
  }
`;

const ContactContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 60px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const ContactForm = styled(motion.form)`
  background-color: #0F0F27;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 992px) {
    order: 1;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--light);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 14px;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: var(--light);
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(93, 95, 239, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 14px;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: var(--light);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(93, 95, 239, 0.2);
  }
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(93, 95, 239, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: var(--primary);
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--light);
  margin-bottom: 8px;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: var(--gray);
  line-height: 1.6;
`;

const FormSuccessMessage = styled(motion.div)`
  background-color: rgba(0, 200, 83, 0.1);
  color: #00C853;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 20px;
  text-align: center;
`;

// Hidden field for Netlify form bot prevention
const HiddenField = styled.p`
  display: none;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // With Netlify Forms, form submission is handled automatically
    // We just need to show a success message to the user
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle 
            title="Get In Touch" 
            subtitle="Contact Me" 
            center
          />
        </motion.div>
        
        <ContactWrapper>
          <ContactInfo
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <InfoItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <InfoIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </InfoIcon>
              <InfoContent>
                <InfoTitle>Phone</InfoTitle>
                <InfoText>+359 123 456 789</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <InfoIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </InfoIcon>
              <InfoContent>
                <InfoTitle>Email</InfoTitle>
                <InfoText>kirilov.kristian1337@gmail.com</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <InfoIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </InfoIcon>
              <InfoContent>
                <InfoTitle>Location</InfoTitle>
                <InfoText>Sofia, Bulgaria</InfoText>
              </InfoContent>
            </InfoItem>
          </ContactInfo>
          
          <ContactForm
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            {/* Hidden input for Netlify Forms */}
            <input type="hidden" name="form-name" value="contact" />
            
            {/* Honeypot field to prevent spam */}
            <HiddenField>
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </HiddenField>
            
            {isSubmitted && (
              <FormSuccessMessage
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                Thank you for your message! I'll get back to you soon.
              </FormSuccessMessage>
            )}
            
            <FormGroup>
              <FormLabel htmlFor="name">Your Name</FormLabel>
              <FormInput 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Your Email</FormLabel>
              <FormInput 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormInput 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Your Message</FormLabel>
              <FormTextarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
            
            <Button primary fullWidth type="submit">
              Send Message
            </Button>
          </ContactForm>
        </ContactWrapper>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 