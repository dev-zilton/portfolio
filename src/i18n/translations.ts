export type Locale = "en" | "pt" | "fr";

export const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
  { code: "fr", label: "FR" },
];

export type Translation = {
  nav: {
    education: string;
    certificates: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
    contactMe: string;
  };
  hero: {
    available: string;
    hi: string;
    subtitle: string;
    description: string;
    hireMe: string;
    downloadResume: string;
    metrics: { value: string; label: string }[];
  };
  offer: {
    title: string;
    highlight: string;
    subtitle: string;
    cards: {
      education: string;
      certificates: string;
      about: string;
      skills: string;
    };
  };
  about: {
    title: string;
    highlight: string;
    intro: string;
    interestsTitle: string;
    interests: string[];
    closing: string;
    cardSummary: string;
  };
  skills: {
    title: string;
    highlight: string;
    technical: string;
    tools: string;
  };
  projects: {
    title: string;
    highlight: string;
    subtitle: string;
    label: string;
    moreProjects: string;
    items: {
      id: string;
      title: string;
      description: string;
      tags: string[];
    }[];
  };
  education: {
    title: string;
    highlight: string;
    items: {
      degree: string;
      school: string;
      description: string;
      year: string;
    }[];
  };
  certificates: {
    title: string;
    highlight: string;
    items: string[];
  };
  contact: {
    title: string;
    highlight: string;
    subtitle: string;
    whatsapp: string;
    email: string;
    github: string;
    linkedin: string;
    connecting: string;
    success: string;
    error: string;
  };
  footer: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
    rights: string;
    built: string;
  };
};

const school = "Universidade Técnica Eugénio Diogo Guilande";

export const translations: Record<Locale, Translation> = {
  en: {
    nav: {
      education: "Education",
      certificates: "Certificates",
      about: "About Me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      contactMe: "Contact Me",
    },
    hero: {
      available: "Available for projects",
      hi: "Hi, I'm",
      subtitle: "Computer Science student passionate about technology.",
      description:
        "I focus on building real-world technological solutions using web development, IoT, automation, and software engineering.",
      hireMe: "Hire Me",
      downloadResume: "Download Resume",
      metrics: [
        { value: "8+", label: "Technical Skills" },
        { value: "4+", label: "Projects Delivered" },
        { value: "2022", label: "Building Since" },
      ],
    },
    offer: {
      title: "What I",
      highlight: "Offer",
      subtitle:
        "Core areas grouped by proximity — education, credentials, profile, and skills.",
      cards: {
        education: "Education",
        certificates: "Certificates",
        about: "About Me",
        skills: "Skills",
      },
    },
    about: {
      title: "About",
      highlight: "Me",
      intro:
        "I am Zilton Tuaire Abdul, a Computer Science student passionate about technology and innovation.",
      interestsTitle: "I have experience and interest in:",
      interests: [
        "Web development systems",
        "Automation and IoT (Internet of Things)",
        "Academic and practical software projects",
        "Artificial Intelligence fundamentals",
      ],
      closing:
        "I enjoy building solutions that solve real problems using modern technologies.",
      cardSummary:
        "Computer Science student passionate about technology, web systems, IoT, automation, and AI.",
    },
    skills: {
      title: "My",
      highlight: "Skills",
      technical: "Technical Skills",
      tools: "Tools & Technologies",
    },
    projects: {
      title: "My",
      highlight: "Projects",
      subtitle:
        "Projects built with a focus on practical solutions and modern technologies.",
      label: "Project",
      moreProjects: "More Projects",
      items: [
        {
          id: "irrigation",
          title: "Agriculture Irrigation System",
          description:
            "IoT-based irrigation system using soil moisture sensors and Arduino.",
          tags: ["IoT", "Arduino", "Automation"],
        },
        {
          id: "rentcar",
          title: "Rent Car System",
          description:
            "Full vehicle rental management system with modern interface.",
          tags: ["Web Development", "React", "Management System"],
        },
        {
          id: "picasso",
          title: "Picasso Events",
          description:
            "Desktop application for sales and product management using Java Swing.",
          tags: ["Java Swing", "Desktop Application"],
        },
        {
          id: "github",
          title: "GitHub Projects",
          description: "View all repositories and contributions on GitHub.",
          tags: ["Python", "Java", "Web"],
        },
      ],
    },
    education: {
      title: "My",
      highlight: "Education",
      items: [
        {
          degree: "Bachelor's Degree in Computer Science",
          school,
          description: "Higher education in Computer Science",
          year: "2022 - 2025",
        },
        {
          degree: "Python Programming",
          school: "Coursera / Udemy",
          description: "Python development certifications",
          year: "2022 - 2023",
        },
      ],
    },
    certificates: {
      title: "My",
      highlight: "Certificates",
      items: [
        "Python Fundamentals - Coursera",
        "Web Development with React",
        "Introduction to IoT - Arduino",
        "Git & GitHub Essentials",
      ],
    },
    contact: {
      title: "Let's",
      highlight: "Connect",
      subtitle:
        "I am available for projects and collaborations. Let's build something amazing together.",
      whatsapp: "WhatsApp",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      connecting: "Connecting...",
      success: "Opened successfully",
      error: "Unavailable — try again",
    },
    footer: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      rights: "All rights reserved.",
      built: "Built with React + Tailwind CSS",
    },
  },
  pt: {
    nav: {
      education: "Educação",
      certificates: "Certificados",
      about: "Sobre Mim",
      skills: "Competências",
      projects: "Projetos",
      contact: "Contacto",
      contactMe: "Contactar",
    },
    hero: {
      available: "Disponível para projetos",
      hi: "Olá, sou",
      subtitle:
        "Informático e desenvolvedor de softwares apaixonado por tecnologia, focado em criar soluções reais com impacto.",
      description:
        "Foco em criar soluções tecnológicas que resolvem problemas reais, com experiência em desenvolvimento web, IoT, automação e engenharia de software.",
      hireMe: "Contratar-me",
      downloadResume: "Descarregar CV",
      metrics: [
        { value: "8+", label: "Competências Técnicas" },
        { value: "4+", label: "Projetos Entregues" },
        { value: "2022", label: "A construir desde" },
      ],
    },
    offer: {
      title: "O que",
      highlight: "Ofereço",
      subtitle:
        "Áreas principais agrupadas por proximidade — educação, credenciais, perfil e competências.",
      cards: {
        education: "Educação",
        certificates: "Certificados",
        about: "Sobre Mim",
        skills: "Competências",
      },
    },
    about: {
      title: "Sobre",
      highlight: "Mim",
      intro:
        "Sou Zilton Tuaire Abdul, Informático e desenvolvedor de softwares apaixonado por tecnologia e inovação.",
      interestsTitle: "Tenho experiência e interesse em:",
      interests: [
        "Sistemas de desenvolvimento web",
        "Automação e IoT (Internet das Coisas)",
        "Projetos académicos e práticos de software",
        "Fundamentos de Inteligência Artificial",
      ],
      closing:
        "Gosto de criar soluções que resolvem problemas reais com tecnologias modernas.",
      cardSummary:
        "Informático e desenvolvedor de softwares apaixonado por tecnologia, sistemas web, IoT, automação e IA.",
    },
    skills: {
      title: "As minhas",
      highlight: "Competências",
      technical: "Competências Técnicas",
      tools: "Ferramentas e Tecnologias",
    },
    projects: {
      title: "Os meus",
      highlight: "Projetos",
      subtitle:
        "Projetos desenvolvidos com foco em soluções práticas e tecnologias modernas.",
      label: "Projeto",
      moreProjects: "Mais Projetos",
      items: [
        {
          id: "irrigation",
          title: "Sistema de Irrigação Agrícola",
          description:
            "Sistema de irrigação baseado em IoT com sensores de humidade do solo e Arduino.",
          tags: ["IoT", "Arduino", "Automação"],
        },
        {
          id: "rentcar",
          title: "Sistema de Rent a Car",
          description:
            "Sistema completo de gestão de aluguer de veículos com interface moderna.",
          tags: ["Desenvolvimento Web", "React", "Gestão"],
        },
        {
          id: "picasso",
          title: "Picasso Eventos",
          description:
            "Aplicação desktop para gestão de vendas e produtos com Java Swing.",
          tags: ["Java Swing", "Aplicação Desktop"],
        },
        {
          id: "github",
          title: "Projetos GitHub",
          description: "Ver todos os repositórios e contribuições no GitHub.",
          tags: ["Python", "Java", "Web"],
        },
      ],
    },
    education: {
      title: "A minha",
      highlight: "Educação",
      items: [
        {
          degree: "Licenciatura em Informática",
          school,
          description: "Ensino superior em Informática",
          year: "2022 - 2025",
        },
        {
          degree: "Programação Python",
          school: "Coursera / Udemy",
          description: "Certificações em desenvolvimento Python",
          year: "2022 - 2023",
        },
      ],
    },
    certificates: {
      title: "Os meus",
      highlight: "Certificados",
      items: [
        "Python Fundamentals - Coursera",
        "Desenvolvimento Web com React",
        "Introdução à IoT - Arduino",
        "Git & GitHub Essentials",
      ],
    },
    contact: {
      title: "Vamos",
      highlight: "Conectar",
      subtitle:
        "Estou disponível para projetos e colaborações. Vamos construir algo incrível juntos.",
      whatsapp: "WhatsApp",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      connecting: "A ligar...",
      success: "Aberto com sucesso",
      error: "Indisponível — tente novamente",
    },
    footer: {
      about: "Sobre",
      skills: "Competências",
      projects: "Projetos",
      contact: "Contacto",
      rights: "Todos os direitos reservados.",
      built: "Desenvolvido com React + Tailwind CSS",
    },
  },
  fr: {
    nav: {
      education: "Formation",
      certificates: "Certificats",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
      contactMe: "Me contacter",
    },
    hero: {
      available: "Disponible pour des projets",
      hi: "Bonjour, je suis",
      subtitle:
        "Étudiant en informatique passionné par la technologie, axé sur des solutions réelles à fort impact.",
      description:
        "Je me concentre sur la création de solutions technologiques concrètes en développement web, IoT, automatisation et ingénierie logicielle.",
      hireMe: "M'embaucher",
      downloadResume: "Télécharger le CV",
      metrics: [
        { value: "8+", label: "Compétences techniques" },
        { value: "4+", label: "Projets réalisés" },
        { value: "2022", label: "Actif depuis" },
      ],
    },
    offer: {
      title: "Ce que je",
      highlight: "Propose",
      subtitle:
        "Domaines clés regroupés par proximité — formation, certifications, profil et compétences.",
      cards: {
        education: "Formation",
        certificates: "Certificats",
        about: "À propos",
        skills: "Compétences",
      },
    },
    about: {
      title: "À",
      highlight: "propos",
      intro:
        "Je suis Zilton Tuaire Abdul, étudiant en informatique passionné par la technologie et l'innovation.",
      interestsTitle: "J'ai de l'expérience et de l'intérêt pour :",
      interests: [
        "Systèmes de développement web",
        "Automatisation et IoT (Internet des objets)",
        "Projets logiciels académiques et pratiques",
        "Fondamentaux de l'intelligence artificielle",
      ],
      closing:
        "J'aime créer des solutions qui résolvent de vrais problèmes avec des technologies modernes.",
      cardSummary:
        "Étudiant en informatique passionné par la technologie, le web, l'IoT, l'automatisation et l'IA.",
    },
    skills: {
      title: "Mes",
      highlight: "Compétences",
      technical: "Compétences techniques",
      tools: "Outils et technologies",
    },
    projects: {
      title: "Mes",
      highlight: "Projets",
      subtitle:
        "Projets conçus pour des solutions pratiques et des technologies modernes.",
      label: "Projet",
      moreProjects: "Plus de projets",
      items: [
        {
          id: "irrigation",
          title: "Système d'irrigation agricole",
          description:
            "Système d'irrigation IoT avec capteurs d'humidité du sol et Arduino.",
          tags: ["IoT", "Arduino", "Automatisation"],
        },
        {
          id: "rentcar",
          title: "Système de location de voitures",
          description:
            "Système complet de gestion de location de véhicules avec interface moderne.",
          tags: ["Développement Web", "React", "Gestion"],
        },
        {
          id: "picasso",
          title: "Picasso Events",
          description:
            "Application desktop de gestion des ventes et produits avec Java Swing.",
          tags: ["Java Swing", "Application Desktop"],
        },
        {
          id: "github",
          title: "Projets GitHub",
          description: "Voir tous les dépôts et contributions sur GitHub.",
          tags: ["Python", "Java", "Web"],
        },
      ],
    },
    education: {
      title: "Ma",
      highlight: "Formation",
      items: [
        {
          degree: "Licence en informatique",
          school,
          description: "Enseignement supérieur en informatique",
          year: "2022 - 2025",
        },
        {
          degree: "Programmation Python",
          school: "Coursera / Udemy",
          description: "Certifications en développement Python",
          year: "2022 - 2023",
        },
      ],
    },
    certificates: {
      title: "Mes",
      highlight: "Certificats",
      items: [
        "Python Fundamentals - Coursera",
        "Développement Web avec React",
        "Introduction à l'IoT - Arduino",
        "Git & GitHub Essentials",
      ],
    },
    contact: {
      title: "Restons en",
      highlight: "Contact",
      subtitle:
        "Je suis disponible pour des projets et collaborations. Construisons quelque chose d'exceptionnel ensemble.",
      whatsapp: "WhatsApp",
      email: "E-mail",
      github: "GitHub",
      linkedin: "LinkedIn",
      connecting: "Connexion...",
      success: "Ouvert avec succès",
      error: "Indisponible — réessayez",
    },
    footer: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
      rights: "Tous droits réservés.",
      built: "Créé avec React + Tailwind CSS",
    },
  },
};
