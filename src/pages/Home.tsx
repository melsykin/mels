import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Gamepad2, BookOpen } from 'lucide-react';
import { ROUTES, APP_CONFIG } from '../constants';
import ProfileImage from '../components/common/ProfileImage';
import GradientText from '../components/common/GradientText';
import FloatingIcons from '../components/common/FloatingIcons';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-magic-cyan via-magic-purple to-magic-pink relative overflow-hidden">
      <FloatingIcons />

      <div className="container mx-auto px-6 h-screen flex flex-col items-center justify-center text-center relative z-10">
        <div className="max-w-3xl">
          <div className="mb-12">
            <ProfileImage size="md" />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <GradientText gradient="TEXT">
              hey, i'm {APP_CONFIG.AUTHOR}
            </GradientText>
          </h1>
          
          <div className="space-y-4 mb-12">
            <p className="text-2xl text-white/90">
              {APP_CONFIG.TAGLINE}
            </p>
            <p className="text-xl text-white/80">
              {APP_CONFIG.DESCRIPTION}
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
              to={ROUTES.PROJECTS}
              className="px-8 py-3 rounded-full bg-white text-magic-purple font-semibold hover:bg-white/90 transition-colors cursor-pointer"
            >
              View My Work
            </Link>
            <Link
              to={ROUTES.CONTACT}
              className="px-8 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm cursor-pointer"
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