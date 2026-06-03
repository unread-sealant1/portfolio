const projects = [
  {
    slug: "r-ramz",
    name: "R-Ramz",
    type: "Production",
    shortDescription: "A full-stack system for managing and analyzing data with real-time collaboration features.",
    longDescription: "R-Ramz is a comprehensive data management platform designed to handle complex workflows with real-time collaboration, role-based access control, and advanced analytics. The system was built to solve the challenge of managing distributed data across teams while maintaining data integrity and providing meaningful insights through visualization.",
    role: "Full-stack development, system architecture, and database design. Built the entire application from backend APIs to frontend components.",
    stack: ["React", "Node.js", "PostgreSQL", "Express", "Redis", "Docker", "WebSocket"],
    features: [
      "Real-time collaboration with WebSocket connections",
      "Role-based access control (RBAC)",
      "Advanced data filtering and search",
      "RESTful API architecture",
      "Data export (CSV, JSON, PDF)",
      "Activity logging and audit trails",
      "Responsive dashboard with data visualization"
    ],
    links: {
      live: "https://r-ramz.vercel.app",
      github: "https://github.com/unread-sealant1/r-ramz"
    }
  },
  {
    slug: "cliptalk",
    name: "ClipTalk",
    type: "Demo",
    shortDescription: "A social video-sharing concept that combines short-form content with community engagement features.",
    longDescription: "ClipTalk is a demo social application designed around short-form video content with social interaction features. The platform explores content discovery, user engagement mechanics, and real-time social interactions. Built as a prototype to demonstrate full-stack social media architecture patterns including content feeds, user profiles, and interaction systems.",
    role: "Full-stack development. Designed and implemented the content feed system, user authentication flow, and interaction mechanics.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "TailwindCSS"],
    features: [
      "User authentication and profiles",
      "Video upload and streaming",
      "Content feed with algorithmic sorting",
      "Like, comment, and share interactions",
      "User following system",
      "Search and content discovery"
    ],
    links: {
      live: "https://clip-talk-rose.vercel.app",
      github: "https://github.com/unread-sealant1/cliptalk"
    }
  },
  {
    slug: "shoppingmaster",
    name: "ShoppingMaster",
    type: "Demo",
    shortDescription: "An e-commerce platform prototype with product management, cart system, and order processing.",
    longDescription: "ShoppingMaster is a demo e-commerce platform that simulates a full product lifecycle from browsing to checkout. The system demonstrates e-commerce architecture patterns including product catalog management, shopping cart state management, order processing workflows, and payment integration simulation. Built to showcase backend data modeling and frontend state management for complex transactional systems.",
    role: "Full-stack development. Architected the product data model, implemented cart logic, and built the order management system.",
    stack: ["React", "Node.js", "MongoDB", "Express", "Stripe (test mode)", "Redux"],
    features: [
      "Product catalog with categories and search",
      "Shopping cart with persistent state",
      "Order management and history",
      "User authentication",
      "Payment processing simulation",
      "Admin product management dashboard"
    ],
    links: {
      live: "https://shopping-master-cyan.vercel.app",
      github: "https://github.com/unread-sealant1/shoppingmaster"
    }
  },
  {
    slug: "you-decide",
    name: "You Decide",
    type: "Demo",
    shortDescription: "An interactive decision-making application that guides users through structured logic trees.",
    longDescription: "You Decide is a decision logic application that helps users break down complex decisions through structured decision trees and weighted criteria analysis. The application demonstrates algorithmic thinking and interactive UI patterns for guided decision-making workflows. Users can create custom decision frameworks, assign weights to criteria, and visualize outcomes.",
    role: "Full-stack development. Designed the decision tree algorithm and built the interactive UI components.",
    stack: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    features: [
      "Custom decision tree creation",
      "Weighted criteria analysis",
      "Visual outcome comparison",
      "Decision history and saving",
      "Share decision frameworks",
      "Real-time result calculation"
    ],
    links: {
      live: "https://you-decide-nine.vercel.app",
      github: "https://github.com/unread-sealant1/you-decide"
    }
  },
  {
    slug: "joblink360",
    name: "JobLink360",
    type: "Demo",
    shortDescription: "A job board platform with advanced filtering, application tracking, and employer management.",
    longDescription: "JobLink360 is a comprehensive job board platform that connects employers with job seekers. The system features advanced job filtering, application tracking, employer dashboards, and a recommendation engine. Built to demonstrate complex data querying patterns, search optimization, and role-based interfaces for different user types.",
    role: "Full-stack development. Built the job search and filtering system, application workflow, and dual-interface design for job seekers and employers.",
    stack: ["React", "Node.js", "PostgreSQL", "Express", "Elasticsearch", "TailwindCSS"],
    features: [
      "Advanced job search with multiple filters",
      "Job application tracking system",
      "Employer dashboard with analytics",
      "User profiles with resume upload",
      "Job recommendations based on skills",
      "Email notifications for applications"
    ],
    links: {
      live: "https://joblink360-yarx.vercel.app",
      github: "https://github.com/unread-sealant1/joblink360"
    }
  },
  {
    slug: "airbnb-clone",
    name: "Airbnb Clone",
    type: "Demo",
    shortDescription: "A full-stack property rental platform demonstrating complex booking systems and search architecture.",
    longDescription: "This Airbnb clone is a full-stack demonstration of a property rental marketplace. It implements complex system design patterns including property search with map integration, booking calendar management, review systems, and payment flow. This project was built to demonstrate capability in building marketplace platforms with multi-tenant data models and real-time availability management.",
    role: "Full-stack development. Architected the booking system, property search with geolocation, and the multi-user platform structure.",
    stack: ["React", "Node.js", "MongoDB", "Express", "Mapbox", "JWT", "TailwindCSS"],
    features: [
      "Property search with map integration",
      "Booking system with calendar availability",
      "User authentication with JWT",
      "Property listing management",
      "Review and rating system",
      "Image upload and gallery management",
      "Booking confirmation and history"
    ],
    links: {
      live: "https://latest-black.vercel.app",
      github: "https://github.com/unread-sealant1/airbnb-clone"
    }
  },
  {
    slug: "joe-black-adventures",
    name: "Joe Black Adventures",
    type: "Production",
    shortDescription: "A live production website for adventure and outdoor experiences, built with a focus on content presentation and user engagement.",
    longDescription: "Joe Black Adventures is a live production website built to showcase adventure content, trips, and outdoor experiences. The platform delivers a clean, immersive browsing experience with structured content pages, media integration, and a focus on storytelling through design.",
    role: "Full-stack development. Built the frontend architecture, content management integration, and deployment pipeline.",
    stack: ["React", "Node.js", "TailwindCSS", "Express"],
    features: [
      "Content-driven pages with rich media",
      "Responsive design across all devices",
      "Clean navigation and information architecture",
      "Performance-optimized asset delivery",
      "SEO-friendly structure"
    ],
    links: {
      live: "https://joeblackadventures.com"
    }
  }
];

export default projects;
