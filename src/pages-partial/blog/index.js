import BlogSection from "../home/blog";
import Contact from "../home/contact";
import Footer from "../home/footer";
import Header from "../home/header";
import AllBlogSection from "./all-blogs-section";
import BlogHeroSection from "./hero";

export default function Blog() {
  return (
    <main className="w-full">
      <Header />
      <BlogHeroSection />
      <AllBlogSection itemsPerPage={3} className='max-w-[1440px] mx-auto' />
      <BlogSection count={6} />
      <Contact />
      <Footer />
    </main>
  );
}
