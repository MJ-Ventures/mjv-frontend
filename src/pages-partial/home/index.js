'use client';

import Modal from "@/components/ui/modal";
import AboutUs from "./about-us";
import BlogSection from "./blog";
import CaseStudies from "./case-studies";
import Contact from "./contact";
import ContactForm from "./contact/form";
import FaqSection from "./faq";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import OurServices from "./our-services";
import OurTeam from "./our-team";
import PartnerSection from "./partners";
import Testimonials from "./testimonials";
import { useModal } from "@/providers/modalProvider";

export default function Home() {
  const { open, setOpen } = useModal();

  const renderModal = () => {
    return (
      <Modal
        open={open}
        setOpen={setOpen}
        className="bg-black max-w-screen-lg p-10 relative z-50"
        bgClassName="backdrop-blur-md"
      >
        <ContactForm />
      </Modal>
    );
  };

  return (
    <>
      <main className="w-full">
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
      {renderModal()}
    </>
  );
}
