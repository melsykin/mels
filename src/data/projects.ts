import { Users, Bell, Calendar, MessageCircle, MapPin, Shield, MessageSquare, Users2, Map, Gamepad, Star, Heart, ThumbsUp, Image, Phone, Mail, Camera, Palette, Store } from 'lucide-react';
import { PROJECT_LINKS } from '../constants';
import { Project } from '../types/projects';

export const projectsData: Project[] = [
  {
    title: 'Jomar Marble & Granite',
    description: 'A modern website showcasing premium natural stone products and custom fabrication services. Features an extensive gallery of completed projects and streamlined quote request system.',
    image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&q=80&w=2940',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Netlify'],
    features: [
      { icon: Image, title: 'Project Gallery', description: 'Showcase of completed installations and projects' },
      { icon: Phone, title: 'Quick Contact', description: 'Easy access to contact information and quote requests' },
      { icon: Camera, title: 'Virtual Tours', description: 'Interactive showroom and facility tours' },
      { icon: Palette, title: 'Material Catalog', description: 'Extensive collection of available stone options' },
      { icon: Store, title: 'Location Info', description: 'Showroom locations and business hours' },
      { icon: Mail, title: 'Quote System', description: 'Streamlined quote request and follow-up process' }
    ],
    status: 'In Development',
    url: PROJECT_LINKS.JOMAR_MARBLE
  },
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
    url: PROJECT_LINKS.MYSTIC_SERVICES
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
    url: PROJECT_LINKS.SYCAMORE_CREEK
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
    url: PROJECT_LINKS.LFSP_POGO
  }
];