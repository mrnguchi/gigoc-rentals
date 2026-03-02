"use client";
import { useState } from "react";

const NAV_LINKS = ["Home", "Browse Cars", "List Your Car", "About Us"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="sticky top-4 z-50">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="soft-card rounded-[0.4rem] flex items-center justify-between px-3 md:px-6 py-3">

          {/* Logo — always on the left */}
          <div className="flex-start -mr-4">
            <img src="/gigoc-logo.png" alt="GiGOC" className="h-10 w-auto" />
          </div>

          {/* Nav links — desktop only */}
          <div className="hidden md:flex items-center gap-1 text-[17px]">
            {NAV_LINKS.map((link) => {
              const isActive = activeLink === link;
              return (
                <a
                  key={link}
                  href="#"
                  onClick={() => setActiveLink(link)}
                  className={`relative px-3 py-1.5 rounded-lg transition-colors ${
                    isActive
                      ? "text-[var(--primary)] font-medium"
                      : "text-[var(--text-soft)] hover:text-[var(--primary)] hover:bg-[var(--primary-soft)]"
                  }`}
                >
                  {link}
                  {/* Short underline indicator — only on active */}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3/5 h-[2px] rounded-full bg-[var(--primary)]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right side: actions on desktop, hamburger on mobile */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="text-[17px] font-medium text-[var(--text-soft)] hover:text-[var(--text-main)] transition-colors">Login</a>
              <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-[0.4rem] shadow-soft hover:opacity-90 transition">
                Rent a Car
              </button>
            </div>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden text-[var(--text-soft)] hover:text-[var(--text-main)] transition"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>

        {/* Mobile dropdown menu — absolutely positioned so it overlays content */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 z-50 soft-card mt-2 rounded-[0.4rem] px-4 py-4 flex flex-col gap-1 text-sm">
            {NAV_LINKS.map((link) => {
              const isActive = activeLink === link;
              return (
                <a
                  key={link}
                  href="#"
                  onClick={() => { setActiveLink(link); setMenuOpen(false); }}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "text-[var(--primary)] font-medium bg-[var(--primary-soft)]"
                      : "text-[var(--text-soft)] hover:text-[var(--primary)] hover:bg-[var(--primary-soft)]"
                  }`}
                >
                  {link}
                </a>
              );
            })}
            <hr className="border-[var(--border-soft)] my-2" />
            <a href="#" className="px-3 py-2 rounded-lg text-[var(--text-soft)] hover:text-[var(--primary)] hover:bg-[var(--primary-soft)] transition-colors">Login</a>
            <button className="mt-1 bg-[var(--primary)] text-white px-4 py-2 rounded-[0.4rem] hover:opacity-90 transition w-full">
              Rent a Car
            </button>
          </div>
        )}

      </div>
    </nav>
  );
}