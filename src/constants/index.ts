// App Configuration
export const APP_CONFIG = {
  APP_NAME: 'mels',
  AUTHOR: 'mels',
  PROFILE_IMAGE: 'https://i.imgur.com/j2nEZC1.jpeg',
  DESCRIPTION: 'Full-stack developer by day, pokemon enthusiast by night.',
  TAGLINE: 'Crafting magical digital experiences through code. ✨',
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  DEFAULT_THEME: 'light',
} as const;

// Routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  CONTACT: '/contact',
  BLOG: '/blog',
} as const;

// Theme Colors
export const COLORS = {
  MAGIC: {
    PINK: '#FF1493',
    CYAN: '#00FFFF',
    PURPLE: '#9D4EDD',
  },
} as const;

// Theme Gradients
export const GRADIENTS = {
  PRIMARY: 'from-magic-pink via-magic-purple to-magic-cyan',
  HOVER: 'from-magic-pink/20 via-magic-purple/20 to-magic-cyan/20',
  TEXT: 'from-magic-pink to-magic-cyan',
} as const;

// Breakpoints
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const;

// Social Links
export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/melsykin',
  LINKEDIN: 'https://linkedin.com/in/melsykin',
  DISCORD: 'https://discord.gg/lfsp-pogo',
} as const;

// Project Links
export const PROJECT_LINKS = {
  MYSTIC_SERVICES: 'https://mystic-services.netlify.app',
  SYCAMORE_CREEK: 'https://sycamorecreekconnect.com',
  LFSP_POGO: 'https://lfsp-pogo.netlify.app',
  JOMAR_MARBLE: 'https://jomarmarble.netlify.app',
} as const;