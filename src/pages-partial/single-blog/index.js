"use client";
import Contact from "../home/contact";
import Footer from "../home/footer";
import Header from "../home/header";
import SimilarBlogSection from "./similar-blogs";
import BlogMainSection from "./main";
import useFetchBlog from "@/hooks/blog";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

export default function SingleBlog({ slug }) {
  const { push } = useRouter();
  const { getSingleBlog } = useFetchBlog();
  const { isPending, error, data } = useQuery({
    queryKey: ["singleBlog"],
    queryFn: () => getSingleBlog(slug),
  });

  const { error: notFound, category } = data || {};

  if (notFound) {
    push("/blog");
  }

  return (
    <main className="w-full">
      <Header />
      <BlogMainSection blog={data} isLoading={isPending} />
      <SimilarBlogSection
        className="bg-[#151515]"
        category={category}
      />
      <Contact />
      <Footer />
    </main>
  );
}
