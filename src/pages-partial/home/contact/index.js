import NewsLetter from "../news-letter";
import ContactForm from "./form";

export default function Contact() {
  return (
    <div className="relative py-16 max-w-[1440px] mx-auto lg:py-36 lg:px-[120px] px-4 sm:px-9 space-y-10">
      <ContactForm />
      <NewsLetter />
    </div>
  );
}
