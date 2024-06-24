import { baseURL } from "@/components/utils/endpoints";

const useFetchBlog = () => {
  const getBlogs = async () => {
    try {
      const response = await fetch(`${baseURL}/api/get-blogs`);
      const { blogs } = await response.json();
      return blogs;
    } catch (err) {
      console.log("error", err);
    }
  };

  const getSingleBlog = async (slug) => {
    try {
      const response = await fetch(`${baseURL}/api/get-single-blog/slug=${slug}`);
      const { blog } = await response.json();
      return blog;
    } catch (err) {
      console.log("error", err);
    }
  };

  return {
    getSingleBlog,
    getBlogs,
  };
};

export default useFetchBlog;
