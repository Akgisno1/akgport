interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}
export const ACCORDION_DATA: AccordionItem[] = [
  {
    id: "roles",
    question: "What roles are you actively looking for?",
    answer:
      "I am actively seeking full-time Software Engineer, Backend Developer, and Full-Stack Developer roles. I specialize in building microservices, high-throughput APIs, and modern frontend interfaces.",
  },
  {
    id: "tech-stack",
    question: "What is your primary tech stack?",
    answer:
      "My backend core includes Java, Spring Boot, Node.js, Express, PostgreSQL, Redis, and Docker. On the frontend, I build with Next.js, React, TypeScript, Tailwind CSS, and GSAP.",
  },
  {
    id: "location",
    question: "What is your location preference and availability?",
    answer:
      "I am open to Remote opportunities as well as Onsite/Hybrid roles. I am available for immediate onboarding or standard notice periods.",
  },
  {
    id: "resume",
    question: "Where can I review your resume or technical background?",
    answer:
      "You can explore my interactive case studies on this portfolio, view my open-source projects on GitHub, or reach out directly to request my latest resume.",
  },
];

