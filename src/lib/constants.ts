// Project data and constants for the Cozy Code Cafe portfolio

export const CAFE_COLORS = {
  latte: '#F5F5DC',
  coffee: '#8B4513',
  cream: '#FFF8DC',
  wood: '#DEB887',
  blush: '#FFB6C1',
  mint: '#98FB98',
  lavender: '#E6E6FA',
  honey: '#FFD700',
  espresso: '#654321',
  'milk-chocolate': '#D2691E',
} as const;

export const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce App',
    description: 'React + Node.js',
    emoji: '🛒',
    gradient: 'from-honey to-blush',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    details: 'A full-stack e-commerce platform with user authentication, payment processing, and admin dashboard.',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'Vue.js + CSS',
    emoji: '💼',
    gradient: 'from-mint to-lavender',
    technologies: ['Vue.js', 'CSS3', 'JavaScript', 'Netlify'],
    details: 'A responsive portfolio website with smooth animations and modern design principles.',
  },
  {
    id: 3,
    title: 'Task Manager',
    description: 'React + Firebase',
    emoji: '📋',
    gradient: 'from-blush to-honey',
    technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript'],
    details: 'A collaborative task management app with real-time updates and team features.',
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'JavaScript + API',
    emoji: '🌤️',
    gradient: 'from-lavender to-mint',
    technologies: ['JavaScript', 'OpenWeather API', 'CSS3', 'HTML5'],
    details: 'A weather application with location-based forecasts and beautiful animations.',
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'Next.js + MDX',
    emoji: '📝',
    gradient: 'from-honey to-mint',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    details: 'A modern blog platform with markdown support and SEO optimization.',
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'Socket.io + Express',
    emoji: '💬',
    gradient: 'from-blush to-lavender',
    technologies: ['Socket.io', 'Express', 'React', 'MongoDB'],
    details: 'Real-time chat application with rooms, private messaging, and file sharing.',
  },
];

export const SKILLS = [
  { name: 'React', emoji: '⚛️', color: 'honey' },
  { name: 'Node.js', emoji: '🟢', color: 'mint' },
  { name: 'Python', emoji: '🐍', color: 'lavender' },
  { name: 'SQL', emoji: '🗄️', color: 'blush' },
  { name: 'React Native', emoji: '📱', color: 'honey' },
  { name: 'AWS', emoji: '☁️', color: 'mint' },
];

export const TIMELINE_EVENTS = [
  {
    year: '2020',
    title: 'First Brew',
    description: 'Started my coding journey with HTML & CSS',
  },
  {
    year: '2021',
    title: 'Barista Training',
    description: 'Completed Full-Stack Bootcamp',
  },
  {
    year: '2022',
    title: 'Opening Day',
    description: 'First professional development role',
  },
  {
    year: '2023',
    title: 'Specialty Drinks',
    description: 'Mastered React, Node.js & cloud technologies',
  },
];

export const PERSONALITY_TRAITS = [
  { emoji: '🎨', title: 'Creative', description: 'Always brewing new ideas' },
  { emoji: '🔍', title: 'Detail-Oriented', description: 'Perfect latte art every time' },
  { emoji: '🚀', title: 'Problem Solver', description: 'Finding solutions in every cup' },
  { emoji: '🤝', title: 'Team Player', description: 'Collaborative coding culture' },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', emoji: '🐙', url: '#' },
  { name: 'LinkedIn', emoji: '💼', url: '#' },
  { name: 'Twitter', emoji: '🐦', url: '#' },
  { name: 'Email', emoji: '📧', url: '#' },
];

export const NAVIGATION_SECTIONS = [
  { id: 'entrance', label: 'Entrance', emoji: '🚪' },
  { id: 'projects', label: 'Projects', emoji: '🍰' },
  { id: 'skills', label: 'Skills', emoji: '☕' },
  { id: 'about', label: 'About', emoji: '📖' },
  { id: 'contact', label: 'Contact', emoji: '📝' },
];
