// Ficheiros em public/ têm de respeitar o base do Vite (ex.: /portfolio/ no GitHub Pages).
const publicAsset = (file: string) => `${import.meta.env.BASE_URL}${file}`;

export type ProjectCategory = "web" | "mobile" | "desktop" | "iot" | "social";

export type Project = {
  id: string;
  icon: string;
  category: ProjectCategory;
  featured?: boolean;
  site?: string;
  repo?: string;
  image?: string;
  livePreview?: boolean;
};

export const staticPortfolio = {
  name: "Zilton Tuaire Abdul",
  firstName: "Zilton",

  skillCategories: [
    {
      id: "frontend",
      items: [
        { name: "HTML / CSS", icon: "html", daily: true },
        { name: "JavaScript", icon: "javascript" },
        { name: "React", icon: "react", daily: true },
        { name: "React Native", icon: "reactnative" },
        { name: "Next.js", icon: "nextjs", daily: true },
        { name: "TypeScript", icon: "typescript", daily: true },
        { name: "Tailwind CSS", icon: "tailwind", daily: true },
        { name: "Framer Motion", icon: "framer" },
      ],
    },
    {
      id: "backend",
      items: [
        { name: "Python", icon: "python", daily: true },
        { name: "Java (Swing)", icon: "java" },
        { name: "Spring Boot", icon: "springboot" },
        { name: "FastAPI", icon: "fastapi" },
        { name: "Node.js", icon: "nodejs", daily: true },
        { name: "Express", icon: "express" },
        { name: "PostgreSQL", icon: "postgresql", daily: true },
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
        { name: "Git", icon: "git", daily: true },
        { name: "GitHub", icon: "github", daily: true },
        { name: "Docker", icon: "docker" },
      ],
    },
    {
      id: "cloud",
      items: [
        { name: "Vercel", icon: "vercel", daily: true },
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

  // site: endereço publicado · repo: código no GitHub (tem de ser público).
  // livePreview: o card mostra o site real num iframe. Só para sites que permitem
  // ser incorporados (sem X-Frame-Options / frame-ancestors restritivos).
  // featured: aparece em destaque, com o estudo de caso de t.projects.items[].caseStudy.
  projects: [
    {
      id: "rentcar",
      icon: "car",
      category: "web",
      featured: true,
      site: "https://rentacar-mz.vercel.app/",
      repo: "https://github.com/dev-zilton/rentacar-mz",
      image: publicAsset("rentacar-mz.png"),
      livePreview: true,
    },
    {
      id: "dripgod",
      icon: "shirt",
      category: "web",
      featured: true,
      site: "https://dripgod.vercel.app/",
      image: publicAsset("dripgod.png"),
      livePreview: true,
    },
    {
      id: "matoladigital",
      icon: "landmark",
      category: "web",
      featured: true,
      // O site (matola-digital.vercel.app) está em 404 — volta a pôr `site` e `livePreview` quando for republicado.
      repo: "https://github.com/dev-zilton/matola-digital",
      image: publicAsset("matola-digital.webp"),
    },
    {
      id: "linhadefundo",
      icon: "trophy",
      category: "social",
      featured: true,
      site: "https://www.facebook.com/profile.php?id=100064196370490",
      image: publicAsset("linha-de-fundo.webp"),
    },
    {
      id: "irrigation",
      icon: "leaf",
      category: "web",
      site: "https://marketing-digital-landingg.vercel.app/",
      image: publicAsset("irrigation.png"),
      livePreview: true,
    },
    {
      id: "landingpage",
      icon: "layout",
      category: "web",
      site: "https://website-ten-iota-18.vercel.app/",
      repo: "https://github.com/dev-zilton/website",
      image: publicAsset("sweetlar.png"),
      livePreview: true,
    },
    {
      id: "startuplanding",
      icon: "rocket",
      category: "web",
      site: "https://startup-website-build.vercel.app/",
      repo: "https://github.com/dev-zilton/startup-website-build",
      image: publicAsset("startuplanding.png"),
      livePreview: true,
    },
    {
      id: "picasso",
      icon: "cart",
      category: "desktop",
      repo: "https://github.com/dev-zilton/SistemaVendasUnico.java",
      image: publicAsset("buy-easy-shop.webp"),
    },
  ] as Project[],

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
export const dailySkillsCount = staticPortfolio.skillCategories
  .flatMap((category) => category.items)
  .filter((skill) => skill.daily).length;
export const totalProjectsCount = staticPortfolio.projects.length;
