import { ArrowUpRight, Flame, Leaf } from "lucide-react";
import { formatPrice, type MenuItem } from "../data/menu";
import FoodImage from "./FoodImage";

type FoodCardProps = { item: MenuItem; onSelect: (item: MenuItem) => void; compact?: boolean };

export default function FoodCard({ item, onSelect, compact = false }: FoodCardProps) {
  return (
    <button type="button" onClick={() => onSelect(item)} aria-label={`View ${item.name} details${item.available ? "" : ", sold out"}`}
      className={`group flex w-full overflow-hidden rounded-xl border border-white/10 bg-charcoal text-left transition-colors hover:border-gold/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${compact ? "min-h-[130px]" : "flex-col"}`}>
      <div className={`relative shrink-0 ${compact ? "w-[112px] self-stretch min-[390px]:w-[132px] sm:w-[145px]" : "w-full"}`}>
        <FoodImage src={item.image} alt={item.name} className={compact ? "h-full min-h-[130px] w-full" : "aspect-[4/3] w-full"} />
        {!item.available && <span className="absolute inset-x-0 bottom-0 bg-coal/90 py-1.5 text-center text-xs font-bold uppercase tracking-widest text-cream">Sold out</span>}
      </div>
      <div className={`flex min-w-0 flex-1 flex-col ${compact ? "p-3.5 sm:p-4" : "p-5"}`}>
        <div className="flex items-start justify-between gap-2">
          <h3 className={`font-display leading-[1.17] text-cream ${compact ? "text-[18px] sm:text-xl" : "text-2xl"}`}>{item.name}</h3>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </div>
        <p className={`mt-1.5 line-clamp-2 text-stone-400 ${compact ? "text-xs leading-[1.45]" : "text-sm leading-6"}`}>{item.description}</p>
        <div className="mt-auto flex flex-wrap items-end justify-between gap-x-2 gap-y-1 pt-2.5">
          <div className="min-w-0">
            {item.variants?.length ? <span className="block text-[10px] uppercase tracking-wider text-stone-400">{item.variants[0].name} from</span> : null}
            <span className="whitespace-nowrap text-base font-bold text-cream">{formatPrice(item.variants?.[0]?.price ?? item.price)}</span>
            {item.variants && item.variants.length > 1 && <span className="block text-[11px] text-gold">{item.variants[1].name} {formatPrice(item.variants[1].price)}{item.variants.length > 2 ? " + more" : ""}</span>}
          </div>
          <span className="flex items-center gap-1.5 text-[11px] text-stone-400">
            {item.vegetarian && <Leaf className="h-3.5 w-3.5 text-emerald-300" aria-label="Vegetarian" />}
            {item.spicyLevel > 0 && <Flame className="h-3.5 w-3.5 text-ember" aria-label="Spicy" />}
            {item.popular && <span className="text-gold">Popular</span>}
          </span>
        </div>
      </div>
    </button>
  );
}