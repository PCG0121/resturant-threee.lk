import { Printer } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import Header from "../components/Header";
import Seo from "../components/Seo";
import { contactInfo } from "../data/menu";

const fallbackSiteUrl = `${window.location.origin}${import.meta.env.BASE_URL}`;
const siteUrl = import.meta.env.VITE_SITE_URL || fallbackSiteUrl;

export default function QrPage() {
  const menuUrl = `${siteUrl.replace(/\/$/, "")}/#/menu`;

  return (
    <>
      <Seo
        title="Printable QR Menu | Restaurant Three - Kurunegala"
        description="Print an A5 QR menu card for Restaurant Three - Kurunegala."
      />
      <div className="no-print">
        <Header />
      </div>
      <main className="print-page min-h-screen px-4 py-8 sm:px-6 lg:px-8">
        <div className="no-print mx-auto mb-6 flex max-w-3xl justify-end">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-2xl bg-ember px-5 py-3 font-black text-white shadow-glow transition hover:bg-orange-500"
          >
            <Printer className="h-5 w-5" aria-hidden="true" />
            Print
          </button>
        </div>

        <section className="mx-auto flex min-h-[210mm] w-full max-w-[148mm] flex-col items-center justify-between rounded-[2rem] border border-stone-200 bg-white p-8 text-center text-stone-950 shadow-soft print:min-h-[210mm] print:max-w-[148mm] print:rounded-none print:border-0 print:shadow-none">
          <div>
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-[1.5rem] bg-stone-950 text-2xl font-black text-gold">
              R3
            </div>
            <p className="mt-7 text-sm font-black uppercase tracking-[0.28em] text-orange-700">
              Restaurant Three
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight">Scan to View Our Menu</h1>
            <p className="mt-3 text-lg font-semibold text-stone-600">Chinese, Italian & Sri Lankan Cuisine</p>
          </div>

          <div className="rounded-[2rem] border-4 border-stone-950 bg-white p-5">
            <QRCodeCanvas value={menuUrl} size={260} level="H" includeMargin />
          </div>

          <div className="w-full space-y-4">
            <p className="break-all rounded-2xl bg-stone-100 px-4 py-3 text-sm font-semibold text-stone-700">{menuUrl}</p>
            <div className="grid gap-3 rounded-[1.5rem] bg-stone-950 p-5 text-white">
              <p className="text-xl font-black">{contactInfo.phone}</p>
              <p className="font-semibold text-gold">{contactInfo.location}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
