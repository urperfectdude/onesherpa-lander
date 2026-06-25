import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Logos } from "@/components/logos";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { Comparison } from "@/components/comparison";
import { Capabilities } from "@/components/capabilities";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Logos />
        <Features />
        <HowItWorks />
        <Comparison />
        <Capabilities />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
