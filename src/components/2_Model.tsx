import './2_Model.css'

export default function Model() {
  return (
    <section id="model" className="section model">
      <div className="container">
        <div className="sketchfab-embed-wrapper">
          <iframe
            title="Lagoon Peninsula"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/04aa2071e8c74a2ea41ee5f437e3198f/embed?autostart=1&transparent=1"
          />
        </div>
      </div>
    </section>
  )
}