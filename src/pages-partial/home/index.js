import Header from "./header";
import Hero from "./hero";
import PartnerSection from "./partners";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <Header />
      <Hero />
      <PartnerSection />
    </main>
  );
}
