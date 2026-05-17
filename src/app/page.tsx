import Hero from "@/components/home/hero";
import Intro from "@/components/home/intro";
import Clients from "@/components/home/clients";
import WorkShowcase from "@/components/home/work-showcase";
import Mission from "@/components/home/mission";
import Lens from "@/components/home/lens";
import BuiltDifferent from "@/components/home/built-different";
import Services from "@/components/home/services";
import Process from "@/components/home/pricing";
import CTA from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Clients />
      <WorkShowcase />
      <Mission />
      <Lens />
      <BuiltDifferent />
      <Services />
      <Process />
      <CTA />
    </>
  );
}
