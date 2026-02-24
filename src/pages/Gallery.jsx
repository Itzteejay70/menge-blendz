// src/pages/Gallery.jsx
import { gallery } from "../data/siteData";

export default function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-28 pb-14 md:px-8 md:pt-32 md:pb-20">
     
      <h3 className="mt-2 text-3xl font-bold uppercase md:text-4xl">
        Bold Looks. Clean Finishes.
      </h3>

      <div className="mt-8 grid gap-4 md:grid-cols-12">
        <div className="overflow-hidden rounded-2xl border border-white/10 md:col-span-7">
          <img
            src={gallery[2]}
            alt="Gallery main"
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        <div className="grid gap-4 md:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src={gallery[0]}
              alt="Gallery 2"
              className="h-52 w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src={gallery[3]}
              alt="Gallery 3"
              className="h-52 w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}