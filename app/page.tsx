import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <CtaSection />
      <Footer />
      <StickyCta />
    </>
  );
}
