export function HeroSection() {
  return (
    <section className="stained-glass relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-float rounded-full bg-holy-purple/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-48 w-48 animate-float rounded-full bg-gold/5 blur-3xl [animation-delay:2s]" />
        <div className="absolute bottom-1/4 left-1/2 h-56 w-56 animate-float rounded-full bg-blood/5 blur-3xl [animation-delay:4s]" />
      </div>

      <div className="relative z-10 text-center">
        {/* Cross symbol */}
        <div className="mb-6 animate-flicker font-cinzel text-5xl text-gold text-glow-intense">
          &#10013;
        </div>

        <h1 className="mb-4 font-cinzel text-5xl font-black leading-tight tracking-wide text-gold sm:text-7xl lg:text-8xl text-glow-intense">
          The Holy Order
          <br />
          <span className="text-parchment">of Clean Code</span>
        </h1>

        <p className="mx-auto mb-10 max-w-xl font-inter text-lg font-light tracking-wider text-gray-400 sm:text-xl">
          In Code We Trust. In Types We Believe. In Tests We Prove.
        </p>

        <a
          href="#gospel"
          className="group inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-8 py-3 font-cinzel text-sm font-semibold uppercase tracking-widest text-gold transition-all duration-300 hover:border-gold/60 hover:bg-gold/20 hover:shadow-glow-lg"
        >
          Enter the Cathedral
          <span className="transition-transform duration-300 group-hover:translate-y-1">
            ↓
          </span>
        </a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cathedral-dark to-transparent" />
    </section>
  );
}
