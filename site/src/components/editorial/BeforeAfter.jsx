import { motion, useReducedMotion } from "motion/react";
import DecryptedText from "../reactbits/DecryptedText/DecryptedText.jsx";
import "./BeforeAfter.css";

/**
 * BeforeAfter — manual model vs AI-assisted, the payoff comparison.
 * This is the ONLY place data-viz color (blue = before, amber = after) is used.
 * Proportional bars make the reduction visceral; "after" values decrypt in.
 *
 * Props:
 *  - beforeLabel / afterLabel   legend captions
 *  - rows  [{ label, before, after, ratio }]  ratio = after÷before (0–1) for the bar
 */
export default function BeforeAfter({
  beforeLabel = "Manual model",
  afterLabel = "AI-assisted",
  rows = [],
}) {
  const reduce = useReducedMotion();

  return (
    <div className="before-after">
      <div className="before-after__legend">
        <span className="ba-key ba-key--before">{beforeLabel}</span>
        <span className="ba-key ba-key--after">{afterLabel}</span>
      </div>

      <dl className="before-after__rows">
        {rows.map((r) => {
          const ratio = Math.max(0.02, r.ratio ?? 0.2);
          return (
            <div className="ba-row" key={r.label}>
              <dt className="ba-row__label">{r.label}</dt>
              <dd className="ba-row__data">
                <div className="ba-vals">
                  <span className="ba-val ba-val--before">{r.before}</span>
                  <span className="ba-arrow" aria-hidden="true">→</span>
                  <span className="ba-val ba-val--after">
                    {reduce ? (
                      r.after
                    ) : (
                      <DecryptedText
                        text={r.after}
                        animateOn="view"
                        sequential
                        useOriginalCharsOnly
                        speed={50}
                      />
                    )}
                  </span>
                </div>

                <div className="ba-bars" aria-hidden="true">
                  <div className="ba-bar-track">
                    <div className="ba-bar ba-bar--before" />
                  </div>
                  <div className="ba-bar-track">
                    {reduce ? (
                      <div
                        className="ba-bar ba-bar--after"
                        style={{ transform: `scaleX(${ratio})` }}
                      />
                    ) : (
                      <motion.div
                        className="ba-bar ba-bar--after"
                        initial={{ transform: "scaleX(0)" }}
                        whileInView={{ transform: `scaleX(${ratio})` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </div>
                </div>
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
