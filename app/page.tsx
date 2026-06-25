import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Positioning } from "@/components/positioning";
import { TwoPaths } from "@/components/two-paths";
import { Moat } from "@/components/moat";
import { Proof } from "@/components/proof";
import { Programs } from "@/components/programs";
import { Toolkit } from "@/components/toolkit";
import { Process } from "@/components/process";
import { Why } from "@/components/why";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Positioning />
        <TwoPaths />
        <Moat />
        <Proof />
        <Programs />
        <Toolkit />
        <Process />
        <Why />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
