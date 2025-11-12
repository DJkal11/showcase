import Carousel from '../components/Carousel'
import SpotlightCard from '../components/SpotlightCard'
import TiltedCard from '../components/TiltedCard'
import ElementScroll from '../components/ElementScroll'

export default function Home(){
  return (
    <div style={{padding:20}}>
      <h1>React bits - Home</h1>
      <section>
        <div className="component-card component-card--centered">
          <div className="component-body"><Carousel /></div>
          <h3 className="component-label">Carousel</h3>
          <p className="component-desc">Swipeable, accessible image/content carousel.</p>
        </div>

        <div className="component-card component-card--centered">
          <div className="component-body">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 255, 255, 0.94)">
              <h3 style={{ color: '#fff' }}>Hover over me!</h3>
              <p style={{ color: '#fff' }}>This card has a spotlight effect that follows your mouse cursor.</p>
            </SpotlightCard>
          </div>
          <h3 className="component-label">SpotlightCard</h3>
          <p className="component-desc">Mouse-follow spotlight with blend-based glow.</p>
        </div>

        <div className="component-card component-card--centered">
          <div className="component-body">
            <TiltedCard
              imageSrc="https://greggvanourek.com/wp-content/uploads/2023/08/Nature-path-by-water-trees-and-mountains-AdobeStock_291242770-scaled.jpeg"
              altText="Nature"
              captionText="Forest Path"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={<p className="tilted-card-demo-text">This is an overlay content displayed on top of the tilted card.</p>}
          />
          </div>
          <h3 className="component-label">TiltedCard</h3>
          <p className="component-desc">3D tilt with hover scale and overlay content.</p>
        </div>
      </section>

      <section>
        <h2>ElementScroll</h2>
        <ElementScroll />
      </section>
    </div>
  )
}
