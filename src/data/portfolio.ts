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
    {
      id: "irrigation",
      icon: "leaf",
      link: "https://marketing-digital-landingg.vercel.app/",
      image: "/irrigation.png",
    },
    { id: "rentcar", icon: "car", link: "https://rentacar-mz.vercel.app/", image: "/rentacar-mz.png" },
    { id: "matoladigital", icon: "landmark", link: "https://matola-digital.vercel.app/", image: "/matola-digital.png" },
    {
      id: "picasso",
      icon: "cart",
      link: "https://github.com/dev-zilton/SistemaVendasUnico.java",
    },
    { id: "dripgod", icon: "shirt", link: "https://fashion-website-improvements.vercel.app/", image: "/dripgod.png" },
    {
      id: "landingpage",
      icon: "layout",
      link: "https://website-ten-iota-18.vercel.app/",
      image: "/sweetlar.png",
    },
    {
      id: "startuplanding",
      icon: "rocket",
      link: "https://startup-website-build.vercel.app/",
      image: "/startuplanding.png",
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
