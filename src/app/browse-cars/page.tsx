"use client";
import { useState, useMemo, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CarCard from "../../components/CarCards";

type Filters = {
  minPrice: number; maxPrice: number; distance: string;
  carTypes: string[]; transmission: string[]; fuelType: string[];
  seats: string[]; availability: string; sortBy: string;
};

const DEFAULT_FILTERS: Filters = {
  minPrice: 0, maxPrice: 500000, distance: "",
  carTypes: [], transmission: [], fuelType: [],
  seats: [], availability: "", sortBy: "price-asc",
};

type Car = {
  id: number; image: string; name: string; location: string;
  price: string; priceDay: number; carClass: "Basic" | "Classic" | "Luxury";
  distance: string; year: string; type: string; transmission: string; fuel: string; seats: string;
};

const ALL_CARS: Car[] = [
  { id:1,  image:"/car1.jpg", name:"Toyota Corolla",    location:"Bastos, Yaoundé",      price:"XAF 25,000/day", priceDay:25000,  carClass:"Basic",   distance:"2", year:"2021", type:"Sedan",     transmission:"Automatic", fuel:"Petrol", seats:"5" },
  { id:2,  image:"/car2.jpg", name:"Honda CR-V",        location:"Mendong, Yaoundé",     price:"XAF 45,000/day", priceDay:45000,  carClass:"Classic", distance:"4", year:"2022", type:"SUV",       transmission:"Automatic", fuel:"Petrol", seats:"5" },
  { id:3,  image:"/toyotaland-c.jpg", name:"Toyota Land Cruiser",location:"Bonanjo, Douala",      price:"XAF 90,000/day", priceDay:90000,  carClass:"Luxury",  distance:"6", year:"2023", type:"SUV",       transmission:"Automatic", fuel:"Diesel", seats:"5+" },
  { id:4,  image:"/car5.jpg", name:"Hyundai Tucson",    location:"Biyem-Assi, Yaoundé",  price:"XAF 38,000/day", priceDay:38000,  carClass:"Classic", distance:"3", year:"2020", type:"SUV",       transmission:"Manual",    fuel:"Petrol", seats:"5" },
  { id:5,  image:"/kia-p.jpg", name:"Kia Picanto",       location:"Akwa, Douala",         price:"XAF 18,000/day", priceDay:18000,  carClass:"Basic",   distance:"1", year:"2021", type:"Hatchback", transmission:"Manual",    fuel:"Petrol", seats:"4" },
  { id:6,  image:"/gle-23.jpg", name:"Mercedes GLE",      location:"Bonapriso, Douala",    price:"XAF 120,000/day",priceDay:120000, carClass:"Luxury",  distance:"5", year:"2023", type:"SUV",       transmission:"Automatic", fuel:"Hybrid", seats:"5+" },
  { id:7,  image:"/nissan-x.jpg", name:"Nissan X-Trail",    location:"Nlongkak, Yaoundé",    price:"XAF 40,000/day", priceDay:40000,  carClass:"Classic", distance:"3", year:"2022", type:"SUV",       transmission:"Automatic", fuel:"Petrol", seats:"5" },
  { id:8,  image:"/car2.jpg", name:"Peugeot 208",       location:"New Bell, Douala",     price:"XAF 20,000/day", priceDay:20000,  carClass:"Basic",   distance:"2", year:"2021", type:"Hatchback", transmission:"Manual",    fuel:"Petrol", seats:"4" },
  { id:9,  image:"/bmw3-s.jpg", name:"BMW 3 Series",      location:"Bastos, Yaoundé",      price:"XAF 80,000/day", priceDay:80000,  carClass:"Luxury",  distance:"4", year:"2022", type:"Sedan",     transmission:"Automatic", fuel:"Petrol", seats:"5" },
  { id:10, image:"/mitsubishi-p.jpg", name:"Mitsubishi Pajero", location:"Deido, Douala",        price:"XAF 55,000/day", priceDay:55000,  carClass:"Classic", distance:"7", year:"2020", type:"SUV",       transmission:"Automatic", fuel:"Diesel", seats:"5+" },
  { id:11, image:"/renault-d.jpg", name:"Renault Duster",    location:"Etoa-Meki, Yaoundé",   price:"XAF 28,000/day", priceDay:28000,  carClass:"Basic",   distance:"3", year:"2021", type:"SUV",       transmission:"Manual",    fuel:"Petrol", seats:"5" },
  { id:12, image:"/ford-ranger.jpg", name:"Ford Ranger",       location:"Logpom, Douala",       price:"XAF 50,000/day", priceDay:50000,  carClass:"Classic", distance:"8", year:"2023", type:"Pickup",    transmission:"Manual",    fuel:"Diesel", seats:"4" },
];

const CARS_PER_PAGE = 9;

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pb-5 mb-5 border-b border-[var(--border-soft)] last:border-0 last:mb-0 last:pb-0">
      <h3 className="text-sm font-semibold text-[var(--text-main)] mb-3">{title}</h3>
      {children}
    </div>
  );
}

function FilterPanel({ filters, setFilters }: { filters: Filters; setFilters: (f: Filters) => void }) {
  const toggle = (key: "carTypes" | "transmission" | "fuelType" | "seats", val: string) => {
    const arr = filters[key] as string[];
    setFilters({ ...filters, [key]: arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val] });
  };
  return (
    <div>
      <FilterGroup title="Price Range (XAF/day)">
        <div className="flex gap-2">
          <input type="number" placeholder="Min" value={filters.minPrice || ""} onChange={e => setFilters({ ...filters, minPrice: Number(e.target.value) })}
            className="w-full border border-[var(--border-soft)] rounded-lg px-3 py-2 text-sm outline-none focus:border-[var(--primary)]" />
          <input type="number" placeholder="Max" value={filters.maxPrice || ""} onChange={e => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
            className="w-full border border-[var(--border-soft)] rounded-lg px-3 py-2 text-sm outline-none focus:border-[var(--primary)]" />
        </div>
      </FilterGroup>
      <FilterGroup title="Distance">
        {["Within 2km","Within 5km","Within 10km"].map(d => (
          <label key={d} className="flex items-center gap-2 mb-2 cursor-pointer">
            <input type="radio" name="distance" value={d} checked={filters.distance === d} onChange={() => setFilters({ ...filters, distance: d })} className="accent-[var(--primary)]" />
            <span className="text-sm text-[var(--text-soft)]">{d}</span>
          </label>
        ))}
      </FilterGroup>
      <FilterGroup title="Car Type">
        {["Sedan","SUV","Coupe","Hatchback","Pickup"].map(t => (
          <label key={t} className="flex items-center gap-2 mb-2 cursor-pointer">
            <input type="checkbox" checked={filters.carTypes.includes(t)} onChange={() => toggle("carTypes", t)} className="accent-[var(--primary)] w-4 h-4" />
            <span className="text-sm text-[var(--text-soft)]">{t}</span>
          </label>
        ))}
      </FilterGroup>
      <FilterGroup title="Transmission">
        {["Automatic","Manual"].map(t => (
          <label key={t} className="flex items-center gap-2 mb-2 cursor-pointer">
            <input type="checkbox" checked={filters.transmission.includes(t)} onChange={() => toggle("transmission", t)} className="accent-[var(--primary)] w-4 h-4" />
            <span className="text-sm text-[var(--text-soft)]">{t}</span>
          </label>
        ))}
      </FilterGroup>
      <FilterGroup title="Fuel Type">
        {["Petrol","Diesel","Hybrid"].map(t => (
          <label key={t} className="flex items-center gap-2 mb-2 cursor-pointer">
            <input type="checkbox" checked={filters.fuelType.includes(t)} onChange={() => toggle("fuelType", t)} className="accent-[var(--primary)] w-4 h-4" />
            <span className="text-sm text-[var(--text-soft)]">{t}</span>
          </label>
        ))}
      </FilterGroup>
      <FilterGroup title="Seats">
        {["2","4","5+"].map(s => (
          <label key={s} className="flex items-center gap-2 mb-2 cursor-pointer">
            <input type="checkbox" checked={filters.seats.includes(s)} onChange={() => toggle("seats", s)} className="accent-[var(--primary)] w-4 h-4" />
            <span className="text-sm text-[var(--text-soft)]">{s} Seats</span>
          </label>
        ))}
      </FilterGroup>
      <FilterGroup title="Availability">
        {["Available now","Available on selected dates"].map(a => (
          <label key={a} className="flex items-center gap-2 mb-2 cursor-pointer">
            <input type="radio" name="availability" value={a} checked={filters.availability === a} onChange={() => setFilters({ ...filters, availability: a })} className="accent-[var(--primary)]" />
            <span className="text-sm text-[var(--text-soft)]">{a}</span>
          </label>
        ))}
      </FilterGroup>
      <button onClick={() => setFilters(DEFAULT_FILTERS)}
        className="mt-2 w-full py-2 rounded-lg border border-[var(--border-soft)] text-sm text-[var(--text-soft)] hover:bg-[var(--bg-soft)] transition cursor-pointer">
        Reset Filters
      </button>
    </div>
  );
}


export default function BrowseCars() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortPanelPos, setSortPanelPos] = useState<{ top: number; left: number; right: number } | null>(null);
  const sortBtnRef = useRef<HTMLButtonElement>(null);
  const [page, setPage] = useState(1);

  function openSort() {
    if (sortBtnRef.current) {
      const r = sortBtnRef.current.getBoundingClientRect();
      setSortPanelPos({ top: r.bottom + 6, left: r.left, right: window.innerWidth - r.right });
    }
    setSortOpen(true);
  }

  const SORT_OPTIONS = [
    { value: "price-asc",  label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
  ];

  const filtered = useMemo(() => {
    let cars = ALL_CARS.filter(c => {
      if (search && !c.name.toLowerCase().includes(search.toLowerCase()) && !c.location.toLowerCase().includes(search.toLowerCase())) return false;
      if (filters.minPrice && c.priceDay < filters.minPrice) return false;
      if (filters.maxPrice && c.priceDay > filters.maxPrice) return false;
      if (filters.distance === "Within 2km" && Number(c.distance) > 2) return false;
      if (filters.distance === "Within 5km" && Number(c.distance) > 5) return false;
      if (filters.distance === "Within 10km" && Number(c.distance) > 10) return false;
      if (filters.carTypes.length && !filters.carTypes.includes(c.type)) return false;
      if (filters.transmission.length && !filters.transmission.includes(c.transmission)) return false;
      if (filters.fuelType.length && !filters.fuelType.includes(c.fuel)) return false;
      if (filters.seats.length && !filters.seats.includes(c.seats)) return false;
      return true;
    });
    if (filters.sortBy === "price-asc") cars = [...cars].sort((a, b) => a.priceDay - b.priceDay);
    if (filters.sortBy === "price-desc") cars = [...cars].sort((a, b) => b.priceDay - a.priceDay);
    return cars;
  }, [search, filters]);

  const totalPages = Math.ceil(filtered.length / CARS_PER_PAGE);
  const paged = filtered.slice((page - 1) * CARS_PER_PAGE, page * CARS_PER_PAGE);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-6 space-y-6">

        {/* Banner */}
        <div className="soft-cad md:mt-8 overflow-hidden flex flex-col md:flex-row items-center gap-6 px-5 md:px-2   py-8 md:py-3">
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex items-center gap-20 md:gap-16">
              <h1 className="text-3xl md:text-7xl font-bold text-[var(--text-main)] leading-tight">Browse Cars</h1>
              <img src="/car-listing-icon.png" alt="" className="w-10 h-10 object-contain shrink-0" />
            </div>
            <p className="text-[var(--text-soft)] text-sm md:text-base max-w-md">
              Find and rent the perfect car near you. Filter by price, type, fuel, and more to discover the best deals across Cameroon.
            </p>
          </div>
          <div className="w-full md:w-[42%] flex items-center justify-center">
            <img src="/footer-car2.png" alt="Browse Cars" className="w-full max-w-xs md:max-w-full h-52 md:h-64 object-contain drop-shadow-md" />
          </div>
        </div>

        {/* Search + Toolbar row */}
        <div className="flex -mt-12 flex-col md:flex-row md:items-center gap-4">

          {/* Left: badges — all three items in one scrollable row */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">

            {/* Cars found badge */}
            <span className="flex items-center gap-1.5 border border-[var(--border-soft)] bg-white text-sm px-3 py-2 rounded-lg text-[var(--text-soft)] whitespace-nowrap shrink-0">
              <span className="font-semibold text-[var(--text-main)]">{filtered.length}</span>
              car{filtered.length !== 1 ? "s" : ""} found
            </span>

            {/* Sort custom dropdown — panel uses fixed positioning so it escapes the overflow container */}
            <div className="shrink-0">
              <button
                ref={sortBtnRef}
                type="button"
                onClick={() => sortOpen ? setSortOpen(false) : openSort()}
                className="flex items-center gap-1.5 border border-[var(--border-soft)] bg-white text-sm px-3 py-2 rounded-lg text-[var(--text-soft)] cursor-pointer whitespace-nowrap"
              >
                {SORT_OPTIONS.find(o => o.value === filters.sortBy)?.label}
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-3.5 h-3.5 transition-transform ${sortOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {sortOpen && sortPanelPos && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setSortOpen(false)} />
                  <div
                    className="fixed z-20 bg-white rounded-xl shadow-lg overflow-hidden min-w-[180px]"
                    style={{ top: sortPanelPos.top, right: sortPanelPos.right }}
                  >
                    {SORT_OPTIONS.map(opt => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => { setFilters({ ...filters, sortBy: opt.value }); setPage(1); setSortOpen(false); }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors cursor-pointer
                          ${filters.sortBy === opt.value
                            ? "bg-[var(--primary)] text-white font-medium"
                            : "text-[var(--text-main)] hover:bg-[var(--bg-soft)]"
                          }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Mobile filter button */}
            <button onClick={() => setMobileOpen(true)}
              className="lg:hidden flex items-center gap-2 border border-[var(--border-soft)] bg-white text-sm px-4 py-2 rounded-lg text-[var(--text-soft)] hover:bg-[var(--bg-soft)] transition cursor-pointer whitespace-nowrap shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="11" y1="18" x2="13" y2="18" />
              </svg>
              Filters
            </button>

          </div>

          {/* Right: search bar — full width on mobile, half on desktop */}
          <form onSubmit={e => { e.preventDefault(); setPage(1); }} className="w-full md:w-1/2 md:ml-auto">
            <div className="flex h-[2.6rem] flex-row items-center border border-[var(--border-soft)] rounded-lg overflow-hidden bg-white">
              <input aria-label="search" value={search} onChange={e => { setSearch(e.target.value); setPage(1); }}
                className="flex-1 px-4 py-2.5 bg-transparent placeholder:text-[var(--text-soft)] text-sm outline-none"
                placeholder="Search cars, brands or locations" />
              <button type="submit" className="flex h-full cursor-pointer items-center justify-center gap-1.5 bg-[var(--primary)] rounded-[0.5rem] text-white px-4 md:px-6 shrink-0 text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
                </svg>
                Search
              </button>
            </div>
          </form>

        </div>

        {/* Main body */}
        <div className="flex gap-6 items-start">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 soft-card p-6 sticky top-24">
            <h2 className="text-base font-semibold text-[var(--text-main)] mb-5">Filters</h2>
            <FilterPanel filters={filters} setFilters={f => { setFilters(f); setPage(1); }} />
          </aside>

          {/* Car grid */}
          <div className="flex-1 min-w-0">
            {paged.length === 0 ? (
              <div className="soft-card flex flex-col items-center justify-center py-20 text-center">
                <p className="text-[var(--text-soft)] text-base">No cars match your filters.</p>
                <button onClick={() => { setFilters(DEFAULT_FILTERS); setSearch(""); setPage(1); }}
                  className="mt-4 bg-[var(--primary)] text-white px-6 py-2 rounded-[0.4rem] text-sm hover:opacity-90 transition cursor-pointer">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {paged.map(car => (
                  <CarCard key={car.id} image={car.image} name={car.name} location={car.location}
                    price={car.price} carClass={car.carClass} distance={car.distance} year={car.year} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                  className="px-4 py-2 rounded-lg border border-[var(--border-soft)] text-sm text-[var(--text-soft)] disabled:opacity-40 hover:bg-[var(--bg-soft)] transition cursor-pointer">
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                  <button key={n} onClick={() => setPage(n)}
                    className={`w-9 h-9 rounded-lg text-sm font-medium transition cursor-pointer ${n === page ? "bg-[var(--primary)] text-white" : "border border-[var(--border-soft)] text-[var(--text-soft)] hover:bg-[var(--bg-soft)]"}`}>
                    {n}
                  </button>
                ))}
                <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                  className="px-4 py-2 rounded-lg border border-[var(--border-soft)] text-sm text-[var(--text-soft)] disabled:opacity-40 hover:bg-[var(--bg-soft)] transition cursor-pointer">
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile slide-over */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-soft)]">
              <h2 className="text-base font-semibold text-[var(--text-main)]">Filters</h2>
              <button onClick={() => setMobileOpen(false)} className="text-[var(--text-soft)] hover:text-[var(--text-main)] cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-5">
              <FilterPanel filters={filters} setFilters={f => { setFilters(f); setPage(1); }} />
            </div>
            <div className="px-6 py-4 border-t border-[var(--border-soft)]">
              <button onClick={() => setMobileOpen(false)}
                className="w-full bg-[var(--primary)] text-white py-2.5 rounded-[0.4rem] text-sm font-medium hover:opacity-90 transition cursor-pointer">
                Show {filtered.length} Result{filtered.length !== 1 ? "s" : ""}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
