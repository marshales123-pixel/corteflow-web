import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Features from "@/components/Features";
import Pasos from "@/components/Pasos";
import Producto from "@/components/Producto";
import Clientes from "@/components/Clientes";
import Planes from "@/components/Planes";
import FAQ from "@/components/FAQ";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problema />
        <Features />
        <Producto />
        <Clientes />
        <Pasos />
        <Planes />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
