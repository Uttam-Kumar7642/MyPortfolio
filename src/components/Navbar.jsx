import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, profile } from "../data/content";
import FloatingShape from "./FloatingShape";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 overflow-hidden border-b transition-colors ${
        scrolled
          ? "border-white/10 bg-[#08070a]/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <FloatingShape
        variant="diamond"
        size={12}
        color="#ef1a2c"
        opacity={0.5}
        duration={5}
        drift={5}
        outline
        style={{ top: "14px", left: "58px" }}
      />
      <FloatingShape
        variant="hexagon"
        size={10}
        color="#ef1a2c"
        opacity={0.35}
        duration={6}
        delay={1.2}
        drift={4}
        style={{ top: "10px", right: "160px" }}
        className="hidden lg:block"
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-display text-[15px] tracking-wide text-ink">
            {profile.initials}
            <span className="text-red-500">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-mono-tag text-[11px] uppercase transition-colors hover:text-red-500 ${
                  i === 0 ? "text-red-500" : "text-white/60"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-sm bg-red-600 px-5 py-2 font-mono-tag text-[11px] uppercase text-white transition-colors hover:bg-red-500 lg:flex"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md border border-white/15 text-ink lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0a0a0c] px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono-tag block text-[12px] uppercase text-white/70"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="font-mono-tag mt-4 flex items-center justify-center gap-1.5 rounded-sm bg-red-600 px-5 py-2.5 text-[11px] uppercase text-white"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
