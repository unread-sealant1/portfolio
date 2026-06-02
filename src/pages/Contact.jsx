import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/Container";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

const initialForm = { name: "", email: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Invalid email address";
  }
  if (!form.message.trim()) errors.message = "Message is required";
  return errors;
}

const contactChannels = [
  {
    label: "Email",
    value: "Cassidymahlatse@gmail.com",
    href: "mailto:Cassidymahlatse@gmail.com",
  },
  {
    label: "Phone",
    value: "+27 66 454 0199",
    href: "tel:+27664540199",
  },
  {
    label: "GitHub",
    value: "github.com/unread-sealant1",
    href: "https://github.com/unread-sealant1",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/cassidy-masila-ab810620b",
    href: "https://www.linkedin.com/in/cassidy-masila-ab810620b/",
  },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setForm(initialForm);
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section className="min-h-screen pt-28 pb-20">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="section-label border-ember-800/30 bg-ember-950/20 text-ember-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ember-500" />
              Contact
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-dust-100 mb-3 font-mono">
              <span className="text-ember-500">/</span>contact
            </h1>
            <p className="text-dust-400 mb-10 font-mono text-sm">
              Reach out directly or send a message below.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="card-surface p-6 mb-10">
              <h2 className="text-xs font-mono tracking-wider text-dust-500 uppercase mb-4 flex items-center gap-2">
                <span className="text-ember-500">$</span> contact_channels
              </h2>
              <div className="space-y-3">
                {contactChannels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 p-3 rounded-lg bg-midnight-700/30 border border-midnight-600/30 hover:border-ember-800/30 hover:bg-midnight-700/50 transition-all duration-200 group"
                  >
                    <span className="text-ember-400 font-mono text-sm w-16 shrink-0">{channel.label}</span>
                    <span className="text-dust-400 font-mono text-xs group-hover:text-dust-200 transition-colors break-all">
                      {channel.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-surface p-6">
              <h2 className="text-xs font-mono tracking-wider text-dust-500 uppercase mb-5 flex items-center gap-2">
                <span className="text-ember-500">$</span> send_message
              </h2>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-8"
                  >
                    <div className="text-ember-400 text-2xl mb-3 font-mono">message_sent()</div>
                    <p className="text-dust-400 font-mono text-sm">I'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    noValidate
                  >
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-dust-500 mb-1.5">
                        <span className="text-ember-500">_</span> name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg text-sm font-mono transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ember-500/50 ${
                          errors.name
                            ? "bg-red-950/20 border-red-800/50 text-red-300"
                            : "bg-midnight-700/50 border border-midnight-600/30 text-dust-200 placeholder-dust-500 hover:border-midnight-500/50"
                        }`}
                        placeholder="Enter your name..."
                      />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-red-400 text-xs font-mono mt-1"
                          >
                            ! {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-dust-500 mb-1.5">
                        <span className="text-ember-500">_</span> email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg text-sm font-mono transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ember-500/50 ${
                          errors.email
                            ? "bg-red-950/20 border-red-800/50 text-red-300"
                            : "bg-midnight-700/50 border border-midnight-600/30 text-dust-200 placeholder-dust-500 hover:border-midnight-500/50"
                        }`}
                        placeholder="Enter your email..."
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-red-400 text-xs font-mono mt-1"
                          >
                            ! {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-mono text-dust-500 mb-1.5">
                        <span className="text-ember-500">_</span> message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg text-sm font-mono transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ember-500/50 resize-y ${
                          errors.message
                            ? "bg-red-950/20 border-red-800/50 text-red-300"
                            : "bg-midnight-700/50 border border-midnight-600/30 text-dust-200 placeholder-dust-500 hover:border-midnight-500/50"
                        }`}
                        placeholder="Tell me about your project or idea..."
                      />
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-red-400 text-xs font-mono mt-1"
                          >
                            ! {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        disabled={status === "loading"}
                        className="w-full"
                      >
                        {status === "loading" ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            sending...
                          </span>
                        ) : (
                          "send_message $"
                        )}
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
