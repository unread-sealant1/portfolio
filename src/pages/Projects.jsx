import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { StaggerReveal, StaggerItem } from "../components/Reveal";
import projects from "../data/projects";

const sortedProjects = [...projects].sort((a, b) => {
  const order = { Production: 0, Demo: 1, Prototype: 2 };
  return order[a.type] - order[b.type];
});

export default function Projects() {
  return (
    <section className="min-h-screen pt-28 pb-20">
      <Container>
        <Reveal>
          <div className="mb-12">
            <span className="section-label border-ember-800/30 bg-ember-950/20 text-ember-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ember-500" />
              Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-dust-100 mb-3 font-mono">
              <span className="text-ember-500">/</span>projects
            </h1>
            <p className="text-dust-400 max-w-2xl font-mono text-sm">
              A catalog of engineering work spanning production systems, demo applications, and experimental prototypes.
            </p>
          </div>
        </Reveal>

        <StaggerReveal
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.07}
        >
          {sortedProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
