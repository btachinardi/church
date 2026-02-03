import { CopyButton } from '../components/copy-button.component';
import { ScrollReveal } from '../components/scroll-reveal.component';

const commands = [
  {
    comment: 'Add the holy marketplace',
    command: '/plugin marketplace add btachinardi/church',
  },
  {
    comment: 'Install the sacred plugin',
    command: '/plugin install church@btachinardi-church',
  },
] as const;

const crusades = [
  '/church:type-crusade',
  '/church:git-crusade',
  '/church:test-crusade',
] as const;

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
            <p className="mb-4 text-xs uppercase tracking-widest text-gold-dim">
              The Sacred Installation
            </p>
            <div className="space-y-4">
              {commands.map((item) => (
                <div key={item.command}>
                  <p className="mb-1 text-xs text-gray-500"># {item.comment}</p>
                  <div className="flex items-center justify-between gap-2 rounded bg-black/40 px-3 py-2">
                    <code className="font-mono text-sm text-parchment">
                      {item.command}
                    </code>
                    <CopyButton text={item.command} />
                  </div>
                </div>
              ))}

              <div>
                <p className="mb-1 text-xs text-gray-500"># Unleash the crusades</p>
                <div className="space-y-1">
                  {crusades.map((cmd) => (
                    <div
                      key={cmd}
                      className="flex items-center justify-between gap-2 rounded bg-black/40 px-3 py-2"
                    >
                      <code className="font-mono text-sm text-gold">{cmd}</code>
                      <CopyButton text={cmd} />
                    </div>
                  ))}
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  # ... and 7 more holy instruments
                </p>
              </div>
            </div>
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
