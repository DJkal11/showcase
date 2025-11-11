import SpotlightCard from '../components/SpotlightCard'
export default function SpotlightPage(){
  return (
    <div style={{padding:20}}>
      <h1>Spotlight Card</h1>
      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 255, 255, 0.94)">
        <h3 style={{ color: '#fff' }}>Hover over me!</h3>
        <p style={{ color: '#fff' }}>This card has a spotlight effect that follows your mouse cursor.</p>
      </SpotlightCard>
    </div>
  )
}
