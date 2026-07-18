import { ArrowRight, Clock3, Gift, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";
import FoodCard from "../components/FoodCard";
import FoodDetailsModal from "../components/FoodDetailsModal";
import FoodImage from "../components/FoodImage";
import Header from "../components/Header";
import OffersSection from "../components/OffersSection";
import Seo from "../components/Seo";
import { menuItems, type MenuItem } from "../data/menu";
import { useState } from "react";

export default function HomePage() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const featuredItems = menuItems.filter((item) => item.featured).slice(0, 3);

  return (
    <>
      <Seo
        title="Restaurant Three - Kurunegala | Fried Rice, Kottu & Seafood"
        description="Explore Restaurant Three - Kurunegala's QR menu with specials, fried rice, kottu, noodles, seafood, desserts, juices and contact details."
      />
      <Header />
      <main>
        <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="animate-fade-up">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-white/[0.04] px-3 py-2 text-sm font-bold text-gold">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-orange-500 to-red-700 text-sm font-black text-white">
                  R3
                </span>
                Restaurant Three logo placeholder
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
                Restaurant Three - Kurunegala
              </h1>
              <p className="mt-5 max-w-xl text-xl font-semibold leading-8 text-stone-200">
                Fried Rice, Kottu, Seafood & Fresh Juice
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ember px-6 py-4 text-base font-black text-white shadow-glow transition hover:bg-orange-500"
                >
                  Explore Menu
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link
                  to="/qr"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.05] px-6 py-4 text-base font-black text-white transition hover:bg-white hover:text-stone-950"
                >
                  Print QR
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.25rem] border border-orange-300/25 bg-gradient-to-br from-orange-500/18 to-red-900/30 p-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-gold" aria-hidden="true" />
                    <p className="font-black text-white">Today's Special</p>
                  </div>
                  <p className="mt-2 text-sm text-stone-300">Mixed grill, cheese sambal and 3 Special sharing meals.</p>
                </div>
                <div className="rounded-[1.25rem] border border-gold/25 bg-gradient-to-br from-yellow-500/14 to-orange-900/30 p-4">
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-gold" aria-hidden="true" />
                    <p className="font-black text-white">Big Bites</p>
                  </div>
                  <p className="mt-2 text-sm text-stone-300">Crispy chicken and seafood favourites for sharing.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <FoodImage
                src="https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=1200&q=82"
                alt="Premium restaurant food spread"
                className="aspect-[4/5] rounded-[2rem] border border-white/10 shadow-soft sm:aspect-[5/4] lg:aspect-[4/5]"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-[1.5rem] border border-white/15 bg-black/58 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Gift className="h-6 w-6 text-gold" aria-hidden="true" />
                  <div>
                    <p className="font-black text-white">Combo meals available</p>
                    <p className="text-sm text-stone-300">Ask about weekend and PickMe promotions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-7 flex items-end justify-between gap-5">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Featured dishes</p>
                <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Made for the first scan</h2>
              </div>
              <Link to="/menu" className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-stone-200 transition hover:bg-white hover:text-stone-950 sm:block">
                View all
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredItems.map((item) => (
                <FoodCard key={item.id} item={item} onSelect={setSelectedItem} />
              ))}
            </div>
          </div>
        </section>

        <OffersSection />
        <ContactSection />
      </main>
      <FoodDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}
