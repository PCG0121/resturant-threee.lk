import { Facebook, MapPinned, MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { contactInfo } from "../data/menu";
import { phoneLink, whatsappLink } from "../utils/links";

export default function ContactSection() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-soft sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Contact</p>
          <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Visit us in Kurunegala</h2>
          <p className="mt-4 max-w-2xl leading-7 text-stone-300">
            Call ahead, message us on WhatsApp, open directions or find us on PickMe Food for selected delivery offers.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ember px-5 py-4 font-black text-white transition hover:bg-orange-500" href={phoneLink()}>
              <Phone className="h-5 w-5" aria-hidden="true" />
              {contactInfo.phone}
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-4 font-black text-white transition hover:bg-emerald-400"
              href={whatsappLink("Hi Restaurant Three, I would like to view your menu.")}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 font-black text-white transition hover:bg-white hover:text-stone-950"
              href={contactInfo.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MapPinned className="h-5 w-5" aria-hidden="true" />
              Google Maps
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 font-black text-white transition hover:bg-white hover:text-stone-950"
              href={contactInfo.facebookUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
              Facebook
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 font-black text-white transition hover:bg-white hover:text-stone-950 sm:col-span-2"
              href={contactInfo.pickMeFoodUrl}
              target="_blank"
              rel="noreferrer"
            >
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
              PickMe Food
            </a>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-gold/20 bg-coal/60 p-5">
          <h3 className="text-xl font-black text-white">Opening hours</h3>
          <div className="mt-4 space-y-3">
            {contactInfo.openingHours.map((line) => (
              <p key={line} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-stone-200">
                {line}
              </p>
            ))}
          </div>
          <div className="mt-5 rounded-2xl bg-gradient-to-br from-orange-500 to-red-700 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-100">Location</p>
            <p className="mt-2 text-2xl font-black text-white">{contactInfo.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
