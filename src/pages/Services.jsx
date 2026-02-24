// src/pages/Services.jsx
import { services, setmoreUrl } from "../data/siteData";

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-28 pb-14 md:px-8 md:pt-32 md:pb-20">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
       
          <h3 className="mt-2 text-3xl font-bold uppercase md:text-4xl">Grooming Menu</h3>
        </div>
      
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.name}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/[0.05]"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <h4 className="text-lg font-bold">{service.name}</h4>
                <p className="text-sm text-white/60">{service.duration}</p>
              </div>
              <span className="rounded-md border border-amber-300/20 bg-amber-300/10 px-2 py-1 text-sm text-amber-200">
                {service.price}
              </span>
            </div>

            <p className="text-sm text-white/70">{service.desc}</p>

          
          </div>
        ))}
      </div>
    </section>
  );
}