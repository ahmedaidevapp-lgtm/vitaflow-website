import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LabsBenefits from "@/components/labs/LabsBenefits";
import LabsCTA from "@/components/labs/LabsCTA";
import LabsHero from "@/components/labs/LabsHero";
import LabsHowItWorks from "@/components/labs/LabsHowItWorks";
import LabsPortal from "@/components/labs/LabsPortal";
import LabsProblem from "@/components/labs/LabsProblem";
import LabsTrust from "@/components/labs/LabsTrust";
import { SiteLayout } from "@/components/site/layout";

/** Home page — Serumo's B2B offering for Moroccan clinical laboratories. */
const Labs = () => {
  const { hash, key } = useLocation();

  // Router links to "/#how" change the URL without scrolling, so scroll to the section on
  // every navigation — keyed on `key`, so choosing the same section twice still works. A
  // link to "/" itself (the overview) returns to the top. The frame's delay lets the menu
  // that was clicked finish closing first.
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      if (target) target.scrollIntoView({ behavior: "smooth" });
      else if (!hash && key !== "default") window.scrollTo({ top: 0, behavior: "smooth" });
    });
    return () => cancelAnimationFrame(frame);
  }, [hash, key]);

  return (
    <SiteLayout>
      <LabsHero />
      <LabsProblem />
      <LabsHowItWorks />
      <LabsBenefits />
      <LabsPortal />
      <LabsTrust />
      <LabsCTA />
    </SiteLayout>
  );
};

export default Labs;
