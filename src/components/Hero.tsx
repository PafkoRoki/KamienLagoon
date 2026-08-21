
import StrokeText from './StrokeText';
import ScrollExpand from './ScrollExpand';
import Lagoon from "../assets/Lagoon.jpg";
import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">

      <ScrollExpand
        src={Lagoon}
        alt="Product hero"
          title={
            <StrokeText
              text="L A G O O N"
              strokeColor="#2d2d2d"
              fillColor="#a8dbd3"
              strokeWidth={5}
              drawDuration={2.6}
              fillDelay={0.2}
              stagger={0.095}
              ease="power2.out"
              trigger="mount"
              fillMode="wipe"
              fontSize={150}
              fontWeight={900}
              letterSpacing={-5}
              reverse={false}
            />
          }
        scrollHint="Scroll inside the frame"
        useWindowScroll
      >
      </ScrollExpand>


      <div className="container hero__scroll">
        <span>Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </div>
    </section>
  )
}