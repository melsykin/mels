import React from 'react';
import { Smartphone } from 'lucide-react';
import ProfileImage from '../common/ProfileImage';
import GradientText from '../common/GradientText';

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-magic-pink/10 via-magic-purple/10 to-magic-cyan/10" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <ProfileImage size="md" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <GradientText>About mels</GradientText>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Hey there! I'm a software engineer who believes in the perfect blend of logic and creativity. 
            When I'm not crafting code, you'll find me catching Pokémon in the wild, immersed in magical worlds 
            through anime, exploring video games, enjoying Disney adventures, or re-reading Harry Potter for the 
            hundredth time. ✨
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Smartphone className="w-5 h-5 text-magic-pink" />
            <span className="text-slate-500">Currently on a quest to catch 'em all!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;