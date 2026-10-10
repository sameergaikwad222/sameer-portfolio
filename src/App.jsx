import React from "react";

// Polished single-file React portfolio for Sameer Gaikwad
// Uses Tailwind CSS and framer-motion (optional) + lucide-react icons
// Drop this file into a React app (Vite/CRA) with Tailwind configured.

import { motion as Motion } from "framer-motion";
import { Mail, Github, Linkedin, CodeXml, Download, Terminal, Database } from "lucide-react";

export default function SameerGaikwadPortfolio() {
  const profile = {
    name: "Sameer S. Gaikwad",
    title: "Senior Backend Engineer — Node.js, Go, Distributed Systems",
    email: "sameergaikwad222@gmail.com",
    phone: "+91 9833285765",
    linkedin: "https://www.linkedin.com/in/sameer-gaikwad-software-engineer/",
    github: "https://github.com/sameergaikwad222",
    leetcode: "https://leetcode.com/u/sameergaikwad222/",
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
      id: "experience-apexon",
      role: "Senior Developer Engineer",
      company: "Apexon India",
      date: "Jul 2024 — Present",
      desc: "Built Node.js and Python microservices for Tata AIA's insurance platform, covering proposals, customer onboarding, banking integrations, and Kafka-driven policy workflows. Developed tracking and analytics services for CD Valet / Seattle Bank, integrating Google Analytics and Twilio Segment for customer journeys and affiliate commission tracking.",
    },
    {
      role: "Senior Consultant",
      id: "experience-deloitte",
      company: "Deloitte India",
      date: "Mar 2024 — Jun 2024",
      desc: "Developed Python and FastAPI services for enterprise logistics data, integrating Apache Spark and Google BigQuery pipelines. Helped establish bare-metal Kubernetes infrastructure for containerized deployments.",
    },
    {
      role: "SDE-3",
      id: "experience-myglamm",
      company: "MyGlamm | GoodGlamm Group",
      date: "Dec 2022 — Mar 2024",
      desc: "Designed e-commerce microservices using Node.js and Golang, owning cart management, discount rules, coupon validation, and checkout logic. Used MongoDB, Elasticsearch, RabbitMQ, and Docker, and integrated OpenAI and LangChain for AI-powered features.",
    },
    {
      role: "Senior Technical Associate",
      id: "experience-angelone",
      company: "AngelOne Pvt Ltd",
      date: "Feb 2021 — Dec 2022",
      desc: "Built KYC backend services and secure API integrations to automate customer onboarding and verification. Created alerting, reporting, and monitoring workflows using Node.js, Python, and Shell scripting, with AWS EC2, S3, and CloudWatch for production operations.",
    },
    {
      role: "Software Engineer",
      id: "experience-unimoni",
      company: "Unimoni Enterprize Pvt Ltd",
      date: "Feb 2020 — Sep 2020",
      desc: "Developed backend features and merchant integrations for the DirectPay payment gateway using Java, MySQL, and Oracle SQL. Resolved transaction issues through log and database analysis, delivered production fixes and schema changes, and mentored interns.",
    },
    {
      role: "Application Engineer",
      company: "IDFC Bank",
      id: "experience-idfc",
      date: "Jan 2019 — Feb 2020",
      desc: "Maintained TCS Banking and Micro ATM applications, delivering change requests and production enhancements. Automated EOD, BOD, and NACH-to-CBS file processing with Linux Cron Jobs and Shell scripting, and supported Oracle SQL operations, UAT deployments, and production releases.",
    },
    {
      role: "Application Engineer",
      company: "Shawman Software",
      id: "experience-shawman",
      date: "Sep 2017 — Sep 2018",
      desc: "Developed and enhanced Point of Sale application features using JavaScript. Investigated billing and transaction defects with SQL Profiler and Microsoft SQL Server, and supported EOD operations across client deployments.",
    },
  ];

  const projects = [
    {
      name: "CD Valet — Tracking & Attribution",
      tag: "Affiliate Tracking",
      summary: "Server-side tracking, click & conversion APIs, and reliable cookie handling for multi-affiliate flows.",
      link: "#experience-apexon",
      tech: "Node.js, Python, Segment",
    },
    {
      name: "DirectPay Integrations",
      tag: "Payments",
      summary: "Merchant integration, transaction RCA tooling and resilient retry pipelines for payment failures.",
      link: "#experience-unimoni",
      tech: "Java, MySQL, Oracle SQL",
    },
    {
      name: "KYC Automation",
      tag: "Identity",
      summary: "Automated KYC pipeline using Node.js and cloud storage with alerting and monitoring.",
      link: "#experience-angelone",
      tech: "Node.js, Python, AWS",
    }
  ];

  function openEmailDraft(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = fields.get("name").trim();
    const email = fields.get("email").trim();
    const message = fields.get("message").trim();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 flex justify-center items-start">
      {/* Center wrapper */}
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* NAV */}
        <nav aria-label="Profile links" className="p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="w-12 h-12 shrink-0 rounded-full bg-slate-900 text-white grid place-items-center font-bold">SG</div>
            <div className="min-w-0">
              <div className="font-semibold">{profile.name}</div>
              <div className="text-xs text-slate-500">{profile.title}</div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)" className="flex min-h-11 items-center gap-2 text-sm px-3 py-2 border rounded-xl hover:bg-slate-100">
              <Github size={16} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)" className="flex min-h-11 items-center gap-2 text-sm px-3 py-2 border rounded-xl hover:bg-slate-100">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile (opens in a new tab)" className="flex min-h-11 items-center gap-2 text-sm px-3 py-2 border rounded-xl hover:bg-slate-100">
              <CodeXml size={16} /> LeetCode
            </a>
            <a href="#contact" className="inline-flex min-h-11 items-center gap-2 text-sm px-3 py-2 bg-slate-900 text-white rounded-xl">
              <Mail size={16} /> Contact
            </a>
          </div>
        </nav>

        {/* HERO */}
        <header className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <Motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">{profile.name}</h1>
            <p className="mt-2 text-lg text-slate-700">{profile.tagline}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`${import.meta.env.BASE_URL}resume.docx`} download className="inline-flex min-h-11 items-center gap-2 px-4 py-2 rounded-lg border shadow-sm hover:shadow-md">
                <Download size={16} /> Download Resume (DOCX)
              </a>
              <a href="#projects" className="inline-flex min-h-11 items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white">
                View Projects
              </a>
              <a href="#contact" className="inline-flex min-h-11 items-center gap-2 px-4 py-2 rounded-lg border">
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
          </Motion.div>

          <Motion.aside initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-col items-center gap-4 bg-gradient-to-b from-white to-slate-50 p-6 rounded-2xl shadow-md">
            <div className="w-40 h-40 overflow-hidden bg-gradient-to-br from-indigo-500 to-sky-400 rounded-full">
              <img src={`${import.meta.env.BASE_URL}myPhoto.jfif`} alt={`${profile.name} profile photo`} width={160} height={160} className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
              <div className="font-semibold">{profile.title}</div>
              <div className="text-xs text-slate-500">{profile.location}</div>
            </div>
            <div className="flex gap-2">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)" title="GitHub" className="inline-flex min-h-11 min-w-11 items-center justify-center p-2 rounded-full border">
                <Github size={18} aria-hidden="true" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)" title="LinkedIn" className="inline-flex min-h-11 min-w-11 items-center justify-center p-2 rounded-full border">
                <Linkedin size={18} aria-hidden="true" />
              </a>
              <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile (opens in a new tab)" title="LeetCode" className="inline-flex min-h-11 min-w-11 items-center justify-center p-2 rounded-full border">
                <CodeXml size={18} aria-hidden="true" />
              </a>
            </div>
          </Motion.aside>
        </header>

        {/* MAIN */}
        <main className="p-6 space-y-8">
          {/* Scrollable experience stack */}
          <section aria-labelledby="experience-heading">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 id="experience-heading" className="text-2xl font-semibold">Experience</h2>
              <span className="text-sm text-slate-500">{experiences.length} roles · Newest first</span>
            </div>
            <p id="experience-scroll-hint" className="mt-2 text-sm text-slate-500">Scroll to explore my full work history.</p>
            <div
              role="region"
              aria-labelledby="experience-heading"
              aria-describedby="experience-scroll-hint"
              tabIndex={0}
              className="mt-4 max-h-[30rem] overflow-y-auto rounded-2xl border bg-slate-50 p-3 sm:p-4 [scrollbar-gutter:stable] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              <ol className="space-y-4">
                {experiences.map((e) => (
                  <li key={e.company}>
                    <article id={e.id} tabIndex={-1} className="scroll-mt-4 p-4 sm:p-5 bg-white rounded-2xl border shadow-sm">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="font-semibold">{e.role}</h3>
                          <p className="text-sm text-slate-500">{e.company}</p>
                        </div>
                        <span className="shrink-0 text-xs text-slate-500">{e.date}</span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-700">{e.desc}</p>
                    </article>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" tabIndex={-1}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-2xl font-semibold">Selected Projects</h2>
              <div className="text-sm text-slate-500">Backend · Tracking · Payments</div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.map((p) => (
                <Motion.div key={p.name} whileHover={{ y: -6 }} className="p-4 bg-white rounded-2xl border shadow-sm flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-xs text-slate-400">{p.tag}</div>
                  </div>
                  <p className="mt-3 text-sm text-slate-700 flex-1">{p.summary}</p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                    <a href={p.link} aria-label={`View related experience for ${p.name}`} className="inline-flex min-h-11 items-center text-sm underline">Related experience</a>
                    <div className="text-xs text-slate-500">Tech: {p.tech}</div>
                  </div>
                </Motion.div>
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
          <section id="contact" tabIndex={-1} className="p-6 bg-white rounded-2xl border shadow-sm">
            <div className="md:flex md:items-center md:justify-between gap-6">
              <div className="min-w-0 md:flex-1">
                <h2 className="text-2xl font-semibold">Let's talk</h2>
                <p className="text-sm text-slate-600 mt-2">Available for senior backend roles, consulting and freelance backend architecture work.</p>

                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <a href={`mailto:${profile.email}`} className="inline-flex min-h-11 max-w-full items-center gap-2 px-4 py-2 rounded-lg border">
                    <Mail size={16} className="shrink-0" /> <span className="break-all">{profile.email}</span>
                  </a>
                  <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex min-h-11 items-center gap-2 px-4 py-2 rounded-lg border">
                    {profile.phone}
                  </a>
                </div>
              </div>

              <form className="mt-6 min-w-0 md:mt-0 md:w-1/2 grid grid-cols-1 gap-3" onSubmit={openEmailDraft}>
                <label htmlFor="contact-name" className="text-sm font-medium">Your name</label>
                <input id="contact-name" name="name" autoComplete="name" className="min-w-0 p-3 border rounded-lg" placeholder="Your name" required />
                <label htmlFor="contact-email" className="text-sm font-medium">Your email</label>
                <input id="contact-email" name="email" autoComplete="email" className="min-w-0 p-3 border rounded-lg" type="email" placeholder="Your email" required />
                <label htmlFor="contact-message" className="text-sm font-medium">Message</label>
                <textarea id="contact-message" name="message" className="min-w-0 p-3 border rounded-lg h-28" placeholder="Message" required />
                <p className="text-xs text-slate-500">Opens your email app with your message ready to send. You can also use the email address above.</p>
                <button type="submit" className="px-4 py-3 rounded-lg bg-slate-900 text-white">Open email draft</button>
              </form>
            </div>
          </section>

          <footer className="text-center text-xs text-slate-500 py-8">© {new Date().getFullYear()} {profile.name} — Built with React + Tailwind</footer>
        </main>
      </div>
    </div>
  );
}
