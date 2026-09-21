import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiBookOpen,
  FiGlobe,
} from "react-icons/fi";
import aboutIllustration from "../assets/about-character.jpeg";
import { profile, bring, episodes } from "../data/content";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const facts = [
  { icon: FiMapPin, label: "Location", value: profile.location },
  { icon: FiMail, label: "Email", value: profile.email },
  { icon: FiPhone, label: "Phone", value: profile.phone },
  { icon: FiBookOpen, label: "Education", value: profile.education },
  { icon: FiGlobe, label: "Languages", value: profile.languages },
];

export default function About() {
  return (
    <section id="about" className="dot-grid relative overflow-hidden bg-[#0a090c] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
          <Reveal
            direction="right"
            className="relative mx-auto w-[78%] max-w-xs sm:max-w-sm lg:w-full lg:max-w-none"
          >
            <div aria-hidden className="absolute inset-8 -z-10 rounded-full bg-red-900/20 blur-2xl" />
            <span className="font-mono-tag absolute -top-3 left-3 z-20 rounded-sm bg-red-600 px-2.5 py-1 text-[9px] uppercase text-white shadow-lg">
              {episodes.about.code}
            </span>
            <TiltCard maxTilt={7} scale={1.02} className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src={aboutIllustration}
                alt="Uttam Kumar at his desk"
                className="block w-full"
                width={730}
                height={485}
              />
            </TiltCard>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="text-center lg:text-left">
            <span className="font-mono-tag inline-flex items-center gap-2 text-[11px] uppercase text-red-500">
              {episodes.about.code} <span className="text-white/30">/</span> {episodes.about.label}
            </span>
            <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
              Origin <span className="text-red-600">Story.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[14.5px] leading-relaxed text-white/55 sm:text-[15px] lg:mx-0">
              {profile.about}
            </p>

            <dl className="mt-7 grid gap-4 text-left sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-sm bg-white/5 text-red-500">
                    <fact.icon size={14} />
                  </span>
                  <div>
                    <dt className="font-mono-tag text-[10px] uppercase text-white/40">
                      {fact.label}
                    </dt>
                    <dd className="text-[14px] font-semibold text-ink break-words">
                      {fact.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="card mt-8 border-l-2 border-l-red-600 p-5 text-left sm:p-6">
              <h3 className="font-mono-tag text-[12px] uppercase text-white/70">
                What I Bring
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {bring.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13.5px] text-white/60">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
