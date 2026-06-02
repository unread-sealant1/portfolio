const typeStyles = {
  Production: "badge-production",
  Demo: "badge-demo",
  Prototype: "badge-prototype",
};

export default function Badge({ type, className = "" }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono tracking-wider uppercase ${typeStyles[type] || "bg-midnight-700 text-dust-400 border border-midnight-600"} ${className}`}>
      {type}
    </span>
  );
}
