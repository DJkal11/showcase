import ElementScroll from '../components/ElementScroll'
import SpotlightCard from '../components/SpotlightCard'
import MobileMenu from '../components/mobile-menu'
import AnimatedList from '../components/AnimatedList'
import Showcase from '../components/showcase'
import MagicBento from '@/components/MagicBento'

export default function ReactBitsPage(){
  return (
    <div className="page">
      <div className="component-grid">

        <div className="component-card component-card--centered card--accent-violet">
          <div className="component-body"><SpotlightCard className="spotlight--violet" spotlightColor="rgba(124,58,237,0.65)">
            <h3 style={{ color: '#fff' }}>Hover over me!</h3>
          </SpotlightCard></div>
          <h3 className="component-label">Spotlight Card</h3>
        </div>

        <div className="component-card component-card--centered card--accent-rose">
          <div className="component-body"><div className="demo-wrapper"><div className="demo-box"><AnimatedList itemClassName="accent-rose" /></div></div></div>
          <h3 className="component-label">Animated List</h3>
        </div>


      
       

      </div>
      <div className="component-card component-card--centered card--accent-indigo">
        <div className="component-body"><MagicBento enableTilt={true} glowColor="99, 102, 241" spotlightRadius={360} /></div>
        <h3 className="component-label">Magic Bento</h3>
      </div>
    </div>
  )
}
