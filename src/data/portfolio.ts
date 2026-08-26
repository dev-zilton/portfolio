export const staticPortfolio = {
  name: "Zilton Tuaire Abdul",
  firstName: "Zilton",

  skillCategories: [
    {
      id: "frontend",
      items: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Tailwind CSS", icon: "tailwind" },
      ],
    },
    {
      id: "backend",
      items: [
        { name: "Python", icon: "python" },
        { name: "Java (Swing)", icon: "java" },
        { name: "Spring Boot", icon: "springboot" },
        { name: "FastAPI", icon: "fastapi" },
        { name: "Node.js", icon: "nodejs" },
        { name: "Express", icon: "express" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MySQL / MariaDB", icon: "mysql" },
        { name: "SQLite / Turso", icon: "sqlite" },
        { name: "JWT", icon: "jwt" },
      ],
    },
    {
      id: "devops",
      items: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Docker", icon: "docker" },
      ],
    },
    {
      id: "cloud",
      items: [
        { name: "Vercel", icon: "vercel" },
        { name: "AWS", icon: "aws" },
        { name: "Supabase", icon: "supabase" },
        { name: "M-Pesa / e-Mola", icon: "mpesa" },
        { name: "Arduino / IoT", icon: "arduino" },
      ],
    },
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

export type SkillCategory = (typeof staticPortfolio.skillCategories)[number];
export type Skill = SkillCategory["items"][number];
