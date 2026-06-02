import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { StaggerReveal, StaggerItem } from "../components/Reveal";
import projects from "../data/projects";

const techStack = {
  Frontend: ["React", "Vite", "TailwindCSS"],
  Backend: ["Node.js", "Express", "NestJS"],
  Database: ["PostgreSQL", "MongoDB", "Supabase"],
  Tools: ["Git", "REST APIs", "Docker"],
};

const featuredSlugs = ["r-ramz", "joblink360", "airbnb-clone"];

export default function Home() {
  const featuredProjects = projects.filter((p) => featuredSlugs.includes(p.slug));

  return (
    <div>
      <section className="relative min-h-screen flex items-center bg-void-radial overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid-void opacity-60" />

        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-ember-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 py-16 lg:py-0">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="section-label border-ember-800/30 bg-ember-950/20 text-ember-400 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember-500 animate-pulse" />
                  Full-Stack Developer
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-4"
              >
                <span className="text-dust-100">Cassidy Mahlatse</span>
                <br />
                <span className="gradient-ember-text">Masila</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-dust-400 text-base sm:text-lg mb-8 max-w-xl leading-relaxed font-mono"
              >
                <span className="text-ember-500">&gt;</span> Focus on building scalable full-stack systems and web applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                <Button to="/projects" variant="primary">
                  View Projects
                </Button>
                <Button to="/contact" variant="outline">
                  Get in Touch
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="shrink-0"
            >
              <div className="relative">
                <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-midnight-600/50 shadow-glow-amber">
                  <img
                    src="/profile.jpeg"
                    alt="Cassidy Mahlatse Masila"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.classList.add(
                        "bg-gradient-to-br", "from-midnight-700", "to-midnight-900",
                        "flex", "items-center", "justify-center"
                      );
                      const fallback = document.createElement("span");
                      fallback.className = "text-6xl font-bold gradient-ember-text";
                      fallback.textContent = "CM";
                      e.target.parentElement.appendChild(fallback);
                    }}
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-midnight-800 rounded-xl border border-midnight-600/50 flex items-center justify-center shadow-glow-amber">
                  <span className="text-xl">&lt;/&gt;</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-xs font-mono text-dust-500">scroll</span>
            <svg className="w-4 h-4 text-dust-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 border-t border-midnight-600/30">
        <Container>
          <Reveal>
            <div className="flex items-center gap-3 mb-12">
              <span className="text-ember-500 font-mono text-sm">//</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-dust-100 font-mono">
                tech_stack
              </h2>
            </div>
          </Reveal>
          <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
            {Object.entries(techStack).map(([category, items]) => (
              <StaggerItem key={category}>
                <div className="card-surface p-6 h-full hover:border-ember-800/30 transition-all duration-300">
                  <h3 className="text-xs font-mono tracking-wider uppercase text-dust-500 mb-4">
                    <span className="text-ember-500">#</span> {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, i) => (
                      <span
                        key={item}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono bg-midnight-700/50 text-dust-400 border border-midnight-600/30 hover:border-ember-800/30 hover:text-ember-400 transition-all duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="py-24 border-t border-midnight-600/30">
        <Container>
          <Reveal>
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <span className="text-ember-500 font-mono text-sm">//</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-dust-100 font-mono">
                  featured
                </h2>
              </div>
              <Link
                to="/projects"
                className="text-xs font-mono text-dust-500 hover:text-ember-400 transition-colors"
              >
                view_all() &rarr;
              </Link>
            </div>
          </Reveal>
          <StaggerReveal
            className="grid md:grid-cols-3 gap-6"
            staggerDelay={0.12}
          >
            {featuredProjects.map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} featured />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="py-24 border-t border-midnight-600/30 bg-midnight-900">
        <Container>
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-ember-500 font-mono text-sm">// about</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-dust-100 mt-3 mb-6 font-mono">
                system_designer
              </h2>
              <p className="text-dust-400 leading-relaxed mb-8 text-base font-mono">
                <span className="text-ember-500">&gt;</span> Full-stack developer with a system builder mindset.
                Focused on building scalable applications and solving real-world problems
                through clean architecture and thoughtful engineering.
              </p>
              <Button to="/about" variant="secondary">
                read_more &rarr;
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
