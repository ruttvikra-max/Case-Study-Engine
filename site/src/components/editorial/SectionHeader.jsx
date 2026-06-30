import { motion, useReducedMotion } from "motion/react";
import "./SectionHeader.css";

/**
 * Section header — mirrors the Hero topline.
 * A dot-prefixed section label + index on a 2px rule, then a slab headline (the h2).
 *
 * The headline reveals as one block (fade + rise + de-blur) rather than per-character:
 * a per-char split (ScrollFloat) breaks long headlines mid-word and reads "busy"
 * against the editorial restraint. One elegant reveal of a once-seen headline is the
 * better-craft choice (Emil). Degrades to static under reduced motion.
 *
 * Props:
 *  - kicker  section label, rendered ".UPPERCASE" (e.g. "The Opportunity")
 *  - index   "02"   total "08"  → "02 / 08" meta on the right
 *  - lead    the slab headline (becomes the section h2)
 */
export default function SectionHeader({ kicker, index, total = "08", lead }) {
  const reduce = useReducedMotion();
  const label = `.${kicker.toUpperCase()}`;

  const anim = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 20, filter: "blur(6px)" },
        whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
        viewport: { once: true, amount: 0.6 },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <header className="section-header">
      <div className="section-header__top">
        <span className="kicker">{label}</span>
        {index && (
          <span className="section-header__index" aria-hidden="true">
            {index} <span className="section-header__index-sep">/</span> {total}
          </span>
        )}
      </div>

      {lead &&
        (reduce ? (
          <h2 className="section-header__lead">{lead}</h2>
        ) : (
          <motion.h2 className="section-header__lead" {...anim}>
            {lead}
          </motion.h2>
        ))}
    </header>
  );
}
