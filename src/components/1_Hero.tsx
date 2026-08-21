

import ScrollExpand from './ScrollExpand';
import Lagoon from "../assets/Lagoon.jpg";
import './1_Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">

      <ScrollExpand
        src={Lagoon}
        alt="Product hero"
        title="ŻÓŁCINO"
        scrollHint="Scroll inside the frame"
        useWindowScroll
      >
        <h1>Every pixel, everywhere</h1>
        <p>The frame opens up as you scroll and hands the whole stage to your media.</p>
      </ScrollExpand>


      <div className="container hero__scroll">
        <span>Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </div>
    </section>
  )
}