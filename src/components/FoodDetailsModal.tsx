import { useEffect, useRef } from "react";
import { Clock, Flame, Leaf, MessageCircle, Phone, X } from "lucide-react";
import { categories, formatPrice, type MenuItem } from "../data/menu";
import { phoneLink, whatsappLink } from "../utils/links";
import FoodImage from "./FoodImage";

type Props = { item: MenuItem | null; onClose: () => void };

export default function FoodDetailsModal({ item, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!item) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])'));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", handleKey); previousFocus?.focus(); };
  }, [item, onClose]);

  if (!item) return null;
  const category = categories.find((entry) => entry.id === item.category);
  return <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 sm:items-center sm:p-5" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="food-dialog-title" className="relative flex max-h-[94dvh] w-full max-w-xl flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-charcoal shadow-soft sm:max-h-[88vh] sm:rounded-2xl">
      <div className="relative shrink-0"><FoodImage src={item.image} alt={item.name} className="h-40 w-full sm:h-56" eager /><button ref={closeRef} type="button" onClick={onClose} aria-label="Close food details" className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full bg-coal/90 text-cream"><X className="h-5 w-5" aria-hidden="true" /></button></div>
      <div className="overflow-y-auto overscroll-contain px-5 pb-6 pt-5 sm:px-7 sm:pb-7"><p className="eyebrow">{category?.name}</p><div className="mt-1 flex items-start justify-between gap-3"><h2 id="food-dialog-title" className="font-display text-3xl leading-tight text-cream">{item.name}</h2><span className="shrink-0 text-base font-bold text-gold">{formatPrice(item.variants?.[0]?.price ?? item.price)}</span></div>
        {!item.available && <p className="mt-3 text-sm font-bold text-orange-300">Currently sold out</p>}
        <p className="mt-3 text-sm leading-6 text-stone-300">{item.fullDescription}</p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-y border-white/10 py-3 text-xs text-stone-300"><span className="flex items-center gap-1.5"><Flame className="h-4 w-4 text-ember" aria-hidden="true" /> {item.spicyLevel === 0 ? "Mild" : `Spice ${item.spicyLevel}/3`}</span><span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-gold" aria-hidden="true" /> {item.prepTime}</span><span className="flex items-center gap-1.5"><Leaf className="h-4 w-4 text-emerald-300" aria-hidden="true" /> {item.vegetarian ? "Vegetarian" : "Non-veg"}</span></div>
        {item.variants?.length ? <section className="mt-5"><h3 className="text-xs font-bold uppercase tracking-widest text-gold">Sizes & prices</h3><div className="mt-2 divide-y divide-white/10 rounded-lg border border-white/10">{item.variants.map((variant) => <div key={`${variant.name}-${variant.price}`} className="flex justify-between gap-4 px-4 py-3 text-sm"><span className="text-stone-300">{variant.name}</span><span className="font-bold text-cream">{formatPrice(variant.price)}</span></div>)}</div></section> : null}
        {item.ingredients.length > 0 && <section className="mt-5"><h3 className="text-xs font-bold uppercase tracking-widest text-gold">Details</h3><p className="mt-2 text-sm leading-6 text-stone-300">{item.ingredients.join(" · ")}</p></section>}
        <div className="mt-6 flex gap-2"><a href={whatsappLink(`Hi Restaurant Three, I would like to ask about ${item.name}.`)} target="_blank" rel="noreferrer" className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-ember px-3 text-sm font-bold text-white"><MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp</a><a href={phoneLink()} className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg border border-white/20 px-3 text-sm font-bold text-cream"><Phone className="h-4 w-4" aria-hidden="true" /> Call us</a></div>
      </div>
    </div>
  </div>;
}