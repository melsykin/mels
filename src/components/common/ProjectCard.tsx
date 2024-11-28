import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  features?: Array<{
    icon: React.ElementType;
    title: string;
    description: string;
  }>;
  status: 'Live' | 'In Development';
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tags, 
  image,
  features,
  status,
  url 
}) => {
  return (
    <div className="mb-20">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-video md:aspect-auto">
            <img 
              src={image} 
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-magic-pink/20 via-magic-purple/20 to-magic-cyan/20"></div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-magic-purple">{title}</h2>
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-magic-pink hover:text-magic-purple transition-colors"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
            <p className="text-slate-600 mb-6">{description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-slate-50 text-magic-purple text-sm rounded-full border border-magic-purple/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <span className={`inline-block w-2 h-2 rounded-full ${
                status === 'Live' ? 'bg-green-500' : 'bg-yellow-500'
              }`}></span>
              <span className="text-slate-600">{status}</span>
            </div>
          </div>
        </div>

        {features && (
          <div className="grid md:grid-cols-3 gap-6 p-8 bg-slate-50">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-white shadow-sm">
                  <feature.icon className="w-5 h-5 text-magic-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;