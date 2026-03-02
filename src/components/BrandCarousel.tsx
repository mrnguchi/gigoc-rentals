"use client";
import { useRef, useState } from 'react';

type Brand = {
  logo: string;
  alt: string;
};

function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div className="min-w-[140px] flex-shrink-0 bg-[var(--bg-soft)] border border-[var(--border-soft)] rounded-2xl p-4 flex flex-col items-center gap-3 hover:shadow-md hover:border-[var(--primary)] transition cursor-pointer">
      <div className="w-30 h-18 flex items-center justify-center">
        <img src={brand.logo} alt={brand.alt} className="w-full h-full object-contain" />
      </div>
      <p className="text-sm font-medium text-[var(--text-soft)] leading-tight">{brand.alt}</p>
    </div>
  );
}

export default function BrandCarousel({ brands }: { brands: Brand[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);

  const CARD_WIDTH = 156; // min-w-[140px] + gap-4 (16px)

  const scrollTo = (index: number) => {
    if (!ref.current) return;
    ref.current.scrollTo({ left: index * CARD_WIDTH, behavior: 'smooth' });
    setActiveIndex(index);
  };

  const scroll = (dir: number) => {
    const next = Math.max(0, Math.min(brands.length - 1, activeIndex + dir));
    scrollTo(next);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) scroll(delta > 0 ? 1 : -1);
  };

  const handleScroll = () => {
    if (!ref.current) return;
    const index = Math.round(ref.current.scrollLeft / CARD_WIDTH);
    setActiveIndex(Math.max(0, Math.min(brands.length - 1, index)));
  };

  return (
    <div>
      {/* Header: title + nav buttons */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[var(--text-main)]">Featured Brands</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--primary)] text-white hover:opacity-90 transition"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable + swipeable cards */}
      <div
        ref={ref}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
        style={{ scrollbarWidth: 'none' }}
      >
        {brands.map((b, i) => (
          <BrandCard key={i} brand={b} />
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {brands.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to ${brands[i].alt}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === i
                ? 'w-6 bg-[var(--primary)]'
                : 'w-2 bg-[var(--border-soft)] hover:bg-[var(--primary)]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
