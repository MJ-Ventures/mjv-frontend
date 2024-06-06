import AboutUs from "./about-us";
import CaseStudies from "./case-studies";
import FaqSection from "./faq";
import Header from "./header";
import Hero from "./hero";
import OurServices from "./our-services";
import OurTeam from "./our-team";
import PartnerSection from "./partners";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <Header />
      <Hero />
      <CaseStudies />
      <PartnerSection />
      <AboutUs />
      <OurServices />
      <FaqSection />
      <OurTeam />
    </main>
  );
}
