import { motion, useReducedMotion } from "motion/react";
import DecryptedText from "../reactbits/DecryptedText/DecryptedText.jsx";
import "./ImpactCards.css";

/**
 * ImpactCards — each metric as a card with the reduction figure (−94%), the
 * before→after values, and a mini editorial bar. Cards reveal in a gentle
 * scroll stagger; the reduction figure decrypts/rolls in on view.
 * Reduced-motion safe.
 */
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function ImpactCards({ rows = [] }) {
  const reduce = useReducedMotion();
  const Wrap = reduce ? "div" : motion.div;
  const wrapAnim = reduce
    ? {}
    : { variants: container, initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.3 } };

  return (
    <Wrap className="impact-cards" {...wrapAnim}>
      {rows.map((r) => {
        const ratio = Math.max(0.02, r.ratio ?? 0.2);
        const drop = "−" + Math.round((1 - ratio) * 100) + "%";
        const Card = reduce ? "article" : motion.article;
        const cardAnim = reduce ? {} : { variants: item };
        return (
          <Card className="impact-card" key={r.label} {...cardAnim}>
            <span className="impact-card__label">{r.label}</span>
            <span className="impact-card__drop">
              {reduce ? (
                drop
              ) : (
                <DecryptedText
                  text={drop}
                  animateOn="view"
                  speed={55}
                  maxIterations={18}
                  characters="0123456789"
                />
              )}
            </span>
            <div className="impact-card__vals">
              <span className="impact-card__before">{r.before}</span>
              <span className="impact-card__arrow" aria-hidden="true">→</span>
              <span className="impact-card__after">{r.after}</span>
            </div>
            <div className="impact-card__rail" aria-hidden="true">
              <div className="impact-card__rail-fill" style={{ transform: `scaleX(${ratio})` }} />
            </div>
          </Card>
        );
      })}
    </Wrap>
  );
}
