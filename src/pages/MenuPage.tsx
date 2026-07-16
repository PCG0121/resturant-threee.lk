import { useMemo, useState, type ReactNode } from "react";
import { Flame, Leaf, MessageCircle, Phone, Search, Sparkles, Utensils } from "lucide-react";
import ContactSection from "../components/ContactSection";
import FoodCard from "../components/FoodCard";
import FoodDetailsModal from "../components/FoodDetailsModal";
import Header from "../components/Header";
import OffersSection from "../components/OffersSection";
import Seo from "../components/Seo";
import { categories, menuItems, type CategoryId, type MenuItem } from "../data/menu";
import { phoneLink, whatsappLink } from "../utils/links";

type Filters = {
  vegetarian: boolean;
  spicy: boolean;
  popular: boolean;
  availableOnly: boolean;
};

const defaultFilters: Filters = {
  vegetarian: false,
  spicy: false,
  popular: false,
  availableOnly: false,
};

export default function MenuPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | "all">("all");
  const [filters, setFilters] = useState(defaultFilters);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(normalizedSearch);
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const matchesVegetarian = !filters.vegetarian || item.vegetarian;
      const matchesSpicy = !filters.spicy || item.spicyLevel > 0;
      const matchesPopular = !filters.popular || item.popular;
      const matchesAvailable = !filters.availableOnly || item.available;

      return matchesSearch && matchesCategory && matchesVegetarian && matchesSpicy && matchesPopular && matchesAvailable;
    });
  }, [filters, search, selectedCategory]);

  const featuredItems = filteredItems.filter((item) => item.featured);
  const bestSellers = filteredItems.filter((item) => item.bestSeller);

  const toggleFilter = (key: keyof Filters) => {
    setFilters((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <>
      <Seo
        title="Menu | Restaurant Three - Kurunegala"
        description="Search and filter the Restaurant Three QR menu with Sri Lankan, Chinese, Italian, kottu, fried rice, pizza, pasta, desserts and beverages."
      />
      <Header />
      <main className="pb-24">
        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">QR Menu</p>
              <h1 className="mt-2 text-4xl font-black text-white sm:text-5xl">Restaurant Three Menu</h1>
              <p className="mt-3 max-w-2xl leading-7 text-stone-300">
                Browse Chinese, Italian and Sri Lankan favourites, then tap any dish to enquire by WhatsApp or phone.
              </p>
            </div>

            <div className="sticky top-[73px] z-30 -mx-4 border-y border-white/10 bg-coal/92 px-4 py-4 backdrop-blur-xl sm:mx-0 sm:rounded-[1.5rem] sm:border">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" aria-hidden="true" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search by food name"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.06] py-4 pl-12 pr-4 text-white outline-none transition placeholder:text-stone-500 focus:border-orange-300/60"
                />
              </div>

              <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-black transition ${
                    selectedCategory === "all" ? "bg-ember text-white" : "border border-white/10 bg-white/[0.04] text-stone-300"
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`shrink-0 rounded-full px-4 py-2 text-sm font-black transition ${
                      selectedCategory === category.id ? "bg-ember text-white" : "border border-white/10 bg-white/[0.04] text-stone-300"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <FilterButton active={filters.vegetarian} onClick={() => toggleFilter("vegetarian")} icon={<Leaf className="h-4 w-4" />} label="Vegetarian" />
                <FilterButton active={filters.spicy} onClick={() => toggleFilter("spicy")} icon={<Flame className="h-4 w-4" />} label="Spicy" />
                <FilterButton active={filters.popular} onClick={() => toggleFilter("popular")} icon={<Sparkles className="h-4 w-4" />} label="Popular" />
                <FilterButton active={filters.availableOnly} onClick={() => toggleFilter("availableOnly")} icon={<Utensils className="h-4 w-4" />} label="Available only" />
              </div>
            </div>
          </div>
        </section>

        <MenuGroup title="Featured dishes" items={featuredItems} onSelect={setSelectedItem} emptyText="No featured dishes match these filters." />
        <MenuGroup title="Best sellers" items={bestSellers} onSelect={setSelectedItem} emptyText="No best sellers match these filters." />
        <MenuGroup title="Full menu" items={filteredItems} onSelect={setSelectedItem} emptyText="No menu items match your search. Try clearing one filter." />

        <OffersSection />
        <ContactSection />
      </main>

      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
        <a
          href={whatsappLink("Hi Restaurant Three, I am viewing your QR menu.")}
          target="_blank"
          rel="noreferrer"
          className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-glow transition hover:scale-105"
          aria-label="WhatsApp Restaurant Three"
        >
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </a>
        <a
          href={phoneLink()}
          className="grid h-14 w-14 place-items-center rounded-full bg-ember text-white shadow-glow transition hover:scale-105"
          aria-label="Call Restaurant Three"
        >
          <Phone className="h-6 w-6" aria-hidden="true" />
        </a>
      </div>

      <FoodDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}

type FilterButtonProps = {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
};

function FilterButton({ active, onClick, icon, label }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold transition ${
        active ? "bg-gold text-stone-950" : "border border-white/10 bg-white/[0.04] text-stone-300 hover:text-white"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

type MenuGroupProps = {
  title: string;
  items: MenuItem[];
  onSelect: (item: MenuItem) => void;
  emptyText: string;
};

function MenuGroup({ title, items, onSelect, emptyText }: MenuGroupProps) {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-black text-white sm:text-3xl">{title}</h2>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-stone-400">
            {items.length} items
          </span>
        </div>
        {items.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((item) => (
              <FoodCard key={`${title}-${item.id}`} item={item} onSelect={onSelect} />
            ))}
          </div>
        ) : (
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-8 text-center text-stone-300">
            {emptyText}
          </div>
        )}
      </div>
    </section>
  );
}
