import { useParams, Link } from 'react-router-dom';
import { ScrollReveal } from '../components/scroll-reveal.component';
import { CodeBlock } from '../components/code-block.component';
import { crusadeDetails } from '../data/crusades/index';
import type { CrusadeDetail } from '../data/crusade-detail.types';

function CrusadeNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-6 font-cinzel text-6xl text-gold text-glow-intense">
          &#10013;
        </div>
        <h1 className="mb-4 font-cinzel text-4xl font-bold text-gold text-glow">
          Crusade Not Found
        </h1>
        <p className="mb-8 text-lg text-gray-400">
          This crusade has not yet been ordained by the Holy Order.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-6 py-2 font-cinzel text-sm font-semibold uppercase tracking-widest text-gold transition-all duration-300 hover:border-gold/60 hover:bg-gold/20 hover:shadow-glow-lg"
        >
          Return to the Cathedral
        </Link>
      </div>
    </div>
  );
}

function SpecialistCard({
  specialist,
  index,
}: {
  readonly specialist: CrusadeDetail['specialists'][number];
  readonly index: number;
}) {
  return (
    <ScrollReveal delay={index * 100}>
      <div className="tablet-bg group rounded-lg border border-gold/10 p-6 transition-all duration-500 hover:border-gold/25 hover:shadow-glow">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-2xl">{specialist.icon}</span>
          <h3 className="font-cinzel text-lg font-bold text-gold">
            {specialist.name}
          </h3>
        </div>
        <p className="mb-2 text-xs uppercase tracking-widest text-gold-dim">
          {specialist.focus}
        </p>
        <p className="text-sm text-gray-400">{specialist.description}</p>
      </div>
    </ScrollReveal>
  );
}

function CrusadeContent({ crusade }: { readonly crusade: CrusadeDetail }) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="stained-glass relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-6">
        <div className="pointer-events-none absolute inset-0">
          <div
            className={`absolute left-1/4 top-1/4 h-64 w-64 animate-float rounded-full bg-gradient-to-br ${crusade.color} opacity-10 blur-3xl`}
          />
          <div
            className={`absolute right-1/4 top-1/3 h-48 w-48 animate-float rounded-full bg-gradient-to-br ${crusade.color} opacity-5 blur-3xl [animation-delay:2s]`}
          />
        </div>

        <div className="relative z-10 pt-16 text-center">
          <div className="mb-6 animate-flicker text-6xl">{crusade.icon}</div>

          <h1 className="mb-4 font-cinzel text-4xl font-black leading-tight tracking-wide text-gold sm:text-6xl lg:text-7xl text-glow-intense">
            {crusade.name}
          </h1>

          <p className="mx-auto mb-6 max-w-xl font-inter text-lg font-light tracking-wider text-gray-400 sm:text-xl">
            {crusade.tagline}
          </p>

          <CodeBlock code={`/church:${crusade.command.replace('/', '')}`} className="mx-auto max-w-md" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cathedral-dark to-transparent" />
      </section>

      {/* Battle Cry & Description */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <blockquote className="mb-12 border-l-4 border-gold/40 pl-6">
              <p className="font-cinzel text-xl italic text-gold sm:text-2xl text-glow">
                &ldquo;{crusade.battleCry}&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg leading-relaxed text-gray-300">
              {crusade.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-12 text-center font-cinzel text-3xl font-bold text-gold sm:text-4xl text-glow">
              How the Crusade Works
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {crusade.howItWorks.map((step, index) => (
              <ScrollReveal key={index} delay={index * 120}>
                <div className="flex items-start gap-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-cinzel text-lg font-bold text-gold">
                    {index + 1}
                  </div>
                  <p className="pt-1.5 text-gray-300">{step}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Commandments */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-4 text-center font-cinzel text-3xl font-bold text-gold sm:text-4xl text-glow">
              The Commandments
            </h2>
            <p className="mb-12 text-center text-gray-400">
              The sacred laws this crusade enforces. Break them at your peril.
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {crusade.commandments.map((commandment, index) => (
              <ScrollReveal key={commandment.numeral} delay={index * 80}>
                <div className="tablet-bg rounded-lg border border-gold/10 p-6 transition-all duration-500 hover:border-gold/25 hover:shadow-glow">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 font-cinzel text-2xl font-bold text-gold text-glow">
                      {commandment.numeral}
                    </span>
                    <p className="text-gray-300">{commandment.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="mb-4 text-center font-cinzel text-3xl font-bold text-gold sm:text-4xl text-glow">
              The Holy Squad
            </h2>
            <p className="mb-12 text-center text-gray-400">
              The specialist purist agents deployed during this crusade. Each carries
              only the doctrine they need.
            </p>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {crusade.specialists.map((specialist, index) => (
              <SpecialistCard
                key={specialist.name}
                specialist={specialist}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <div className="mb-4 font-cinzel text-3xl text-gold text-glow-intense">
              &#10013;
            </div>
            <h2 className="mb-6 font-cinzel text-3xl font-bold text-gold text-glow">
              Begin {crusade.name}
            </h2>
            <CodeBlock
              code={`/church:${crusade.command.replace('/', '')}`}
              className="mx-auto mb-8 max-w-md"
            />
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-gold-dim transition-colors hover:text-gold"
            >
              <span>&larr;</span> Explore all Crusades
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export function CrusadePage() {
  const { slug } = useParams<{ slug: string }>();
  const crusade = slug ? crusadeDetails[slug] : undefined;

  if (!crusade) {
    return <CrusadeNotFound />;
  }

  return <CrusadeContent crusade={crusade} />;
}
