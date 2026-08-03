"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  CheckCircle2,
  Send,
  Mail,
  FileText,
} from "lucide-react";
import { createContact, ContactFormData } from "@/lib/contact.action"; // Adjust path as needed

// Clean inline Brand SVGs
const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.1.7-1.78 1.6-1.78s1.6.68 1.6 1.78v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

const ACCORDION_DATA: AccordionItem[] = [
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

const DIRECT_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anshul-kumar-godiwar",
    subtext: "Connect professionally",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/akgisno1",
    subtext: "@akgisno1",
    icon: GithubIcon,
  },
  {
    label: "Email",
    href: "mailto:contact@anshul.dev",
    subtext: "contact@anshul.dev",
    icon: Mail,
  },
  {
    label: "Resume",
    href: "#",
    subtext: "Download PDF",
    icon: FileText,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    senderTitle: "Recruiter",
    company: "",
    roleType: "Full-Time Role",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [openAccordion, setOpenAccordion] = useState<string | null>("roles");

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await createContact(formData);

      if (response.success) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(response.error || "Failed to submit message. Please try again.");
      }
    } catch (err) {
      setErrorMsg("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen w-full bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-white px-[4vw] lg:px-[6vw] py-[8vw] lg:py-[5vw] transition-colors duration-300 selection:bg-emerald-500 selection:text-white dark:selection:text-black">
      <div className="max-w-[82vw] mx-auto space-y-[6vw] lg:space-y-[4vw]">
        
        {/* 1. Header */}
        <div className="flex items-end justify-between border-b border-slate-200/60 dark:border-zinc-800/60 pb-[2vw] lg:pb-[1.5vw]">
          <h1 className="font-mono text-[10vw] lg:text-[7.5vw] font-black leading-none uppercase tracking-tighter text-slate-900 dark:text-zinc-100 select-none">
            CONTACT<span className="text-emerald-600 dark:text-emerald-500">.</span>
          </h1>
        </div>

        {/* 2. Form Section */}
        <div className="w-full bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md rounded-[2rem] p-[6vw] lg:p-[3.5vw] shadow-2xl">
          <h2 className="font-mono text-xs lg:text-sm uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-[2.5vw]">
            Get In Touch
          </h2>

          {isSubmitted ? (
            <div className="py-[3vw] flex flex-col items-start gap-4 animate-fadeIn">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 animate-bounce" />
              <h3 className="text-2xl lg:text-3xl font-bold">
                Thank you for getting in touch!
              </h3>
              <p className="text-slate-600 dark:text-zinc-400 max-w-lg leading-relaxed">
                I’ve received your message regarding the opportunity at{" "}
                <span className="text-emerald-500 font-semibold">
                  {formData.company || "your team"}
                </span>
                . I will get back to you shortly!
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    senderTitle: "Recruiter",
                    company: "",
                    roleType: "Full-Time Role",
                    email: "",
                    message: "",
                  });
                }}
                className="mt-2 px-6 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider bg-slate-900 dark:bg-white text-white dark:text-zinc-950 font-bold hover:opacity-90 transition-opacity"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed lg:leading-loose font-light text-slate-800 dark:text-zinc-200">
                Hi Anshul! My name is{" "}
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="inline-block border-b-2 border-slate-300 dark:border-zinc-700 bg-transparent text-emerald-600 dark:text-emerald-400 font-medium placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none px-1 transition-colors min-w-[140px] max-w-full"
                />
                , and I am a{" "}
                <select
                  name="senderTitle"
                  value={formData.senderTitle}
                  onChange={handleInputChange}
                  className="inline-block border-b-2 border-slate-300 dark:border-zinc-700 bg-transparent text-emerald-600 dark:text-emerald-400 font-medium focus:border-emerald-500 focus:outline-none px-1 transition-colors cursor-pointer"
                >
                  <option value="Recruiter" className="bg-white dark:bg-zinc-900 text-slate-900 dark:text-white">
                    Recruiter
                  </option>
                  <option value="Hiring Manager" className="bg-white dark:bg-zinc-900 text-slate-900 dark:text-white">
                    Hiring Manager
                  </option>
                  <option value="Engineering Lead" className="bg-white dark:bg-zinc-900 text-slate-900 dark:text-white">
                    Engineering Lead
                  </option>
                  <option value="Founder / CEO" className="bg-white dark:bg-zinc-900 text-slate-900 dark:text-white">
                    Founder / CEO
                  </option>
                </select>
                {" "}at{" "}
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="company name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="inline-block border-b-2 border-slate-300 dark:border-zinc-700 bg-transparent text-emerald-600 dark:text-emerald-400 font-medium placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none px-1 transition-colors min-w-[150px] max-w-full"
                />
                . I am reaching out regarding a{" "}
                <select
                  name="roleType"
                  value={formData.roleType}
                  onChange={handleInputChange}
                  className="inline-block border-b-2 border-slate-300 dark:border-zinc-700 bg-transparent text-emerald-600 dark:text-emerald-400 font-medium focus:border-emerald-500 focus:outline-none px-1 transition-colors cursor-pointer"
                >
                  <option value="Full-Time Role" className="bg-white dark:bg-zinc-900 text-slate-900 dark:text-white">
                    Full-Time Role
                  </option>
                  <option value="Backend Developer Position" className="bg-white dark:bg-zinc-900 text-slate-900 dark:text-white">
                    Backend Developer Position
                  </option>
                  <option value="Software Engineering Role" className="bg-white dark:bg-zinc-900 text-slate-900 dark:text-white">
                    Software Engineering Role
                  </option>
                  <option value="Referral / Interview" className="bg-white dark:bg-zinc-900 text-slate-900 dark:text-white">
                    Referral / Interview
                  </option>
                </select>
                . You can write back to me at{" "}
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="inline-block border-b-2 border-slate-300 dark:border-zinc-700 bg-transparent text-emerald-600 dark:text-emerald-400 font-medium placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none px-1 transition-colors min-w-[220px] max-w-full"
                />
                .
              </p>

              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-2">
                  Additional Details / Job Description
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Share job specs, tech stack requirements, or role details..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full rounded-2xl bg-slate-100/80 dark:bg-zinc-950/60 p-4 text-sm lg:text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              {errorMsg && (
                <p className="text-red-500 text-sm font-medium">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex items-center gap-3 rounded-full bg-slate-900 dark:bg-white px-8 py-4 text-sm font-mono uppercase tracking-widest font-bold text-white dark:text-zinc-950 transition-all hover:bg-emerald-600 dark:hover:bg-emerald-400 dark:hover:text-zinc-950 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  "Sending Note..."
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* 3. FAQ Section */}
        <div className="w-full bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md rounded-[2rem] p-[6vw] lg:p-[3.5vw] shadow-2xl">
          <h2 className="font-mono text-xs lg:text-sm uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-[1.5vw]">
            Hiring & Technical FAQ
          </h2>

          <div className="divide-y divide-slate-200/60 dark:divide-zinc-800/60">
            {ACCORDION_DATA.map((item) => {
              const isOpen = openAccordion === item.id;
              return (
                <div key={item.id} className="py-5">
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                  >
                    <span className="font-bold text-lg lg:text-xl group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 text-slate-400 dark:text-zinc-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-emerald-500" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm lg:text-base leading-relaxed text-slate-600 dark:text-zinc-400 animate-fadeIn">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Direct Links Section */}
        <div className="w-full bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md rounded-[2rem] p-[6vw] lg:p-[3.5vw] shadow-2xl">
          <h2 className="font-mono text-xs lg:text-sm uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-[2vw]">
            Direct Channels & Links
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DIRECT_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 rounded-2xl bg-slate-100/70 dark:bg-zinc-950/60 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-200 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {link.label}
                      </p>
                      <p className="font-mono text-xs text-slate-500 dark:text-zinc-500">
                        {link.subtext}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 dark:text-zinc-500 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              );
            })}
          </div>
        </div>

        {/* 5. Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-mono text-slate-500 dark:text-zinc-500 gap-2 pt-6 border-t border-slate-200/40 dark:border-zinc-800/40">
          <span>© {new Date().getFullYear()} ANSHUL KUMAR GODIWAR</span>
          <span className="text-emerald-600 dark:text-emerald-400/80">Available for Opportunities</span>
        </div>

      </div>
    </section>
  );
};

export default Contact;