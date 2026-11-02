import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["home", "about", "experience", "skills", "projects", "certificates", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 250 && rect.bottom >= 250;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const hireMailto = `mailto:${personalInfo?.emails?.primary || "mdshahidarzoo39@gmail.com"
    }?subject=Opportunity Inquiry - MD Shahid`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 transition-all duration-300 pointer-events-none">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 ${isScrolled
            ? "bg-[#090d16]/90 border border-white/15 px-5 py-2.5 shadow-2xl shadow-black/80 backdrop-blur-2xl"
            : "bg-[#0c101c]/75 border border-white/10 px-6 py-3.5 shadow-xl backdrop-blur-xl"
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-2.5 text-white transition-opacity hover:opacity-90"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-[#ff385c] to-[#7928ca] text-white shadow-md shadow-[#ff385c]/30 transition-transform duration-300 group-hover:scale-105">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-extrabold text-base sm:text-lg tracking-tight font-display">
              {personalInfo?.displayName || "MD Shahid"}
              <span className="text-[#ff385c]">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 rounded-full ${isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navActivePill"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/10 shadow-inner"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={hireMailto}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#ff385c] to-[#7928ca] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-[#ff385c]/20 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:text-white hover:bg-white/10 md:hidden"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 12 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-t border-white/10 pt-3 md:hidden"
            >
              <div className="flex flex-col gap-1 py-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="text-[10px] text-[#ff385c]">→</span>
                  </a>
                ))}
                <div className="pt-2 mt-1 border-t border-white/5">
                  <a
                    href={hireMailto}
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff385c] to-[#7928ca] py-2.5 text-xs font-bold text-white shadow"
                  >
                    <span>Hire Me Now</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
