import { motion, useReducedMotion } from "motion/react";
import Section from "../components/editorial/Section.jsx";
import SectionHeader from "../components/editorial/SectionHeader.jsx";
import Prose from "../components/editorial/Prose.jsx";
import "./Reflection.css";

/**
 * Section 8 — Reflection.
 * The quiet, confident close. Lands on the difference between designing an
 * interface and designing a product. Copy from case-study-v1.md §8.
 */
export default function Reflection() {
  const reduce = useReducedMotion();
  const Close = reduce ? "p" : motion.p;
  const closeAnim = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.6 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <Section id="reflection" className="reflection">
      <SectionHeader kicker="Reflection" index="08" lead="Meeting complexity with less." />

      <Prose
        lead
        paragraphs={[
          "This project changed how I think about enterprise software. The instinct in complex domains is to meet complexity with more — more capability, more options, more power. The work that mattered here was the opposite: understanding why people still trusted a spreadsheet over a purpose-built system, and designing for that trust instead of designing past it.",
          "The best thing we built wasn’t a feature. It was the confidence to let a non-engineer change a rule that affects a hundred thousand others — and be right.",
        ]}
      />

      <Close className="reflection__close" {...closeAnim}>
        That’s the difference between designing an interface and designing a{" "}
        <span className="reflection__accent">product</span>.
      </Close>
    </Section>
  );
}
