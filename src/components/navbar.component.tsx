import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { crusades } from '../data/crusades.data';

const homeLinks = [
  { label: 'Gospel', href: '/#gospel' },
  { label: 'Crusades', href: '/#crusades' },
  { label: 'Commandments', href: '/#commandments' },
  { label: 'Bestiary', href: '/#bestiary' },
] as const;

export function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-gold/10 bg-cathedral-dark/95 backdrop-blur-md shadow-glow'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-cinzel text-sm font-bold tracking-wider text-gold transition-colors hover:text-gold-bright"
        >
          <span className="text-lg">&#10013;</span>
          <span className="hidden sm:inline">The Holy Order</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {isHome ? (
            homeLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded px-3 py-1.5 font-cinzel text-xs uppercase tracking-widest text-gray-400 transition-colors hover:bg-gold/5 hover:text-gold"
              >
                {link.label}
              </a>
            ))
          ) : (
            <Link
              to="/"
              className="rounded px-3 py-1.5 font-cinzel text-xs uppercase tracking-widest text-gray-400 transition-colors hover:bg-gold/5 hover:text-gold"
            >
              Home
            </Link>
          )}

          {/* Crusade dropdown */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 rounded px-3 py-1.5 font-cinzel text-xs uppercase tracking-widest text-gray-400 transition-colors hover:bg-gold/5 hover:text-gold"
            >
              Crusades
              <svg
                className="h-3 w-3 transition-transform group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="invisible absolute right-0 top-full w-64 rounded-lg border border-gold/10 bg-cathedral-deep/98 py-2 opacity-0 shadow-glow backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {crusades.map((crusade) => (
                <Link
                  key={crusade.slug}
                  to={`/crusade/${crusade.slug}`}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 transition-colors hover:bg-gold/5 hover:text-gold"
                >
                  <span>{crusade.icon}</span>
                  <span className="font-cinzel text-xs">{crusade.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded p-2 text-gray-400 transition-colors hover:text-gold md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gold/10 bg-cathedral-dark/98 px-6 py-4 backdrop-blur-md md:hidden">
          <div className="space-y-1">
            {isHome ? (
              homeLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded px-3 py-2 font-cinzel text-xs uppercase tracking-widest text-gray-400 transition-colors hover:bg-gold/5 hover:text-gold"
                >
                  {link.label}
                </a>
              ))
            ) : (
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="block rounded px-3 py-2 font-cinzel text-xs uppercase tracking-widest text-gray-400 transition-colors hover:bg-gold/5 hover:text-gold"
              >
                Home
              </Link>
            )}

            <div className="pb-1 pt-3">
              <p className="px-3 font-cinzel text-[10px] uppercase tracking-widest text-gold-dim">
                Crusades
              </p>
            </div>
            {crusades.map((crusade) => (
              <Link
                key={crusade.slug}
                to={`/crusade/${crusade.slug}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 rounded px-3 py-2 text-sm text-gray-400 transition-colors hover:bg-gold/5 hover:text-gold"
              >
                <span>{crusade.icon}</span>
                <span className="font-cinzel text-xs">{crusade.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
