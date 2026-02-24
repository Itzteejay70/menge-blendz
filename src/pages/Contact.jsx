// src/pages/Contact.jsx
import { setmoreUrl } from "../data/siteData";

export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-28 pb-14 md:px-8 md:pt-32 md:pb-20">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Contact</p>
          <h3 className="mt-2 text-3xl font-bold uppercase md:text-4xl">Visit or Book</h3>

          <div className="mt-5 space-y-4 text-white/75">
            <div>
              <p className="text-xs uppercase tracking-wide text-white/50">Address</p>
              <p>No 18 Osho Street, Opebi Link Bridge, Ikeja, Lagos</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-white/50">Phone / WhatsApp</p>
              <p>+234 xxx xxx xxxx</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-white/50">Instagram</p>
              <p>@mengeblendz</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-white/50">Hours</p>
              <p>Mon - Sat • By Appointment</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={setmoreUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-amber-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-amber-300"
            >
              Book Now
            </a>
            <a
              href="https://wa.me/2340000000000"
              target="_blank"
              rel="noreferrer"
              className="border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/5"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          <div className="flex h-full min-h-[320px] items-center justify-center bg-gradient-to-br from-white/[0.02] to-white/[0.05] p-6 text-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Map</p>
              <p className="mt-3 text-lg font-semibold">Google Maps Section</p>
              <p className="mt-2 text-sm text-white/60">
                Replace this card with an embedded Google Map for the shop location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}