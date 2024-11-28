import React from 'react';
import { ExternalLink, Users, Bell, Calendar, MessageCircle, MapPin, Shield, MessageSquare, Users2, Map, Gamepad, Star, Heart, ThumbsUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Mystic Services',
      description: 'A community-driven platform for discovering and recommending digital goods and services. Empowering users to make informed decisions through trusted recommendations.',
      image: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?auto=format&fit=crop&q=80&w=2940',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Next.js'],
      features: [
        { icon: Users2, title: 'Community Reviews', description: 'Authentic user experiences and recommendations' },
        { icon: Star, title: 'Rating System', description: 'Detailed service ratings and feedback' },
        { icon: Heart, title: 'Curated Lists', description: 'User-created collections of favorite services' },
        { icon: ThumbsUp, title: 'Trust Scores', description: 'Reliability metrics for recommendations' },
        { icon: MessageCircle, title: 'Discussion Forums', description: 'Community discussions about services' },
        { icon: Shield, title: 'Verified Reviews', description: 'Authentication system for genuine feedback' }
      ],
      status: 'In Development',
      url: 'https://mystic-services.netlify.app'
    },
    {
      title: 'Sycamore Creek Connect',
      description: 'A community platform enhancing neighborhood connectivity and transparency. Features real-time updates, event management, and resident communication tools.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2940',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      features: [
        { icon: Users, title: 'Resident Directory', description: 'Secure access to community member profiles' },
        { icon: Bell, title: 'Real-time Updates', description: 'Instant notifications for community announcements' },
        { icon: Calendar, title: 'Event Management', description: 'Community calendar with RSVP functionality' },
        { icon: MessageCircle, title: 'Discussion Forums', description: 'Themed discussion boards for community engagement' },
        { icon: MapPin, title: 'Local Resources', description: 'Interactive map of community amenities' },
        { icon: Shield, title: 'Secure Access', description: 'Protected resident-only platform' }
      ],
      status: 'Live',
      url: 'https://sycamorecreekconnect.com'
    },
    {
      title: 'Lake Forest Sports Park Pokémon GO',
      description: 'A community hub for Pokémon GO trainers in Lake Forest Sports Park. Connect with fellow trainers, join raids, and participate in community events.',
      image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&q=80&w=2940',
      tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
      features: [
        { icon: MessageSquare, title: 'Discord Community', description: 'Join our active Discord server for raids and events' },
        { icon: Users2, title: 'Trainer Network', description: 'Connect with local Pokémon GO players' },
        { icon: Map, title: 'Park Guide', description: 'Information about gym locations and PokéStops' },
        { icon: Calendar, title: 'Event Calendar', description: 'Stay updated on Community Days and special events' },
        { icon: Gamepad, title: 'Raid Coordination', description: 'Organize and participate in raid battles' },
        { icon: MessageCircle, title: 'Community Chat', description: 'Real-time communication for trainers' }
      ],
      status: 'Live',
      url: 'https://lfsp-pogo.netlify.app'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-magic-pink via-magic-purple to-magic-cyan bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-slate-600">
            Showcasing my journey through code, creativity, and community impact.
          </p>
        </div>

        {/* Featured Projects */}
        {projects.map((project, index) => (
          <div key={index} className="mb-20">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-video md:aspect-auto">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-magic-pink/20 via-magic-purple/20 to-magic-cyan/20"></div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold text-magic-purple">{project.title}</h2>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-magic-pink hover:text-magic-purple transition-colors"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-slate-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
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
                      project.status === 'Live' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></span>
                    <span className="text-slate-600">{project.status}</span>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 p-8 bg-slate-50">
                {project.features.map((feature, i) => (
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;