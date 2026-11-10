const projects = {
  "digitalEden": {
    id: "digitalEden",
    title: "Digital Eden",
    tagline: "AI-powered analytics with real-time visualization",
    status: "AcTIVE",
    featured: true, // used on home page
    lastUpdated: "2024-01-15",

    stats: { stars: 247, forks: 89, contributors: 12 },

    links: {
      demo: "https://digitaleden.web.app",
      source: "https://github.com/yourrepo",
    },

    heroImage: "digitalEden/digi5.png",
    heroImage2: "../digitalEden/digi5.png",

    techStack: ["React", "JavaScript", "Alchemy", "Opensea"],

    features: [
      "Real-time NFT price",
      "Encrypted data transmission",
      "Advanced pattern recognition",
      "Multi-dimensional analytics",
    ],

    screenshots: [
      "../digitalEden/digi5.png",
      "../digitalEden/digi6.png",
      "../digitalEden/digi3.png",
      "../digitalEden/digi4.png",
      "../digitalEden/digi1.png",
      "../digitalEden/digi2.png",
      
    ],

    overview:
      "A cyber-inspired AI dashboard that processes neural network data in real time with immersive visual feedback.",
  },

  "ai-trading-bot": {
    id: "ai-trading-bot",
    title: "AI Trading Bot",
    tagline: "Automated market analysis and execution engine",
    status: "completed",
    featured: true,
    lastUpdated: "2024-02-02",

    stats: { stars: 180, forks: 54, contributors: 6 },

    links: {
      demo: "",
      source: "https://github.com/yourrepo",
    },

    heroImage: "task-management-dashboard.png",
    heroImage2: "../task-management-dashboard.png",

    techStack: ["Python", "TensorFlow", "MT5 API", "FastAPI"],

    features: [
      "Trend detection AI",
      "Risk-managed trade execution",
      "Backtesting engine",
      "Live performance dashboard",
    ],

    screenshots: [
      "../task-management-dashboard.png",
      "../images/weather-dashboard.png",
    ],

    overview:
      "An intelligent trading system that analyzes multi-timeframe data and executes trades using adaptive AI strategies.",
  },
};

export default projects;
