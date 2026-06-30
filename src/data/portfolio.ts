export const staticPortfolio = {
  name: "Zilton Tuaire Abdul",
  firstName: "Zilton",

  skills: [
    { name: "Python", level: 90, icon: "python" },
    { name: "Java (Swing)", level: 85, icon: "java" },
    { name: "React", level: 70, icon: "react" },
    { name: "Tailwind CSS", level: 75, icon: "tailwind" },
    { name: "FastAPI", level: 65, icon: "fastapi" },
    { name: "PostgreSQL", level: 70, icon: "postgresql" },
    { name: "Arduino / IoT", level: 80, icon: "arduino" },
    { name: "Git & GitHub", level: 85, icon: "git" },
  ],

  projects: [
    { id: "irrigation", icon: "leaf", link: "https://github.com/dev-zilton" },
    { id: "rentcar", icon: "car", link: "https://github.com/dev-zilton" },
    {
      id: "picasso",
      icon: "cart",
      link: "https://github.com/dev-zilton/SistemaVendasUnico.java",
    },
    { id: "github", icon: "code", link: "https://github.com/dev-zilton" },
    { id: "landingpage", icon: "layout", link: "https://website-ten-iota-18.vercel.app/" },
    { id: "startuplanding", icon: "rocket", link: "https://startup-website-build.vercel.app/" },
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
