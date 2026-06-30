import Hero from "./sections/Hero.jsx";
import Opportunity from "./sections/Opportunity.jsx";

/**
 * Case study page.
 * Section 1 (Hero) is built. Sections 2–8 are assembled in order.
 */
export default function App() {
  return (
    <main className="case-study">
      <Hero />
      <Opportunity />
    </main>
  );
}
