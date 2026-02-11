import { ScrollReveal } from '../components/scroll-reveal.component';
import { CommandmentTablet } from '../components/commandment-tablet.component';
import { commandments } from '../data/commandments.data';

export function CommandmentsSection() {
  return (
    <section id="commandments" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-cinzel text-3xl font-bold text-gold sm:text-4xl text-glow">
              The Ten Commandments
            </h2>
            <p className="mx-auto max-w-xl text-lg text-gray-400">
              Inscribed in the compiler. Enforced by the agents. Broken at your
              own peril.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {commandments.map((commandment, index) => (
            <ScrollReveal key={commandment.numeral} delay={index * 80}>
              <CommandmentTablet {...commandment} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
