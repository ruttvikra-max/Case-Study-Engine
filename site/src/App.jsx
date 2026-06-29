import BlurText from "./components/reactbits/BlurText/BlurText.jsx";

/**
 * Scaffold shell.
 * Purpose: confirm tokens, @font-face, and React Bits imports resolve and build.
 * The editorial component system and the 8-section page are assembled in the next step.
 */
export default function App() {
  return (
    <main className="case-study">
      <section className="hero">
        <p className="section-kicker">.RULES ENGINE</p>
        <BlurText
          text="Natural-language rule authoring for US healthcare"
          className="hero-title"
          delay={120}
        />
        <p className="hero-meta">
          Lead Product Designer · 6-month build · In development
        </p>
      </section>

      <section className="scaffold-note">
        <p>
          Scaffold ready. Tokens, fonts, and React Bits are wired. Editorial
          components and page sections come next.
        </p>
      </section>
    </main>
  );
}
