import AboutSection from "@/components/landing/AboutSection";
import { Hero } from "@/components/landing/Hero";
import {
  HomeCompaniesSection,
  HomeDestinationsSection,
} from "@/components/landing/HomeExploreSections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f1] text-slate-900">
      <Hero />
      <HomeCompaniesSection />
      <AboutSection />
      <HomeDestinationsSection />
    </main>
  );
}
