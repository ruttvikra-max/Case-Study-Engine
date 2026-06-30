import Section from "../components/editorial/Section.jsx";
import SectionHeader from "../components/editorial/SectionHeader.jsx";
import Prose from "../components/editorial/Prose.jsx";
import MetaCapability from "../components/editorial/MetaCapability.jsx";
import "./EnterpriseScale.css";

/**
 * Section 5 — Designing for Enterprise Scale ("making power quiet").
 * The five governance controls as a quiet editorial grid — restraint is the
 * argument here, so the type carries it. Copy from case-study-v1.md §5.
 */

const CONTROLS = [
  {
    name: "Permissions",
    summary:
      "Who can draft, who can publish, and who can only view, so autonomy never undercuts governance.",
  },
  {
    name: "Version history & audit trails",
    summary:
      "What changed, when, and by whom. Non-negotiable when an auditor or a regulator asks the system to account for itself.",
  },
  {
    name: "Rule dependencies",
    summary: "Made visible, so a change in one place doesn’t quietly break another.",
  },
  {
    name: "Draft mode",
    summary: "Room to work without touching production logic.",
  },
  {
    name: "Source citation",
    summary:
      "Ties a rule back to the regulation or policy that justifies it: compliance built in rather than reconstructed later.",
  },
];

export default function EnterpriseScale() {
  return (
    <Section id="enterprise-scale" className="enterprise-scale">
      <SectionHeader
        kicker="Designing for Enterprise Scale"
        index="05"
        lead="Making power quiet."
      />

      <Prose
        lead
        paragraphs={[
          "Approachability was the goal; it couldn’t come at the cost of the controls healthcare requires. The harder design work was making power quiet: present when needed, invisible when not.",
        ]}
      />

      <ul className="enterprise-scale__grid">
        {CONTROLS.map((c) => (
          <li key={c.name}>
            <MetaCapability name={c.name}>{c.summary}</MetaCapability>
          </li>
        ))}
      </ul>

      <Prose
        className="enterprise-scale__close"
        paragraphs={[
          "None of these are features an analyst asks for by name. They’re the reasons a healthcare client will trust the tool with 110,000 live rules, and the reason the simpler front end is safe to offer at all.",
        ]}
      />
    </Section>
  );
}
