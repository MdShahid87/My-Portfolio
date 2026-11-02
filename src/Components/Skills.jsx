import React from "react";
import { motion } from "framer-motion";
import { Code2, Layout, Database, Wrench, Sparkles, Terminal, Cpu } from "lucide-react";
import { skillGroups } from "../data/portfolioData";

const categoryIcons = {
  Languages: <Terminal className="h-5 w-5 text-amber-400" />,
  Frontend: <Layout className="h-5 w-5 text-sky-400" />,
  Databases: <Database className="h-5 w-5 text-emerald-400" />,
  "Version Control & Tools": <Wrench className="h-5 w-5 text-[#ff385c]" />,
  "AI Tools": <Cpu className="h-5 w-5 text-indigo-400" />,
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-[#07090e] px-4 sm:px-6 md:px-12 py-20 md:py-28"
    >

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff385c]/6 blur-[180px]" />
      <div className="pointer-events-none absolute right-10 bottom-20 h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] rounded-full bg-[#6366f1]/8 blur-[160px]" />

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
            <span>Technical Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Skills &{" "}
            <span className="bg-gradient-to-r from-[#ff385c] via-[#ff6b6b] to-[#a855f7] bg-clip-text text-transparent">
              Proficiencies.
            </span>
          </h2>
          <p className="mt-5 text-base font-normal leading-relaxed text-slate-400 sm:text-lg">
            Practical skills forged through building deployed projects, internship training, and rigorous problem-solving.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0e121b]/80 p-5 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-2xl hover:shadow-black/50"
            >
              <div>
                {/* Header: Icon + Title + Index */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 transition-transform duration-300 group-hover:scale-110">
                      {categoryIcons[group.title] || <Code2 className="h-5 w-5 text-[#ff385c]" />}
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-[#ff385c] transition-colors">
                      {group.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-500">
                    0{index + 1}
                  </span>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-[#ff385c]/40 hover:bg-[#ff385c]/10 hover:text-white hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span>{group.skills.length} competencies</span>
                <span className="text-[#ff385c] opacity-0 group-hover:opacity-100 transition-opacity">
                  Active in projects →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
