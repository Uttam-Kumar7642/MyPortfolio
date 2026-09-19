import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { navLinks, profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08070a] py-10 text-white/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left md:px-8">
        <div>
          <div className="flex items-center justify-center gap-2.5 sm:justify-start">
            <span className="font-display text-[15px] text-ink">
              {profile.initials}
              <span className="text-red-500">.</span>
            </span>
          </div>
          <p className="font-mono-tag mt-3 text-[10px] uppercase text-white/35">
            {profile.footerLine}
          </p>
          <p className="mt-1 text-[12px] text-white/35">© 2025 All Rights Reserved</p>
        </div>

        <div>
          <h4 className="font-mono-tag text-[10px] uppercase text-white/40">Quick Links</h4>
          <ul className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[13px] sm:justify-start">
            {navLinks.slice(0, 4).map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-red-500">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono-tag text-[10px] uppercase text-white/40">Connect</h4>
          <div className="mt-3 flex items-center justify-center gap-3 sm:justify-start">
            {[FiLinkedin, FiGithub, FiMail].map((Icon, idx) => (
              <a
                key={idx}
                href="#contact"
                className="grid h-9 w-9 place-items-center rounded-sm border border-white/10 text-white/60 transition-all hover:border-red-600/50 hover:text-red-500"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
