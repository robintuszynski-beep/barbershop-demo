import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Expertise } from "@/components/Expertise";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <main>
        <Hero />
        <Services />
        <Expertise />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
