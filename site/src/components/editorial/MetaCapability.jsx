import { motion, useReducedMotion } from "motion/react";
import "./MetaCapability.css";

/**
 * MetaCapability — a quiet labeled block for an enterprise-scale control.
 * Deliberately restrained (hairline + a single red rule) so the controls read
 * as governance, not decoration — "making power quiet."
 *
 * Props:
 *  - name      the control ("Permissions")
 *  - children  one-line rationale (why it matters)
 */
export default function MetaCapability({ name, children }) {
  const reduce = useReducedMotion();
  const Tag = reduce ? "div" : motion.div;
  const anim = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.4 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <Tag className="meta-capability" {...anim}>
      <span className="meta-capability__mark" aria-hidden="true" />
      <h3 className="meta-capability__name">{name}</h3>
      <p className="meta-capability__summary">{children}</p>
    </Tag>
  );
}
