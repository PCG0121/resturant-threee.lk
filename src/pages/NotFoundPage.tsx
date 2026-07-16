import { ArrowLeft, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Seo from "../components/Seo";

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found | Restaurant Three - Kurunegala"
        description="The Restaurant Three page you requested could not be found."
      />
      <Header />
      <main className="grid min-h-[70vh] place-items-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-[1.5rem] border border-white/10 bg-white/[0.055] text-gold">
            <SearchX className="h-10 w-10" aria-hidden="true" />
          </div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">404</p>
          <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">This page is off the menu</h1>
          <p className="mt-4 leading-7 text-stone-300">
            The link may have changed, but the QR menu is ready with all dishes, offers and contact details.
          </p>
          <Link
            to="/menu"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-ember px-6 py-4 font-black text-white shadow-glow transition hover:bg-orange-500"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            Back to Menu
          </Link>
        </div>
      </main>
    </>
  );
}
