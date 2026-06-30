import { motion, useReducedMotion } from "motion/react";
import "./PullQuote.css";

/**
 * PullQuote — the editorial centerpiece moment (italic Hecate, red spine).
 * Used for "Why are users still relying on Excel?". Renders as a <blockquote>;
 * fades up on view, static under reduced motion.
 *
 * Props:
 *  - children  the quote text
 *  - cite      optional attribution / context line
 */
export default function PullQuote({ children, cite }) {
  const reduce = useReducedMotion();
  const Tag = reduce ? "blockquote" : motion.blockquote;
  const anim = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.5 },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <Tag className="pull-quote" {...anim}>
      <p className="pull-quote__text">{children}</p>
      {cite && <cite className="pull-quote__cite">{cite}</cite>}
    </Tag>
  );
}
