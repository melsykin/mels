import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Gamepad2, BookOpen, Tv, Sparkles, Wand2 } from 'lucide-react';

const FloatingIcon = ({ Icon, delay = 0 }) => (
  <div
    className="absolute opacity-20"
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

const Home = () => {
  const icons = [Code2, Gamepad2, BookOpen, Tv, Sparkles, Wand2];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-magic-cyan via-magic-purple to-magic-pink relative overflow-hidden">
      {/* Floating icons background */}
      <div className="absolute inset-0">
        {[...Array(24)].map((_, i) => (
          <FloatingIcon 
            key={i} 
            Icon={icons[i % icons.length]} 
            delay={Math.random() * 5}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 h-screen flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl">
          {/* Profile Image */}
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto bg-gradient-to-tr from-magic-pink via-magic-purple to-magic-cyan p-1 rounded-full">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="https://i.imgur.com/j2nEZC1.jpeg" 
                  alt="mels"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-magic-pink to-magic-cyan bg-clip-text text-transparent">
              hey, i'm mels
            </span>
          </h1>
          
          <div className="space-y-4 mb-12">
            <p className="text-2xl text-white/90">
              Crafting magical digital experiences through code. ✨
            </p>
            <p className="text-xl text-white/80">
              Full-stack developer by day, pokemon enthusiast by night.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-sm flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Developer
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-sm flex items-center gap-2">
              <Gamepad2 className="w-4 h-4" /> Gamer
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-sm flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Bookworm
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/projects"
              className="px-8 py-3 rounded-full bg-white text-magic-purple font-semibold hover:bg-white/90 transition-colors"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;