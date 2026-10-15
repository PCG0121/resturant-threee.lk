import { Link, NavLink } from "react-router-dom";
import { MapPin, QrCode } from "lucide-react";

export default function Header() {
  return (
    <header className="site-header sticky top-0 z-40 border-b border-white/10 bg-coal/95 backdrop-blur-lg">
      <div className="section-wrap flex h-16 items-center justify-between gap-3 sm:h-[72px]">
        <Link to="/" className="min-w-0 shrink-0" aria-label="Restaurant Three home">
          <span className="block font-display text-[22px] leading-none tracking-tight text-cream sm:text-[26px]">Restaurant <em className="text-gold">Three.</em></span>
          <span className="mt-1 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400"><MapPin className="h-3 w-3" aria-hidden="true" /> Kurunegala, Sri Lanka</span>
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-1 sm:gap-3">
          <NavLink to="/" end className={({ isActive }) => `nav-link hidden sm:inline-flex ${isActive ? "text-cream" : "text-stone-400"}`}>Home</NavLink>
          <NavLink to="/menu" className={({ isActive }) => `nav-link ${isActive ? "bg-ember text-white" : "bg-white/[0.06] text-cream hover:bg-white/[0.12]"}`}><span className="sm:hidden">Menu</span><span className="hidden sm:inline">Explore menu</span></NavLink>
          <NavLink to="/qr" aria-label="Printable QR menu" title="Printable QR menu" className={({ isActive }) => `nav-link !px-3 ${isActive ? "text-gold" : "text-stone-400 hover:text-cream"}`}><QrCode className="h-5 w-5" aria-hidden="true" /></NavLink>
        </nav>
      </div>
    </header>
  );
}