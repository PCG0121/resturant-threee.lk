import { useMemo, useRef, useState, type ReactNode } from "react";
import { Flame, Leaf, MessageCircle, Phone, Search, SlidersHorizontal, Sparkles, Utensils, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import ContactSection from "../components/ContactSection";
import FoodCard from "../components/FoodCard";
import FoodDetailsModal from "../components/FoodDetailsModal";
import FoodImage from "../components/FoodImage";
import Header from "../components/Header";
import OffersSection from "../components/OffersSection";
import Seo from "../components/Seo";
import { categories, formatPrice, menuItems, type CategoryId, type MenuItem } from "../data/menu";
import { phoneLink, whatsappLink } from "../utils/links";

type Filters = { vegetarian: boolean; spicy: boolean; popular: boolean; availableOnly: boolean };
const defaultFilters: Filters = { vegetarian: false, spicy: false, popular: false, availableOnly: false };

export default function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState(defaultFilters);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const catalogRef = useRef<HTMLElement>(null);
  const selectedCategory = categories.some((category) => category.id === searchParams.get("category")) ? searchParams.get("category") as CategoryId : "all";
  const selectCategory = (category: CategoryId | "all") => {
    setSearchParams(category === "all" ? {} : { category });
    catalogRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
  };
  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();
    return menuItems.filter((item) => {
      const category = categories.find((entry) => entry.id === item.category);
      const searchable = [item.name, item.description, item.fullDescription, category?.name, ...item.ingredients, ...(item.variants?.map((variant) => variant.name) ?? [])].filter(Boolean).join(" ").toLowerCase();
      return searchable.includes(query) && (selectedCategory === "all" || item.category === selectedCategory) && (!filters.vegetarian || item.vegetarian) && (!filters.spicy || item.spicyLevel > 0) && (!filters.popular || item.popular) && (!filters.availableOnly || item.available);
    });
  }, [filters, search, selectedCategory]);
  const featuredItems = filteredItems.filter((item) => item.featured).slice(0, 5);
  const clearFilters = () => { setSearch(""); setFilters(defaultFilters); setSearchParams({}); };

  return <>
    <Seo title="Menu | Restaurant Three - Kurunegala" description="Search and filter the Restaurant Three QR menu with specials, fried rice, kottu, noodles, seafood, salads, desserts and fresh juices." />
    <Header />
    <main className="pb-20">
      <section className="menu-intro border-b border-white/10"><div className="section-wrap py-7 sm:py-11 lg:py-12"><p className="eyebrow">The Restaurant Three menu</p><div className="mt-2 flex flex-wrap items-end justify-between gap-2"><h1 className="section-title">Made to enjoy.</h1><p className="pb-1 text-sm text-stone-400">Kurunegala · Sri Lanka</p></div><p className="mt-3 max-w-xl text-sm leading-6 text-stone-300 sm:text-base">Explore the flavours, find your favourite, and ask us about anything that catches your eye.</p>
        <div className="relative mt-6 max-w-2xl"><Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gold" aria-hidden="true" /><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} aria-label="Search menu" placeholder="Search dishes, ingredients..." className="h-14 w-full rounded-xl border border-white/15 bg-[#29231e] pl-12 pr-4 text-base text-cream outline-none placeholder:text-stone-400 focus:border-gold" /></div>
      </div></section>

      <div className="category-bar sticky z-30 border-b border-white/10 bg-coal/95 backdrop-blur-lg"><nav aria-label="Menu categories" className="section-wrap flex gap-1 overflow-x-auto py-2.5 scrollbar-hide">{[{ id: "all" as const, name: "All dishes" }, ...categories].map((category) => <button type="button" key={category.id} onClick={() => selectCategory(category.id)} aria-pressed={selectedCategory === category.id} className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${selectedCategory === category.id ? "bg-ember text-white" : "text-stone-300 hover:bg-white/10 hover:text-cream"}`}>{category.name}</button>)}</nav></div>

      <div className="section-wrap pt-5 sm:pt-7"><div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide"><SlidersHorizontal className="mr-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" /><FilterButton active={filters.vegetarian} onClick={() => setFilters((f) => ({ ...f, vegetarian: !f.vegetarian }))} icon={<Leaf className="h-4 w-4" />} label="Vegetarian" /><FilterButton active={filters.spicy} onClick={() => setFilters((f) => ({ ...f, spicy: !f.spicy }))} icon={<Flame className="h-4 w-4" />} label="Spicy" /><FilterButton active={filters.popular} onClick={() => setFilters((f) => ({ ...f, popular: !f.popular }))} icon={<Sparkles className="h-4 w-4" />} label="Popular" /><FilterButton active={filters.availableOnly} onClick={() => setFilters((f) => ({ ...f, availableOnly: !f.availableOnly }))} icon={<Utensils className="h-4 w-4" />} label="Available only" /></div></div>

      {featuredItems.length > 0 && <section className="section-wrap py-6 sm:py-8"><div className="mb-4 flex items-baseline justify-between gap-3"><h2 className="font-display text-2xl text-cream sm:text-3xl">Featured at Three</h2><span className="text-xs uppercase tracking-wider text-stone-400">Swipe to explore</span></div><div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 scrollbar-hide">{featuredItems.map((item) => <button key={item.id} type="button" onClick={() => setSelectedItem(item)} className="group flex w-[210px] shrink-0 snap-start overflow-hidden rounded-xl border border-white/10 bg-charcoal text-left transition-colors hover:border-gold/50 sm:w-[240px]"><FoodImage src={item.image} alt={item.name} className="h-24 w-20 shrink-0 sm:h-28 sm:w-24" /><span className="flex min-w-0 flex-1 flex-col justify-center gap-1 p-3"><span className="line-clamp-2 font-display text-base leading-tight text-cream">{item.name}</span><span className="text-xs text-stone-400">{item.available ? "From" : "Sold out"}</span><span className="text-sm font-bold text-gold">{formatPrice(item.variants?.[0]?.price ?? item.price)}</span></span></button>)}</div></section>}

      <section ref={catalogRef} className="section-wrap scroll-mt-36 pb-14 pt-3 sm:pt-6"><div className="mb-5 flex items-end justify-between gap-3 border-b border-white/10 pb-4"><div><p className="eyebrow">Browse the menu</p><h2 className="mt-1 font-display text-[28px] text-cream sm:text-4xl">{selectedCategory === "all" ? "All dishes" : categories.find((category) => category.id === selectedCategory)?.name}</h2></div><span className="shrink-0 text-sm text-stone-400" aria-live="polite">{filteredItems.length} {filteredItems.length === 1 ? "dish" : "dishes"}</span></div>
        {filteredItems.length > 0 ? <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{filteredItems.map((item) => <FoodCard key={item.id} item={item} onSelect={setSelectedItem} compact />)}</div> : <div className="rounded-xl border border-white/10 bg-charcoal p-8 text-center sm:p-12"><Search className="mx-auto h-8 w-8 text-gold" aria-hidden="true" /><h3 className="mt-3 font-display text-2xl text-cream">Nothing on the menu matches.</h3><p className="mt-2 text-sm text-stone-400">Try a different search or clear your filters.</p><button type="button" onClick={clearFilters} className="btn-primary mt-5">Clear filters <X className="h-4 w-4" aria-hidden="true" /></button></div>}
      </section>
      <OffersSection /><ContactSection />
    </main>
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-coal/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-lg sm:bottom-5 sm:left-auto sm:right-5 sm:rounded-xl sm:border sm:p-2"><div className="mx-auto flex max-w-md gap-2"><a href={whatsappLink("Hi Restaurant Three, I am viewing your QR menu.")} target="_blank" rel="noreferrer" className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-ember px-3 text-sm font-bold text-white"><MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp</a><a href={phoneLink()} className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-white/20 px-3 text-sm font-bold text-cream"><Phone className="h-4 w-4" aria-hidden="true" /> Call us</a></div></div>
    <FoodDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
  </>;
}

function FilterButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: ReactNode; label: string }) {
  return <button type="button" onClick={onClick} aria-pressed={active} className={`flex min-h-11 shrink-0 items-center gap-1.5 rounded-full border px-3 text-xs font-semibold transition-colors ${active ? "border-gold bg-gold text-coal" : "border-white/15 bg-white/[0.04] text-stone-300 hover:text-cream"}`}>{icon}{label}</button>;
}