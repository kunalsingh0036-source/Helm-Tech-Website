import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Shotgun } from "@/components/Shotgun";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Differentiators } from "@/components/Differentiators";
import { Team } from "@/components/Team";
import { Results } from "@/components/Results";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Shotgun />
      <Portfolio />
      <Process />
      <Differentiators />
      <Team />
      <Results />
      <Contact />
      <Footer />
    </>
  );
}
