import AccordionGallery from './AccordionGallery'
import './3_Gallery.css'

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <AccordionGallery />
      </div>
    </section>
  )
}