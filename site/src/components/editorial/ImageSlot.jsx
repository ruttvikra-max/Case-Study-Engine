import { motion, useReducedMotion } from "motion/react";
import "./ImageSlot.css";

/**
 * ImageSlot — a screenshot block (real or placeholder) with a caption.
 * Generalizes the Hero's hatched placeholder. Text can wrap around it via `float`.
 * When `src` is supplied it renders the image; otherwise a clearly-marked slot.
 *
 * Props:
 *  - src, alt   real screenshot (mirror exports into src/assets/ when wired)
 *  - label      placeholder label (e.g. "VISUAL")
 *  - caption     what the screenshot shows (the author's note for the slot)
 *  - ratio      aspect-ratio string, default "16 / 9"
 *  - float      "left" | "right" — let body text wrap around it
 */
export default function ImageSlot({
  src,
  alt = "",
  label = "VISUAL",
  caption,
  ratio = "16 / 9",
  float = "",
}) {
  const reduce = useReducedMotion();
  const Tag = reduce ? "figure" : motion.figure;
  const anim = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <Tag className={`image-slot ${float ? `image-slot--${float}` : ""}`.trim()} {...anim}>
      {src ? (
        <img className="image-slot__img" src={src} alt={alt} style={{ aspectRatio: ratio }} />
      ) : (
        <div
          className="image-slot__placeholder"
          style={{ aspectRatio: ratio }}
          role="img"
          aria-label={caption ? `Placeholder: ${caption}` : "Screenshot placeholder"}
        >
          <span className="image-slot__label">{label}</span>
        </div>
      )}
      {caption && <figcaption className="image-slot__caption">{caption}</figcaption>}
    </Tag>
  );
}
