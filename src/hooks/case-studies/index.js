import { baseURL } from "@/components/utils/endpoints";

const useFetchCase = () => {
  const getCaseStudies = async () => {
    try {
      const response = await fetch(`${baseURL}/api/get-case-studies`);
      const { caseStudies } = await response.json();
      return caseStudies;
    } catch (err) {
      console.log("error", err);
    }
  };

  const getSingleCaseStudy = async (id) => {
    try {
      const response = await fetch(`${baseURL}/api/get-single-case-study/id=${id}`);
      const { caseStudy } = await response.json();
      return caseStudy;
    } catch (err) {
      console.log("error", err);
    }
  };

  return {
    getSingleCaseStudy,
    getCaseStudies,
  };
};

export default useFetchCase;
