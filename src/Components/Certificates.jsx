import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { certificates } from "../data/portfolioData";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="relative w-full overflow-hidden bg-[#07090e] px-4 sm:px-6 md:px-12 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff385c]/8 blur-[180px]" />
      <div className="relative z-10 mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#ff385c] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-[#ff385c] via-[#ff6b6b] to-[#a855f7] bg-clip-text text-transparent">
              Training.
            </span>
          </h2>
          <p className="mt-5 text-base font-normal leading-relaxed text-slate-400 sm:text-lg">
            Continuous technical upskilling through accredited bootcamps and algorithmic problem-solving.
          </p>
        </motion.div>

        {/* Certificate Cards */}
        <div className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {certificates.featured.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0e121b]/80 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-2xl transition-transform duration-300 group-hover:scale-110">
                    {cert.icon}
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Verified
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#ff385c] transition-colors leading-snug">
                  {cert.name}
                </h3>

                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Issued by: <span className="text-slate-200">{cert.issuer}</span>
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-medium text-slate-400">
                <span>Resume Credential</span>
                <span className="text-emerald-400">✓ Completed</span>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            href={certificates.viewAllUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:scale-[1.02]"
          >
            <Award className="h-4 w-4 text-[#ff385c]" />
            <span>Verify All Certificates on LinkedIn</span>
            <ExternalLink className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
