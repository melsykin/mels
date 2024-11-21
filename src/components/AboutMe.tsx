import React from 'react';
import { Wand2, Gamepad2, Code2, Sparkles, Heart, Star, BookOpen, Coffee, Music, Smartphone } from 'lucide-react';

const AboutMe = () => {
  const interests = [
    { icon: Wand2, title: 'Magic Enthusiast', text: 'Proud Potterhead with a deep appreciation for magical worlds' },
    { icon: Gamepad2, title: 'Pokémon Trainer', text: 'Active Pokémon GO player and lifelong fan of the franchise' },
    { icon: Code2, title: 'Developer', text: 'Crafting digital experiences through elegant code' },
    { icon: Star, title: 'Anime Lover', text: 'Finding inspiration in Japanese animation and storytelling' },
    { icon: BookOpen, title: 'Disney Fan', text: 'Where dreams come true and magic never ends' },
    { icon: Music, title: 'Creative Soul', text: 'Always exploring new ways to express creativity' }
  ];

  const skills = [
    { name: 'Frontend Development', level: 90 },
    { name: 'Backend Development', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Problem Solving', level: 95 },
    { name: 'Team Collaboration', level: 88 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-magic-pink/10 via-magic-purple/10 to-magic-cyan/10" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-magic-pink via-magic-purple to-magic-cyan p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/profile.jpg" 
                    alt="Mels"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-magic-pink via-magic-purple to-magic-cyan bg-clip-text text-transparent">
              About mels
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

      {/* Interests Grid */}
      <div className="py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-magic-purple">
            What Makes Me, Me <Heart className="inline-block w-6 h-6 text-magic-pink" />
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-magic-pink/10 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-tr from-magic-pink/10 to-magic-cyan/10 group-hover:from-magic-pink/20 group-hover:to-magic-cyan/20 transition-colors">
                    <interest.icon className="w-6 h-6 text-magic-purple" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">{interest.title}</h3>
                </div>
                <p className="text-slate-600">{interest.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-20 bg-gradient-to-b from-white/50 to-slate-50/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-magic-purple">Skills & Expertise</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-medium">{skill.name}</span>
                  <span className="text-magic-pink font-semibold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-magic-pink to-magic-cyan rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;