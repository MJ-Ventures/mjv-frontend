import { baseURL } from "@/components/utils/endpoints";

const useFetchBlog = () => {
  const getBlogs = async () => {
    try {
      const response = await fetch(
        `${baseURL}/api/get-blogs`
      );
      const { blogs } = await response.json();
      return blogs;
    } catch (err) {
      console.log("error", err);
    }
  };

  // const getSingleBlog = async (slug) => {
  //   try {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-single-blog`,
  //       {
  //         method: "POST",
  //         body: JSON.stringify(slug),
  //       }
  //     );
  //   } catch (err) {
  //     console.log("error", err);
  //   }
  // };
  return {
    // getSingleBlog,
    getBlogs,
  };
};

export default useFetchBlog;
