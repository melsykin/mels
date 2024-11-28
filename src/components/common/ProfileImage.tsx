import React from 'react';
import { APP_CONFIG } from '../../constants';

interface ProfileImageProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-40 h-40',
  };

  return (
    <div className={`${sizeClasses[size]} mx-auto bg-gradient-to-tr from-magic-pink via-magic-purple to-magic-cyan p-1 rounded-full ${className}`}>
      <div className="w-full h-full rounded-full overflow-hidden">
        <img 
          src={APP_CONFIG.PROFILE_IMAGE}
          alt={APP_CONFIG.AUTHOR}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProfileImage;