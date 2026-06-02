import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../components/Container";
import Badge from "../components/Badge";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="min-h-screen pt-28 pb-20">
        <Container>
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-dust-100 mb-4 font-mono">Error: project not found</h1>
            <p className="text-dust-400 mb-6 font-mono text-sm">The requested project does not exist in the catalog.</p>
            <Button to="/projects" variant="primary">cd ../projects</Button>
          </div>
        </Container>
      </section>
    );
  }

  const stackGroups = {
    Frontend: ["React", "Vite", "TailwindCSS", "Redux", "Mapbox"],
    Backend: ["Node.js", "Express", "NestJS", "JWT", "WebSocket"],
    Database: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Elasticsearch"],
    Tools: ["Git", "Docker", "Cloudinary", "Stripe"],
  };

  const getStackGroup = (tech) => {
    for (const [group, items] of Object.entries(stackGroups)) {
      if (items.some((item) => tech.toLowerCase().includes(item.toLowerCase()))) {
        return group;
      }
    }
    return "Tools";
  };

  const groupedStack = project.stack.reduce((acc, tech) => {
    const group = getStackGroup(tech);
    if (!acc[group]) acc[group] = [];
    acc[group].push(tech);
    return acc;
  }, {});

  return (
    <section className="min-h-screen pt-28 pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center text-xs font-mono text-dust-500 hover:text-ember-400 transition-colors mb-8"
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            cd ../projects
          </Link>
        </motion.div>

        <Reveal>
          <div className="mb-12">
            <span className="section-label border-midnight-600/30 bg-midnight-800 text-dust-400 mb-4 font-mono">
              <span className="text-ember-500">#</span> project
            </span>
            <div className="flex items-center gap-4 mb-3 flex-wrap">
              <h1 className="text-3xl sm:text-4xl font-bold text-dust-100 font-mono">{project.name}</h1>
              <Badge type={project.type} className="text-sm px-3 py-1" />
            </div>
            <p className="text-dust-400 max-w-3xl leading-relaxed font-mono text-sm">{project.shortDescription}</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <Reveal delay={0.1}>
              <div className="card-surface p-6">
                <h2 className="text-lg font-bold text-dust-100 mb-3 font-mono flex items-center gap-2">
                  <span className="text-ember-500">//</span> Overview
                </h2>
                <p className="text-dust-400 leading-relaxed text-sm font-mono">{project.longDescription}</p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="card-surface p-6">
                <h2 className="text-lg font-bold text-dust-100 mb-3 font-mono flex items-center gap-2">
                  <span className="text-ember-500">//</span> Role
                </h2>
                <p className="text-dust-400 leading-relaxed text-sm font-mono">{project.role}</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h2 className="text-lg font-bold text-dust-100 mb-5 font-mono flex items-center gap-2">
                  <span className="text-ember-500">//</span> System Design
                </h2>
                <div className="space-y-4">
                  <div className="card-surface p-6">
                    <h3 className="text-sm font-semibold text-dust-200 mb-2 font-mono">Frontend Architecture</h3>
                    <p className="text-dust-400 leading-relaxed text-sm font-mono">
                      Component-driven architecture built with React. State management follows a modular
                      approach using React's built-in hooks and context API, keeping the component tree
                      predictable and testable. UI components are reusable and follow consistent patterns
                      across the application.
                    </p>
                  </div>
                  <div className="card-surface p-6">
                    <h3 className="text-sm font-semibold text-dust-200 mb-2 font-mono">Backend Architecture</h3>
                    <p className="text-dust-400 leading-relaxed text-sm font-mono">
                      RESTful API design following resource-oriented conventions. The backend is structured
                      around controllers, services, and data access layers to maintain separation of concerns.
                      Authentication flows use JWT with middleware-based route protection where applicable.
                    </p>
                  </div>
                  <div className="card-surface p-6">
                    <h3 className="text-sm font-semibold text-dust-200 mb-2 font-mono">Data Model</h3>
                    <p className="text-dust-400 leading-relaxed text-sm font-mono">
                      Schema design prioritizes data integrity and query performance. Relationships are
                      modeled with clear foreign key constraints (SQL) or referenced document patterns (NoSQL).
                      Indexing strategies are applied based on query patterns.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="card-surface p-6">
                <h2 className="text-lg font-bold text-dust-100 mb-4 font-mono flex items-center gap-2">
                  <span className="text-ember-500">//</span> Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-2">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-dust-400 p-2 text-sm font-mono">
                      <span className="text-emerald-400 shrink-0">+</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="card-surface p-6">
                <h2 className="text-lg font-bold text-dust-100 mb-3 font-mono flex items-center gap-2">
                  <span className="text-ember-500">//</span> Engineering Decisions
                </h2>
                <div className="space-y-4">
                  <p className="text-dust-400 leading-relaxed text-sm font-mono">
                    The tech stack was chosen based on the specific requirements of each project. For
                    production-level applications, PostgreSQL was preferred for data integrity and complex
                    queries. For rapid prototyping, MongoDB provided flexibility. The frontend consistently
                    uses React with TailwindCSS for rapid UI development and consistent styling.
                  </p>
                  <p className="text-dust-400 leading-relaxed text-sm font-mono">
                    Tradeoffs were made with awareness: demo applications prioritize feature breadth over
                    depth, and simplifications are clearly documented. The goal is to demonstrate engineering
                    thinking at every level, even within constraints.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="card-surface p-6">
                <h2 className="text-lg font-bold text-dust-100 mb-3 font-mono flex items-center gap-2">
                  <span className="text-ember-500">//</span> Outcome
                </h2>
                <p className="text-dust-400 leading-relaxed text-sm font-mono">
                  This project demonstrates system thinking, full-stack capability, and architecture
                  understanding. It shows the ability to design and build complete applications from
                  database schema to user interface, with attention to both technical details and user
                  experience.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="space-y-5">
            <Reveal variant="slideRight" delay={0.1}>
              <div className="card-surface p-6">
                <h2 className="text-sm font-bold text-dust-100 mb-4 font-mono flex items-center gap-2">
                  <span className="text-ember-500">#</span> Stack
                </h2>
                {Object.entries(groupedStack).map(([group, items]) => (
                  <div key={group} className="mb-4 last:mb-0">
                    <h3 className="text-xs font-mono tracking-wider text-dust-500 uppercase mb-2">
                      {group}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-midnight-700/50 border border-midnight-600/30 text-dust-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal variant="slideRight" delay={0.2}>
              <div className="card-surface p-6">
                <h2 className="text-sm font-bold text-dust-100 mb-4 font-mono flex items-center gap-2">
                  <span className="text-ember-500">#</span> Links
                </h2>
                <div className="space-y-3">
                  {project.links.live && (
                    <Button href={project.links.live} variant="primary" className="w-full">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </Button>
                  )}
                  {project.links.github && (
                    <Button href={project.links.github} variant="secondary" className="w-full">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View on GitHub
                    </Button>
                  )}
                  {!project.links.live && !project.links.github && (
                    <p className="text-xs font-mono text-dust-500 italic">No links available</p>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
