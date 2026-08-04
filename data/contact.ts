export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

export const ACCORDION_DATA: AccordionItem[] = [
  {
    id: "roles",
    question: "What roles are you actively looking for?",
    answer:
      "I am actively seeking Full-Stack Developer, Software Engineer, and AI/Backend Developer roles. I bring 7 months of production internship experience building web applications using React, Next.js, and Node.js, alongside hands-on expertise integrating LLMs and RAG pipelines.",
  },
  {
    id: "tech-stack",
    question: "What is your primary tech stack?",
    answer:
      "On the web side, I work with Next.js, React.js, Node.js, Express.js, TypeScript, Tailwind CSS, PostgreSQL, and MongoDB. For AI & Cloud, I build with the OpenAI API, RAG pipelines, ChromaDB, LangChain, LangGraph, Docker, and AWS (EC2, S3, Lambda).",
  },
  {
    id: "experience",
    question: "What production experience do you have?",
    answer:
      "During my Full-Stack Internship at Side Husslr, I built over 50 components and 30+ server actions, reduced API latency by 60%, and maintained 85% test coverage. I also implemented automated CI/CD pipelines and responsive interfaces during my Web Development Internship at Aadi Foundation.",
  },
  {
    id: "cs-fundamentals",
    question: "What are your CS fundamentals & problem-solving background?",
    answer:
      "I hold a B.Tech in Computer Science & Engineering with a 9/10 GPA. I have solved 400+ Data Structures & Algorithms problems across coding platforms, giving me a strong foundation in OOP, system design, and algorithmic efficiency.",
  },
  {
    id: "location",
    question: "What is your location preference and availability?",
    answer:
      "I am available for immediate onboarding for Remote opportunities as well as Onsite or Hybrid roles.",
  },
  {
    id: "resume",
    question: "Where can I review your projects and technical work?",
    answer:
      "You can explore my AI-powered Q&A platform (Queue Overflow) on this portfolio, view my open-source code and experiments on GitHub, or reach out directly to request my complete resume.",
  },
];