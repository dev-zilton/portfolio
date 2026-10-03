// Ficheiros em public/ têm de respeitar o base do Vite (ex.: /portfolio/ no GitHub Pages).
const publicAsset = (file: string) => `${import.meta.env.BASE_URL}${file}`;

export const staticPortfolio = {
  name: "Zilton Tuaire Abdul",
  firstName: "Zilton",

  skillCategories: [
    {
      id: "frontend",
      items: [
        { name: "HTML / CSS", icon: "html" },
        { name: "JavaScript", icon: "javascript" },
        { name: "React", icon: "react" },
        { name: "React Native", icon: "reactnative" },
        { name: "Next.js", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Framer Motion", icon: "framer" },
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
        { name: "Drizzle ORM", icon: "drizzle" },
        { name: "JWT", icon: "jwt" },
        { name: "Resend", icon: "resend" },
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
    {
      id: "design",
      items: [
        { name: "Figma", icon: "figma" },
        { name: "Canva", icon: "canva" },
        { name: "Photoshop", icon: "photoshop" },
      ],
    },
  ],

  // livePreview: o card mostra o site real num iframe. Só para sites que permitem
  // ser incorporados (sem X-Frame-Options / frame-ancestors restritivos).
  projects: [
    {
      id: "irrigation",
      icon: "leaf",
      link: "https://marketing-digital-landingg.vercel.app/",
      image: publicAsset("irrigation.png"),
      livePreview: true,
    },
    {
      id: "rentcar",
      icon: "car",
      link: "https://rentacar-mz.vercel.app/",
      image: publicAsset("rentacar-mz.png"),
      livePreview: true,
    },
    {
      id: "matoladigital",
      icon: "landmark",
      link: "https://matola-digital.vercel.app/",
      image: publicAsset("matola-digital.webp"),
      livePreview: true,
    },
    {
      id: "picasso",
      icon: "cart",
      link: "https://github.com/dev-zilton/SistemaVendasUnico.java",
    },
    {
      id: "dripgod",
      icon: "shirt",
      link: "https://dripgod.vercel.app/",
      image: publicAsset("dripgod.png"),
      livePreview: true,
    },
    {
      id: "landingpage",
      icon: "layout",
      link: "https://website-ten-iota-18.vercel.app/",
      image: publicAsset("sweetlar.png"),
      livePreview: true,
    },
    {
      id: "startuplanding",
      icon: "rocket",
      link: "https://startup-website-build.vercel.app/",
      image: publicAsset("startuplanding.png"),
      livePreview: true,
    },
  ],

  resumeUrl: publicAsset("curriculo.pdf"),

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

// Totais calculados a partir dos dados reais acima — nunca ficam desatualizados
// quando adicionas ou removes skills/projetos.
export const totalSkillsCount = staticPortfolio.skillCategories.reduce(
  (sum, category) => sum + category.items.length,
  0,
);
export const totalProjectsCount = staticPortfolio.projects.length;
