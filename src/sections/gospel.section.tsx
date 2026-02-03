import { ScrollReveal } from '../components/scroll-reveal.component';

const pillars = [
  {
    icon: '🏛️',
    name: 'Purity',
    description:
      'The code is TYPED. The architecture has BOUNDARIES. The domain depends on NOTHING. Purity is not idealism — it is the foundation upon which everything else stands.',
    domains: 'Types, Architecture, Naming',
  },
  {
    icon: '👁️',
    name: 'Vigilance',
    description:
      'Every function is TESTED. Every secret is GUARDED. Every error is OBSERVED. We do not hope our code works — we PROVE it, we WATCH it, we PROTECT it.',
    domains: 'Tests, Security, Observability',
  },
  {
    icon: '⚖️',
    name: 'Discipline',
    description:
      'Every commit is ATOMIC. Every file has BOUNDARIES. Every dependency EARNS its place. Discipline is not restriction — it is the practice that sets code FREE.',
    domains: 'Git, Size, Dependencies, Dead Code',
  },
] as const;

export function GospelSection() {
  return (
    <section id="gospel" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-cinzel text-3xl font-bold text-gold sm:text-4xl text-glow">
              The Gospel
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Clean code is not a preference. It is not a &ldquo;nice to
              have.&rdquo; It is the SACRED COVENANT between the developer and
              every soul who will read, maintain, and depend on their work.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.name} delay={index * 150}>
              <div className="tablet-bg group h-full rounded-lg border border-gold/10 p-8 text-center transition-all duration-500 hover:border-gold/25 hover:shadow-glow">
                <div className="mb-4 text-5xl">{pillar.icon}</div>
                <h3 className="mb-3 font-cinzel text-xl font-bold text-gold">
                  {pillar.name}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-400">
                  {pillar.description}
                </p>
                <p className="text-xs uppercase tracking-widest text-gold-dim">
                  {pillar.domains}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
