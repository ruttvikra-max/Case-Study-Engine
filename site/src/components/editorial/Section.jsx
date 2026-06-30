import "./Section.css";

/**
 * Section shell — consistent vertical rhythm + centered content column.
 * Sections own their internal layout; this just sets the frame.
 *
 * Props:
 *  - id       anchor id (for an eventual section index / nav)
 *  - tone     "" (cream, default) | "dark" (near-black field, used sparingly)
 *  - wide     drop the readable max-width for full-bleed editorial layouts
 */
export default function Section({ id, tone = "", wide = false, className = "", children }) {
  return (
    <section
      id={id}
      className={`section ${tone ? `section--${tone}` : ""} ${className}`.trim()}
    >
      <div className={`section__inner ${wide ? "section__inner--wide" : ""}`.trim()}>
        {children}
      </div>
    </section>
  );
}
