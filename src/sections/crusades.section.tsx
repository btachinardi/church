import { ScrollReveal } from '../components/scroll-reveal.component';
import { CrusadeCard } from '../components/crusade-card.component';
import { crusades } from '../data/crusades.data';

export function CrusadesSection() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-cinzel text-3xl font-bold text-gold sm:text-4xl text-glow">
              The Ten Crusades
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Each crusade deploys parallel squads of Opus-powered agents across
              your codebase. They scan. They judge. They FIX. No sin escapes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {crusades.map((crusade, index) => (
            <ScrollReveal key={crusade.command} delay={index * 80}>
              <CrusadeCard {...crusade} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
