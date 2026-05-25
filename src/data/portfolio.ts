export const staticPortfolio = {
  name: "Zilton Tuaire Abdul",
  firstName: "Zilton",

  skills: [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "Java (Swing)", level: 85, icon: "☕" },
    { name: "React", level: 70, icon: "⚛️" },
    { name: "Tailwind CSS", level: 75, icon: "🎨" },
    { name: "FastAPI", level: 65, icon: "🚀" },
    { name: "PostgreSQL", level: 70, icon: "🗄️" },
    { name: "Arduino / IoT", level: 80, icon: "🔌" },
    { name: "Git & GitHub", level: 85, icon: "📚" },
  ],

  projects: [
    {
      id: "irrigation",
      icon: "🌱",
      link: "https://github.com/dev-zilton",
    },
    {
      id: "rentcar",
      icon: "🚗",
      link: "https://github.com/dev-zilton",
    },
    {
      id: "picasso",
      icon: "🛒",
      link: "https://github.com/dev-zilton/SistemaVendasUnico.java",
    },
    {
      id: "github",
      icon: "💻",
      link: "https://github.com/dev-zilton",
    },
  ],

  contacts: {
    whatsapp: "https://wa.me/258843792635",
    email: "mailto:ziltontuaireabdul@gmail.com",
    github: "https://github.com/dev-zilton",
    linkedin: "https://www.linkedin.com/in/zilton-tuair-abdul",
  },

  navIds: ["about", "skills", "projects", "contact"] as const,

  footerIds: ["about", "skills", "projects", "contact"] as const,
};

export type Skill = (typeof staticPortfolio.skills)[number];
