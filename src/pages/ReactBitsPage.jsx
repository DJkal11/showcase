import ElementScroll from '../components/ElementScroll'
import SpotlightCard from '../components/SpotlightCard'
import MobileMenu from '../components/mobile-menu'
import AnimatedList from '../components/AnimatedList'
import Showcase from '../components/showcase'
import MagicBento from '@/components/MagicBento'

export default function ReactBitsPage(){
  return (
    <div style={{padding:20}}>
      <div className="component-grid">

        <div className="component-card component-card--centered">
          <div className="component-body"><SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255,255,255,0.94)">
            <h3 style={{ color: '#fff' }}>Hover over me!</h3>
          </SpotlightCard></div>
          <h3 className="component-label">Spotlight Card</h3>
        </div>

        <div className="component-card component-card--centered">
          <div className="component-body"><div className="demo-wrapper"><div className="demo-box"><AnimatedList /></div></div></div>
          <h3 className="component-label">Animated List</h3>
        </div>


      
       

      </div>
        <div className="">
          <div className=""><div className=""><div className=""><MagicBento /></div></div></div>
          <h3 className="component-label">Magic Bento</h3>
        </div>
    </div>
  )
}
