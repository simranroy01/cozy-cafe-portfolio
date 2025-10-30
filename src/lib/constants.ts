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

// Mobile detection utility
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const PROJECTS = [
  {
    id: 1,
    title: 'Smart Recipe Generator',
    description: 'Next.js + TypeScript + Tailwind CSS + Supabase',
    emoji: '🍳',
    gradient: 'from-honey to-blush',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'Google Cloud Vision API',
      'Google Gemini API',
    ],
    details: `• Developed end-to-end AI-powered recipe generator using Next.js, TypeScript, Tailwind CSS, Google Cloud Vision API, and Google Gemini API, processing 50+ interactions per session with full nutritional breakdowns.
• Implemented secure authentication with Supabase Auth (OTP verification), session management, and Supabase Storage for scalable, secure data persistence.
• Designed RESTful APIs for recipe retrieval, favorites, ratings, and personalized suggestions—optimizing database queries and reducing average response time by 40%.
• Crafted dynamic UI components (responsive recipe cards, star-rating & save features, animations) and optimized performance with server-side rendering, lazy loading, and responsive layouts for seamless cross-device experiences.`,
    link: 'https://smart-recipe-generator-zeta.vercel.app/',
    images: [
      '/srg1.png',
      '/srg2.png',
      '/srg3.png',
      '/srg4.png',
      '/srg5.png',
      '/srg6.png',
    ],
  },
  {
    id: 2,
    title: 'SmartDoc Summarizer',
    description: 'LangChain + RAG + PyTorch + OpenAI API + Gradio',
    emoji: '📄',
    gradient: 'from-mint to-lavender',
    technologies: [
      'LangChain',
      'RAG',
      'PyTorch',
      'OpenAI API',
      'ChromaDB',
      'Tesseract OCR',
      'Table Transformer',
      'Gradio',
    ],
    details: `• Built an AI-driven PDF analysis platform that improved information retrieval efficiency by 60%, using multimodal processing of text, tables, and images.
• Integrated RAG + ChromaDB for 40% more accurate contextual answers.
• Leveraged LangChain, GPT-3.5, and GPT-4 Vision for multimodal summarization and analysis.
• Used Tesseract OCR for text extraction and Microsoft Table Transformer for structured table recognition with 85%+ precision, and deployed via Gradio web app with drag-and-drop PDF uploads.`,
    link: 'https://github.com/simranroy01/SmartDoc-Summarizer',
    images: [
      'sd1.jpg',
      'sd2.jpg',
    ],
  },
  {
    id: 3,
    title: 'Water Monitoring App',
    description: 'Streamlit, Python, TensorFlow, OpenCV, GEE API',
    emoji: '💧',
    gradient: 'from-blush to-honey',
    technologies: [
      'Streamlit',
      'Python',
      'TensorFlow',
      'OpenCV',
      'Google Earth Engine API',
      'Sentinel-2',
      'NumPy',
      'Pandas',
    ],
    details: `• Built a full-stack web app in Streamlit enabling users to analyze regional water turbidity via interactive map selection, increasing environmental monitoring efficiency by 60% over manual inspection methods.
• Integrated Google Earth Engine and Sentinel-2 satellite data to compute NDWI and NDTI indices for real-time geospatial analysis, reducing satellite data processing time by 40%.
• Designed and deployed an underwater object detection module using CNN and OpenCV, automating marine debris detection and infrastructure inspection with 70% improved detection accuracy vs manual review.`,
    link: 'https://github.com/simranroy01/AQUAVISION',
    images: [
      'aq1.png',
      'aq2.png',
      'aq3.png',
      'aq4.png',
      'aq5.png',
    ],
  },
  {
    id: 4,
    title: 'Online Bookstore with AWS',
    description: 'AWS Amplify, React, Amazon Cognito, GraphQL, AWS Lambda, S3',
    emoji: '📚',
    gradient: 'from-lavender to-mint',
    technologies: [
      'React',
      'AWS Amplify',
      'Amazon Cognito',
      'GraphQL',
      'AWS Lambda',
      'AWS S3',
      'AWS AppSync',
    ],
    details: `• Developed an AWS-powered online bookstore using AWS Amplify and React, integrating Amazon Cognito for secure user authentication.
• Configured Amazon S3 buckets to store and serve product images and hosted the React application on S3, improving page load speeds by 40%.
• Implemented AWS AppSync GraphQL API with Lambda pipeline resolvers to process and verify orders and handle customer queries, reducing API response times by 50%.`,
    link: 'https://github.com/simranroy01/onlinestore-aws',
    images: [
      '/project-images/bookstore-1.png',
      '/project-images/bookstore-2.png',
      '/project-images/bookstore-3.png',
    ],
  },
  {
    id: 5,
    title: 'Multimodal AI Assistant',
    description: 'LLaVA + Computer Vision + NLP + OpenAI Whisper + Gradio',
    emoji: '🤖',
    gradient: 'from-honey to-mint',
    technologies: [
      'LLaVA',
      'OpenAI Whisper',
      'Google TTS',
      'Computer Vision',
      'NLP',
      'Gradio',
      'Quantization',
    ],
    details: `• Developed a real-time multimodal AI system integrating computer vision, NLP, and speech processing, improving processing efficiency by 50%.
• Generated image captions with LLaVA with 90% accuracy, transcribed multilingual audio via OpenAI Whisper with 85% accuracy, and converted text to speech using Google TTS.
• Built and deployed an interactive Gradio interface for seamless cross-modal user interaction.
• Optimized large models with 4-bit quantization, enabling real-time inference and reducing GPU memory usage by 60%.`,
    link: 'https://github.com/simranroy01/multimodal_llava_bot',
    images: [
      '/llava.jpg',
    ],
  },
  {
    id: 6,
    title: 'Urban Planning Tool',
    description: 'FastAPI, Python, GEE, Folium, PIL, Uvicorn',
    emoji: '🏙️',
    gradient: 'from-blush to-lavender',
    technologies: [
      'FastAPI',
      'Python',
      'Google Earth Engine',
      'Folium',
      'PIL',
      'Uvicorn',
      'Rasterio',
      'JavaScript',
    ],
    details: `• Built a FastAPI-based geospatial web app that integrates Google Earth Engine to analyze landcover, population, and built-up area changes with 90% faster processing using async APIs.
• Automated satellite image exports via geemap, reducing manual processing time by ~70%.
• Processed and visualized regional data using Pandas, NumPy, and Rasterio, achieving accurate change detection (±5%) across multi-year datasets.
• Implemented a clean frontend-backend pipeline with HTML, JS, and FastAPI for interactive region selection and real-time visualization.`,
    link: 'https://github.com/simranroy01/urban-planning',
    images: [
      '/project-images/urban-planning-1.png',
      '/project-images/urban-planning-2.png',
      '/project-images/urban-planning-3.png',
    ],
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
    title: 'The First Brew',
    description: 'Discovered coding with HTML, CSS, and JavaScript in 11th grade. My love for interactive designs began here.',
  },
  {
    year: '2022',
    title: 'The Fresh Pour',
    description: 'Enrolled at VIT. Deepened knowledge in data structures and problem-solving.',
  },
  {
    year: '2023',
    title: 'The Perfect Grind',
    description: 'Joined tech clubs and outreach programs. Explored robotics and AI/ML, learned the value of teamwork.',
  },
  {
    year: '2024',
    title: 'The Bold Roast',
    description: 'Experimented with larger projects and web applications. Refined logic and creativity through late-night debugging.',
  },
  {
    year: '2025',
    title: 'The Signature Blend',
    description: 'Interned as a developer, building projects with design, data, and real-world impact.',
  },
  {
    year: '2026',
    title: 'The Final Drip (for now)',
    description: 'Graduating soon with experiences, lessons, and code. Ready to pour into what comes next.',
  },
];

export const PERSONALITY_TRAITS = [
  { emoji: '🎨', title: 'Creative', description: 'Always brewing new ideas' },
  { emoji: '🔍', title: 'Detail-Oriented', description: 'Perfect latte art every time' },
  { emoji: '🚀', title: 'Problem Solver', description: 'Finding solutions in every cup' },
  { emoji: '🤝', title: 'Team Player', description: 'Collaborative coding culture' },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', emoji: '🐙', url: 'https://github.com/simranroy01' },
  { name: 'LinkedIn', emoji: '💼', url: 'https://www.linkedin.com/in/simran-roy-437788270/' },
  { name: 'Email', emoji: '📧', url: 'mailto:simranroy.186@gmail.com' },
];

export const NAVIGATION_SECTIONS = [
  { id: 'entrance', label: 'Entrance', emoji: '🚪' },
  { id: 'projects', label: 'Projects', emoji: '🍰' },
  { id: 'skills', label: 'Skills', emoji: '☕' },
  { id: 'about', label: 'About', emoji: '📖' },
  { id: 'contact', label: 'Contact', emoji: '📝' },
];
