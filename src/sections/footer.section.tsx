import { ScrollReveal } from '../components/scroll-reveal.component';

export function FooterSection() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <div className="mb-4 font-cinzel text-3xl text-gold text-glow-intense">
            &#10013;
          </div>
          <h2 className="mb-6 font-cinzel text-3xl font-bold text-gold sm:text-4xl text-glow">
            Join the Holy Order
          </h2>
          <p className="mb-10 text-lg text-gray-400">
            Install the sacred arsenal. Let the crusades cleanse your codebase.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mb-12 overflow-hidden rounded-lg border border-gold/15 bg-cathedral-deep p-6 text-left">
            <p className="mb-3 text-xs uppercase tracking-widest text-gold-dim">
              The Sacred Installation
            </p>
            <pre className="overflow-x-auto text-sm leading-relaxed">
              <code className="text-gray-300">
                <span className="text-gray-500"># Add the holy marketplace</span>
                {'\n'}
                <span className="text-gold">/plugin marketplace add</span>{' '}
                <span className="text-parchment">btachinardi/church</span>
                {'\n\n'}
                <span className="text-gray-500"># Install the sacred plugin</span>
                {'\n'}
                <span className="text-gold">/plugin install</span>{' '}
                <span className="text-parchment">church@btachinardi-church</span>
                {'\n\n'}
                <span className="text-gray-500"># Unleash the crusades</span>
                {'\n'}
                <span className="text-gold">/church:type-crusade</span>
                {'\n'}
                <span className="text-gold">/church:git-crusade</span>
                {'\n'}
                <span className="text-gold">/church:test-crusade</span>
                {'\n'}
                <span className="text-gray-500">
                  # ... and 7 more holy instruments
                </span>
              </code>
            </pre>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="mb-8 font-cinzel text-sm tracking-widest text-gold-dim">
            May your types be strong and your builds be green.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-600">
            <span>&#10013; In Code We Trust &#10013;</span>
            <span>10 Crusades</span>
            <span>10 Commandments</span>
            <span>Opus-Powered</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
