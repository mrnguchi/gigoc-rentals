export default function Footer() {
  return (
    <footer className="mt-5 relative">

      {/* ── TOP BANNER ── */}
      <div className="relative    z-10 px-4 -mb-50 md:-mb-48 ">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[var(--primary)] rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-16 px-8 sm:px-10 md:px-14 py-5 md:py-8">

            {/* Car image — vertically centered in the card */}
            <img
              src="/footer-car2.png"
              alt="Car"
              className="w-60 sm:w-48 md:w-80 object-contain shrink-0 drop-shadow-xl"
            />

            {/* Right content */}
            <div className="flex -mt-10 flex-col gap-3 flex-1 max-w-md">
              <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl leading-tight">
                Stay ahead &mdash; get our latest updates to make the most out of our platform
              </h2>
              <p className="text-white/75 text-xs sm:text-sm leading-relaxed">
                Subscribe and be the first to discover new cars, exclusive deals, and rental tips from Gigoc Rentals.
              </p>

              {/* Pill-shaped email input */}
              <div className="flex flex-row items-center rounded-[0.5rem] bg-white mt-1 pr-1">
                <svg className="ml-3 shrink-0 w-4 h-4 fill-none stroke-[var(--text-soft)]" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-3 py-2.5 bg-transparent placeholder:text-[var(--text-soft)] text-[var(--text-main)] text-sm outline-none"
                />
                <button className="shrink-0 bg-[var(--primary)] text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-[0.5rem] hover:opacity-90 transition">
                  Subscribe
                </button>
              </div>

              <p className="text-white/50 text-xs">You can unsubscribe at any time. No spam, ever.</p>
            </div>

          </div>
        </div>
      </div>


      {/* ── BOTTOM SECTION ── soft-card at 90% width, padded top to clear the overlapping banner */}
      <div className="w-full pt-32 md:pt-25 pb-8">
        <div className="w-[97%] mx-auto soft-card px-8 md:px-12 py-10">

          {/* Main columns grid */}
          <div className="grid grid-cols-1 mt-15 md:mt-[1rem] sm:grid-cols-2 md:grid-cols-5 md:pt-17 gap-10 pb-10 border-b border-[var(--border-soft)]">

            {/* Col 1: Logo + tagline + social icons */}
            <div className="sm:col-span-2 md:col-span-1 flex flex-col gap-4">
              <img src="/gigoc-logo.png" alt="Gigoc Rentals" className="h-10 w-auto object-contain object-left" />
              <p className="text-sm text-[var(--text-soft)] leading-relaxed">
                Your trusted platform for easy, affordable car rentals across Cameroon.
              </p>
              <div className="flex gap-3 mt-1">
                <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-[var(--primary-soft)] flex items-center justify-center hover:bg-[var(--primary)] group transition">
                  <svg className="w-4 h-4 fill-[var(--primary)] group-hover:fill-white transition" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-[var(--primary-soft)] flex items-center justify-center hover:bg-[var(--primary)] group transition">
                  <svg className="w-4 h-4 fill-[var(--primary)] group-hover:fill-white transition" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-[var(--primary-soft)] flex items-center justify-center hover:bg-[var(--primary)] group transition">
                  <svg className="w-4 h-4 fill-[var(--primary)] group-hover:fill-white transition" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path fill="white" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-[var(--primary-soft)] flex items-center justify-center hover:bg-[var(--primary)] group transition">
                  <svg className="w-4 h-4 fill-[var(--primary)] group-hover:fill-white transition" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>

            {/* Col 2: Company */}
            <div>
              <h4 className="font-semibold text-[var(--text-main)] mb-4">Company</h4>
              <ul className="space-y-2.5 text-sm text-[var(--text-soft)]">
                <li><a href="#" className="hover:text-[var(--primary)] transition">About Us</a></li>
                <li><a href="#" className="hover:text-[var(--primary)] transition">How It Works</a></li>
                
                <li><a href="#" className="hover:text-[var(--primary)] transition">Blog</a></li>
              </ul>
            </div>

            {/* Col 3: Support */}
            <div>
              <h4 className="font-semibold text-[var(--text-main)] mb-4">Support</h4>
              <ul className="space-y-2.5 text-sm text-[var(--text-soft)]">
                <li><a href="#" className="hover:text-[var(--primary)] transition">Help Center</a></li>
                <li><a href="#" className="hover:text-[var(--primary)] transition">FAQs</a></li>
                <li><a href="#" className="hover:text-[var(--primary)] transition">Report an Issue</a></li>
                <li><a href="#" className="hover:text-[var(--primary)] transition">Cancellation Policy</a></li>
              </ul>
            </div>

            {/* Col 4: Links */}
            <div>
              <h4 className="font-semibold text-[var(--text-main)] mb-4">Links</h4>
              <ul className="space-y-2.5 text-sm text-[var(--text-soft)]">
                <li><a href="#" className="hover:text-[var(--primary)] transition">Browse Cars</a></li>
                <li><a href="#" className="hover:text-[var(--primary)] transition">List Your Car</a></li>
                
                <li><a href="#" className="hover:text-[var(--primary)] transition">Partner With Us</a></li>
              </ul>
            </div>

            {/* Col 5: Contact Us — with phone and mail icons */}
            <div>
              <h4 className="font-semibold text-[var(--text-main)] mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-[var(--text-soft)]">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 shrink-0 mt-0.5 fill-none stroke-[var(--primary)]" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>+237 680 000 000</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 shrink-0 mt-0.5 fill-none stroke-[var(--primary)]" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  <span>support@gigoc.com</span>
                </li>
                <li>Yaound&eacute;, Cameroon</li>
                <li>Mon &ndash; Sat, 8am &ndash; 6pm</li>
              </ul>
            </div>

          </div>

          {/* Copyright bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-xs text-[var(--text-soft)]">
            <p>&copy; Copyright by Gigoc Rentals. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-end">
              <a href="#" className="hover:text-[var(--primary)] transition">Privacy Policy</a>
              <a href="#" className="hover:text-[var(--primary)] transition">Terms of Use</a>
              <a href="#" className="hover:text-[var(--primary)] transition">Legal</a>
              <a href="#" className="hover:text-[var(--primary)] transition">Site Map</a>
            </div>
          </div>

        </div>
      </div>

    </footer>
  )
}