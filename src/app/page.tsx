import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Features from "@/components/Features";
import Pasos from "@/components/Pasos";
import Demo from "@/components/Demo";
import Planes from "@/components/Planes";
import FAQ from "@/components/FAQ";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problema />
      <Features />
      <Pasos />
      <Demo />
      <Planes />
      <FAQ />
      <Contacto />
    </main>
  );
}
