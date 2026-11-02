import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, FolderGit2, CheckCircle2, ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-[#07090e] px-4 sm:px-6 md:px-12 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -left-20 top-1/3 h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] rounded-full bg-[#ff385c]/8 blur-[160px]" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] rounded-full bg-[#6366f1]/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#ff385c] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Shipped & Live{" "}
            <span className="bg-gradient-to-r from-[#ff385c] via-[#ff6b6b] to-[#a855f7] bg-clip-text text-transparent">
              Projects.
            </span>
          </h2>
          <p className="mt-5 text-base font-normal leading-relaxed text-slate-400 sm:text-lg">
            Real applications built from the ground up, highlighting REST API consumption, client-side processing, state management, and modern component design.
          </p>
        </motion.div>


        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0e121b]/80 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/25 hover:shadow-2xl hover:shadow-black/70 sm:p-8"
            >

              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-b from-[#ff385c]/10 via-transparent to-transparent" />

              <div>

                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500">
                    Project 0{index + 1}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ff385c]/30 bg-[#ff385c]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#ff6b6b]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff385c]" />
                    {project.tag}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-[#ff385c] transition-colors leading-snug">
                  {project.name}
                </h3>

                {/* Key Points */}
                <div className="mt-5 space-y-3">
                  {project.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2.5 text-xs sm:text-sm font-normal leading-relaxed text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#ff385c] mt-0.5" />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-semibold text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ff385c] to-[#a855f7] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#ff385c]/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                  >
                    <span>Live Preview</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:scale-[1.02]"
                >
                  <FolderGit2 className="h-3.5 w-3.5 text-slate-400" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3 w-3 text-slate-400" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
