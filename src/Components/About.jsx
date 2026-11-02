import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Code2,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  Terminal,
  FileCode,
  Braces,
  Globe,
  Palette,
  GitBranch,
  ArrowUpRight,
  Download,
} from "lucide-react";
import { education, personalInfo } from "../data/portfolioData";
import mePhoto from "../assets/about/Me.jpeg";

const About = () => {
  const highlights = [
    {
      icon: <Layers className="h-5 w-5 text-[#ff385c]" />,
      title: "3 Shipped Applications",
      desc: "Live projects featuring REST API consumption, state management, and 100% client-side file tools.",
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-indigo-400" />,
      title: "BCA Degree (79.87%)",
      desc: "Bachelor of Computer Applications from B.B.A. Bihar University with strong computer science roots.",
    },
    {
      icon: <Cpu className="h-5 w-5 text-emerald-400" />,
      title: "Frontend Intern",
      desc: "Practical industry experience at Unified Mentor developing reusable components and responsive interfaces.",
    },
    {
      icon: <Terminal className="h-5 w-5 text-amber-400" />,
      title: "Data Structures & Java",
      desc: "Solid algorithmic foundation in Java, Python, and efficient problem solving.",
    },
  ];

  const primaryTech = [
    "React.js",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Redux Toolkit",
    "REST APIs",
    "Git & GitHub",
    "HTML5 & CSS3",
    "Core Java",
    "Axios",
    "Vite",
  ];

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#07090e] px-4 sm:px-6 md:px-12 py-20 md:py-28"
    >
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] rounded-full bg-[#ff385c]/8 blur-[160px]" />
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] rounded-full bg-[#6366f1]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#ff385c] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>About me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Passionate About Code,{" "}
            <span className="bg-gradient-to-r from-[#ff385c] via-[#ff6b6b] to-[#a855f7] bg-clip-text text-transparent">
              Obsessed with Detail.
            </span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">

              <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#ff385c]/20 via-[#6366f1]/20 to-[#a855f7]/20 blur-2xl opacity-75" />


              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0e121b]/90 p-3 shadow-2xl shadow-black/80 backdrop-blur-xl">


                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-900 group">
                  <img
                    src={mePhoto}
                    alt="MD Shahid - Frontend Developer"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />


                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />


                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/10">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Open to Relocate
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-extrabold text-white">MD Shahid</h3>
                    <p className="text-xs font-semibold text-[#ff385c]">
                      Frontend & React.js Developer
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-300">
                      <MapPin className="h-3.5 w-3.5 text-slate-400" />
                      Delhi NCR, India
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between px-2 py-1 text-xs font-medium text-slate-400">
                  <span className="inline-flex items-center gap-1.5 text-slate-300">
                    <GraduationCap className="h-4 w-4 text-indigo-400" />
                    BCA 79.87%
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="inline-flex items-center gap-1.5 text-slate-300">
                    <Code2 className="h-4 w-4 text-emerald-400" />
                    React Specialist
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:col-span-7 flex flex-col justify-between space-y-6"
          >

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-300">
              <p>
                I am a dedicated <strong className="text-white font-semibold">Frontend Developer</strong> passionate about building responsive, accessible, and high-performance web applications. My development workflow combines modern <strong className="text-white font-semibold">React.js</strong>, structured state management with <strong className="text-white font-semibold">Redux Toolkit</strong>, and clean utility-first styling with <strong className="text-white font-semibold">Tailwind CSS</strong>.
              </p>
              <p>
                I have designed, built, and shipped <strong className="text-[#ff385c] font-semibold">three production-ready applications</strong>, including a complex browser-based PDF utility that processes documents 100% client-side with zero server latency, and a real-time weather intelligence dashboard powered by live third-party REST APIs.
              </p>
              <p>
                Graduated with a <strong className="text-white font-semibold">Bachelor of Computer Applications (BCA)</strong> scoring <strong className="text-emerald-400 font-semibold">79.87%</strong>, I have cultivated a strong understanding of Core Java, data structures, and software engineering principles.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#0e121b]/80 p-4 backdrop-blur-md transition-all hover:border-white/20 hover:bg-[#0e121b]"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                      {item.icon}
                    </div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-10">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Core Toolset & Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {primaryTech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300 transition-colors hover:border-[#ff385c]/40 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff385c] to-[#7928ca] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#ff385c]/25 hover:scale-105 transition-all"
              >
                <span>Download Full CV</span>
                <Download className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white hover:border-white/30 transition-all"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
