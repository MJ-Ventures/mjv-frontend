import CaseStudies from "../home/case-studies";
import Contact from "../home/contact";
import Footer from "../home/footer";
import Header from "../home/header";
import CaseStudiesMain from "./main";

export default function CaseStudy({ id }) {
  return (
    <main className="w-full">
      <Header />
      <CaseStudiesMain id={id} />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  );
}
