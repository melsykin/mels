import React from 'react';
import { Wand2, Gamepad2, Code2, Star, BookOpen, Music, Heart } from 'lucide-react';
import { Interest } from '../../types/about';

const interests: Interest[] = [
  { icon: Wand2, title: 'Magic Enthusiast', text: 'Proud Potterhead with a deep appreciation for magical worlds' },
  { icon: Gamepad2, title: 'Pokémon Trainer', text: 'Active Pokémon GO player and lifelong fan of the franchise' },
  { icon: Code2, title: 'Developer', text: 'Crafting digital experiences through elegant code' },
  { icon: Star, title: 'Anime Lover', text: 'Finding inspiration in Japanese animation and storytelling' },
  { icon: BookOpen, title: 'Disney Fan', text: 'Where dreams come true and magic never ends' },
  { icon: Music, title: 'Creative Soul', text: 'Always exploring new ways to express creativity' }
];

const InterestGrid = () => {
  return (
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
  );
};

export default InterestGrid;