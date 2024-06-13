const { useState } = require("react");

const useFetchBlog = () => {
  const getBlogs = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-blogs`
      );
      const { blogs } = await response.json();
      return blogs;
    } catch (err) {
      console.log("error", err);
    }
  };

  const getSingleBlog = async (slug) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-single-blog`
      );
      const { blogs } = await response.json();
      return blogs;
    } catch (err) {
      console.log("error", err);
    }
  };
  return {
    getBlogs,
  };
};

export default useFetchBlog;
