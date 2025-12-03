import React from "react";

// Polished single-file React portfolio for Sameer Gaikwad
// Uses Tailwind CSS and framer-motion (optional) + lucide-react icons
// Drop this file into a React app (Vite/CRA) with Tailwind configured.

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, Terminal, Database } from "lucide-react";

export default function SameerGaikwadPortfolio() {
  const profile = {
    name: "Sameer S. Gaikwad",
    title: "Senior Backend Engineer — Node.js, Go, Distributed Systems",
    email: "sameergaikwad222@gmail.com",
    phone: "+91 98332XXXXX",
    linkedin: "https://www.linkedin.com/in/sameer-gaikwad-software-engineer/",
    github: "https://github.com/sameergaikwad222",
    location: "Airoli, Navi Mumbai, India",
    tagline: "I design and build resilient backend platforms that scale — payments, tracking, and integrations.",
  };

  const skills = [
    "Node.js & Express",
    "Golang (Gin)",
    "Python (FastAPI)",
    "Postgres / Redis / RabbitMQ",
    "Microservices & Kubernetes",
    "Observability (Grafana/Datadog)",
    "OpenAI / LangChain",
    "CI/CD & Docker",
  ];

  const experiences = [
    {
      role: "Senior Engineer",
      company: "Apexon (TATA AIA)",
      date: "Jul 2024 — Present",
      desc: "Core microservices for digital insurance: submission, payments and customer flows. Improved throughput and reduced latency by optimizing DB access patterns.",
    },
    {
      role: "Senior Consultant",
      company: "Deloitte (Dell)",
      date: "Mar 2024 — Jun 2024",
      desc: "Built FastAPI services for logistics data pipelines and containerized infra for edge deployments.",
    },
    {
      role: "SDE-3",
      company: "MyGlamm | GoodGlamm",
      date: "Dec 2022 — Mar 2024",
      desc: "Designed high-throughput event-driven services powering commerce and recommendations. Integrated OpenAI for automation flows.",
    },
  ];

  const projects = [
    {
      name: "CD Valet — Tracking & Attribution",
      tag: "Affiliate Tracking",
      summary: "Server-side tracking, click & conversion APIs, and reliable cookie handling for multi-affiliate flows.",
      link: "#",
    },
    {
      name: "DirectPay Integrations",
      tag: "Payments",
      summary: "Merchant integration, transaction RCA tooling and resilient retry pipelines for payment failures.",
      link: "#",
    },
    {
      name: "KYC Automation",
      tag: "Identity",
      summary: "Automated KYC pipeline using Node.js and cloud storage with alerting and monitoring.",
      link: "#",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 flex justify-center items-start">
      {/* Center wrapper */}
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* NAV */}
        <nav className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-slate-900 text-white grid place-items-center font-bold">SG</div>
            <div>
              <div className="font-semibold">{profile.name}</div>
              <div className="text-xs text-slate-500">{profile.title}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm px-3 py-2 border rounded-xl hover:bg-slate-100">
              <Github size={16} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm px-3 py-2 border rounded-xl hover:bg-slate-100">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="hidden md:inline-flex items-center gap-2 text-sm px-3 py-2 bg-slate-900 text-white rounded-xl">
              <Mail size={16} /> Contact
            </a>
          </div>
        </nav>

        {/* HERO */}
        <header className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">{profile.name}</h1>
            <p className="mt-2 text-lg text-slate-700">{profile.tagline}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/resume.pdf" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border shadow-sm hover:shadow-md">
                <Download size={16} /> Download Resume
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border">
                Hire Me
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
              {skills.slice(0, 8).map((s) => (
                <div key={s} className="p-3 bg-white rounded-xl border shadow-sm text-sm flex items-center gap-3">
                  <Terminal size={18} /> <div>{s}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="hidden md:flex flex-col items-center gap-4 bg-gradient-to-b from-white to-slate-50 p-6 rounded-2xl shadow-md">
            <div className="w-40 h-40 bg-gradient-to-br from-indigo-500 to-sky-400 rounded-full grid place-items-center text-white text-2xl font-bold">
              <img src="https://media.licdn.com/dms/image/v2/C4D03AQHT7Csd9ycS7g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1612419197020?e=1766620800&v=beta&t=VRF_-UgwaVIP0HIjM8UlM_2RRN75Y5WSCJLkLVOfZ0U" alt="SG" />
            </div>
            <div className="text-center">
              <div className="font-semibold">{profile.title}</div>
              <div className="text-xs text-slate-500">{profile.location}</div>
            </div>
            <div className="flex gap-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className="p-2 rounded-full border">
                <Github size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-full border">
                <Linkedin size={18} />
              </a>
            </div>
          </motion.aside>
        </header>

        {/* MAIN */}
        <main className="p-6 space-y-8">
          {/* Experience timeline */}
          <section>
            <h2 className="text-2xl font-semibold">Experience</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              {experiences.map((e) => (
                <motion.article whileHover={{ scale: 1.02 }} key={e.company} className="p-4 bg-white rounded-2xl border shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{e.role}</div>
                      <div className="text-sm text-slate-500">{e.company}</div>
                    </div>
                    <div className="text-xs text-slate-400">{e.date}</div>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">{e.desc}</p>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Selected Projects</h2>
              <div className="text-sm text-slate-500">Backend · Tracking · Payments</div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.map((p) => (
                <motion.div key={p.name} whileHover={{ y: -6 }} className="p-4 bg-white rounded-2xl border shadow-sm flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-xs text-slate-400">{p.tag}</div>
                  </div>
                  <p className="mt-3 text-sm text-slate-700 flex-1">{p.summary}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <a href={p.link} className="text-sm underline">Case study</a>
                    <div className="text-xs text-slate-500">Tech: Node.js, Go, Postgres</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Deep-dive / What I bring */}
          <section className="p-6 bg-gradient-to-r from-white to-slate-50 rounded-2xl border shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold">What I bring</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li>Designing fault-tolerant microservices and event-driven architectures.</li>
                  <li>Performance tuning of DBs and APIs to handle high throughput.</li>
                  <li>Practical experience with K8s, observability and automated deploys.</li>
                </ul>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <div className="p-4 bg-white rounded-xl border flex items-center gap-3">
                  <Database size={22} />
                  <div>
                    <div className="text-sm font-semibold">Data & Storage</div>
                    <div className="text-xs text-slate-500">Postgres, Redis, Elastic</div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-xl border flex items-center gap-3">
                  <Terminal size={22} />
                  <div>
                    <div className="text-sm font-semibold">Engineering</div>
                    <div className="text-xs text-slate-500">Microservices, CI/CD, Reliability</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="p-6 bg-white rounded-2xl border shadow-sm">
            <div className="md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Let's talk</h2>
                <p className="text-sm text-slate-600 mt-2">Available for senior backend roles, consulting and freelance backend architecture work.</p>

                <div className="mt-4 flex items-center gap-4">
                  <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border">
                    <Mail size={16} /> {profile.email}
                  </a>
                  <a href={`tel:${profile.phone}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border">
                    {profile.phone}
                  </a>
                </div>
              </div>

              <form className="mt-6 md:mt-0 md:w-1/2 grid grid-cols-1 gap-3" onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${profile.email}`; }}>
                <input className="p-3 border rounded-lg" placeholder="Your name" required />
                <input className="p-3 border rounded-lg" type="email" placeholder="Your email" required />
                <textarea className="p-3 border rounded-lg h-28" placeholder="Message" required />
                <button className="px-4 py-3 rounded-lg bg-slate-900 text-white">Send message</button>
              </form>
            </div>
          </section>

          <footer className="text-center text-xs text-slate-500 py-8">© {new Date().getFullYear()} {profile.name} — Built with React + Tailwind</footer>
        </main>
      </div>
    </div>
  );
}
