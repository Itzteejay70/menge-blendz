// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { gallery, services, setmoreUrl } from "../data/siteData";

export default function Home() {
  return (
    <div>
      {/* ================= HERO ================= */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        <img
          src={gallery[0]}
          alt="Barber background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />

        <div className="absolute -left-20 top-32 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute right-10 top-24 h-60 w-60 rounded-full bg-yellow-600/10 blur-3xl" />

        <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-4 pt-24 md:px-8 md:pt-28">
          <div className="max-w-3xl">
            {/* Hero logo - desktop only */}
            <div className="mb-5 hidden max-w-full items-center gap-2 rounded-xl border border-white/10 bg-black/35 px-3 py-2 backdrop-blur md:inline-flex md:gap-3 md:px-4">
              <span className="text-2xl text-amber-400 md:text-4xl">✂</span>
              <h1 className="text-lg font-extrabold tracking-wide sm:text-xl md:text-4xl">
                MENGE-<span className="text-amber-400">BLENDZ</span>
              </h1>
            </div>

            <h2 className="text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl md:text-7xl lg:text-8xl">
              Sharp Cuts.
              <br />
              <span className="text-amber-400">Bold Style.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base text-white/75 md:text-xl">
              More than a haircut — it’s an experience. Razor-sharp fades, clean line-ups,
              and precision cuts that keep you looking fresh.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={setmoreUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-amber-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-amber-300 md:px-8 md:py-4 md:text-base"
              >
                Book Your Cut 
              </a>

            </div>
          </div>
        </div>
      </section>

{/* ================= ABOUT ================= */}
<section id="about" className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
  <div className="grid gap-5 md:grid-cols-2 md:gap-6">
    {/* Text card (mobile first + desktop right) */}
    <div className="order-1 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:order-2 md:p-8">
     

      <h3 className="mt-3 text-2xl font-bold uppercase leading-tight sm:text-3xl md:text-4xl">
        More Than A Barber,
        <span className="block text-amber-400">A Craftsmanship Standard</span>
      </h3>

      <p className="mt-4 text-sm text-white/75 sm:text-base">
        Menge Blendz is more than a barbershop — it’s a premium grooming experience built on
        precision, style, and consistency. Every cut is delivered with attention to detail,
        giving clients a clean, confident, and polished look.
      </p>

      <p className="mt-3 text-sm text-white/70 sm:text-base">
        From sharp fades to modern finishes, the goal is simple: create an experience that feels
        professional, comfortable, and worth coming back for.
      </p>

      {/* Mobile-only image inside the same card (below text) */}
      <div className="mt-5 overflow-hidden rounded-xl border border-white/10 md:hidden">
        <img
          src={gallery[1]}
          alt="About Menge Blendz"
          className="h-56 w-full object-cover object-center"
        />
      </div>

      <Link
        to="/about"
        className="mt-6 inline-block w-full border border-white/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/5 sm:w-auto"
      >
        ABOUT <span className="text-base">↗</span>
      </Link>
    </div>

    {/* Desktop-only image (left side) */}
    <div className="order-2 hidden overflow-hidden rounded-2xl border border-white/10 md:order-1 md:block">
      <img
        src={gallery[1]}
        alt="About Menge Blendz"
        className="h-full w-full object-cover object-center"
      />
    </div>
  </div>
</section>
      
      {/* ================= SERVICES ================= */}
<section id="services" className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
  {/* Hero-style services banner */}
  <div className="relative overflow-hidden rounded-2xl border border-white/10">
    <img
      src={gallery[2]}
      alt="Our Services"
      className="h-[420px] w-full object-cover sm:h-[500px] md:h-[560px]"
    />

    {/* Overlays */}
    <div className="absolute inset-0 bg-black/45" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

    {/* Content */}
    <div className="absolute inset-0 flex items-center">
      <div className="w-full max-w-2xl px-5 sm:px-8 md:px-12">
    

        <h3 className="mt-3 text-4xl font-extrabold uppercase leading-[0.9] sm:text-5xl md:text-6xl">
          Our Services
        </h3>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">
          At Menge Blendz, grooming is a craft. From precision cuts and clean fades
          to premium detailing and personalized styling, every service is designed
          to leave you looking sharp and feeling confident.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-white/90"
          >
            Our Services <span className="text-base">↗</span>
          </Link>

        </div>
      </div>
    </div>
  </div>
</section>

     {/* ================= GALLERY ================= */}
<section id="gallery" className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
  {/* Heading block */}
  <div className="mb-8 text-center md:mb-10">

    <h3 className="mt-2 text-4xl font-extrabold uppercase leading-none sm:text-5xl md:text-7xl">
      <span className="text-white">Gallery</span>
    </h3>

    <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base md:text-lg">
      Every look tells a story. Our gallery highlights the craftsmanship behind each cut,
      detail, and finish — giving you a closer view of the standard we uphold at Menge Blendz.
    </p>
  </div>

  {/* Gallery grid */}
  <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
    {[
      gallery[0],
      gallery[1],
      gallery[2],
      gallery[3],
    ].map((img, index) => (
      <div
        key={index}
        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
      >
        <img
          src={img}
          alt={`Menge Blendz style ${index + 1}`}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 md:h-[420px]"
        />

       
      </div>
    ))}
  </div>

  {/* CTA row */}
  <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
    <Link
      to="/gallery"
      className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto"
    >
      View Full Gallery <span>↗</span>
    </Link>

  
  </div>
</section>

  

      {/* ================= FINAL CTA ================= */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-amber-300/20 bg-white/[0.03] p-6 md:p-8">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/10 blur-2xl" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-yellow-600/10 blur-2xl" />

          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="mt-2 text-2xl font-bold uppercase md:text-3xl">
                Ready for your next clean cut?
              </h3>
              <p className="mt-2 text-white/70">
                Book your appointment in 60 seconds.
              </p>
            </div>

            <a
              href={setmoreUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-amber-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-amber-300"
            >
              Book Now <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}