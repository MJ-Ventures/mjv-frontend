import { baseURL } from "@/components/utils/endpoints";
import axios from "axios";

const useContactForm = () => {
  const submitContact = async ({ firstName, email, message }) => {
    try {
      const response = await axios.post(`${baseURL}/api/post-contact`, {
        firstName,
        email,
        message,
      });
      return response
    } catch (err) {
      console.log("error", err);
    }
  };

  return {
    submitContact,
  };
};

export default useContactForm;
