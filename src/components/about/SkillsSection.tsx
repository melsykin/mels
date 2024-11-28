import React from 'react';
import { Skill } from '../../types/about';

const skills: Skill[] = [
  { name: 'Frontend Development', level: 90 },
  { name: 'Backend Development', level: 85 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'Problem Solving', level: 95 },
  { name: 'Team Collaboration', level: 88 }
];

const SkillsSection = () => {
  return (
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
  );
};

export default SkillsSection;