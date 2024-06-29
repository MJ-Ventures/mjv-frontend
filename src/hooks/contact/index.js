import { baseURL } from "@/components/utils/endpoints";

const useContactForm = () => {
  const submitContact = async ({ firstName, email, message }) => {
    try {
      const response = await fetch(
        `${baseURL}/api/post-contact/firstName=${firstName}email=${email}message=${message}`
      );
      const result = await response.json();
    } catch (err) {
      console.log("error", err);
    }
  };

  return {
    submitContact,
  };
};

export default useContactForm;
