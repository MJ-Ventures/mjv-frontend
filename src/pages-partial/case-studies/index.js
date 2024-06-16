import Contact from "../home/contact";
import Footer from "../home/footer";
import Header from "../home/header";
import CaseStudiesCards from "./cards";
import CaseStudiesHero from "./hero";

export default function CaseStudies() {
  return (
    <main>
      <Header className="!bg-[#151515]" />
      <CaseStudiesHero />
      <CaseStudiesCards />
      <Contact />
      <Footer />
    </main>
  );
}
