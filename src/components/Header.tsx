import { Link, NavLink } from "react-router-dom";
import { MapPin, Menu as MenuIcon, QrCode } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-coal/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-gold/40 bg-gradient-to-br from-stone-900 to-orange-950 text-lg font-black text-gold shadow-glow">
            R3
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold uppercase tracking-[0.18em] text-white">
              Restaurant Three
            </span>
            <span className="flex items-center gap-1 text-xs text-stone-400">
              <MapPin className="h-3.5 w-3.5 text-ember" aria-hidden="true" />
              Kurunegala
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition ${
                isActive ? "bg-ember text-white" : "text-stone-300 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <MenuIcon className="h-4 w-4" aria-hidden="true" />
            Menu
          </NavLink>
          <NavLink
            to="/qr"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition ${
                isActive ? "bg-ember text-white" : "text-stone-300 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <QrCode className="h-4 w-4" aria-hidden="true" />
            QR
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
