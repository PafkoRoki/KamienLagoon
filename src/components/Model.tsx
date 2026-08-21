import ModelViewer from './ModelViewer'
import './Model.css'

export default function Model() {
  return (
    <section id="model" className="section model">
      <div className="container">
        <ModelViewer
          url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
          width={600}
          height={600}
          modelXOffset={0.5}
          modelYOffset={0}
          enableMouseParallax
          enableHoverRotation
          environmentPreset="city"
          fadeIn
          autoRotate={false}
          autoRotateSpeed={0.35}
          showScreenshotButton
        />
      </div>
    </section>
  )
}