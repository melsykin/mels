import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, image }) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-magic-pink/10">
      <div className="absolute inset-0 bg-gradient-to-br from-magic-pink/0 via-magic-purple/0 to-magic-cyan/0 group-hover:from-magic-pink/10 group-hover:via-magic-purple/10 group-hover:to-magic-cyan/10 transition-all duration-500"></div>
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 relative">
        <h3 className="text-xl font-semibold mb-2 flex items-center justify-between text-magic-purple">
          {title}
          <ExternalLink className="w-5 h-5 text-magic-pink/50 group-hover:text-magic-pink transition-colors" />
        </h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-slate-50 text-magic-purple text-sm rounded-full border border-magic-purple/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;