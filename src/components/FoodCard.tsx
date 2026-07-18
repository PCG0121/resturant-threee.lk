import { Flame, Leaf, Sparkles } from "lucide-react";
import { categories, formatPrice, type MenuItem } from "../data/menu";
import FoodImage from "./FoodImage";

type FoodCardProps = {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
};

export default function FoodCard({ item, onSelect }: FoodCardProps) {
  const category = categories.find((entry) => entry.id === item.category);
  const priceLabel = item.variants?.length ? `From ${formatPrice(item.price)}` : formatPrice(item.price);

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-ember"
    >
      {!item.available ? (
        <div className="absolute inset-0 z-20 grid place-items-center bg-black/62 backdrop-blur-[2px]">
          <span className="rounded-full border border-red-300/40 bg-red-950/80 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-red-100">
            Sold Out
          </span>
        </div>
      ) : null}

      <FoodImage src={item.image} alt={item.name} className="h-48 rounded-t-[1.75rem] sm:h-56" />

      <div className="space-y-4 p-4">
        <div className="flex flex-wrap gap-2">
          {item.popular ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-ember px-2.5 py-1 text-[11px] font-black uppercase text-white">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Popular
            </span>
          ) : null}
          {item.isNew ? (
            <span className="rounded-full bg-gold px-2.5 py-1 text-[11px] font-black uppercase text-stone-950">
              New
            </span>
          ) : null}
          {item.spicyLevel > 0 ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-red-400/35 bg-red-500/10 px-2.5 py-1 text-[11px] font-bold text-red-100">
              <Flame className="h-3 w-3 text-flame" aria-hidden="true" />
              Spicy
            </span>
          ) : null}
          {item.vegetarian ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/35 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-100">
              <Leaf className="h-3 w-3 text-emerald-300" aria-hidden="true" />
              Veg
            </span>
          ) : null}
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">{category?.name}</p>
          <h3 className="mt-1 text-xl font-black text-white">{item.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-300">{item.description}</p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="text-lg font-black text-white">{priceLabel}</span>
            {item.variants?.length ? <p className="mt-0.5 text-xs font-semibold text-stone-400">{item.variants.length} price options</p> : null}
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-stone-300 transition group-hover:border-orange-300/50 group-hover:text-white">
            View
          </span>
        </div>
      </div>
    </button>
  );
}
