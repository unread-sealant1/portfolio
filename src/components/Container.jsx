export default function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
