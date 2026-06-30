import Section from "../components/editorial/Section.jsx";
import SectionHeader from "../components/editorial/SectionHeader.jsx";
import Prose from "../components/editorial/Prose.jsx";
import ImpactCards from "../components/editorial/ImpactCards.jsx";
import "./Impact.css";

/**
 * Section 7 — Impact (the payoff).
 * The only section where data-viz color (blue = manual, amber = AI-assisted)
 * appears. Before/After comparison with the "after" numbers decrypting in.
 * Copy from case-study-v1.md §7.
 */

const ROWS = [
  { label: "Annual cost", before: "$58M", after: "$3.75M", ratio: 0.065 },
  { label: "Analyst-days per year", before: "50,000", after: "10,000", ratio: 0.2 },
  { label: "Time to launch a new market", before: "~3 weeks", after: "~3 days", ratio: 0.143 },
];

export default function Impact() {
  return (
    <Section id="impact" className="impact">
      <SectionHeader
        kicker="Impact"
        index="07"
        lead="Operational problems that stopped being problems."
      />

      <Prose
        lead
        paragraphs={[
          "The model we replaced cost roughly $58 million a year across 50,000 analyst-days of manual effort. The redesigned, AI-assisted workflow brings the same 110,000-rule library to a different order of magnitude entirely.",
        ]}
      />

      <div className="impact__viz">
        <ImpactCards rows={ROWS} />
      </div>

      <Prose
        className="impact__close"
        paragraphs={[
          "But the number that matters most isn’t a cost line. It’s that the people who understand the rules can now change them.",
          "Engineering dependency drops. Governance improves because every change is validated, versioned, and audit-ready by default. Discoverability replaces tribal knowledge. Configuration errors fall because conflicts surface before publish. And clients gain something harder to quantify than savings: confidence that the system they run their operations on is one they can actually control.",
        ]}
      />
    </Section>
  );
}
