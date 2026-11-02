import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Building2 } from "lucide-react";
import { internship } from "../data/portfolioData";

const Experience = () => {
  const internshipTechnologies = [
    "React.js",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "REST APIs",
    "Git & GitHub",
    "Reusable Components",
  ];

  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-[#07090e] px-4 sm:px-6 md:px-12 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] -translate-y-1/2 rounded-full bg-[#ff385c]/8 blur-[160px]" />
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
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Internship &{" "}
            <span className="bg-gradient-to-r from-[#ff385c] via-[#ff6b6b] to-[#a855f7] bg-clip-text text-transparent">
              Industry Exposure.
            </span>
          </h2>
          <p className="mt-5 text-base font-normal leading-relaxed text-slate-400 sm:text-lg">
            Hands-on work developing modular React components, integrating real-world APIs, and collaborating with Git version control.
          </p>
        </motion.div>


        <div className="relative mx-auto max-w-4xl">

          <div className="absolute left-8 top-10 bottom-10 hidden md:block w-px bg-gradient-to-b from-[#ff385c] via-indigo-500 to-transparent opacity-30" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e121b]/80 p-7 backdrop-blur-xl transition-all duration-300 hover:border-white/20 sm:p-10"
          >

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#ff385c] to-[#a855f7] text-white shadow-xl shadow-[#ff385c]/20">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {internship.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-300">
                    <span className="inline-flex items-center gap-1.5 text-slate-200">
                      <Building2 className="h-4 w-4 text-[#ff385c]" />
                      {internship.company}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="inline-flex items-center gap-1.5 text-slate-400">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      {internship.location}
                    </span>
                  </div>
                </div>
              </div>


              <div className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <Calendar className="h-3.5 w-3.5" />
                <span>{internship.period}</span>
              </div>
            </div>


            <div className="mt-8 space-y-4 border-t border-white/10 pt-7">
              {internship.points.map((point) => (
                <div key={point} className="flex items-start gap-3.5 text-sm sm:text-base leading-relaxed text-slate-300">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#ff385c] mt-0.5" />
                  <p>{point}</p>
                </div>
              ))}
              <div className="flex items-start gap-3.5 text-sm sm:text-base leading-relaxed text-slate-300">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#ff385c] mt-0.5" />
                <p>
                  Collaborated on interface design reviews, accessibility checks, cross-device responsiveness, and clean commit history.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Technologies & Workflows Applied
              </p>
              <div className="flex flex-wrap gap-2">
                {internshipTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-slate-300 transition-colors hover:border-[#ff385c]/40 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
