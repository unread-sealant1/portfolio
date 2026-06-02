import Container from "../components/Container";
import Reveal from "../components/Reveal";

const coreFocus = [
  "Full-stack web development (React + Node.js)",
  "REST API design and backend architecture",
  "Database systems (PostgreSQL, MongoDB)",
  "Building complete application flows from scratch",
  "Writing structured, maintainable codebases",
];

const projects = [
  "R-Ramz – full-stack application focused on structured system design",
  "Joblink360 – job listing platform with filtering and data-driven architecture",
  "Airbnb clone – booking system demonstrating real-world application structure",
  "Cliptalk, Shoppingmaster, You Decide – experimental builds exploring product logic and interaction systems",
];

const stack = [
  "React (Vite)",
  "Node.js (Express / NestJS)",
  "REST APIs",
  "PostgreSQL / MongoDB",
  "Git and deployment workflows",
  "Python (selective use for backend or automation tasks)",
];

const capabilities = [
  "Authentication flows",
  "CRUD systems",
  "API design and integration",
  "Database modeling and relationships",
  "End-to-end feature implementation",
];

export default function About() {
  return (
    <section className="min-h-screen pt-28 pb-20">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <span className="section-label border-ember-800/30 bg-ember-950/20 text-ember-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ember-500" />
              About
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-dust-100 mb-8 font-mono">
              <span className="text-ember-500">/</span>about
            </h1>
          </Reveal>

          <div className="space-y-10">

            <Reveal delay={0.1}>
              <div className="card-surface p-6">
                <p className="text-dust-300 leading-relaxed font-mono text-sm">
                  I'm Cassidy Mahlatse Masila, a full-stack developer focused on building end-to-end web systems that are functional, scalable, and production-oriented.
                </p>
                <p className="text-dust-400 leading-relaxed font-mono text-sm mt-4">
                  I work primarily with React and Node.js, building applications that combine clean frontend architecture with solid backend systems, REST APIs, and database-driven logic. My focus is not UI decoration, but building systems that actually work, from user interaction through to data persistence.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="card-surface p-6">
                <h2 className="text-lg font-bold text-dust-100 mb-3 font-mono flex items-center gap-2">
                  <span className="text-ember-500">//</span> What I Build
                </h2>
                <p className="text-dust-400 leading-relaxed font-mono text-sm mb-4">
                  I build full-stack applications such as job platforms, e-commerce systems, booking platforms, and social-style applications. My projects are structured around real system logic, not static UI pages.
                </p>
                <div className="space-y-2">
                  {capabilities.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-dust-400 font-mono text-sm">
                      <span className="text-emerald-400 shrink-0 mt-0.5">+</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="card-surface p-6">
                <h2 className="text-lg font-bold text-dust-100 mb-4 font-mono flex items-center gap-2">
                  <span className="text-ember-500">//</span> Core Focus
                </h2>
                <div className="space-y-2">
                  {coreFocus.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-dust-400 font-mono text-sm">
                      <span className="text-ember-500 shrink-0">&gt;</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="card-surface p-6">
                <h2 className="text-lg font-bold text-dust-100 mb-3 font-mono flex items-center gap-2">
                  <span className="text-ember-500">//</span> Approach
                </h2>
                <p className="text-dust-400 leading-relaxed font-mono text-sm">
                  I build systems from the ground up. I focus on how data flows through an application, how services interact, and how frontend state connects to backend logic.
                </p>
                <p className="text-dust-400 leading-relaxed font-mono text-sm mt-3">
                  I prioritize structure, predictability, and real functionality over visual complexity or unnecessary abstraction.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="card-surface p-6">
                <h2 className="text-lg font-bold text-dust-100 mb-4 font-mono flex items-center gap-2">
                  <span className="text-ember-500">//</span> Projects
                </h2>
                <p className="text-dust-400 leading-relaxed font-mono text-sm mb-4">
                  My work includes production-style systems and structured demos such as:
                </p>
                <div className="space-y-2">
                  {projects.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-dust-400 font-mono text-sm">
                      <span className="text-dust-500 shrink-0">-</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="card-surface p-6">
                <h2 className="text-lg font-bold text-dust-100 mb-4 font-mono flex items-center gap-2">
                  <span className="text-ember-500">//</span> Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono bg-midnight-700/50 text-dust-400 border border-midnight-600/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="card-surface p-6 border-ember-800/20 bg-gradient-to-br from-midnight-800 to-midnight-900">
                <h2 className="text-lg font-bold text-dust-100 mb-3 font-mono flex items-center gap-2">
                  <span className="text-ember-500">//</span> Direction
                </h2>
                <p className="text-dust-300 leading-relaxed font-mono text-sm">
                  I'm focused on building and working on complex systems where architecture, scalability, and real-world functionality matter more than surface-level design.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </Container>
    </section>
  );
}
