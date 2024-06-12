import BlogSection from "../home/blog";
import Contact from "../home/contact";
import Footer from "../home/footer";
import Header from "../home/header";
import AllBlogSection from "./all-blogs";
import BlogHeroSection from "./hero";

export default function Blog() {
  return (
    <main className="max-w-[1440px] mx-auto bg-black">
      <Header />
      <BlogHeroSection />
      <AllBlogSection />
      <BlogSection count={6} />
      <Contact />
      <Footer />
    </main>
  );
}
