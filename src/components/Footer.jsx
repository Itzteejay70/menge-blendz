// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { setmoreUrl } from "../data/siteData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/70">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        {/* Top footer grid */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-2">
              <span className="text-xl text-amber-400">✂</span>
              <p className="text-sm font-extrabold tracking-wide text-white">
                MENGE-<span className="text-amber-400">BLENDZ</span>
              </p>
            </div>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
              Premium grooming experience built on precision, style, and consistency.
              From sharp fades to clean finishes, every cut is crafted to keep you looking
              confident and polished.
            </p>

            <div className="mt-4 flex flex-col gap-2 text-sm text-white/65">
              <p>📍 No 18 Osho Street, Opebi Link Bridge, Ikeja, Lagos</p>
              <p>🕒 Mon - Sat • By Appointment</p>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300">Quick Links</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link to="/" className="text-sm text-white/75 transition hover:text-amber-300">
                Home
              </Link>
              <Link to="/about" className="text-sm text-white/75 transition hover:text-amber-300">
                About
              </Link>
              <Link to="/services" className="text-sm text-white/75 transition hover:text-amber-300">
                Services
              </Link>
              <Link to="/gallery" className="text-sm text-white/75 transition hover:text-amber-300">
                Gallery
              </Link>
              <Link to="/contact" className="text-sm text-white/75 transition hover:text-amber-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Socials / CTA */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300">Socials</p>

            <div className="mt-3 flex flex-col gap-2 text-sm text-white/75">
              <a
                href="https://wa.me/2340000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-2 py-1 transition hover:bg-white/5 hover:text-amber-300"
              >
                <FaWhatsapp className="text-base" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://instagram.com/mengeblendz"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-2 py-1 transition hover:bg-white/5 hover:text-amber-300"
              >
                <FaInstagram className="text-base" />
                <span>Instagram</span>
              </a>

              <a
                href="tel:+2340000000000"
                className="inline-flex items-center gap-2 rounded-md px-2 py-1 transition hover:bg-white/5 hover:text-amber-300"
              >
                <FaPhoneAlt className="text-sm" />
                <span>Call Us</span>
              </a>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Menge-Blendz. All rights reserved.</p>
          <p className="uppercase tracking-[0.18em]">Crafted for style</p>
        </div>
      </div>
    </footer>
  );
}