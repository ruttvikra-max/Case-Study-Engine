import { motion, useReducedMotion } from "motion/react";
import "./Prose.css";

/**
 * Prose — constrained editorial body copy with on-scroll paragraph reveal.
 * Pass `paragraphs` (array of strings or nodes) for the common case, or `children`
 * for custom markup. Each paragraph fades up as it enters view; static under
 * reduced motion. Semantic <p> throughout (no heading wrappers).
 */
const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Prose({ paragraphs, children, lead = false, className = "" }) {
  const reduce = useReducedMotion();
  const cls = `prose ${lead ? "prose--lead" : ""} ${className}`.trim();

  if (children) return <div className={cls}>{children}</div>;

  return (
    <div className={cls}>
      {paragraphs.map((p, i) =>
        reduce ? (
          <p key={i}>{p}</p>
        ) : (
          <motion.p
            key={i}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {p}
          </motion.p>
        )
      )}
    </div>
  );
}
