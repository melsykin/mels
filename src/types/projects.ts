import { LucideIcon } from 'lucide-react';

export interface ProjectFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: ProjectFeature[];
  status: 'Live' | 'In Development';
  url: string;
}