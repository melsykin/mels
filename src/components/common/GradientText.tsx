import React from 'react';
import { GRADIENTS } from '../../constants';

interface GradientTextProps {
  children: React.ReactNode;
  gradient?: keyof typeof GRADIENTS;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  gradient = 'PRIMARY',
  className = '' 
}) => {
  return (
    <span className={`bg-gradient-to-r ${GRADIENTS[gradient]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;