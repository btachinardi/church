interface Commandment {
  readonly numeral: string;
  readonly text: string;
  readonly crusade: string;
}

export const commandments: readonly Commandment[] = [
  {
    numeral: 'I',
    text: '`any` is the Devil. Thou shalt use `unknown`, generics, and discriminated unions.',
    crusade: 'Type',
  },
  {
    numeral: 'II',
    text: 'Thou shalt never swallow errors silently. Every catch block shall log with context.',
    crusade: 'Observability',
  },
  {
    numeral: 'III',
    text: 'One commit, one logical change. No more, no less. The message shall be conventional.',
    crusade: 'Git',
  },
  {
    numeral: 'IV',
    text: 'No file shall exceed 500 lines. God classes are abominations.',
    crusade: 'Size',
  },
  {
    numeral: 'V',
    text: 'If it is not tested, it does not work. Thou shalt prove with assertions, not faith.',
    crusade: 'Test',
  },
  {
    numeral: 'VI',
    text: 'The Domain shall depend on NOTHING. It is pure. It is sacred.',
    crusade: 'Architecture',
  },
  {
    numeral: 'VII',
    text: 'Every dependency must justify its existence. If it serves one function, write it yourself.',
    crusade: 'Dependency',
  },
  {
    numeral: 'VIII',
    text: 'Names are documentation. `data`, `temp`, `stuff` — these are LIES, not names.',
    crusade: 'Naming',
  },
  {
    numeral: 'IX',
    text: 'Dead code is a corpse. Git remembers so you do not have to. Bury it.',
    crusade: 'Dead Code',
  },
  {
    numeral: 'X',
    text: 'No secret shall be committed. If it touched git history, it is COMPROMISED. Rotate immediately.',
    crusade: 'Secret',
  },
] as const;
