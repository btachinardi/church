import { HeroSection } from './sections/hero.section';
import { InstallationSection } from './sections/installation.section';
import { GospelSection } from './sections/gospel.section';
import { CrusadesSection } from './sections/crusades.section';
import { CommandmentsSection } from './sections/commandments.section';
import { BestiarySection } from './sections/bestiary.section';
import { FooterSection } from './sections/footer.section';

export function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <InstallationSection />
      <GospelSection />
      <CrusadesSection />
      <CommandmentsSection />
      <BestiarySection />
      <FooterSection />
    </div>
  );
}
