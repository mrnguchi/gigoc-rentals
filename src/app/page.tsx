"use client";
import Navbar from "../components/Navbar"
// custom search input used in hero (removed external SearchBar import)
import CarCard from "../components/CarCards"
import BrandCarousel from "../components/BrandCarousel"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main>

      <Navbar />

      {/* Hero */}
      <section className="hero-section relative px-0">

        {/* Mobile only: car image with floating icons */}
        <div className="md:hidden relative flex justify-center items-center pb-0 px-4 -mb-4">

          {/* Floating location badge — bottom-left */}
          <div className="animate-float absolute bottom-12 left-6 bg-white rounded-xl shadow-md px-3 py-2 flex items-center gap-2 border border-[var(--border-soft)] z-10">
            <img src="/location-icon.png" alt="location" className="w-12 h-6 shrink-0 object-contain" />
            <span className="text-xs font-semibold text-[var(--text-main)]">Near You</span>
          </div>

          {/* Floating car badge — top-right */}
          <div className="animate-float-delayed absolute top-6 right-6 bg-white rounded-xl shadow-md px-3 py-2 flex items-center gap-2 border border-[var(--border-soft)] z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="var(--primary)">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
            </svg>
            <span className="text-xs font-semibold text-[var(--text-main)]">120+ Cars</span>
          </div>

          <img
            src="/hero-car2.png"
            alt="Gigoc Car"
            className="w-[95%] max-w-[320px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Content: stacked on mobile, 2-col grid on desktop */}
        <div className="max-w-7xl mx-auto px-5 pt-0 pb-16 md:grid md:grid-cols-2 md:gap-12 md:items-center md:py-16 md:px-4">

          {/* Left side — text, stats, search, CTA */}
          {/* Mobile order: h1 → p → CTA → Stats → Search | Desktop order: h1 → p → Stats → Search → CTA */}
          <div className="flex flex-col gap-4">

            <h1 className="order-1 text-[var(--text-main)] text-3xl sm:text-5xl md:text-5xl lg:text-5xl font-bold leading-tight">
              Rent a Car Anytime, Anywhere with GIGOC Rentals
            </h1>

            <p className="order-2 text-[var(--text-soft)] text-sm md:text-lg max-w-md">
              Find reliable vehicles from trusted owners in your city through Gigoc, making it easy to rent the right car when you need it most.
            </p>

            {/* CTA — mobile: 3rd, desktop: 5th */}
            <div className="order-3 md:order-5 flex flex-row gap-3 md:gap-4">
              <button className="flex-1 cursor-pointer md:flex-none bg-[var(--primary)] text-white px-6 md:px-10 py-2.5 md:py-3 rounded-[0.4rem] shadow-soft hover:opacity-90 transition text-sm md:text-base">
                Rent a Car
              </button>
              <button className="flex-1 cursor-pointer md:flex-none border border-[var(--border-soft)] px-6 md:px-10 py-2.5 md:py-3 rounded-[0.4rem] bg-white hover:bg-[var(--bg-main)] transition text-sm md:text-base">
                List Your Car
              </button>
            </div>

            {/* Stats strip — mobile: 4th, desktop: 3rd */}
            <div className="order-4 md:order-3 w-full md:w-11/12 bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.10)] md:shadow-sm border border-[var(--border-soft)] flex items-center">
              <div className="relative flex-1 text-center py-8 md:py-6">
                <p className="text-lg md:text-2xl font-semibold">120+</p>
                <p className="text-xs md:text-sm text-[var(--text-soft)]">Available Cars</p>
                <div className="absolute right-0 top-5 bottom-5 w-px bg-gray-200" />
              </div>
              <div className="relative flex-1 text-center py-8 md:py-6">
                <p className="text-lg md:text-2xl font-semibold">500+</p>
                <p className="text-xs md:text-sm text-[var(--text-soft)]">Active Users</p>
                <div className="absolute right-0 top-5 bottom-5 w-px bg-gray-200" />
              </div>
              <div className="flex-1 text-center py-8 md:py-6">
                <p className="text-lg md:text-2xl font-semibold">2+</p>
                <p className="text-xs md:text-sm text-[var(--text-soft)]">Years of Experience</p>
              </div>
            </div>

            {/* Search bar — mobile: 5th, desktop: 4th */}
            <div className="order-5 md:order-4  w-full md:w-11/12">
              <form className="w-full">
                <div className="flex h-[3rem] flex-row items-center border border-[var(--border-soft)] rounded-lg overflow-hidden bg-white shadow-[0_4px_16px_rgba(0,0,0,0.10)] md:shadow-none">
                  <input
                    aria-label="search"
                    className="flex-1 px-4 py-2.5 md:py-3 bg-transparent placeholder:text-[var(--text-soft)] text-sm outline-none"
                    placeholder="Search cars, brands or locations"
                  />
                  <button type="submit" className="flex h-full cursor-pointer items-center justify-center bg-[var(--primary)] rounded-[0.5rem] text-white px-5 py-2.5 md:py-3 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

          </div>

          {/* Right side — desktop car image only */}
          <img
            src="/hero-car2.png"
            alt="Gigoc Illustration"
            className="hidden md:block w-full md:w-[110%] lg:w-[120%] xl:w-[128%] h-auto object-contain drop-shadow-xl"
          />

        </div>
      </section>

      {/* Overlapping brands container */}
      <div className="max-w-7xl mx-auto -mt-8 md:-mt-16 relative z-10 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <BrandCarousel brands={[
            { logo: '/toyota.png',      alt: 'Toyota' },
            { logo: '/benz.png',    alt: 'Mercedes-Benz' },
            { logo: 'bmw.png',       alt: 'BMW' },
            { logo: '/Hyundai.png',     alt: 'Hyundai' },
            { logo: '/renault.png',     alt: 'Renault' },
            { logo: '/suzuki.png',      alt: 'Suzuki' },
            { logo: '/mitsubishi.png',  alt: 'Mitsubishi' },
            { logo: '/peugeot.png',     alt: 'Peugeot' },
            { logo: '/kia.png',         alt: 'Kia' },
            { logo: '/honda.png',       alt: 'Honda' },
            { logo: '/jetour.png',       alt: 'jetour' },
          ]} />
        </div>
      </div>

      {/* Available Cars */}
      <section className="mt-16 px-4 pb-16">
        <div className="max-w-7xl mx-auto">

          {/* Section heading + View all */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[var(--text-main)]">Available Cars</h2>
            <a href="/browse-cars" className="text-sm font-medium text-[var(--primary)] border border-[var(--primary)] px-4 py-1.5 rounded-[0.4rem] hover:bg-[var(--primary-soft)] transition">
              View all
            </a>
          </div>

          {/* Responsive grid: 1 col → 2 col → 3 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <CarCard
              image="/car1.jpg"
              name="Toyota Corolla"
              location="Yaoundé"
              price="25,000 FCFA"
              carClass="Basic"
              distance="3"
              year="2021"
            />
            <CarCard
              image="/car2.jpg"
              name="Honda CR-V"
              location="Douala"
              price="40,000 FCFA"
              carClass="Classic"
              distance="7"
              year="2022"
            />
            <CarCard
              image="/car3.jpg"
              name="Mercedes C-Class"
              location="Buea"
              price="65,000 FCFA"
              carClass="Luxury"
              distance="12"
              year="2023"
            />
            <CarCard
              image="/car4.jpg"
              name="Toyota RAV4"
              location="Yaoundé"
              price="35,000 FCFA"
              carClass="Classic"
              distance="5"
              year="2020"
            />
            <CarCard
              image="/car5.jpg"
              name="Hyundai Tucson"
              location="Douala"
              price="30,000 FCFA"
              carClass="Basic"
              distance="9"
              year="2022"
            />
            <CarCard
              image="/car6.jpg"
              name="BMW 5 Series"
              location="Bafoussam"
              price="80,000 FCFA"
              carClass="Luxury"
              distance="2"
              year="2024"
            />

          </div>

        </div>
      </section>

      {/* Real-time Car Location */}
      <section className="-mt-4 md:mt-2 px-4 pb-16">
        <div className="max-w-7xl mx-auto">

          {/* Introductory title */}
          <h1 className="text-3xl md:mb-10 sm:text-3xl text-center md:text-4xl font-bold text-[var(--primary)] mb-6">
            Real Time Car Location
          </h1>
          <div className="flex flex-col md:flex-row gap-5 md:min-h-[520px]">

            {/* LEFT PANEL — full section on mobile (map bg + overlay), plain card on desktop */}
            <div className="relative flex-1 soft-card overflow-hidden flex flex-col p-7 md:p-10">

              {/* Mobile only: map background image */}
              <div
                className="md:hidden absolute inset-0"
                style={{ backgroundImage: "url('/real-time-location-map.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              {/* Mobile only: white overlay at reduced opacity */}
              <div className="md:hidden absolute inset-0 bg-[var(--primary)]/80" />

              {/* All content sits above the mobile overlays */}
              <div className="relative z-10 flex flex-col flex-1">

                {/* Heading */}
                <h2 className="text-white md:text-[var(--primary)] font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
                  Car Location
                </h2>

                {/* Subtext */}
                <p className="mt-3 text-white/85 md:text-[var(--text-soft)] text-sm md:text-base leading-relaxed font-medium max-w-sm">
                  Find out the location of the car you&apos;re interested in in real-time. This will help speed up your decision making.
                </p>

                {/* Standalone icon — mobile version / desktop version */}
                <img
                  src="/real-time-location-ion-mobile.png"
                  alt="Real-time location"
                  className="md:hidden mt-6 w-16 h-16 object-contain"
                />
                <img
                  src="/real-time-location-icon.png"
                  alt="Real-time location"
                  className="hidden md:block mt-6 w-20 h-20 object-contain"
                />

                {/* Feature: See car location */}
                <div className="mt-5 flex items-center gap-2.5">
                  <div className="w-8 h-8 shrink-0 rounded-[0.4rem] bg-white/90 md:bg-[var(--primary-soft)] flex items-center justify-center">
                    <img src="/real-time-location-icon.png" alt="" className="w-4 h-4 object-contain" />
                  </div>
                  <span className="text-base font-medium text-white md:text-[var(--text-main)]">See car location</span>
                </div>

                {/* Spacer pushes CTA to bottom */}
                <div className="flex-1 min-h-[2rem]" />

                {/* Bottom CTA row: "See distance to car" left, button right */}
                <div className="flex items-center justify-between gap-4 mt-6 pt-5 border-t border-white/20 md:border-[var(--border-soft)]">
                  <span className="text-sm md:text-base font-semibold text-white md:text-[var(--text-main)]">See distance to car</span>
                  <button className="shrink-0 flex items-center gap-2 bg-white text-[var(--primary)] md:bg-[var(--primary)] md:text-white text-sm font-medium px-5 py-2.5 rounded-[0.4rem] hover:opacity-90 transition">
                    <img src="/map.png" alt="" className="w-4 h-4 object-contain" />
                    Open Map
                  </button>
                </div>

              </div>
            </div>

            {/* RIGHT PANEL — desktop only: map image */}
            <div
              className="hidden md:block w-[48%] rounded-3xl"
              style={{ backgroundImage: "url('/real-time-location-map.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            />

          </div>
        </div>
      </section>

      <Footer />

    </main>
  )
}