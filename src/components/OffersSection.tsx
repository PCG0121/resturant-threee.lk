import { BadgePercent, Gift, GlassWater, Sparkles } from "lucide-react";
import { offers } from "../data/menu";

const icons = [GlassWater, BadgePercent, Gift, Sparkles];

export default function OffersSection() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Offers</p>
          <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Today at Restaurant Three</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer, index) => {
            const Icon = icons[index] ?? Sparkles;
            return (
              <article
                key={offer.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 shadow-soft transition hover:-translate-y-1 hover:border-orange-300/35"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-ember text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-white">{offer.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-300">{offer.description}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-gold">{offer.note}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
