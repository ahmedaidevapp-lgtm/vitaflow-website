import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ValueProps from "@/components/landing/ValueProps";
import BeforeAfter from "@/components/landing/BeforeAfter";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import TrustBlock from "@/components/landing/TrustBlock";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

/** Consumer-facing landing page for the Serumo iOS app. */
const Ios = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ValueProps />
      <BeforeAfter />
      <Features />
      <HowItWorks />
      <TrustBlock />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Ios;
