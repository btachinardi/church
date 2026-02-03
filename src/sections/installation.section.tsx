import { CodeBlock } from '../components/code-block.component';
import { ScrollReveal } from '../components/scroll-reveal.component';

const steps = [
  {
    step: 1,
    title: 'Add the Marketplace',
    command: '/plugin marketplace add btachinardi/church',
    description: 'Register the Church repository as a plugin source',
  },
  {
    step: 2,
    title: 'Install the Plugin',
    command: '/plugin install church@btachinardi-church',
    description: 'Download and activate the holy artifacts',
  },
  {
    step: 3,
    title: 'Begin the Crusade',
    command: '/church:type-crusade',
    description: 'Unleash the purists upon your codebase',
  },
] as const;

export function InstallationSection() {
  return (
    <section id="installation" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-cinzel text-3xl font-bold text-gold sm:text-4xl text-glow">
              Join the Order
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Three commands. That is all that stands between you and code
              salvation.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {steps.map((item, index) => (
            <ScrollReveal key={item.step} delay={index * 150}>
              <div className="tablet-bg group rounded-lg border border-gold/10 p-6 transition-all duration-500 hover:border-gold/25 hover:shadow-glow">
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-cinzel text-xl font-bold text-gold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 font-cinzel text-lg font-bold text-gold">
                      {item.title}
                    </h3>
                    <CodeBlock code={item.command} className="mb-3" />
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="mt-12 rounded-lg border border-holy-purple/20 bg-holy-purple/5 p-6">
            <h4 className="mb-3 font-cinzel text-lg font-bold text-holy-purple">
              Installation Scopes
            </h4>
            <div className="grid gap-4 text-sm sm:grid-cols-3">
              <div>
                <code className="text-gold">--scope user</code>
                <p className="mt-1 text-gray-400">
                  Install for yourself across all projects
                </p>
              </div>
              <div>
                <code className="text-gold">--scope project</code>
                <p className="mt-1 text-gray-400">
                  Install for all collaborators on this repo
                </p>
              </div>
              <div>
                <code className="text-gold">--scope local</code>
                <p className="mt-1 text-gray-400">
                  Install for yourself in this repo only
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <p className="mt-8 text-center text-sm text-gray-500">
            Requires Claude Code v1.0.33 or later.{' '}
            <code className="text-gold-dim">claude --version</code> to check.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
