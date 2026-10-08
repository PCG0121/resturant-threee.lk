import { Facebook, MapPinned, MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { contactInfo } from "../data/menu";
import { phoneLink, whatsappLink } from "../utils/links";

export default function ContactSection() {
  return (
    <section className="section-wrap py-16 lg:py-24">
      <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-charcoal p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
        <div>
          <p className="eyebrow">Come say hello</p>
          <h2 className="section-title mt-4">The table is waiting.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-stone-300">
            Call ahead, message us on WhatsApp, open directions or find us on PickMe Food for selected delivery offers.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-4 font-bold text-coal transition hover:bg-yellow-200" href={phoneLink()}>
              <Phone className="h-5 w-5" aria-hidden="true" />
              {contactInfo.phone}
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-4 font-bold text-white transition hover:bg-emerald-500"
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
          <h3 className="font-display text-2xl text-white">Opening hours</h3>
          <div className="mt-4 space-y-3">
            {contactInfo.openingHours.map((line) => (
              <p key={line} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-stone-200">
                {line}
              </p>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-gold/20 bg-gold/10 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Location</p>
            <p className="mt-2 font-display text-3xl text-white">{contactInfo.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
