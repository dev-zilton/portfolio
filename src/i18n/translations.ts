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
  aboutSection: {
    title: string;
    highlight: string;
    educationLabel: string;
    certificatesLabel: string;
  };
  skills: {
    title: string;
    highlight: string;
    technical: string;
    tools: string;
    categories: {
      frontend: string;
      backend: string;
      devops: string;
      cloud: string;
      design: string;
    };
    daily: string;
    others: string;
  };
  projects: {
    title: string;
    highlight: string;
    subtitle: string;
    label: string;
    viewSite: string;
    viewCode: string;
    featured: string;
    filters: Record<"all" | "web" | "mobile" | "desktop" | "iot", string>;
    caseStudyLabels: { problem: string; solution: string; delivered: string };
    items: {
      id: string;
      title: string;
      description: string;
      tags: string[];
      caseStudy?: { problem: string; solution: string; delivered: string[] };
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
      kind: "education" | "work";
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
    form: {
      title: string;
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      sent: string;
      failed: string;
    };
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

const school = "Universidade Técnica Diogo Eugénio Guilande (UTDEG)";

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
      subtitle:
        "Full Stack Developer — web, IoT and automation.",
      description:
        "I turn ideas into websites, systems and online stores ready to use, from design to deployment.",
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
        "I'm Zilton Tuaire Abdul, a Software Engineering student and developer based in Matola, Mozambique.",
      interestsTitle: "I have experience and interest in:",
      interests: [
        "Web development systems",
        "Automation and IoT (Internet of Things)",
        "Academic and practical software projects",
        "Artificial Intelligence fundamentals",
      ],
      closing:
        "I work with modern technologies and solid engineering practices to deliver code that works today and is easy to maintain tomorrow.",
      cardSummary:
        "Software Engineering student and developer focused on web, IoT, automation and AI.",
    },
    aboutSection: {
      title: "About me &",
      highlight: "Journey",
      educationLabel: "Experience & Education",
      certificatesLabel: "Certificates",
    },
    skills: {
      title: "My",
      highlight: "Skills",
      technical: "Technical Skills",
      tools: "Tools & Technologies",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Tools",
        cloud: "Cloud & IoT",
        design: "Design",
      },
      daily: "Everyday stack",
      others: "Also worked with",
    },
    projects: {
      title: "My",
      highlight: "Projects",
      subtitle:
        "Projects built with a focus on practical solutions and modern technologies.",
      label: "Project",
      viewSite: "Live site",
      viewCode: "Code",
      featured: "Featured",
      filters: { all: "All", web: "Web", mobile: "Mobile", desktop: "Desktop", iot: "IoT" },
      caseStudyLabels: { problem: "Challenge", solution: "Solution", delivered: "What I delivered" },
      items: [
        {
          id: "irrigation",
          title: "Marketing Digital Landing Page",
          description:
            "Professional and responsive landing page for online course lead capture, with testimonials, benefits, FAQ and ActiveCampaign integration.",
          tags: ["HTML/CSS", "JavaScript", "React", "Responsive"],
        },
        {
          id: "rentcar",
          title: "Rent Car System",
          description:
            "Website for a car rental company in Mozambique, with services, fleet by category and booking requests.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
          caseStudy: {
            problem:
              "A car rental company in Mozambique needed a website that presents its services and fleet and turns visitors into quote requests.",
            solution:
              "Next.js website with services (long and short-term rental, fleet management), fleet by category, discounts, FAQ and a booking form that stores requests in Supabase.",
            delivered: [
              "Fleet organised by category and city",
              "Quote and booking requests saved in Supabase",
              "Mobile-first layout, optimised images and SEO",
            ],
          },
        },
        {
          id: "matoladigital",
          title: "Matola Digital",
          description:
            "Municipal transparency portal with a citizen service guide, request tracking by unique code, and an authenticated admin dashboard.",
          tags: ["Node.js", "Turso", "Drizzle ORM", "Vercel Blob"],
          caseStudy: {
            problem:
              "Citizens had no simple way to check the requirements of municipal services or follow the status of their requests.",
            solution:
              "Transparency portal with a digital service guide, request submission with a PDF attachment, tracking by unique code and a protected admin panel.",
            delivered: [
              "Service guide with requirements, fees and deadlines",
              "Requests with PDF upload and a tracking code",
              "Admin panel to update each request's status",
              "Public dashboard with aggregated statistics",
            ],
          },
        },
        {
          id: "dripgod",
          title: "DripGOd E-commerce",
          description:
            "Premium Mozambican fashion store, with shopping cart, wishlist and WhatsApp checkout.",
          tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Resend",
          ],
          caseStudy: {
            problem:
              "A Mozambican streetwear store wanted to sell imported clothes and sneakers online, to customers who like to confirm size and colour before paying.",
            solution:
              "Next.js e-commerce with collections, size selection, cart and wishlist, where checkout opens a WhatsApp conversation with the order ready.",
            delivered: [
              "Catalogue with collections, sizes and stock badges",
              "Cart and wishlist",
              "WhatsApp checkout",
              "Animated interface with Framer Motion",
            ],
          },
        },
        {
          id: "landingpage",
          title: "SweetLar Mozambique",
          description:
            "High-end custom-made furniture. Choose the color, the ideal size, and personalize your comfort.",
          tags: ["React", "Tailwind CSS", "E-commerce"],
        },
        {
          id: "startuplanding",
          title: "Soluções Digitais MZ",
          description:
            "Full corporate website for a digital agency in Mozambique, with dedicated sections for services, pricing, testimonials, FAQ and contact — built to convert visitors into clients.",
          tags: ["Next.js", "React", "Tailwind CSS"],
        },
        {
          id: "picasso",
          title: "Buy Easy Shop",
          description:
            "Complete point-of-sale (POS) system built with Java Swing, featuring MVC architecture, JSON persistence, and secure authentication. Includes an admin dashboard, product management, and sales processing with receipt generation.",
          tags: ["Java Swing", "Desktop Application"],
        },
      ],
    },
    education: {
      title: "My",
      highlight: "Education",
      items: [
        {
          degree: "Bachelor's Degree in Software Engineering",
          school,
          description: "Matola, Mozambique",
          year: "2022 – Present",
          kind: "education",
        },
        {
          degree: "Python Programming",
          school: "Coursera / Udemy",
          description:
            "Online courses and certifications in Python development",
          year: "2022 – 2023",
          kind: "education",
        },
        {
          degree: "Web & Systems Development",
          school: "KS Pro Reprografia",
          description:
            "Built web applications and features with Java, JavaScript, React and PostgreSQL, maintained and optimised websites and systems, and helped model databases.",
          year: "2021 – 2022",
          kind: "work",
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
      form: {
        title: "Send me a message",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send message",
        sending: "Sending...",
        sent: "Message sent! I'll get back to you soon.",
        failed: "Couldn't send the message. Try WhatsApp or email.",
      },
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
        "Desenvolvedor Full Stack — web, IoT e automação.",
      description:
        "Transformo ideias em sites, sistemas e lojas online prontos a usar, do design ao deploy.",
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
        "Sou Zilton Tuaire Abdul, licenciando em Engenharia de Software e desenvolvedor na Matola, Moçambique.",
      interestsTitle: "Tenho experiência e interesse em:",
      interests: [
        "Desenvolvimento web e aplicações modernas",
        "Automação e IoT (Internet das Coisas)",
        "Projetos académicos e soluções para o mercado real",
        "Fundamentos de Inteligência Artificial",
      ],
      closing:
        "Trabalho com tecnologias actuais e boas práticas de engenharia, para entregar código que funciona hoje e é fácil de manter amanhã.",
      cardSummary:
        "Licenciando em Engenharia de Software e desenvolvedor com foco em web, IoT, automação e IA.",
    },
    aboutSection: {
      title: "Sobre Mim &",
      highlight: "Percurso",
      educationLabel: "Experiência e formação",
      certificatesLabel: "Certificados",
    },
    skills: {
      title: "As minhas",
      highlight: "Competências",
      technical: "Competências Técnicas",
      tools: "Ferramentas e Tecnologias",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Ferramentas",
        cloud: "Cloud & IoT",
        design: "Design",
      },
      daily: "Uso no dia a dia",
      others: "Já trabalhei com",
    },
    projects: {
      title: "Os meus",
      highlight: "Projetos",
      subtitle:
        "Projetos desenvolvidos com foco em soluções práticas e tecnologias modernas.",
      label: "Projeto",
      viewSite: "Ver site",
      viewCode: "Código",
      featured: "Destaque",
      filters: { all: "Todos", web: "Web", mobile: "Mobile", desktop: "Desktop", iot: "IoT" },
      caseStudyLabels: { problem: "Desafio", solution: "Solução", delivered: "O que entreguei" },
      items: [
        {
          id: "irrigation",
          title: "Marketing Digital Landing Page",
          description:
            "Landing page profissional e responsiva para captura de leads de curso online, com depoimentos, benefícios, FAQ e integração com ActiveCampaign.",
          tags: ["HTML/CSS", "JavaScript", "React", "Responsivo"],
        },
        {
          id: "rentcar",
          title: "Sistema de Rent a Car",
          description:
            "Site para uma empresa de aluguer de viaturas em Moçambique, com serviços, frota por categoria e pedidos de reserva.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
          caseStudy: {
            problem:
              "Uma empresa de aluguer de viaturas em Moçambique precisava de um site que apresentasse os serviços e a frota e transformasse visitas em pedidos de cotação.",
            solution:
              "Site em Next.js com serviços (aluguer de longa e curta duração, gestão de frota), frota por categoria, descontos, perguntas frequentes e formulário de reserva que guarda os pedidos no Supabase.",
            delivered: [
              "Frota organizada por categoria e cidade",
              "Pedidos de cotação e reserva guardados no Supabase",
              "Layout mobile-first, imagens otimizadas e SEO",
            ],
          },
        },
        {
          id: "matoladigital",
          title: "Matola Digital",
          description:
            "Portal de transparência municipal com guia de serviços ao cidadão, rastreio de processos por código único, e painel administrativo autenticado.",
          tags: ["Node.js", "Turso", "Drizzle ORM", "Vercel Blob"],
          caseStudy: {
            problem:
              "Os cidadãos não tinham uma forma simples de consultar os requisitos dos serviços municipais nem de acompanhar o estado dos seus processos.",
            solution:
              "Portal de transparência com guia digital de serviços, submissão de processos com anexo em PDF, rastreio por código único e painel administrativo protegido.",
            delivered: [
              "Guia de serviços com requisitos, taxas e prazos",
              "Processos com anexo em PDF e código de rastreio",
              "Painel administrativo para atualizar o estado de cada processo",
              "Painel público com estatísticas agregadas",
            ],
          },
        },
        {
          id: "dripgod",
          title: "E-commerce DripGOd",
          description:
            "Loja de moda premium moçambicana, com carrinho de compras, favoritos e checkout via WhatsApp.",
          tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Resend",
          ],
          caseStudy: {
            problem:
              "Uma loja moçambicana de streetwear queria vender roupa e snikas importadas online, a clientes que gostam de confirmar tamanho e cor antes de pagar.",
            solution:
              "E-commerce em Next.js com colecções, escolha de tamanho, carrinho e favoritos, em que o checkout abre uma conversa no WhatsApp com a encomenda pronta.",
            delivered: [
              "Catálogo com colecções, tamanhos e avisos de stock",
              "Carrinho e favoritos",
              "Checkout via WhatsApp",
              "Interface animada com Framer Motion",
            ],
          },
        },
        {
          id: "landingpage",
          title: "SweetLar Moçambique",
          description:
            "Loja de móveis sob medida, com personalização de cor e tamanho para um conforto premium.",
          tags: ["React", "Tailwind CSS", "E-commerce"],
        },
        {
          id: "startuplanding",
          title: "Soluções Digitais MZ",
          description:
            "Website institucional completo para uma agência digital moçambicana, com secções de serviços, preços, depoimentos, FAQ e contacto — pensado para converter visitantes em clientes.",
          tags: ["Next.js", "React", "Tailwind CSS"],
        },
        {
          id: "picasso",
          title: "Buy Easy Shop",
          description:
            "Sistema completo de ponto de venda (POS) em Java Swing, com arquitetura MVC, persistência em JSON e autenticação segura. Inclui dashboard administrativo, gestão de produtos e processamento de vendas com emissão de recibos.",
          tags: ["Java Swing", "Aplicação Desktop"],
        },
      ],
    },
    education: {
      title: "A minha",
      highlight: "Educação",
      items: [
        {
          degree: "Licenciatura em Engenharia de Software",
          school: "Universidade Técnica Diogo Eugénio Guilande (UTDEG)",
          description: "Matola, Moçambique",
          year: "2022 – Presente",
          kind: "education",
        },
        {
          degree: "Programação Python",
          school: "Coursera / Udemy",
          description: "Cursos e certificações em desenvolvimento Python",
          year: "2022 – 2023",
          kind: "education",
        },
        {
          degree: "Desenvolvimento Web e de Sistemas",
          school: "KS Pro Reprografia",
          description:
            "Desenvolvi aplicações e funcionalidades web com Java, JavaScript, React e PostgreSQL, fiz manutenção e otimização de sites e sistemas, e colaborei na modelação de bases de dados.",
          year: "2021 – 2022",
          kind: "work",
        },
      ],
    },
    certificates: {
      title: "Os meus",
      highlight: "Certificados",
      items: [
        "Fundamentos de Python — Coursera",
        "Desenvolvimento Web com React",
        "Introdução à IoT com Arduino",
        "Essenciais de Git e GitHub",
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
      form: {
        title: "Envie-me uma mensagem",
        name: "Nome",
        email: "Email",
        message: "Mensagem",
        send: "Enviar mensagem",
        sending: "A enviar...",
        sent: "Mensagem enviada! Respondo em breve.",
        failed: "Não foi possível enviar. Tente pelo WhatsApp ou email.",
      },
    },
    footer: {
      about: "Sobre",
      skills: "Competências",
      projects: "Projetos",
      contact: "Contacto",
      rights: "Todos os direitos reservados.",
      built: "Criado com React + Tailwind CSS",
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
        "Développeur Full Stack — web, IoT et automatisation.",
      description:
        "Je transforme des idées en sites, systèmes et boutiques en ligne prêts à l'emploi, du design au déploiement.",
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
        "Je suis Zilton Tuaire Abdul, étudiant en génie logiciel et développeur à Matola, au Mozambique.",
      interestsTitle: "J'ai de l'expérience et de l'intérêt pour :",
      interests: [
        "Systèmes de développement web",
        "Automatisation et IoT (Internet des objets)",
        "Projets logiciels académiques et pratiques",
        "Fondamentaux de l'intelligence artificielle",
      ],
      closing:
        "Je travaille avec des technologies modernes et de bonnes pratiques d'ingénierie pour livrer un code qui fonctionne aujourd'hui et reste facile à maintenir demain.",
      cardSummary:
        "Étudiant en génie logiciel et développeur axé sur le web, l'IoT, l'automatisation et l'IA.",
    },
    aboutSection: {
      title: "À propos &",
      highlight: "Parcours",
      educationLabel: "Expérience et formation",
      certificatesLabel: "Certificats",
    },
    skills: {
      title: "Mes",
      highlight: "Compétences",
      technical: "Compétences techniques",
      tools: "Outils et technologies",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Outils",
        cloud: "Cloud & IoT",
        design: "Design",
      },
      daily: "Au quotidien",
      others: "J'ai aussi utilisé",
    },
    projects: {
      title: "Mes",
      highlight: "Projets",
      subtitle:
        "Projets conçus pour des solutions pratiques et des technologies modernes.",
      label: "Projet",
      viewSite: "Voir le site",
      viewCode: "Code",
      featured: "À la une",
      filters: { all: "Tous", web: "Web", mobile: "Mobile", desktop: "Desktop", iot: "IoT" },
      caseStudyLabels: { problem: "Défi", solution: "Solution", delivered: "Ce que j'ai livré" },
      items: [
        {
          id: "irrigation",
          title: "Marketing Digital Landing Page",
          description:
            "Landing page professionnelle et responsive pour la capture de leads de cours en ligne, avec temoignages, avantages, FAQ et integration ActiveCampaign.",
          tags: ["HTML/CSS", "JavaScript", "React", "Responsive"],
        },
        {
          id: "rentcar",
          title: "Système de location de voitures",
          description:
            "Site pour une société de location de voitures au Mozambique, avec services, flotte par catégorie et demandes de réservation.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
          caseStudy: {
            problem:
              "Une société de location de voitures au Mozambique avait besoin d'un site présentant ses services et sa flotte, capable de transformer les visites en demandes de devis.",
            solution:
              "Site Next.js avec les services (location longue et courte durée, gestion de flotte), la flotte par catégorie, les remises, une FAQ et un formulaire de réservation qui enregistre les demandes dans Supabase.",
            delivered: [
              "Flotte organisée par catégorie et par ville",
              "Demandes de devis et de réservation enregistrées dans Supabase",
              "Mise en page mobile-first, images optimisées et SEO",
            ],
          },
        },
        {
          id: "matoladigital",
          title: "Matola Digital",
          description:
            "Portail de transparence municipale avec guide des services aux citoyens, suivi des demandes par code unique, et tableau de bord admin authentifie.",
          tags: ["Node.js", "Turso", "Drizzle ORM", "Vercel Blob"],
          caseStudy: {
            problem:
              "Les citoyens n'avaient pas de moyen simple de consulter les conditions des services municipaux ni de suivre l'état de leurs demandes.",
            solution:
              "Portail de transparence avec guide numérique des services, dépôt de demandes avec pièce jointe PDF, suivi par code unique et espace d'administration protégé.",
            delivered: [
              "Guide des services avec conditions, frais et délais",
              "Demandes avec PDF et code de suivi",
              "Espace admin pour mettre à jour chaque demande",
              "Tableau de bord public avec statistiques agrégées",
            ],
          },
        },
        {
          id: "dripgod",
          title: "E-commerce DripGOd",
          description:
            "Boutique de mode premium mozambicaine, avec panier, favoris et paiement via WhatsApp.",
          tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Resend",
          ],
          caseStudy: {
            problem:
              "Une boutique mozambicaine de streetwear voulait vendre en ligne des vêtements et sneakers importés, à des clients qui aiment confirmer taille et couleur avant de payer.",
            solution:
              "E-commerce Next.js avec collections, choix de taille, panier et favoris, où le paiement ouvre une conversation WhatsApp avec la commande prête.",
            delivered: [
              "Catalogue avec collections, tailles et alertes de stock",
              "Panier et favoris",
              "Commande via WhatsApp",
              "Interface animée avec Framer Motion",
            ],
          },
        },
        {
          id: "landingpage",
          title: "SweetLar Mozambique",
          description:
            "Meubles sur mesure haut de gamme. Choisissez la couleur, la taille ideale et personnalisez votre confort.",
          tags: ["React", "Tailwind CSS", "E-commerce"],
        },
        {
          id: "startuplanding",
          title: "Soluções Digitais MZ",
          description:
            "Site institutionnel complet pour une agence digitale mozambicaine, avec des sections dediees aux services, tarifs, temoignages, FAQ et contact — concu pour convertir les visiteurs en clients.",
          tags: ["Next.js", "React", "Tailwind CSS"],
        },
        {
          id: "picasso",
          title: "Buy Easy Shop",
          description:
            "Système de point de vente (POS) complet développé en Java Swing, avec architecture MVC, persistance JSON et authentification sécurisée. Comprend un tableau de bord administrateur, la gestion des produits et le traitement des ventes avec génération de reçus.",
          tags: ["Java Swing", "Application Desktop"],
        },
      ],
    },
    education: {
      title: "Ma",
      highlight: "Formation",
      items: [
        {
          degree: "Licence en génie logiciel",
          school,
          description: "Matola, Mozambique",
          year: "2022 – Présent",
          kind: "education",
        },
        {
          degree: "Programmation Python",
          school: "Coursera / Udemy",
          description: "Cours et certifications en développement Python",
          year: "2022 – 2023",
          kind: "education",
        },
        {
          degree: "Développement web et systèmes",
          school: "KS Pro Reprografia",
          description:
            "Développement d'applications et de fonctionnalités web avec Java, JavaScript, React et PostgreSQL, maintenance et optimisation de sites et systèmes, et participation à la modélisation de bases de données.",
          year: "2021 – 2022",
          kind: "work",
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
      form: {
        title: "Envoyez-moi un message",
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer",
        sending: "Envoi...",
        sent: "Message envoyé ! Je vous réponds bientôt.",
        failed: "Échec de l'envoi. Essayez WhatsApp ou l'email.",
      },
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
