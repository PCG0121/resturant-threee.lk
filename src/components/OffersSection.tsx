import { offers } from "../data/menu";

export default function OffersSection() {
  return (
    <section className="border-y border-white/10 bg-[#1b1815] py-12 lg:py-20">
      <div className="section-wrap">
        <p className="eyebrow">From our menu</p>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3"><h2 className="section-title mt-3">Something to share.</h2><p className="max-w-sm text-sm text-stone-400">Explore the specials already on the Restaurant Three menu.</p></div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {offers.map((offer, index) => <article key={offer.title} className="flex flex-col bg-[#1b1815] p-5 lg:p-6">
            <span className="text-xs tracking-[0.2em] text-gold">0{index + 1} / 0{offers.length}</span>
            <h3 className="mt-5 font-display text-xl leading-tight text-cream">{offer.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-stone-400">{offer.description}</p>
            <p className="mt-5 border-t border-white/10 pt-3 text-sm font-semibold text-gold">{offer.note}</p>
          </article>)}
        </div>
      </div>
    </section>
  );
}