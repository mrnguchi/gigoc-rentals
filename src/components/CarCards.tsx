type CarClass = 'Basic' | 'Classic' | 'Luxury';

type CarCardProps = {
  image: string;
  name: string;
  location: string;
  price: string;
  carClass: CarClass;
  distance: string; // e.g. "5"
  year: string;    // e.g. "2022"
};

const classBadgeStyle: Record<CarClass, string> = {
  Basic:   'bg-[var(--primary-soft)] text-[var(--primary)]',
  Classic: 'bg-purple-100 text-purple-700',
  Luxury:  'bg-amber-100 text-amber-800',
};

export default function CarCard({ image, name, location, price, carClass, distance, year }: CarCardProps) {
  return (
    <div className="soft-card overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform duration-300">

      {/* Image — all 4 corners rounded via inner border-radius + overflow-hidden wrapper */}
      <div className="relative w-full h-[20rem] p-1">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />

          {/* Top-left: car class badge */}
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-[0.5rem] text-xs font-semibold ${classBadgeStyle[carClass]}`}>
            {carClass}
          </span>

          {/* Bottom-right: distance badge (primary blue) */}
          <span className="absolute bottom-3 right-3 px-3 py-1 rounded-[0.5rem] text-xs font-semibold bg-[var(--primary)] text-white">
            {distance}km away
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="px-5 pt-1 pb-5">

        {/* Location row */}
        <div className="flex items-center gap-1.5">
          <img src="/location-icon.png" alt="location" className="w-12 h-12 shrink-0 object-contain" />
          <span className="text-sm text-[var(--text-soft)]">{location}</span>
        </div>

        {/* Car name + model year */}
        <div className="flex items-center justify-between mt-2">
          <h3 className="text-[var(--text-main)] font-bold text-lg leading-snug">{name}</h3>
          <span className="text-sm font-medium text-[var(--text-soft)] bg-[var(--bg-soft)] border border-[var(--border-soft)] px-2.5 py-0.5 rounded-sm shrink-0 ml-2">{year}</span>
        </div>

        {/* Price row */}
        <div className="mt-4 pt-4 border-t border-[var(--border-soft)] flex items-center justify-between">
          <span className="text-sm text-[var(--text-soft)]">Price</span>
          <span className="text-base font-bold text-[var(--primary)]">{price}</span>
        </div>

      </div>

    </div>
  );
}