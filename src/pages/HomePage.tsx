import { ArrowRight, ArrowUpRight, Clock3, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";
import FoodCard from "../components/FoodCard";
import FoodDetailsModal from "../components/FoodDetailsModal";
import FoodImage from "../components/FoodImage";
import Header from "../components/Header";
import OffersSection from "../components/OffersSection";
import Seo from "../components/Seo";
import { categories, menuItems, type MenuItem } from "../data/menu";
import { useState } from "react";

const highlights = ["fried-rice", "kottu", "seafood", "beverages"] as const;

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
        <section className="relative overflow-hidden border-b border-white/10 px-4 pb-14 pt-9 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="pointer-events-none absolute -right-36 -top-44 h-[36rem] w-[36rem] rounded-full bg-ember/10 blur-[110px]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="animate-fade-up">
              <p className="eyebrow"><span className="h-2 w-2 rounded-full bg-ember" /> A little something for every craving</p>
              <h1 className="display-title mt-7 max-w-3xl text-[clamp(3.7rem,7vw,7.5rem)] leading-[0.94] text-white">
                Good food.<br /><em className="text-gold">Great moments.</em>
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-8 text-stone-300 sm:text-xl">
                From wok-fired favourites to the last sip of fresh juice. Find your next favourite at Restaurant Three, Kurunegala.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/menu" className="btn-primary">Explore the menu <ArrowUpRight className="h-5 w-5" aria-hidden="true" /></Link>
                <Link to="/qr" className="btn-outline">Get the QR code <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-sm text-stone-400">
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" aria-hidden="true" /> Kurunegala, Sri Lanka</span>
                <span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-gold" aria-hidden="true" /> Made fresh, served with love</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[640px] pb-7 pl-5 sm:pl-10 lg:pb-10">
              <div className="absolute bottom-0 left-0 top-10 w-[88%] rounded-[2rem] border border-gold/30" aria-hidden="true" />
              <FoodImage
                src="https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=1200&q=82"
                alt="A freshly prepared restaurant meal"
                className="relative aspect-[4/4.5] rounded-[1.75rem] sm:aspect-[5/4] lg:aspect-[4/5]"
                eager
              />
              <div className="absolute bottom-0 left-0 max-w-[235px] rounded-2xl border border-white/15 bg-charcoal/95 p-5 shadow-soft backdrop-blur-xl sm:left-3 sm:max-w-[260px]">
                <Sparkles className="mb-3 h-5 w-5 text-gold" aria-hidden="true" />
                <p className="font-display text-2xl text-white">Made to share.</p>
                <p className="mt-1 text-sm leading-5 text-stone-400">Great meals are better together.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap py-16 lg:py-24">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div><p className="eyebrow">Find your flavour</p><h2 className="section-title mt-4">Something for everyone.</h2></div>
            <Link to="/menu" className="text-link">View the full menu <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((id, index) => {
              const category = categories.find((entry) => entry.id === id)!;
              const image = menuItems.find((item) => item.category === id)!.image;
              return (
                <Link key={id} to={`/menu?category=${id}`} className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
                  <FoodImage src={image} alt={category.name} className="aspect-[4/3] sm:aspect-[3/4]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                  <span className="absolute left-5 top-5 text-xs font-bold tracking-[0.2em] text-white/70">0{index + 1}</span>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-2">
                    <div><h3 className="font-display text-2xl text-white">{category.name}</h3><p className="mt-1 text-sm text-stone-300">{category.description}</p></div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-gold transition group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="section-wrap pb-16 lg:pb-24">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div><p className="eyebrow">A taste of Three</p><h2 className="section-title mt-4">Worth coming back for.</h2></div>
            <Link to="/menu" className="text-link">Explore all dishes <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredItems.map((item) => <FoodCard key={item.id} item={item} onSelect={setSelectedItem} />)}
          </div>
        </section>
        <OffersSection />
        <ContactSection />
      </main>
      <FoodDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}
