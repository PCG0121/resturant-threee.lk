import { useState } from "react";
import { Utensils } from "lucide-react";

type FoodImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function FoodImage({ src, alt, className = "" }: FoodImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-stone-900 ${className}`}>
      {!loaded && !failed ? (
        <div className="absolute inset-0 animate-soft-pulse bg-gradient-to-br from-stone-800 via-stone-900 to-orange-950" />
      ) : null}
      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-stone-900 to-orange-950 text-center text-stone-300">
          <Utensils className="h-8 w-8 text-gold" aria-hidden="true" />
          <span className="px-4 text-xs font-semibold uppercase tracking-[0.18em]">Image unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition duration-700 ${loaded ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
        />
      )}
    </div>
  );
}
