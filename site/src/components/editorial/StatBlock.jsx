import { useReducedMotion } from "motion/react";
import DecryptedText from "../reactbits/DecryptedText/DecryptedText.jsx";
import "./StatBlock.css";

/**
 * StatBlock — an oversized editorial numeral with a label.
 * Used in The Opportunity and Impact. Set `decrypt` for the reveal moment
 * (e.g. $58M → $3.75M); set `accent` to render the numeral in the red spine.
 *
 * Props:
 *  - value   the numeral string ("110,000", "$58M", "~3 weeks")
 *  - label   the description under it
 *  - accent  render the numeral in accent red
 *  - decrypt scramble-in on scroll (degrades to static under reduced motion)
 */
export default function StatBlock({ value, label, accent = false, decrypt = false }) {
  const reduce = useReducedMotion();

  return (
    <div className={`stat-block ${accent ? "stat-block--accent" : ""}`.trim()}>
      <div className="stat-block__value">
        {decrypt && !reduce ? (
          <DecryptedText
            text={value}
            animateOn="view"
            sequential
            useOriginalCharsOnly
            speed={45}
            revealDirection="start"
            parentClassName="stat-block__decrypt"
          />
        ) : (
          value
        )}
      </div>
      {label && <div className="stat-block__label">{label}</div>}
    </div>
  );
}
