import { ProjectItem } from "@/components/projects/ProjectCard";

export const PROJECTS_DATA: { image1: ProjectItem; image2?: ProjectItem }[] = [
  {
    image1: {
      id: "QUEUEOVERFLOW",
      title: "QueueOverflow",
      image: "/queueoverflow.PNG",
      tags: ["Full-Stack", "RAG & GenAI", "Microservices"],
      description:
        "An AI-augmented developer community platform engineered with microservices architecture. Features Retrieval-Augmented Generation (RAG) for instant technical solutions, real-time thread sync, and high-performance semantic search across knowledge bases.",
      techStack: [
        { name: "Next.js", iconName: "server" },
        { name: "TypeScript", iconName: "terminal" },
        { name: "Tailwind CSS", iconName: "layers" },
        { name: "MongoDB", iconName: "database" },
        { name: "RAG & LLMs", iconName: "cpu" },
        { name: "Node.js", iconName: "workflow" },
        { name: "Vector DB", iconName: "search" },
      ],
      liveUrl: "https://queue-over-flow.vercel.app/",
      githubUrl: "https://github.com/Akgisno1/QueueOverFlow",
    },
    image2: {
      id: "Iphone Landing Page",
      title: "iPhone 15 Pro Showcase",
      image: "/Apple.PNG",
      tags: ["Animations", "3D", "Landing Page"],
      description:
        "High-impact 3D product experience replicating Apple's flagship landing page. Combines interactive WebGL 3D canvas objects with GSAP timeline sequencing for cinematic scrub-driven scroll animations.",
      techStack: [
        { name: "Next.js", iconName: "server" },
        { name: "React", iconName: "code2" },
        { name: "Three.js", iconName: "sparkles" },
        { name: "GSAP", iconName: "zap" },
        { name: "Tailwind CSS", iconName: "layers" },
        { name: "TypeScript", iconName: "terminal" },
      ],
      liveUrl: "https://apple-ashy.vercel.app/",
      githubUrl: "https://github.com/Akgisno1/applelp",
    },
  },
  {
    image1: {
      id: "Rentify",
      title: "Rentify",
      image: "/Rentify.PNG",
      tags: ["Full-Stack", "MERN Stack", "Real-Time"],
      description:
        "Production-ready real estate portal designed to streamline tenant-landlord interactions. Features secure JWT authentication, automated listing pipelines, direct messaging workflows, and dynamic property filtering.",
      techStack: [
        { name: "React", iconName: "code2" },
        { name: "Node.js", iconName: "workflow" },
        { name: "Express", iconName: "server" },
        { name: "MongoDB", iconName: "database" },
        { name: "REST API", iconName: "globe" },
        { name: "JWT Auth", iconName: "shield" },
        { name: "Tailwind CSS", iconName: "layers" },
      ],
      liveUrl: "https://rentify-8r7z.onrender.com/",
      githubUrl: "https://github.com/Akgisno1/rentify",
    },
    image2: {
      id: "Stray To Stay",
      title: "Stray to Stay",
      image: "/straytostay.PNG",
      tags: ["Full-Stack", "Community", "Adoption"],
      description:
        "Community-driven rescue platform bridging animal shelters with prospective adopters. Built with real-time shelter feeds, optimized image uploads, and localized rescue coordination tools.",
      techStack: [
        { name: "Next.js", iconName: "server" },
        { name: "TypeScript", iconName: "terminal" },
        { name: "Tailwind CSS", iconName: "layers" },
        { name: "MongoDB", iconName: "database" },
        { name: "REST API", iconName: "globe" },
        { name: "NextAuth", iconName: "shield" },
      ],
      liveUrl: "https://straytostay.vercel.app/",
      githubUrl: "https://github.com/Akgisno1/straytostay",
    },
  },
  {
    image1: {
      id: "PeakMall",
      title: "PeakMall",
      image: "/peakmall.PNG",
      tags: ["Frontend", "Animations", "UI/UX"],
      description:
        "Commercial showcase featuring fluid spatial layouts, smooth scroll dynamics, zero layout shift, and refined dark-mode micro-interactions built for high-conversion web performance.",
      techStack: [
        { name: "Next.js", iconName: "server" },
        { name: "TypeScript", iconName: "terminal" },
        { name: "Tailwind CSS", iconName: "layers" },
        { name: "Framer Motion", iconName: "sparkles" },
        { name: "Lucide Icons", iconName: "layout" },
      ],
      liveUrl: "https://peakmall.vercel.app/",
      githubUrl: "https://github.com/Akgisno1/peakmall",
    },
    image2: {
      id: "Nike Landing Page",
      title: "Nike Concept Store",
      image: "/nike.PNG",
      tags: ["Frontend", "React", "State Management"],
      description:
        "Interactive e-commerce portal with real-time footwear previews, dynamic color swatch switching, optimized cart state management, and seamless catalog filtering.",
      techStack: [
        { name: "React", iconName: "code2" },
        { name: "JavaScript", iconName: "terminal" },
        { name: "Tailwind CSS", iconName: "layers" },
        { name: "Context API", iconName: "workflow" },
        { name: "Vite", iconName: "zap" },
      ],
      liveUrl: "https://nike-phi-one.vercel.app/",
      githubUrl: "https://github.com/Akgisno1/nike",
    },
  },
  {
    image1: {
      id: "Habot",
      title: "Habot Corporate Showcase",
      image: "/habot.PNG",
      tags: ["B2B Portal", "Landing Page", "Next.js"],
      description:
        "Enterprise B2B procurement portal designed with structured service breakdown grids, localized vendor matching features, and responsive layout architectures.",
      techStack: [
        { name: "Next.js", iconName: "server" },
        { name: "TypeScript", iconName: "terminal" },
        { name: "Tailwind CSS", iconName: "layers" },
        { name: "Lucide Icons", iconName: "layout" },
        { name: "Responsive CSS", iconName: "box" },
      ],
      liveUrl: "https://habot-pi.vercel.app/",
      githubUrl: "https://github.com/Akgisno1/Habot",
    },
    image2: {
      id: "Alabay",
      title: "Alabay Showcase",
      image: "/alabay.PNG",
      tags: ["Handcrafted UI", "Frontend", "Animations"],
      description:
        "Bespoke landing web app featuring custom CSS layout animations, smooth scroll interactions, and high-fidelity visual asset orchestration for an immersive visual experience.",
      techStack: [
        { name: "React", iconName: "code2" },
        { name: "JavaScript", iconName: "terminal" },
        { name: "Tailwind CSS", iconName: "layers" },
        { name: "Framer Motion", iconName: "sparkles" },
        { name: "CSS Modules", iconName: "box" },
      ],
      liveUrl: "https://alabay-livid.vercel.app/",
      githubUrl: "https://github.com/Akgisno1/alabay",
    },
  },
  {
    image1: {
      id: "ISS Club",
      title: "ISS Campus Club",
      image: "/ISSclub.PNG",
      tags: ["College Club", "Landing Page", "Next.js"],
      description:
        "Official university student chapter portal engineered to highlight tech workshops, executive team structures, upcoming event calendars, and member onboarding pipelines.",
      techStack: [
        { name: "Next.js", iconName: "server" },
        { name: "TypeScript", iconName: "terminal" },
        { name: "Tailwind CSS", iconName: "layers" },
        { name: "React Hook Form", iconName: "workflow" },
        { name: "Lucide Icons", iconName: "layout" },
      ],
      liveUrl: "https://iss-pi.vercel.app/",
      githubUrl: "https://github.com/Akgisno1/iss",
    },
    image2: {
      id: "Game Hub",
      title: "Game Hub",
      image: "/gameclub.PNG",
      tags: ["Frontend", "REST API", "State & Filter"],
      description:
        "Comprehensive game discovery engine integrating the RAWG API. Features multi-parameter filtering by genre, gaming platform, and Metacritic score alongside custom skeleton loading UI states.",
      techStack: [
        { name: "React", iconName: "code2" },
        { name: "Vite", iconName: "zap" },
        { name: "TypeScript", iconName: "terminal" },
        { name: "Tailwind CSS", iconName: "layers" },
        { name: "RAWG API", iconName: "globe" },
        { name: "Axios", iconName: "repeat" },
      ],
      liveUrl: "https://game-hub-umber-zeta.vercel.app/",
      githubUrl: "https://github.com/Akgisno1/game-hub",
    },
  },
  {
    image1: {
      id: "Anime Vault",
      title: "Anime Vault",
      image: "/animevault.PNG",
      tags: ["Frontend", "Infinite Scroll", "API Fetching"],
      description:
        "High-performance media catalog web app implementing server-side render optimization, infinite scroll pagination, dynamic image lazy-loading, and staggered grid reveal animations.",
      techStack: [
        { name: "Next.js", iconName: "server" },
        { name: "TypeScript", iconName: "terminal" },
        { name: "Tailwind CSS", iconName: "layers" },
        { name: "Server Actions", iconName: "workflow" },
        { name: "REST API", iconName: "globe" },
        { name: "Framer Motion", iconName: "sparkles" },
      ],
      liveUrl: "https://anime-vault-one-pearl.vercel.app/",
      githubUrl: "https://github.com/Akgisno1/anime-vault",
    },
  },
];