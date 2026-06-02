import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Badge from "./Badge";

export default function ProjectCard({ project, featured = false }) {
  const { slug, name, type, shortDescription, stack } = project;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        to={`/projects/${slug}`}
        className={`group block rounded-xl transition-all duration-300 overflow-hidden h-full ${
          featured
            ? "bg-midnight-800/80 border-2 border-ember-800/30 hover:border-ember-600/50 shadow-glow-amber"
            : "card-surface card-hover"
        }`}
      >
        <div className="p-6 sm:p-7 flex flex-col h-full">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-lg font-semibold text-dust-100 group-hover:gradient-ember-text transition-all">
              {name}
            </h3>
            <Badge type={type} className="shrink-0" />
          </div>

          <p className="text-dust-400 text-sm leading-relaxed mb-5 line-clamp-2 flex-1 font-mono">
            {shortDescription}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-midnight-600/30">
            {stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-midnight-700/50 text-dust-400 border border-midnight-600/30 group-hover:border-ember-800/30 group-hover:text-dust-300 transition-all"
              >
                {tech}
              </span>
            ))}
            {stack.length > 3 && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-midnight-700/30 text-dust-500">
                +{stack.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
