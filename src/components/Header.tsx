import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, MapPin, QrCode } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-coal/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold font-display text-2xl font-bold text-coal">
            3
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-xl leading-none text-white">
              Restaurant <span className="text-gold">Three.</span>
            </span>
            <span className="mt-1 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">
              <MapPin className="h-3 w-3 text-gold" aria-hidden="true" />
              Kurunegala
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-1 sm:gap-2">
          <NavLink to="/" end className={({ isActive }) => `hidden rounded-full px-4 py-2 text-sm font-semibold transition sm:inline-flex ${isActive ? "text-gold" : "text-stone-300 hover:text-white"}`}>
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive ? "bg-gold text-coal" : "text-stone-300 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/qr"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition sm:px-4 ${
                isActive ? "bg-gold text-coal" : "text-stone-300 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <QrCode className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">QR Menu</span>
            <span className="sm:hidden">QR</span>
          </NavLink>
          <NavLink to="/menu" className="ml-2 hidden items-center gap-1 rounded-full border border-gold/50 px-4 py-2 text-sm font-semibold text-gold transition hover:bg-gold hover:text-coal lg:inline-flex">
            Order enquiry <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
