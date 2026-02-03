import { ScrollReveal } from '../components/scroll-reveal.component';
import { CreatureCard } from '../components/creature-card.component';
import { bestiary } from '../data/bestiary.data';

export function BestiarySection() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      {/* Red ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-blood/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full bg-blood/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-cinzel text-3xl font-bold text-blood-bright sm:text-4xl">
              The Bestiary
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Know thy enemy. These are the creatures that lurk in
              undisciplined codebases — growing in the dark, feeding on
              negligence, devouring maintainability.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bestiary.map((creature, index) => (
            <ScrollReveal key={creature.name} delay={index * 120}>
              <CreatureCard {...creature} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
