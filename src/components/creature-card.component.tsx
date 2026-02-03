interface CreatureCardProps {
  readonly name: string;
  readonly icon: string;
  readonly description: string;
  readonly habitat: string;
  readonly weakness: string;
}

export function CreatureCard({
  name,
  icon,
  description,
  habitat,
  weakness,
}: CreatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-blood/20 bg-cathedral-deep/80 p-6 transition-all duration-500 hover:border-blood-bright/30 hover:shadow-[0_0_20px_rgba(139,26,26,0.2)]">
      <div className="absolute inset-0 bg-gradient-to-br from-blood/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-4xl">{icon}</span>
          <h3 className="font-cinzel text-lg font-bold text-blood-bright">
            {name}
          </h3>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-gray-400">
          {description}
        </p>

        <div className="space-y-2 text-xs">
          <div>
            <span className="font-semibold uppercase tracking-wider text-gray-500">
              Habitat:{' '}
            </span>
            <span className="text-gray-400">{habitat}</span>
          </div>
          <div>
            <span className="font-semibold uppercase tracking-wider text-green-600">
              Weakness:{' '}
            </span>
            <span className="text-green-400/80">{weakness}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
