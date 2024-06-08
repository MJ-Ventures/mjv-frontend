import BlogSection from "../home/blog";
import Contact from "../home/contact";
import Footer from "../home/footer";
import Header from "../home/header";

export default function Blog() {
  return (
    <main className="max-w-[1440px] mx-auto bg-black">
      <Header />
      <BlogSection count={6} />
      <Contact />
      <Footer />
    </main>
  );
}
