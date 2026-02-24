// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { setmoreUrl } from "../data/siteData";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        {/* Left spacer / desktop location */}
        <div className="text-xs inline-flex items-center gap-3uppercase tracking-[0.2em] text-white/60 md:text-sm">
         <span className="text-xl text-amber-400">✂</span>
              <p className="text-sm font-extrabold tracking-wide md:text-4xl">
                MENGE-<span className="text-amber-400">BLENDZ</span>
              </p>
        </div>
         

        {/* Desktop nav */}
        <nav className="mx-auto hidden items-center gap-8 text-sm uppercase tracking-[0.16em] md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                isActive
                  ? "text-amber-300"
                  : "text-white/80 transition hover:text-amber-300"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Desktop booking button */}
          <a
            href={setmoreUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden bg-amber-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-amber-300 md:inline-block"
          >
            Book Your Cut
          </a>

         

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white backdrop-blur transition hover:bg-white/10 md:hidden"
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-white transition ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-white transition ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black/80 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-3">
          {/* Mobile dropdown logo / brand */}
       
          <div className="space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-wide transition ${
                    isActive
                      ? "border border-amber-300/20 bg-amber-300/10 text-amber-300"
                      : "text-white/85 hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <a
            href={setmoreUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block rounded-lg bg-amber-400 px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-black transition hover:bg-amber-300"
          >
            Book Your Cut
          </a>
        </nav>
      </div>
    </header>
  );
}