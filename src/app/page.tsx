import Hero from "@/app/components/Hero";
import Seperator from "@/app/components/Seperator";
import AboutUs from "@/app/components/AboutUs";
import Projects from "@/app/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Seperator />
      <AboutUs />
      <Projects />
    </main>
  );
}
