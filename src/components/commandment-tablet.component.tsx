interface CommandmentTabletProps {
  readonly numeral: string;
  readonly text: string;
  readonly crusade: string;
}

export function CommandmentTablet({ numeral, text, crusade }: CommandmentTabletProps) {
  return (
    <div className="tablet-bg group flex gap-4 rounded-lg border border-gold/10 p-5 transition-all duration-300 hover:border-gold/25 hover:shadow-glow">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-cathedral-dark font-cinzel text-lg font-bold text-gold">
        {numeral}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm leading-relaxed text-gray-300">{text}</p>
        <span className="text-xs font-medium uppercase tracking-wider text-gold-dim">
          {crusade} Crusade
        </span>
      </div>
    </div>
  );
}
