import ScrollExpand from "./ScrollExpand";
import Lagoon from "../assets/Lagoon.jpg";
import MetallicPaint from "./MetallicPaint";
import logo from '../assets/logofill.svg'
import "./1_Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <ScrollExpand
        src={Lagoon}
        alt="Lagoon Kamień"
          title={
    <div style={{ width: '100%', height: '400px' }}>
    <MetallicPaint
      imageSrc={logo}
      seed={168}
      scale={3}
      patternSharpness={0.8}
      noiseScale={0.35}
      speed={0.04}
      liquid={0.4}
      mouseAnimation={false}
      brightness={1.25}
      contrast={0.75}
      refraction={0.005}
      blur={0.01}
      chromaticSpread={0}
      fresnel={0.7}
      angle={0}
      waveAmplitude={0.35}
      distortion={0.35}
      contour={0.08}
      lightColor="#F1EBDD"
      darkColor="#102A32"
      tintColor="#D8CDBB"
    />
    </div>
          }
        scrollHint="Scroll inside the frame"
        useWindowScroll
        startRadius={0}
        endRadius={0}
      >
        <div className="hero__copy">
          <h1>ŻÓŁCINO PENINSULA</h1>
          <p className="hero__subtitle">
            Lagoon Developments Poland Sp. z o.o.
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