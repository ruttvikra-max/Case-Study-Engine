import Hero from "./sections/Hero.jsx";
import Opportunity from "./sections/Opportunity.jsx";
import BeyondFeatures from "./sections/BeyondFeatures.jsx";
import CoreExperience from "./sections/CoreExperience.jsx";
import EnterpriseScale from "./sections/EnterpriseScale.jsx";
import BeyondDesign from "./sections/BeyondDesign.jsx";
import Impact from "./sections/Impact.jsx";

/**
 * Case study page.
 * Section 1 (Hero) is built. Sections 2–8 are assembled in order.
 */
export default function App() {
  return (
    <main className="case-study">
      <Hero />
      <Opportunity />
      <BeyondFeatures />
      <CoreExperience />
      <EnterpriseScale />
      <BeyondDesign />
      <Impact />
    </main>
  );
}
