import CaseStudies from "../home/case-studies";
import Contact from "../home/contact";
import Footer from "../home/footer";
import Header from "../home/header";
import CaseStudiesMain from "./main";

export default function CaseStudy() {
  return (
    <main>
      <Header />
      <CaseStudiesMain />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  );
}
