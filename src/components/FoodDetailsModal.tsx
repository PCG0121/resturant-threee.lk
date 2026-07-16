import { Clock, Flame, Leaf, Phone, Send, X } from "lucide-react";
import { categories, formatPrice, type MenuItem } from "../data/menu";
import { phoneLink, whatsappLink } from "../utils/links";
import FoodImage from "./FoodImage";

type FoodDetailsModalProps = {
  item: MenuItem | null;
  onClose: () => void;
};

export default function FoodDetailsModal({ item, onClose }: FoodDetailsModalProps) {
  if (!item) {
    return null;
  }

  const category = categories.find((entry) => entry.id === item.category);
  const spiceText = item.spicyLevel === 0 ? "Mild" : `${item.spicyLevel}/3`;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/72 p-3 backdrop-blur-sm sm:items-center">
      <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-charcoal shadow-soft">
        <div className="relative">
          <FoodImage src={item.image} alt={item.name} className="h-72 rounded-t-[2rem] sm:h-96" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-black/70 text-white backdrop-blur transition hover:bg-white hover:text-stone-950"
            aria-label="Close food details"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="space-y-6 p-5 sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">{category?.name}</p>
              <h2 className="mt-2 text-3xl font-black text-white">{item.name}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-stone-300">{item.fullDescription}</p>
            </div>
            <span className="shrink-0 text-2xl font-black text-white">{formatPrice(item.price)}</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center gap-2 text-sm font-bold text-stone-300">
                <Flame className="h-4 w-4 text-flame" aria-hidden="true" />
                Spice level
              </div>
              <p className="mt-2 text-lg font-black text-white">{spiceText}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center gap-2 text-sm font-bold text-stone-300">
                <Clock className="h-4 w-4 text-gold" aria-hidden="true" />
                Preparation
              </div>
              <p className="mt-2 text-lg font-black text-white">{item.prepTime}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center gap-2 text-sm font-bold text-stone-300">
                <Leaf className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                Type
              </div>
              <p className="mt-2 text-lg font-black text-white">{item.vegetarian ? "Vegetarian" : "Non-veg"}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-stone-400">Ingredients</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.ingredients.map((ingredient) => (
                <span
                  key={ingredient}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-stone-200"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={whatsappLink(`Hi Restaurant Three, I would like to ask about ${item.name}.`)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-4 font-black text-white transition hover:bg-emerald-400"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
              WhatsApp Enquiry
            </a>
            <a
              href={phoneLink()}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 font-black text-white transition hover:bg-white hover:text-stone-950"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Restaurant
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
