import ImageSlot from "./ImageSlot.jsx";
import "./WorkflowCard.css";

/**
 * WorkflowCard — one workflow as Challenge → Decision → Outcome, beside a visual.
 * Self-contained: renders the full card surface so it looks right both inside
 * ScrollStack and in the plain stacked (reduced-motion) fallback.
 *
 * Props:
 *  - num, title              numbered heading
 *  - challenge/decision/outcome   the three beats (strings or nodes)
 *  - caption, imageLabel     ImageSlot content
 *  - children                extra visual placed above the image (e.g. the TextType demo)
 */
export default function WorkflowCard({
  num,
  title,
  challenge,
  decision,
  outcome,
  caption,
  imageLabel = "VISUAL",
  children,
}) {
  return (
    <article className="workflow-card">
      <div className="workflow-card__head">
        <span className="workflow-card__num" aria-hidden="true">
          {num}
        </span>
        <h3 className="workflow-card__title">{title}</h3>
      </div>

      <div className="workflow-card__grid">
        <div className="workflow-card__beats">
          <div className="beat beat--challenge">
            <span className="beat__label">Challenge</span>
            <p className="beat__text">{challenge}</p>
          </div>
          <div className="beat beat--decision">
            <span className="beat__label">Decision</span>
            <p className="beat__text">{decision}</p>
          </div>
          <div className="beat beat--outcome">
            <span className="beat__label">Outcome</span>
            <p className="beat__text">{outcome}</p>
          </div>
        </div>

        <div className="workflow-card__visual">
          {children}
          <ImageSlot label={imageLabel} caption={caption} ratio="4 / 3" />
        </div>
      </div>
    </article>
  );
}
