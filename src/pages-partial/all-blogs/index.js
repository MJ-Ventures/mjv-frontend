import Header from "../home/header";
import Footer from "../home/footer";
import AllBlogSection from "../blog/all-blogs-section";
import NewsLetter from "../home/news-letter";

export default function AllBlogs() {
  return (
    <main className="w-full">
      <Header />
      <AllBlogSection itemsPerPage={8} className="lg:bg-[#151515] bg-transparent" />
      <div className="bg-black max-w-[1440px] mx-auto lg:p-20 p-6">
        <NewsLetter />
      </div>
      <Footer />
    </main>
  );
}
