import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";
import { personalInfo, socialLinks } from "../data/portfolioData";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const emailjsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.emails.primary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form,
        emailjsConfig.publicKey,
      );
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }

    setTimeout(() => {
      setStatus("idle");
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#07090e] px-4 sm:px-6 md:px-12 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -right-20 top-1/4 h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] rounded-full bg-[#ff385c]/8 blur-[160px]" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] rounded-full bg-[#6366f1]/10 blur-[160px]" />

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
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-[#ff385c] via-[#ff6b6b] to-[#a855f7] bg-clip-text text-transparent">
              Extraordinary.
            </span>
          </h2>
          <p className="mt-5 text-base font-normal leading-relaxed text-slate-400 sm:text-lg">
            Whether you have an open Frontend / React.js role, an interesting project, or simply want to connect — my inbox is always open.
          </p>
        </motion.div>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <div className="group rounded-3xl border border-white/10 bg-[#0e121b]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ff385c]/10 text-[#ff385c]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                        Primary Email
                      </p>
                      <a
                        href={`mailto:${personalInfo.emails.primary}`}
                        className="mt-1 block text-sm sm:text-base font-bold text-white transition-colors hover:text-[#ff385c] break-all"
                      >
                        {personalInfo.emails.primary}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
              <div className="group rounded-3xl border border-white/10 bg-[#0e121b]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      Direct Phone
                    </p>
                    <a
                      href={personalInfo.phoneHref}
                      className="mt-1 block text-sm sm:text-base font-bold text-white transition-colors hover:text-indigo-400"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
              <div className="group rounded-3xl border border-white/10 bg-[#0e121b]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      Current Location
                    </p>
                    <p className="mt-1 text-sm sm:text-base font-bold text-white">
                      {personalInfo.location} • <span className="text-emerald-400 font-semibold">{personalInfo.relocation}</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                Professional Profiles
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:scale-[1.02]"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                </a>

                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:scale-[1.02]"
                >
                  <span>GitHub</span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-[#0e121b]/80 p-5 sm:p-8 md:p-10 backdrop-blur-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="from_name"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-300"
                >
                  Your Name
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-white outline-none transition-all placeholder:text-slate-600 focus:border-[#ff385c] focus:bg-white/[0.06] focus:ring-1 focus:ring-[#ff385c]"
                />
              </div>


              <div>
                <label
                  htmlFor="reply_to"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-300"
                >
                  Your Email
                </label>
                <input
                  id="reply_to"
                  name="reply_to"
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-white outline-none transition-all placeholder:text-slate-600 focus:border-[#ff385c] focus:bg-white/[0.06] focus:ring-1 focus:ring-[#ff385c]"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Frontend Developer Opportunity / Project Inquiry"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-white outline-none transition-all placeholder:text-slate-600 focus:border-[#ff385c] focus:bg-white/[0.06] focus:ring-1 focus:ring-[#ff385c]"
                />
              </div>


              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Hello MD Shahid, we are impressed by your React projects and would love to chat..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-white outline-none transition-all placeholder:text-slate-600 focus:border-[#ff385c] focus:bg-white/[0.06] focus:ring-1 focus:ring-[#ff385c]"
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="group flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#ff385c] via-[#ff4d67] to-[#a855f7] px-6 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-[#ff385c]/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#ff385c]/40 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <span>Sending message...</span>
                ) : status === "success" ? (
                  <>
                    <span>Message Sent!</span>
                    <CheckCircle2 className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
              {status === "success" && (
                <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-300">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-300">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <span>Oops! Something went wrong. You can email me directly at {personalInfo.emails.primary}.</span>
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
