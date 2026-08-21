import "./2_Model.css";

export default function Model() {
  return (
    <section id="model" className="model section">
      <div className="model__container container">
        <header className="model__header">
          <p className="model__eyebrow">01 — Model inwestycji</p>
        </header>

        <div className="model__content">
          <div className="model__intro">
            <h2>INTERAKTYWNY MODEL 3D</h2>

            <p className="model__description">
              Zobacz przestrzenny model inwestycji i poznaj układ terenu,
              zabudowy oraz najbliższego otoczenia.
            </p>
          </div>

          <div className="sketchfab-embed-wrapper">
            <iframe
              title="Lagoon Peninsula — model 3D"
              frameBorder="0"
              allowFullScreen
              allow="fullscreen; xr-spatial-tracking"
              src="https://sketchfab.com/models/04aa2071e8c74a2ea41ee5f437e3198f/embed?transparent=1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}