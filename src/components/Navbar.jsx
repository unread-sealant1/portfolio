import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-midnight-900/85 backdrop-blur-xl border-b border-midnight-600/30 shadow-glow-amber"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            to="/"
            className="text-xl font-bold tracking-tight font-mono"
          >
            <span className="text-dust-200 hover:text-ember-400 transition-colors">
              cassidy<span className="text-ember-500">.</span>
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 rounded-lg text-dust-400 hover:text-dust-200 hover:bg-midnight-800 transition-colors"
            aria-label="Toggle navigation"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden sm:flex items-center gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-ember-400"
                      : "text-dust-400 hover:text-dust-200"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="font-mono text-xs mr-1.5 opacity-50">#</span>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-gradient-to-r from-ember-500 to-amber-500 rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden overflow-hidden"
            >
              <div className="pb-4 space-y-1">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors font-mono ${
                        isActive
                          ? "text-ember-400 bg-midnight-800"
                          : "text-dust-400 hover:text-dust-200 hover:bg-midnight-800"
                      }`
                    }
                  >
                    <span className="text-xs mr-2 opacity-50">#</span>
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  );
}
