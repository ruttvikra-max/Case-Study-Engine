import Section from "../components/editorial/Section.jsx";
import SectionHeader from "../components/editorial/SectionHeader.jsx";
import Prose from "../components/editorial/Prose.jsx";
import StatBlock from "../components/editorial/StatBlock.jsx";
import "./Opportunity.css";

/**
 * Section 2 — The Opportunity.
 * Business challenge, not UX. Lands the thesis: the problem was who could
 * change the rules. Copy from docs/drafts/case-study-v1.md §2.
 */

const STATS = [
  { value: "110,000", label: "rules in a single client's library" },
  { value: "$58M", label: "annual cost of the manual model", accent: true },
  { value: "50,000", label: "analyst-days of manual effort each year" },
  { value: "~3 weeks", label: "to roll a new healthcare market live" },
];

export default function Opportunity() {
  return (
    <Section id="opportunity">
      <SectionHeader
        kicker="The Opportunity"
        index="02"
        lead="The problem was never the rules. It was who could change them."
      />

      <Prose
        lead
        paragraphs={[
          "Healthcare organizations run on rules. Eligibility, provider-data quality, billing accuracy, network participation, state-by-state Medicaid and CMS compliance — all of it is encoded as logic. A single client's rule library can exceed 110,000 rules, and every one of them touches whether a patient gets access, whether a claim is correct, whether an audit passes.",
          "Authoring a rule required engineering syntax, so the people who understood the rules — business analysts with deep domain knowledge — couldn't touch them. Every change, even a trivial one, routed through a specialized Business Rules Unit. That dependency had a price the business could measure.",
        ]}
      />

      <ul className="opportunity__stats" aria-label="The cost of the manual model">
        {STATS.map((s) => (
          <li key={s.value}>
            <StatBlock value={s.value} label={s.label} accent={s.accent} />
          </li>
        ))}
      </ul>

      <Prose
        paragraphs={[
          "This wasn't a request for a nicer internal tool. It was an operational liability. The goal was to let operations teams configure rules independently — cutting the engineering dependency while improving governance, scalability, and the confidence clients had in the system.",
        ]}
      />
    </Section>
  );
}
