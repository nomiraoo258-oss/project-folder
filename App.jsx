import React from "react";
import { motion } from "framer-motion";

export default function App() {
  const projects = [
    {
      title: "Interactive Weather App",
      desc: "A responsive weather app with search, icons, and 7-day forecast. Built with React & OpenWeather API.",
      tech: ["React", "API", "CSS"],
      link: "#",
    },
    {
      title: "E-commerce Demo (Single Product)",
      desc: "Product page with add-to-cart micro interactions and simple checkout flow mock.",
      tech: ["React", "State"],
      link: "#",
    },
    {
      title: "Portfolio CMS (Mock)",
      desc: "Small CMS admin mock to add/edit project cards. Shows understanding of CRUD & forms.",
      tech: ["React", "Forms"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased p-6">
      <header className="max-w-4xl mx-auto">
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
              NS
            </div>
            <div>
              <h1 className="text-lg font-semibold">Your Name</h1>
              <p className="text-sm text-gray-600">
                Frontend Developer — Demo for Job Interview
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#projects" className="text-sm hover:underline">
              Projects
            </a>
            <a href="#skills" className="text-sm hover:underline">
              Skills
            </a>
            <a href="#contact" className="text-sm hover:underline">
              Contact
            </a>
            <a
              href="/resume.pdf"
              download
              className="ml-4 inline-block px-4 py-2 rounded-md border border-gray-200 text-sm"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto mt-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold">
              Hello — I'm <span className="text-indigo-600">Your Name</span>
            </h2>
            <p className="mt-3 text-gray-700">
              I build clean, accessible web interfaces with a focus on
              performance and user experience. For this demo, I prepared 3
              interactive projects to show core frontend skills: components,
              state management, API integration and UI polish.
            </p>

            <div className="mt-4 flex gap-3">
              <a
                href="#projects"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md"
              >
                View Projects
              </a>
              <a href="#contact" className="px-4 py-2 border rounded-md">
                Hire / Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 rounded-xl shadow-sm"
          >
            <h3 className="text-sm text-gray-500">Quick stats</h3>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <Stat label="Projects" value="3+" />
              <Stat label="JS Experience" value="2 yrs" />
              <Stat label="Performance" value="A" />
            </div>
          </motion.div>
        </section>

        <section id="projects" className="mt-12">
          <h3 className="text-2xl font-bold">Selected Projects</h3>
          <p className="text-gray-600 mt-1">
            Click a project to open the live demo or show the code.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </section>

        <section id="skills" className="mt-12">
          <h3 className="text-2xl font-bold">Skills & Tools</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Git",
              "Tailwind",
              "Vite",
              "API",
            ].map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full border text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-12 mb-20">
          <h3 className="text-2xl font-bold">Contact / Demo Pitch</h3>
          <p className="text-gray-600 mt-1">
            Use this form during the interview to collect follow-up or to show
            live interaction.
          </p>

          <div className="mt-4 bg-white p-6 rounded-lg shadow-sm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Demo: form submitted (mock)");
              }}
            >
              <div className="grid gap-3 md:grid-cols-2">
                <input
                  placeholder="Name"
                  required
                  className="p-3 border rounded"
                />
                <input
                  placeholder="Email"
                  type="email"
                  required
                  className="p-3 border rounded"
                />
              </div>
              <textarea
                placeholder="Message"
                className="w-full mt-3 p-3 border rounded"
                rows={4}
              ></textarea>
              <div className="mt-3 flex items-center gap-3">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded">
                  Send
                </button>
                <a href="/resume.pdf" download className="text-sm underline">
                  Download Resume
                </a>
                <a href="#" className="ml-auto text-sm">
                  GitHub Repo
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="max-w-4xl mx-auto mt-12 text-center text-sm text-gray-500">
        <p>
          Made for job demo — replace text, images and links with your real data
          before presenting.
        </p>
      </footer>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-white p-3 rounded-lg text-center shadow-sm">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="mt-1 text-xl font-bold">{value}</div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.link}
      onClick={(e) => {
        e.preventDefault();
        alert("Open project demo: " + project.title);
      }}
      whileHover={{ y: -6 }}
      className="block bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition"
    >
      <h4 className="font-semibold">{project.title}</h4>
      <p className="text-sm text-gray-600 mt-2">{project.desc}</p>
      <div className="mt-3 flex gap-2 flex-wrap">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full border">
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
