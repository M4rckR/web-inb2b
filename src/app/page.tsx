import { HeroOverlay } from "@/components/pages/home/HeroOverlay";
import { AboutSection } from "@/components/pages/home/AboutSection";
import { ScheduleServices } from "@/components/pages/home/ScheduleServices";

export default function Home() {
  return (
    <>
      <header>
        <HeroOverlay />
      </header>

      <main>
        <AboutSection />
        <ScheduleServices />
      </main>
    </>
  );
}
