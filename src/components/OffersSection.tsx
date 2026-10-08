import { BadgePercent, Gift, GlassWater, Sparkles } from "lucide-react";
import { offers } from "../data/menu";

const icons = [GlassWater, BadgePercent, Gift, Sparkles];

export default function OffersSection() {
  return (
    <section className="border-y border-white/10 bg-[#191715] py-16 lg:py-20">
      <div className="section-wrap">
        <div className="mb-8">
          <p className="eyebrow">More to enjoy</p>
          <h2 className="section-title mt-4">Made for sharing.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, index) => {
            const Icon = icons[index] ?? Sparkles;
            return (
              <article
                key={offer.title}
                className="rounded-2xl border border-white/10 bg-coal p-6 transition hover:-translate-y-1 hover:border-gold/40"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-gold/10 text-gold">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl text-white">{offer.title}</h3>
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
