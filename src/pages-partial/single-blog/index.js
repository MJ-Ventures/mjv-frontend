'use client'
import Contact from "../home/contact";
import Footer from "../home/footer";
import Header from "../home/header";
import SimilarBlogSection from "./similar-blogs";
import BlogMainSection from "./main";
import { singleBlog } from "./main/data";

export default function SingleBlog({ slug }) {

  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <Header />
        <BlogMainSection blog={singleBlog} />
        <SimilarBlogSection count={6} />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
