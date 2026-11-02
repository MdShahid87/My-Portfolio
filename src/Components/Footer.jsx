import React from "react";
import { Mail, ArrowUpRight, Download, MapPin, Sparkles, Heart } from "lucide-react";
import { personalInfo, socialLinks } from "../data/portfolioData";

// Clean custom SVG icons for brands
const GitHubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688.103-.253.446-1.272-.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2Z"
    />
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const Footer = () => {
  const year = new Date().getFullYear();
  const email = personalInfo?.emails?.primary;

  const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinksList = [
    { label: "GitHub", href: socialLinks?.github, icon: GitHubIcon },
    { label: "LinkedIn", href: socialLinks?.linkedin, icon: LinkedInIcon },
    { label: "Email", href: email ? `mailto:${email}` : null, icon: Mail },
  ];

  return (
    <footer className="relative w-full border-t border-white/10 bg-[#07090e] px-4 sm:px-6 md:px-12 py-12 md:py-16 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">

          <div className="space-y-4 md:col-span-5">
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-display text-2xl font-black tracking-tight text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-[#ff385c] to-[#a855f7] text-white shadow-lg shadow-[#ff385c]/25">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>
                {personalInfo?.displayName || "MD Shahid"}
                <span className="text-[#ff385c]">.</span>
              </span>
            </a>

            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Frontend Developer specializing in React.js, modern JavaScript, and high-performance UI systems. Dedicated to building responsive, accessible, and delightful digital experiences.
            </p>

            {personalInfo?.location && (
              <p className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <MapPin className="h-4 w-4 text-[#ff385c]" />
                {personalInfo.location} • {personalInfo.relocation}
              </p>
            )}
          </div>
          <div className="space-y-4 md:col-span-4 md:mx-auto">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Navigation
            </h4>

            <nav className="grid grid-cols-2 gap-2.5">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400 transition-colors hover:text-white"
                >
                  <span className="text-[#ff385c] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Get In Touch (Span 3) */}
          <div className="space-y-4 md:col-span-3 md:ml-auto">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Connect Directly
            </h4>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to Opportunities
            </div>

            {email && (
              <a
                href={`mailto:${email}`}
                className="block break-all text-xs sm:text-sm font-medium text-slate-400 transition-colors hover:text-[#ff385c]"
              >
                {email}
              </a>
            )}

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ff385c] to-[#a855f7] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#ff385c]/20 transition-all hover:scale-105"
              >
                <span>Hire MD Shahid</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">

          <p className="text-xs text-slate-500">
            © {year} {personalInfo?.displayName || "MD Shahid"}. Built with React.js, Tailwind CSS & Framer Motion.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            {socialLinksList.map(({ label, href, icon: IconComponent }) => {
              if (!href) return null;

              return (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:-translate-y-1 hover:border-[#ff385c]/40 hover:bg-[#ff385c]/10 hover:text-white"
                >
                  <IconComponent className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          {/* Resume & Back to Top */}
          <div className="flex items-center gap-6 text-xs font-semibold">
            {personalInfo?.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white"
              >
                <Download className="h-3.5 w-3.5 text-[#ff385c]" />
                <span>Download Resume</span>
              </a>
            )}

            <a
              href="#home"
              className="text-slate-400 transition-colors hover:text-[#ff385c]"
            >
              Back to Top ↑
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
