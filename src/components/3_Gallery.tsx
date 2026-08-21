import AccordionGallery from "./AccordionGallery";
import "./3_Gallery.css";

export default function Gallery() {
  return (
    <section id="gallery" className="gallery section">
      <div className="gallery__container container">
        <header className="gallery__header">
          <p className="gallery__eyebrow">03 — Galeria</p>
        </header>

        <div className="gallery__content">
          <div className="gallery__intro">
            <h2>POTENCHAŁ INWESTYCYJNY</h2>

            <p className="gallery__description">
              Żółcino Peninsula to rzadko spotykana możliwość realizacji projektu od podstaw na obszarze o tak dużej powierzchni i tak atrakcyjnym położeniu.<br/>
              W czasach, gdy dostępność dużych terenów nad wodą staje się coraz bardziej ograniczona, nieruchomość stanowi unikalny zasób o znaczącym potencjale wzrostu wartości.
            </p>
          </div>

          <div className="gallery__accordion">
            <AccordionGallery />
          </div>
        </div>
      </div>
    </section>
  );
}