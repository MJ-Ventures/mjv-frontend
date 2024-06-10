import AboutUs from "./about-us";
import BlogSection from "./blog";
import CaseStudies from "./case-studies";
import Contact from "./contact";
import FaqSection from "./faq";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import OurServices from "./our-services";
import OurTeam from "./our-team";
import PartnerSection from "./partners";
import Testimonials from "./testimonials";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto bg-black">
      <Header />
      <Hero />
      <CaseStudies />
      <PartnerSection />
      <AboutUs />
      <OurServices />
      <FaqSection />
      <OurTeam />
      <Testimonials />
      <BlogSection count={3} />
      <Contact /> 
      <Footer />
    </main>
  );
}
