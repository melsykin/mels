import React from 'react';
import { Code2, Gamepad2, BookOpen, Tv, Sparkles, Wand2 } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface FloatingIconProps {
  Icon: LucideIcon;
  delay?: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ Icon, delay = 0 }) => (
  <div
    className="absolute opacity-20 pointer-events-none"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}
  >
    <Icon className="w-4 h-4 text-white" />
  </div>
);

const FloatingIcons: React.FC = () => {
  const icons = [Code2, Gamepad2, BookOpen, Tv, Sparkles, Wand2];
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(24)].map((_, i) => (
        <FloatingIcon 
          key={i} 
          Icon={icons[i % icons.length]} 
          delay={Math.random() * 5}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;