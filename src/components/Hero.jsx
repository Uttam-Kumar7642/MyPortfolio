import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { FaBriefcase, FaRocket, FaUsers, FaTrophy } from "react-icons/fa";
import heroIllustration from "../assets/hero-illustration.jpeg";
import { profile, stats } from "../data/content";
import TiltCard from "./TiltCard";
import { RevealGroup, RevealItem } from "./Reveal";
import Reveal from "./Reveal";

const iconMap = {
  briefcase: FaBriefcase,
  rocket: FaRocket,
  users: FaUsers,
  trophy: FaTrophy,
};

export default function Hero() {
  return (
    <section
      id="home"
      className="dot-grid relative overflow-hidden bg-[#08070a] pt-8 pb-14 sm:pt-14 sm:pb-20 md:pt-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-red-900/25 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-red-950/30 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-8 flex justify-center sm:mb-10 sm:justify-start">
          <span className="font-mono-tag inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase text-white/50 sm:text-[11px]">
            {profile.series}
          </span>
        </Reveal>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Left: copy */}
          <div className="animate-fade-up text-center lg:text-left">
            <span className="font-mono-tag inline-flex items-center gap-1.5 bg-red-600 px-3 py-1 text-[10px] uppercase text-white sm:text-[11px]">
              {profile.badge}
            </span>

            <h1 className="mt-4 font-display text-5xl uppercase leading-[0.95] text-ink sm:mt-5 sm:text-6xl md:text-7xl">
              {profile.headline.map((line, i) => (
                <span
                  key={line}
                  className={`block ${i === profile.headline.length - 1 ? "text-red-600 red-glow" : ""}`}
                >
                  {line}
                </span>
              ))}
            </h1>

            <p className="font-mono-tag mt-4 text-[11px] uppercase text-white/50 sm:text-[12px]">
              {profile.tagline}
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              {profile.metaTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-tag rounded-sm border border-white/15 px-2.5 py-1 text-[10px] uppercase text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mx-auto mt-6 max-w-xl text-[14.5px] leading-relaxed text-white/55 sm:text-[15.5px] lg:mx-0">
              {profile.summary}
            </p>

            <div className="mt-7 grid grid-cols-2 gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
              <a
                href="#projects"
                className="flex items-center justify-center gap-1.5 whitespace-nowrap rounded-sm bg-red-600 px-4 py-3 text-[12px] font-semibold text-white transition-colors hover:bg-red-500 sm:px-6 sm:text-[13.5px]"
              >
                View Projects <FiArrowUpRight className="shrink-0" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-1.5 whitespace-nowrap rounded-sm border border-white/20 bg-transparent px-4 py-3 text-[12px] font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5 sm:px-6 sm:text-[13.5px]"
              >
                Contact Me <FiDownload className="shrink-0" />
              </a>
            </div>

            <div className="mt-7 flex items-center justify-center gap-3 sm:mt-8 lg:justify-start">
              {[FiLinkedin, FiGithub, FiMail].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#contact"
                  className="grid h-10 w-10 place-items-center rounded-sm border border-white/15 text-white/60 transition-all hover:border-red-500/60 hover:text-red-500"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: photo card, with 3D floating tech shapes orbiting behind it */}
          <div className="relative mx-auto w-[80%] max-w-[280px] animate-fade-up [animation-delay:150ms] sm:max-w-sm lg:w-full lg:max-w-md">
            <div
              aria-hidden
              className="absolute inset-6 -z-10 rounded-full bg-red-900/20 blur-2xl"
            />
            <span className="font-mono-tag absolute -top-3 left-3 z-20 rounded-sm bg-red-600 px-2.5 py-1 text-[9px] uppercase text-white shadow-lg">
              Featured Dev
            </span>
            <TiltCard maxTilt={8} scale={1.02} className="relative z-10 overflow-hidden rounded-2xl border border-white/10">
              <img
                src={heroIllustration}
                alt="Uttam Kumar, full stack developer"
                className="block w-full"
                width={950}
                height={797}
              />
            </TiltCard>
          </div>
        </div>

        {/* Stats */}
        <RevealGroup className="mt-10 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-4" stagger={0.08}>
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <RevealItem key={stat.label}>
                <div className="card flex h-full items-center gap-3 p-3.5 transition-colors hover:border-red-600/40 sm:gap-4 sm:p-5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-red-600/15 text-red-500 sm:h-11 sm:w-11">
                    <Icon size={16} />
                  </span>
                  <div>
                    {stat.value && (
                      <p className="font-display text-base text-ink sm:text-xl">{stat.value}</p>
                    )}
                    <p className="font-mono-tag text-[10px] uppercase leading-tight text-white/45 sm:text-[11px]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {/* Quote */}
        <Reveal>
          <blockquote className="card relative mt-4 border-l-2 border-l-red-600 p-5 sm:mt-6 sm:p-7">
            <p className="text-[14.5px] italic leading-relaxed text-white/70 sm:text-[15px]">
              “{profile.quote.text}”
            </p>
            <cite className="font-mono-tag mt-3 block text-[11px] uppercase not-italic text-red-500">
              — {profile.quote.author}
            </cite>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
