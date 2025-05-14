import React from 'react';
import styled, { keyframes } from 'styled-components';

interface SpinnerProps {
  size?: number;
  color?: string;
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div<SpinnerProps>`
  width: ${props => props.size || 40}px;
  height: ${props => props.size || 40}px;
  margin: 0 auto;
  
  &:after {
    content: "";
    display: block;
    width: ${props => props.size || 40}px;
    height: ${props => props.size || 40}px;
    border-radius: 50%;
    border: 3px solid ${props => props.color || 'var(--primary)'};
    border-color: ${props => props.color || 'var(--primary)'} transparent ${props => props.color || 'var(--primary)'} transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

const Spinner: React.FC<SpinnerProps> = ({ size, color }) => {
  return <SpinnerContainer size={size} color={color} />;
};

export default Spinner; 