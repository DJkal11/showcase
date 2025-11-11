import TiltedCard from '../components/TiltedCard'
export default function TiltedPage(){
  return (
    <div style={{padding:20}}>
      <h1>Tilted Card</h1>
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
        overlayContent={
          <p className="tilted-card-demo-text">This is an overlay content displayed on top of the tilted card.</p>
        }
      />
    </div>
  )
}
