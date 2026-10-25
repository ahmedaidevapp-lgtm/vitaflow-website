import IosBeforeAfter from "@/components/ios/IosBeforeAfter";
import IosCTA from "@/components/ios/IosCTA";
import IosFeatures from "@/components/ios/IosFeatures";
import IosHero from "@/components/ios/IosHero";
import IosHowItWorks from "@/components/ios/IosHowItWorks";
import IosTrust from "@/components/ios/IosTrust";
import IosValueProps from "@/components/ios/IosValueProps";
import { SiteLayout } from "@/components/site/layout";

/** Consumer-facing landing page for the Serumo iOS app. */
const Ios = () => (
  <SiteLayout>
    <IosHero />
    <IosValueProps />
    <IosBeforeAfter />
    <IosFeatures />
    <IosHowItWorks />
    <IosTrust />
    <IosCTA />
  </SiteLayout>
);

export default Ios;
