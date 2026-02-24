// src/pages/About.jsx
import { gallery, setmoreUrl } from "../data/siteData";

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-28 pb-14 md:px-8 md:pt-32 md:pb-20">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <img
            src={gallery[1]}
            alt="About Menge Blendz"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
         

          <h3 className="mt-3 text-3xl font-bold uppercase md:text-4xl">
            More Than A Barber,
            <span className="block text-amber-400">A Craftsmanship Standard</span>
          </h3>

          <div className="mt-4 space-y-4 text-white/75">
            <p>
              Menge Blendz is more than a barbershop — it’s a grooming experience built on
              precision, style, and consistency. Every cut is approached with attention to detail,
              from clean line-ups to sharp fades, with the goal of delivering a look that feels
              confident, polished, and personal.
            </p>

            <p>
              Beyond the chair, the vision behind Menge Blendz is to create a premium space where
              grooming meets lifestyle. It’s not just about looking fresh for the day — it’s about
              building a standard of excellence clients can trust every time they book.
            </p>

            <p>
              Through skill, creativity, and a commitment to quality service, Menge Blendz continues
              to raise the bar in modern men’s grooming, offering an experience defined by craftsmanship,
              class, and comfort.
            </p>
          </div>

        

          
        </div>
      </div>
    </section>
  );
}