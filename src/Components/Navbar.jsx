import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Navigation Links
  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Certificates", href: "#certificates", id: "certificates" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Scroll Detection & Active Section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 70;

      if (isBottom) {
        setActiveSection("contact");
        return;
      }

      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "certificates",
        "contact",
      ];

      const current = sections.find((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 220 && rect.bottom >= 220;
        }

        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close Menu on Desktop Resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close Menu on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Mobile & Desktop Navigation Fix
  const handleNavClick = (e, href) => {
    e.preventDefault();

    const targetId = href.replace("#", "");

    // Close mobile menu
    setIsOpen(false);

    // Find selected section
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      console.warn(`Section not found: ${targetId}`);
      return;
    }

    // Wait for mobile drawer to close
    setTimeout(() => {
      const element = document.getElementById(targetId);

      if (!element) return;

      const navbarOffset = window.innerWidth < 768 ? 85 : 100;

      const targetPosition =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarOffset;

      // Smooth scroll
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      });

      // Update URL
      window.history.replaceState(null, "", href);

      // Update active section
      setActiveSection(targetId);
    }, 300);
  };

  // Hiring Email
  const hireMailto = `mailto:${personalInfo?.emails?.primary ||
    "mdshahidarzoo39@gmail.com"
    }?subject=Opportunity Inquiry - MD Shahid`;

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="pointer-events-auto fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Navbar Header */}
      <header className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex justify-center px-3 pt-3 transition-all duration-300 sm:px-6 sm:pt-4">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 ${isOpen
            ? "rounded-3xl shadow-2xl"
            : "rounded-full shadow-xl"
            } ${isScrolled || isOpen
              ? "border border-white/15 bg-[#090d16]/95 px-4 py-2.5 shadow-2xl shadow-black/80 backdrop-blur-2xl sm:px-5"
              : "border border-white/10 bg-[#0c101c]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:px-6"
            }`}
        >
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="group flex items-center gap-2 text-white transition-opacity hover:opacity-90 sm:gap-2.5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-[#ff385c] to-[#7928ca] text-white shadow-md shadow-[#ff385c]/30 transition-transform duration-300 group-hover:scale-105">
                <Sparkles className="h-4 w-4" />
              </span>

              <span className="font-display text-base font-extrabold tracking-tight sm:text-lg">
                {personalInfo?.displayName || "MD Shahid"}
                <span className="text-[#ff385c]">.</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-0.5 md:flex lg:gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) =>
                      handleNavClick(e, link.href)
                    }
                    className={`relative rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${isActive
                      ? "text-white"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navActivePill"
                        className="absolute inset-0 rounded-full border border-white/10 bg-white/10 shadow-inner"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative z-10">
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Hire Button & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">

              {/* Desktop Hire Button */}
              <a
                href={hireMailto}
                className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-[#ff385c] to-[#7928ca] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-[#ff385c]/20 transition-all duration-200 hover:scale-105 active:scale-95 sm:inline-flex"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={
                  isOpen
                    ? "Close navigation"
                    : "Open navigation"
                }
                aria-expanded={isOpen}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 transition-all hover:bg-white/10 hover:text-white active:scale-90 md:hidden"
              >
                {isOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                  marginTop: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  marginTop: 12,
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  marginTop: 0,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                className="overflow-hidden border-t border-white/10 pt-3 md:hidden"
              >
                <div className="flex max-h-[65vh] flex-col gap-1.5 overflow-y-auto py-1">
                  {navLinks.map((link) => {
                    const isActive =
                      activeSection === link.id;

                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) =>
                          handleNavClick(e, link.href)
                        }
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${isActive
                          ? "border border-[#ff385c]/30 bg-gradient-to-r from-[#ff385c]/15 to-[#7928ca]/15 text-white"
                          : "text-slate-300 hover:bg-white/10 hover:text-white"
                          }`}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`h-2 w-2 rounded-full transition-all ${isActive
                              ? "bg-[#ff385c] shadow-sm shadow-[#ff385c]"
                              : "bg-white/20"
                              }`}
                          />

                          <span>{link.name}</span>
                        </span>

                        <span
                          className={`text-xs transition-transform ${isActive
                            ? "translate-x-0.5 font-bold text-[#ff385c]"
                            : "text-slate-500"
                            }`}
                        >
                          →
                        </span>
                      </a>
                    );
                  })}

                  {/* Mobile Hire Button */}
                  <div className="mt-1.5 border-t border-white/10 pt-2.5">
                    <a
                      href={hireMailto}
                      onClick={() => setIsOpen(false)}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff385c] to-[#7928ca] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#ff385c]/25 transition-all active:scale-[0.98]"
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
    </>
  );
};

export default Navbar;