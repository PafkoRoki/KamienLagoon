import ScrollExpand from "./ScrollExpand";
import Lagoon from "../assets/Lagoon.jpg";
import "./1_Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <ScrollExpand
        src={Lagoon}
        alt="Lagoon Kamień"
        title="PENINSULA"
        scrollHint="Scroll inside the frame"
        useWindowScroll
        startRadius={0}
        endRadius={0}
      >
        <div className="hero__copy">
          <p className="hero__eyebrow">ŻÓŁCINO — KAMIEŃ LAGOON</p>
          <h1>ŻÓŁCINO PENINSULA</h1>
          <p className="hero__subtitle">
            Wyjątkowy projekt inwestycyjny nad Zalewem Kamieńskim
          </p>
        </div>
      </ScrollExpand>

      <div className="container hero__scroll">
        <span>SCROLL</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </div>
    </section>
  );
}