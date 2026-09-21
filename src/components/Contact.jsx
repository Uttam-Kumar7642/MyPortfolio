import { FiArrowUpRight, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { profile, episodes } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="dot-grid relative overflow-hidden bg-[#08070a] py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[90%] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/20 blur-[100px]"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <span className="font-mono-tag inline-flex items-center gap-2 text-[11px] uppercase text-red-500">
            {episodes.contact.code} <span className="text-white/30">/</span> {episodes.contact.label}
          </span>

          <h2 className="animate-pulse-glow red-glow mt-4 font-display text-5xl uppercase leading-[0.9] text-red-600 sm:text-7xl md:text-8xl">
            Contact
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-[14.5px] leading-relaxed text-white/55 sm:text-[15.5px]">
            I'm always open to discussing new projects, collaborations, or opportunities.
            Let's build something impactful together.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-sm bg-red-600 px-7 py-3.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-red-500"
            >
              Let's Connect <FiArrowUpRight />
            </a>
          </div>

          <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-3 font-mono-tag text-[11px] uppercase text-white/40 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-3 sm:text-[11.5px]">
            <span className="flex items-center gap-2 break-all">
              <FiMail className="shrink-0 text-red-500" /> {profile.email}
            </span>
            <span className="flex items-center gap-2">
              <FiPhone className="shrink-0 text-red-500" /> {profile.phone}
            </span>
            <span className="flex items-center gap-2">
              <FiMapPin className="shrink-0 text-red-500" /> {profile.location}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
