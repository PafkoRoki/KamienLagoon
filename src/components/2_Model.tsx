import RippleDistortion from './RippleDistortion';
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
Ripple Test
            <div>
              <RippleDistortion
                src="https://raw.githubusercontent.com/PafkoRoki/KamienLagoon/main/public/images/Wiz5.jpg"
                brushSize={150}
                strength={0.2}
                swirl={1}
                rings={4}
                grayscale={false} 
                spread={5}
                fade={3}
                spacing={15}
                dispersion={0}
                glint={0}
                tint="#102A32"
                tintAmount={0.1}
                highlightColor="#ffffff"
                trigger="hover"
                clickStrength={2}
                quality="low"
                enabled
            />
            </div>

      </div>
    </section>
  );
}