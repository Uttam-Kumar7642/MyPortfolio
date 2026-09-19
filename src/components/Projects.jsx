import { FaReact, FaNodeJs, FaCube, FaRobot } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import { projects, episodes } from "../data/content";
import Reveal from "./Reveal";
import { RevealGroup, RevealItem } from "./Reveal";
import TiltCard from "./TiltCard";
import FloatingShape from "./FloatingShape";

const stackIcon = {
  react: FaReact,
  node: FaNodeJs,
  mongodb: SiMongodb,
  tailwind: SiTailwindcss,
  openai: FaRobot,
  js: SiJavascript,
  "3d": FaCube,
};

export default function Projects() {
  return (
    <section id="projects" className="dot-grid relative overflow-hidden bg-[#08070a] py-14 sm:py-20">
      <FloatingShape
        variant="diamond"
        size={24}
        color="#a80d1d"
        opacity={0.3}
        duration={6.5}
        drift={14}
        style={{ top: "5%", right: "3%" }}
        className="hidden md:block"
      />
      <FloatingShape
        variant="circle"
        size={18}
        color="#ef1a2c"
        opacity={0.3}
        duration={8}
        delay={1}
        drift={12}
        style={{ bottom: "8%", left: "4%" }}
        className="hidden md:block"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-col items-center gap-4 text-center sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:text-left">
          <div>
            <span className="font-mono-tag inline-flex items-center gap-2 text-[11px] uppercase text-red-500">
              {episodes.projects.code} <span className="text-white/30">/</span> {episodes.projects.label}
            </span>
            <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
              The <span className="text-red-600">Portfolio.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="font-mono-tag flex items-center gap-1.5 rounded-sm border border-white/15 px-4 py-2 text-[11px] uppercase text-white/70 transition-colors hover:border-red-600/50 hover:text-red-500"
          >
            View All <FiArrowUpRight />
          </a>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3" stagger={0.07}>
          {projects.map((project, i) => (
            <RevealItem key={project.name}>
              <TiltCard maxTilt={6} scale={1.02} className="h-full rounded-2xl">
                <div className="card group h-full overflow-hidden transition-colors hover:border-red-600/40">
                  <div
                    className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${project.accent} p-6 sm:h-44`}
                  >
                    <span className="font-mono-tag absolute left-3 top-3 text-[10px] text-white/50">
                      {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                    </span>
                    <p className="text-center font-display text-lg uppercase text-white sm:text-xl">
                      {project.name}
                    </p>
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="font-mono-tag text-[10px] uppercase text-red-500">
                      {project.category}
                    </p>
                    <h3 className="mt-1.5 font-display text-base uppercase leading-tight text-ink sm:text-lg">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/50 sm:text-[13.5px]">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      {project.stack.map((s) => {
                        const Icon = stackIcon[s];
                        return Icon ? (
                          <span
                            key={s}
                            className="grid h-7 w-7 place-items-center rounded-sm border border-white/10 bg-white/5 text-white/50"
                          >
                            <Icon size={12} />
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
