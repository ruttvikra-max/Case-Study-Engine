import Section from "../components/editorial/Section.jsx";
import SectionHeader from "../components/editorial/SectionHeader.jsx";
import Prose from "../components/editorial/Prose.jsx";
import PullQuote from "../components/editorial/PullQuote.jsx";
import "./BeyondFeatures.css";

/**
 * Section 3 — Looking Beyond Features.
 * The conceptual heart: the reframing question and the "easier than Excel,
 * not more powerful" principle. Deliberately spare — the pull-quote carries it.
 * Copy from docs/drafts/case-study-v1.md §3.
 */
export default function BeyondFeatures() {
  return (
    <Section id="beyond-features" className="beyond-features">
      <SectionHeader
        kicker="Looking Beyond Features"
        index="03"
        lead="Easier than Excel, not more powerful."
      />

      <Prose
        lead
        paragraphs={[
          "When we started, the conversation in the room was about capability. What advanced logic could we support? How many rule types, how many operators, how much power?",
          'I pushed in a different direction. Instead of asking "What more can we build?", I kept asking one question:',
        ]}
      />

      <div className="beyond-features__quote">
        <PullQuote>Why are users still relying on Excel?</PullQuote>
      </div>

      <Prose
        paragraphs={[
          "The answer reframed the whole project. Analysts weren't reaching for Excel because it was powerful. They reached for it because it was theirs — familiar, fast, and forgiving. They didn't want more functionality than the rule engine could already offer. They wanted confidence. They wanted to make a change and trust the result without filing a ticket and waiting.",
          <>
            So the bar wasn't "more powerful than Excel." It was{" "}
            <span className="accent">easier than Excel</span>. That became the design principle the
            rest of the product was measured against — and the reason I spent as much energy arguing
            things <em>out</em> of the product as designing things into it.
          </>,
        ]}
      />
    </Section>
  );
}
