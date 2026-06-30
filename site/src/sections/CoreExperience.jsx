import { motion, useReducedMotion } from "motion/react";
import Section from "../components/editorial/Section.jsx";
import SectionHeader from "../components/editorial/SectionHeader.jsx";
import Prose from "../components/editorial/Prose.jsx";
import WorkflowCard from "../components/editorial/WorkflowCard.jsx";
import TextType from "../components/reactbits/TextType/TextType.jsx";
import "./CoreExperience.css";

/**
 * Section 4 — Designing the Core Experience (largest section).
 * Intro, then five workflows as a scroll-reveal stack, each structured
 * Challenge → Decision → Outcome with a screenshot slot. Workflow 1 types the
 * natural-language prompt (TextType). Copy from case-study-v1.md §4.
 */

const PROMPT = "Flag providers with a missing NPI in Florida whose specialty is cardiology";

const WORKFLOWS = [
  {
    num: "01",
    title: "Author a rule in plain English",
    challenge:
      "Rule syntax was the wall between domain experts and their own logic. Even “simple” rules needed a technical translator.",
    decision:
      "We made natural language the front door. An analyst types what they mean, and the engine translates that intent into executable, structured logic. The technical layer stays — we just stopped making the analyst speak it.",
    outcome:
      "The person who understands the rule can now write the rule. The translation step — and the ticket it used to require — disappears.",
    caption: "Conversational rule authoring: natural-language prompt → generated structured rule",
  },
  {
    num: "02",
    title: "Refine through conversation, not rework",
    challenge:
      "Handoffs between business and technical teams meant every revision was a slow round-trip, and intent got lost in translation.",
    decision:
      "Refinement stays conversational. “Now include nurse practitioners” updates the existing rule in place rather than starting over. The dialogue holds the context so the analyst never re-explains.",
    outcome:
      "Iteration happens in minutes, inside one continuous thread, with the business intent intact end to end.",
    caption: "Iterative refinement thread: a rule evolving across two or three prompts",
  },
  {
    num: "03",
    title: "Two views of the same truth",
    challenge:
      "A rule has to be reviewed by people with very different fluency — analysts comfortable with logic, and business stakeholders who are not.",
    decision:
      "Every rule renders two synchronized ways: a structured text view with the precise conditions, and a visual flow view that reads as a sequence anyone can follow. Same rule, same source of truth, two doors in.",
    outcome:
      "Technical and non-technical reviewers validate the same logic before anything ships — fewer misreads, faster sign-off, shared understanding.",
    caption: "Dual view: structured logic on one side, flow diagram on the other",
  },
  {
    num: "04",
    title: "Trust before publish: validation & conflict detection",
    challenge:
      "In a 110,000-rule library, a new rule can silently contradict an existing one. Catching that by hand was slow and risky — and undetected conflicts become compliance and billing failures.",
    decision:
      "Validation and conflict detection run inline, as the analyst works, with feedback in plain language before publish — not in a separate review cycle weeks later.",
    outcome:
      "Confidence moves to the moment of authoring. Errors are caught where they’re cheapest to fix, and the analyst publishes knowing the rule holds.",
    caption: "Inline validation + conflict warning surfaced during authoring",
  },
  {
    num: "05",
    title: "Find, reuse, and change at scale",
    challenge:
      "Tens of thousands of rules are useless if you can’t find the one you need — and pointless to edit one at a time.",
    decision:
      "Search, filters, and tags make the library navigable; duplication and bulk editing let analysts reuse and update many rules safely in one pass, with the same validation guarding the batch.",
    outcome:
      "The library becomes a working asset, not an archive. Routine bulk changes that used to demand the Business Rules Unit now sit with the analyst.",
    caption: "Rule library: search, filters, tags, and a bulk-edit action",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function CoreExperience() {
  const reduce = useReducedMotion();

  return (
    <Section id="core-experience" className="core-experience">
      <SectionHeader
        kicker="Designing the Core Experience"
        index="04"
        lead="Five workflows, not a feature list."
      />

      <Prose
        lead
        paragraphs={[
          "The product is large — a rule builder, a library, validation, testing, version history, audit trails, dependencies, search, tags, citations, bulk editing, an AI assistant, draft mode, permissions, preview, and a visual flow view. Listing them explains nothing. What matters is how they collapse into a few workflows an analyst actually moves through.",
        ]}
      />

      <div className="core-experience__stack">
        {WORKFLOWS.map((w, i) => {
          const Item = reduce ? "div" : motion.div;
          const anim = reduce
            ? {}
            : {
                variants: reveal,
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, amount: 0.2 },
              };
          return (
            <Item className="core-experience__item" key={w.num} {...anim}>
              <WorkflowCard
                num={w.num}
                title={w.title}
                challenge={w.challenge}
                decision={w.decision}
                outcome={w.outcome}
                caption={w.caption}
              >
                {i === 0 && (
                  <div className="rule-prompt">
                    <span className="rule-prompt__label">Plain-English rule</span>
                    <div className="rule-prompt__field">
                      {reduce ? (
                        <span className="rule-prompt__text">{PROMPT}</span>
                      ) : (
                        <TextType
                          as="span"
                          className="rule-prompt__text"
                          text={PROMPT}
                          typingSpeed={26}
                          initialDelay={250}
                          loop={false}
                          startOnVisible
                          cursorCharacter="▍"
                        />
                      )}
                    </div>
                  </div>
                )}
              </WorkflowCard>
            </Item>
          );
        })}
      </div>
    </Section>
  );
}
