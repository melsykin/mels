import React from 'react';
import ProjectCard from '../components/common/ProjectCard';
import GradientText from '../components/common/GradientText';
import { PROJECT_LINKS } from '../constants';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <GradientText>Featured Projects</GradientText>
          </h1>
          <p className="text-xl text-slate-600">
            Showcasing my journey through code, creativity, and community impact.
          </p>
        </div>

        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;