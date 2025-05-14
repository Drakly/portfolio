import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  as?: React.ElementType;
  to?: string;
  href?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
}

const ButtonContainer = styled(motion.button)<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.primary ? '14px 32px' : '12px 24px'};
  background-color: ${props => props.primary ? 'var(--primary)' : 'transparent'};
  color: ${props => props.primary ? 'var(--light)' : 'var(--primary)'};
  border: ${props => props.primary ? 'none' : '2px solid var(--primary)'};
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  &:hover {
    background-color: ${props => props.primary ? '#4A4CDB' : 'rgba(93, 95, 239, 0.1)'};
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(93, 95, 239, 0.2);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const Button: React.FC<ButtonProps> = ({ 
  children, 
  primary = false, 
  onClick, 
  as, 
  to, 
  href,
  fullWidth = false,
  type = 'button',
  target,
  rel,
  ...props 
}) => {
  return (
    <ButtonContainer
      as={as}
      to={to}
      href={href}
      primary={primary}
      onClick={onClick}
      fullWidth={fullWidth}
      type={type}
      target={target}
      rel={rel}
      whileHover={{ y: -2, boxShadow: '0 8px 20px rgba(93, 95, 239, 0.2)' }}
      whileTap={{ y: 0, boxShadow: 'none' }}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button; 