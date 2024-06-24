"use client";
import Contact from "../home/contact";
import Footer from "../home/footer";
import Header from "../home/header";
import SimilarBlogSection from "./similar-blogs";
import BlogMainSection from "./main";
import useFetchBlog from "@/hooks/blog";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SingleBlog({ slug }) {
  const { push } = useRouter();
  const { getSingleBlog } = useFetchBlog();
  const [singleBlog, setSingleBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const blog = await getSingleBlog(slug);
        const { error } = blog;
        if (error) {
          push("/blog");
        }
        setSingleBlog(blog);
        setIsLoading(false);
      } catch (err) {
        console.log("error", err);
      }
    })();
  }, []);

  return (
    <main className="w-full">
      <Header />
      <BlogMainSection blog={singleBlog} isLoading={isLoading} />
      <SimilarBlogSection count={6} className="bg-[#151515]" />
      <Contact />
      <Footer />
    </main>
  );
}
