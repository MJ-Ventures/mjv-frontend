"use client";
import { useEffect, useState } from "react";
import BlogSection from "../home/blog";
import Contact from "../home/contact";
import Footer from "../home/footer";
import Header from "../home/header";
import AllBlogSection from "./all-blogs";
import BlogHeroSection from "./hero";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/get-blogs");
      const { blogs } = await response.json();
      setBlogs(blogs);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <main className="max-w-[1440px] mx-auto">
        <Header />
        <BlogHeroSection />
        <AllBlogSection data={blogs} />
        <BlogSection count={6} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
