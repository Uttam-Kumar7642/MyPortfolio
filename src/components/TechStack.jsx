import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCode } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiJavascript, SiHtml5, SiCss } from "react-icons/si";
import { techCategories, episodes } from "../data/content";
import Reveal from "./Reveal";
import { RevealGroup, RevealItem } from "./Reveal";
import TiltCard from "./TiltCard";

const skillIcon = {
  "React.js": FaReact,
  "JavaScript": SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "HTML5": SiHtml5,
  "CSS3": SiCss,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  "MongoDB": SiMongodb,
  "REST APIs": FaCode,
  "Git": FaGitAlt,
  "GitHub": FaGithub,
};

export default function TechStack() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#08070a] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center sm:text-left">
          <span className="font-mono-tag inline-flex items-center gap-2 text-[11px] uppercase text-red-500">
            {episodes.skills.code} <span className="text-white/30">/</span> {episodes.skills.label}
          </span>
          <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
            Technical <span className="text-red-600">Capabilities.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[14.5px] text-white/50 sm:mx-0">
            Equipped with production-grade instruments for robust, scalable engineering.
          </p>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {techCategories.map((cat) => (
            <RevealItem key={cat.title}>
              <TiltCard maxTilt={7} scale={1.015} className="h-full rounded-2xl">
                <div className="card group relative flex h-full flex-col overflow-hidden p-5 transition-colors hover:border-red-600/40 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tag rounded-sm bg-red-600 px-2 py-1 text-[9px] uppercase text-white">
                      {cat.tag}
                    </span>
                    <span className="font-mono-tag text-[10px] text-white/30">
                      ( {cat.index} / 03 )
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl uppercase leading-tight text-ink sm:text-2xl">
                    {cat.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-white/50">
                    {cat.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => {
                      const Icon = skillIcon[skill];
                      return (
                        <span
                          key={skill}
                          className="font-mono-tag inline-flex items-center gap-1.5 rounded-sm border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase text-white/60"
                        >
                          {Icon && <Icon size={11} />}
                          {skill}
                        </span>
                      );
                    })}
                  </div>

                  <span className="absolute bottom-4 right-4 h-1.5 w-1.5 rounded-full bg-red-600 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
