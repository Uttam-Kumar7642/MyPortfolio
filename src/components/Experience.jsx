import { FiArrowUpRight } from "react-icons/fi";
import { experience, episodes } from "../data/content";
import Reveal from "./Reveal";
import { RevealGroup, RevealItem } from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="dot-grid relative overflow-hidden bg-[#0a090c] py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="text-center sm:text-left">
          <span className="font-mono-tag inline-flex items-center gap-2 text-[11px] uppercase text-red-500">
            {episodes.experience.code} <span className="text-white/30">/</span> {episodes.experience.label}
          </span>
          <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
            The <span className="text-red-600">Journey.</span>
          </h2>
        </Reveal>

        <RevealGroup
          className="mt-10 space-y-6 border-l-2 border-white/10 pl-6 sm:space-y-8 sm:pl-8"
          stagger={0.12}
        >
          {experience.map((job) => (
            <RevealItem key={job.company} direction="right">
              <div className="relative">
                <span className="font-mono-tag absolute -left-[33px] top-1 grid h-6 w-6 place-items-center rounded-sm border-[3px] border-[#0a090c] bg-red-600 text-[9px] text-white shadow sm:-left-[41px] sm:h-7 sm:w-7 sm:border-4 sm:text-[10px]">
                  {job.tag}
                </span>
                <div className="card flex flex-col gap-2 p-4 transition-colors hover:border-red-600/40 sm:flex-row sm:items-start sm:justify-between sm:p-5">
                  <div>
                    <h3 className="font-display text-base uppercase leading-tight text-ink sm:text-lg">
                      {job.role}
                    </h3>
                    <p className="font-mono-tag mt-1 text-[11px] uppercase text-red-500">
                      {job.company}
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/50 sm:text-[13.5px]">
                      {job.description}
                    </p>
                  </div>
                  <span className="font-mono-tag inline-block shrink-0 self-start rounded-sm border border-white/10 px-3 py-1 text-[10px] uppercase text-white/40 sm:text-[11px]">
                    {job.period}
                  </span>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-8 text-center sm:text-left">
          <a
            href="#projects"
            className="font-mono-tag inline-flex items-center gap-1.5 text-[11px] uppercase text-red-500 hover:text-red-400"
          >
            View All Experience <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
