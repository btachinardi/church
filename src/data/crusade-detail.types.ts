export interface CrusadeSpecialist {
  readonly name: string;
  readonly icon: string;
  readonly focus: string;
  readonly description: string;
}

export interface CrusadeCommandment {
  readonly numeral: string;
  readonly text: string;
}

export interface CrusadeDetail {
  readonly slug: string;
  readonly name: string;
  readonly command: string;
  readonly icon: string;
  readonly tagline: string;
  readonly quote: string;
  readonly color: string;
  readonly gradientFrom: string;
  readonly gradientTo: string;
  readonly description: string;
  readonly battleCry: string;
  readonly commandments: readonly CrusadeCommandment[];
  readonly specialists: readonly CrusadeSpecialist[];
  readonly howItWorks: readonly string[];
}
