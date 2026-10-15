import { useState } from "react";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";
import FoodCard from "../components/FoodCard";
import FoodDetailsModal from "../components/FoodDetailsModal";
import FoodImage from "../components/FoodImage";
import Header from "../components/Header";
import OffersSection from "../components/OffersSection";
import Seo from "../components/Seo";
import { categories, menuItems, type MenuItem } from "../data/menu";

const highlights = ["fried-rice", "kottu", "seafood", "beverages"] as const;

export default function HomePage() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const featuredItems = menuItems.filter((item) => item.featured).slice(0, 3);

  return <>
    <Seo title="Restaurant Three - Kurunegala | Fried Rice, Kottu & Seafood" description="Explore Restaurant Three - Kurunegala's QR menu with specials, fried rice, kottu, noodles, seafood, desserts, juices and contact details." />
    <Header />
    <main>
      <section className="hero-section overflow-hidden border-b border-white/10">
        <div className="section-wrap grid items-center gap-8 py-10 sm:py-16 lg:min-h-[660px] lg:grid-cols-[1fr_1.02fr] lg:gap-14 lg:py-16">
          <div className="animate-fade-up lg:py-8">
            <p className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-ember" /> Restaurant Three · Kurunegala</p>
            <h1 className="display-title mt-5 max-w-[720px] text-[clamp(3.25rem,8vw,7rem)] leading-[0.98] text-cream sm:mt-7">Good food.<br /><em className="text-gold">Good company.</em></h1>
            <p className="mt-6 max-w-md text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">From wok-fired favourites to comforting kottu, there’s always something worth gathering around.</p>
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9"><Link to="/menu" className="btn-primary">Explore the menu <ArrowUpRight className="h-5 w-5" aria-hidden="true" /></Link><Link to="/qr" className="btn-outline">Print a QR menu <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
            <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-stone-400 sm:mt-12"><MapPin className="h-4 w-4 text-gold" aria-hidden="true" /> Find us in Kurunegala, Sri Lanka</div>
          </div>
          <div className="hero-visual relative min-w-0 pb-5 pl-4 sm:pb-6 sm:pl-6">
            <div className="absolute bottom-0 left-0 top-5 w-[92%] rounded-[1.25rem] border border-gold/40" aria-hidden="true" />
            <FoodImage src="https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=1200&q=82" alt="Freshly prepared meal" className="relative aspect-[4/3] rounded-xl sm:aspect-[5/4] lg:aspect-[4/5]" eager />
            <div className="absolute bottom-0 left-0 border border-white/15 bg-coal px-5 py-4 shadow-soft sm:px-7 sm:py-5"><span className="eyebrow">At Restaurant Three</span><p className="mt-1 font-display text-xl text-cream sm:text-2xl">A table for every craving.</p></div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-14 lg:py-24">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Discover your next favourite</p><h2 className="section-title mt-3">Explore by craving.</h2></div><Link to="/menu" className="text-link">Full menu <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">{highlights.map((id, index) => {
          const category = categories.find((entry) => entry.id === id)!;
          const image = menuItems.find((item) => item.category === id)!.image;
          return <Link key={id} to={`/menu?category=${id}`} className="group relative overflow-hidden rounded-xl border border-white/10 bg-charcoal"><FoodImage src={image} alt="" className="aspect-[3/4] w-full sm:aspect-[4/5]" /><div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent" /><span className="absolute left-3 top-3 text-xs tracking-[0.2em] text-cream sm:left-5 sm:top-5">0{index + 1}</span><div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5"><h3 className="font-display text-xl leading-tight text-cream sm:text-2xl">{category.name}</h3><span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-gold">Explore <ArrowUpRight className="h-3 w-3" aria-hidden="true" /></span></div></Link>;
        })}</div>
      </section>

      <section className="section-wrap pb-14 lg:pb-24"><div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">A taste of Three</p><h2 className="section-title mt-3">The favourites.</h2></div><Link to="/menu" className="text-link">See every dish <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{featuredItems.map((item) => <FoodCard key={item.id} item={item} onSelect={setSelectedItem} />)}</div></section>
      <OffersSection /><ContactSection />
    </main>
    <FoodDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
  </>;
}