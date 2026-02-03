interface CrusadeCardProps {
  readonly name: string;
  readonly command: string;
  readonly icon: string;
  readonly tagline: string;
  readonly quote: string;
  readonly color: string;
  readonly index: number;
}

export function CrusadeCard({
  name,
  command,
  icon,
  tagline,
  quote,
  color,
  index,
}: CrusadeCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-lg border border-gold/10 bg-cathedral-deep/80 p-6 transition-all duration-500 hover:border-gold/30 hover:shadow-glow"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
      />

      <div className="relative z-10">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <div>
            <h3 className="font-cinzel text-lg font-bold text-gold">
              {name}
            </h3>
            <code className="text-xs text-gold-dim">{command}</code>
          </div>
        </div>

        <p className="mb-4 text-sm text-gray-400">{tagline}</p>

        <blockquote className="border-l-2 border-gold/30 pl-3 text-xs italic text-gray-500">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
    </div>
  );
}
