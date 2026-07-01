import Section from "../components/editorial/Section.jsx";
import SectionHeader from "../components/editorial/SectionHeader.jsx";
import Prose from "../components/editorial/Prose.jsx";

/**
 * Section 6 — Beyond Design.
 * Prose-only: product ownership, prioritization, pushing back on eng and
 * stakeholders, validating through demos. Shows a Product Designer, not a UI
 * decorator. Copy from case-study-v1.md §6.
 */
export default function BeyondDesign() {
  return (
    <Section id="beyond-design">
      <SectionHeader
        kicker="Beyond Design"
        index="06"
        lead="I owned the product, not the screen library."
      />

      <Prose
        lead
        paragraphs={[
          "It meant being in the arguments that decide a product. I prioritized what shipped and in what order, pushing the conversational core ahead of advanced capabilities because that’s what unblocked real users first.",
          "I challenged engineering when a proposed approach added complexity the user would feel without solving their problem, and I pushed back on stakeholders when “more powerful” was winning over “more usable.” I validated direction by running product demonstrations: putting the work in front of the people who’d live in it, and letting their reactions, not our assumptions, set the next sprint.",
          <>
            Working alongside the PM, engineers, and a data scientist, my job was as much about{" "}
            <strong>protecting the product’s focus</strong> as drawing its interface.
          </>,
        ]}
      />
    </Section>
  );
}
