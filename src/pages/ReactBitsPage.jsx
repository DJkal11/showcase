import ElementScroll from '../components/ElementScroll'
import SpotlightCard from '../components/SpotlightCard'
import MobileMenu from '../components/mobile-menu'
import AnimatedList from '../components/AnimatedList'
import Showcase from '../components/showcase'
import MagicBento from '@/components/MagicBento'
import Badge from '@/components/Badge'
import Skeleton from '@/components/Skeleton'
import Tabs from '@/components/Tabs'

export default function ReactBitsPage(){
  return (
    <div className="page">
      <div className="component-grid">

        <div className="component-card component-card--centered card--accent-violet">
          <div className="component-body"><SpotlightCard className="spotlight--violet" spotlightColor="rgba(124,58,237,0.65)">
            <h3 style={{ color: '#fff' }}>Hover over me!</h3>
          </SpotlightCard></div>
          <h3 className="component-label">Spotlight Card</h3>
          <p className="component-desc">Mouse-follow light source with subtle glow.</p>
        </div>

        <div className="component-card component-card--centered card--accent-rose">
          <div className="component-body"><div className="demo-wrapper"><div className="demo-box"><AnimatedList itemClassName="accent-rose" /></div></div></div>
          <h3 className="component-label">Animated List</h3>
          <p className="component-desc">Staggered list animations with selection states.</p>
        </div>


        {/* Tabs demo */}
        <div className="component-card component-card--centered card--accent-blue">
          <div className="component-body">
            <Tabs items={[
              { label: 'Overview', content: <p style={{margin:0}}>High-level summary and key info.</p> },
              { label: 'Details', content: <p style={{margin:0}}>Deeper technical or feature details.</p> },
              { label: 'Notes', content: <p style={{margin:0}}>Extra references and next steps.</p> },
            ]} />
          </div>
          <h3 className="component-label">Tabs</h3>
          <p className="component-desc">Theme-aware tabs with accent underline.</p>
        </div>

        {/* Badges demo */}
        <div className="component-card component-card--centered card--accent-green">
          <div className="component-body">
            <div style={{display:'flex', gap:12, alignItems:'center'}}>
              <Badge variant="blue" dot>New</Badge>
              <Badge variant="green" tone="solid" icon={<span>✅</span>}>Success</Badge>
              <Badge variant="red" tone="outline" icon={<span>⚠️</span>}>Warning</Badge>
            </div>
          </div>
          <h3 className="component-label">Badges</h3>
          <p className="component-desc">Status indicators (dot/solid/outline) with icons and subtle glow.</p>
        </div>

        {/* Skeleton demo */}
        <div className="component-card component-card--centered card--accent-amber">
          <div className="component-body">
            <div style={{width:300, display:'flex', gap:14, alignItems:'center'}}>
              <Skeleton variant="circle" width={48} height={48} accent shineSpeed="fast" />
              <div style={{flex:1, display:'flex', flexDirection:'column', gap:8}}>
                <Skeleton width={180} height={14} accent />
                <Skeleton width={240} height={10} />
                <Skeleton width={220} height={10} />
              </div>
            </div>
          </div>
          <h3 className="component-label">Skeleton Loader</h3>
          <p className="component-desc">Shimmering placeholders to indicate loading state.</p>
        </div>
        

      </div>
      <div className="component-card component-card--centered card--accent-indigo">
        <div className="component-body"><MagicBento enableTilt={true} glowColor="99, 102, 241" spotlightRadius={360} /></div>
        <h3 className="component-label">Magic Bento</h3>
        <p className="component-desc">Interactive card grid with spotlight and border glow.</p>
      </div>
    </div>
  )
}
