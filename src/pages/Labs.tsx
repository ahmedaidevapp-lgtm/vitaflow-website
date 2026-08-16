import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import LabsHero from "@/components/labs/LabsHero";
import LabsProblem from "@/components/labs/LabsProblem";
import LabsHowItWorks from "@/components/labs/LabsHowItWorks";
import LabsBenefits from "@/components/labs/LabsBenefits";
import LabsPortal from "@/components/labs/LabsPortal";
import LabsTrust from "@/components/labs/LabsTrust";
import LabsCTA from "@/components/labs/LabsCTA";

/** Home page — Serumo's B2B offering for Moroccan clinical laboratories. */
const Labs = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <LabsHero />
      <LabsProblem />
      <LabsHowItWorks />
      <LabsBenefits />
      <LabsPortal />
      <LabsTrust />
      <LabsCTA />
      <Footer />
    </main>
  );
};

export default Labs;
