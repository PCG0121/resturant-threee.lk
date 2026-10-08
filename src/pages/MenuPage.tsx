import { useMemo, useState, type ReactNode } from "react";
import { Flame, Leaf, MessageCircle, Phone, Search, Sparkles, Utensils } from "lucide-react";
import { useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const selectedCategory = categories.some((category) => category.id === searchParams.get("category"))
    ? searchParams.get("category") as CategoryId
    : "all";
  const selectCategory = (category: CategoryId | "all") => {
    setSearchParams(category === "all" ? {} : { category });
  };
  const [filters, setFilters] = useState(defaultFilters);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return menuItems.filter((item) => {
      const category = categories.find((entry) => entry.id === item.category);
      const searchableText = [
        item.name,
        item.description,
        item.fullDescription,
        category?.name,
        ...item.ingredients,
        ...(item.variants?.map((variant) => variant.name) ?? []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      const matchesSearch = searchableText.includes(normalizedSearch);
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
        description="Search and filter the Restaurant Three QR menu with specials, fried rice, kottu, noodles, seafood, salads, desserts and fresh juices."
      />
      <Header />
      <main className="pb-24">
        <section className="border-b border-white/10 bg-[#191715] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6">
              <p className="eyebrow">Explore the menu</p>
              <h1 className="section-title mt-4">Find your favourite.</h1>
              <p className="mt-3 max-w-2xl leading-7 text-stone-300">
                Browse specials, fried rice, kottu, noodles, seafood, soups, desserts and juices, then tap any item to enquire by WhatsApp or phone.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-coal p-4 sm:p-6">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" aria-hidden="true" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  aria-label="Search menu"
                  placeholder="Search by food name"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.06] py-4 pl-12 pr-4 text-white outline-none transition placeholder:text-stone-500 focus:border-orange-300/60"
                />
              </div>

              <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                <button
                  type="button"
                  onClick={() => selectCategory("all")}
                  aria-pressed={selectedCategory === "all"}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-black transition ${
                    selectedCategory === "all" ? "bg-gold text-coal" : "border border-white/10 bg-white/[0.04] text-stone-300 hover:text-white"
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => selectCategory(category.id)}
                    aria-pressed={selectedCategory === category.id}
                    className={`shrink-0 rounded-full px-4 py-2 text-sm font-black transition ${
                      selectedCategory === category.id ? "bg-gold text-coal" : "border border-white/10 bg-white/[0.04] text-stone-300 hover:text-white"
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
        <MenuGroup title="The full menu" items={filteredItems} onSelect={setSelectedItem} emptyText="No menu items match your search. Try clearing one filter." />

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
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold transition ${
        active ? "bg-gold text-coal" : "border border-white/10 bg-white/[0.04] text-stone-300 hover:text-white"
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
          <h2 className="font-display text-3xl text-white sm:text-4xl">{title}</h2>
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
