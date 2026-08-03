import { ProjectItem } from "@/components/projects/ProjectCard";

export const PROJECTS_DATA: { image1: ProjectItem; image2: ProjectItem }[] = [
  {
    image1: {
      id: "QUEUEOVERFLOW",
      title: "QueueOverflow",
      image:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      tags: ["Full-Stack", "RAG & GenAI", "Microservices"],
      description:
        "An AI-augmented developer community platform featuring instant retrieval-augmented generation answers, microservice-based architecture, and real-time thread synchronization.",
      techStack: [
        { name: "Full-Stack", iconName: "layers" },
        { name: "RAG & GenAI", iconName: "bot" },
        { name: "Microservices", iconName: "cpu" },
        { name: "Spring Boot", iconName: "server" },
        { name: "PostgreSQL", iconName: "database" },
      ],
      liveUrl: "https://queueoverflow.com",
      githubUrl: "https://github.com/akgisno1/queueoverflow",
    },
    image2: {
      id: "WIDESCAPE",
      title: "Widescape",
      image:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
      tags: ["Next.js", "Tailwind CSS", "GSAP"],
      description:
        "High-performance landing experience built with interactive 3D canvas objects, custom page transitions, and responsive scroll dynamics.",
      techStack: [
        { name: "Next.js", iconName: "code2" },
        { name: "Tailwind CSS", iconName: "sparkles" },
        { name: "GSAP", iconName: "zap" },
      ],
      liveUrl: "https://widescape.ca",
      githubUrl: "https://github.com/akgisno1/widescape",
    },
  },
  {
    image1: {
      id: "OKA-EXPERIENCE",
      title: "Oka Experience",
      image:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      tags: ["Spring Boot", "PostgreSQL", "Docker"],
      description:
        "Enterprise-grade service management suite handling automated scheduling, transactional workflows, and real-time telemetry analytics.",
      techStack: [
        { name: "Spring Boot", iconName: "server" },
        { name: "PostgreSQL", iconName: "database" },
        { name: "Docker", iconName: "workflow" },
      ],
      liveUrl: "https://oka.ca",
      githubUrl: "https://github.com/akgisno1/oka-backend",
    },
    image2: {
      id: "OPTO-ANALYTICS",
      title: "Opto Analytics",
      image:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
      tags: ["TypeScript", "GraphQL", "Redis"],
      description:
        "Real-time data visualization dashboard monitoring distributed microservices latency, error counts, and resource utilization.",
      techStack: [
        { name: "TypeScript", iconName: "terminal" },
        { name: "GraphQL", iconName: "layers" },
        { name: "Redis", iconName: "database" },
      ],
      liveUrl: "https://opto-analytics.io",
      githubUrl: "https://github.com/akgisno1/opto",
    },
  },
  {
    image1: {
      id: "CHALAXEUR",
      title: "Chalaxeur Audio",
      image:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
      tags: ["Web Audio API", "React", "Canvas"],
      description:
        "Custom web-based audio synthesis tool enabling real-time sound spatialization, audio waveform visualization, and dynamic mixing.",
      techStack: [
        { name: "Web Audio API", iconName: "zap" },
        { name: "React", iconName: "code2" },
        { name: "Canvas", iconName: "sparkles" },
      ],
      liveUrl: "https://chalaxeur.com",
      githubUrl: "https://github.com/akgisno1/chalaxeur",
    },
    image2: {
      id: "SHELTON",
      title: "Shelton Brand",
      image:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
      tags: ["E-Commerce", "Stripe API", "Next.js"],
      description:
        "Bespoke e-commerce showcase featuring dynamic inventory sync, headless checkout flows, and tailored micro-animations.",
      techStack: [
        { name: "E-Commerce", iconName: "layers" },
        { name: "Stripe API", iconName: "zap" },
        { name: "Next.js", iconName: "code2" },
      ],
      liveUrl: "https://shelton.ca",
      githubUrl: "https://github.com/akgisno1/shelton",
    },
  },
];