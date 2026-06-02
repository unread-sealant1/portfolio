import { Link } from "react-router-dom";

const variants = {
  primary: "gradient-ember text-midnight-900 font-semibold hover:shadow-glow-amber-lg",
  secondary: "bg-midnight-800 text-dust-200 border border-midnight-600/50 hover:bg-midnight-700 hover:border-ember-800/30 hover:text-ember-400",
  outline: "border-2 border-ember-600/50 text-ember-400 hover:bg-ember-950/30 hover:shadow-glow-amber",
};

export default function Button({ children, to, href, variant = "primary", className = "", ...props }) {
  const base = `inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ember-500/50 font-mono ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={base} {...props}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={base} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
  }

  return <button className={base} {...props}>{children}</button>;
}
