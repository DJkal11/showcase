import React from 'react'
import { motion as Motion } from 'motion/react'
import Carousel from '../components/Carousel'
import ElementScroll from '../components/ElementScroll'
import TiltedCard from '../components/TiltedCard'
import MobileMenu from '../components/mobile-menu'
import ViewportElement from '../components/element-viewport'

// Small live demos using motion patterns
function StaggeredListDemo(){
  const items = ['Announcement A','Announcement B','Assignment due','New course']
  return (
    <div style={{display:'flex',flexDirection:'column',gap:8}}>
      {items.map((t,i)=>(
        <Motion.div key={t} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:i*0.06, duration:0.28}} style={{padding:8, borderRadius:8, background:'var(--card)'}}>
          {t}
        </Motion.div>
      ))}
    </div>
  )
}

function ParallaxAccentDemo(){
  const [pos, setPos] = React.useState({x:0,y:0})
  return (
    <div onMouseMove={e => {
      const r = e.currentTarget.getBoundingClientRect()
      setPos({x:(e.clientX - r.left - r.width/2)/20, y:(e.clientY - r.top - r.height/2)/30})
    }} style={{height:120, borderRadius:10, overflow:'hidden', background:'linear-gradient(120deg,#eef2ff,#fff)', display:'flex', alignItems:'center', justifyContent:'center'}}>
  <Motion.div style={{width:'90%', height:'80%', borderRadius:8, background:'linear-gradient(90deg, rgba(37,99,235,0.06), rgba(99,102,241,0.06))'}} animate={{x:pos.x, y:pos.y}} transition={{type:'spring', stiffness:120, damping:18}} />
    </div>
  )
}

function DragCardDemo(){
  return (
  <Motion.div drag dragConstraints={{left:-40,right:40,top:0,bottom:0}} style={{width:200,height:120,borderRadius:10, background:'var(--card)', display:'flex',alignItems:'center',justifyContent:'center'}} whileTap={{scale:0.98}} whileHover={{scale:1.02}}>
      Drag me
  </Motion.div>
  )
}

function ExpandCollapseDemo(){
  const [open,setOpen] = React.useState(false)
  return (
    <div style={{display:'flex',flexDirection:'column',gap:8, alignItems:'center'}}>
      <button onClick={() => setOpen(o=>!o)} style={{padding:'8px 12px', borderRadius:8}}>Toggle</button>
  <Motion.div layout initial={{borderRadius:10}} animate={{height: open?120:40, background: open?'var(--card)':'transparent'}} style={{width:240, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div style={{padding:12}}>{open ? 'Expanded content' : 'Collapsed'}</div>
  </Motion.div>
    </div>
  )
}

export default function MotionPage(){
  return (
    <div className="page">
      <h1 className="section-title">Motion / Animations</h1>
      <div className="component-grid">
        <div className="component-card component-card--centered">
          <div className="component-body"><Carousel /></div>
          <h3 className="component-label">Motion Carousel</h3>
          <p className="component-desc">Carousel with Motion-powered transitions and gestures.</p>
        </div>

        <div className="component-card component-card--centered">
          <div className="component-body"><ElementScroll /></div>
          <h3 className="component-label">Element Scroll</h3>
          <p className="component-desc">Scroll-triggered animations with viewport thresholds.</p>
        </div>

        <div className="component-card component-card--centered">
          <div className="component-body"><TiltedCard imageSrc="https://greggvanourek.com/wp-content/uploads/2023/08/Nature-path-by-water-trees-and-mountains-AdobeStock_291242770-scaled.jpeg" /></div>
          <h3 className="component-label">Tilted Card (animated)</h3>
          <p className="component-desc">Hover tilt, smooth scaling, and animated overlay.</p>
        </div>

         <div className="component-card component-card--centered">
          <div className="component-body"><MobileMenu /></div>
          <h3 className="component-label">Mobile Menu</h3>
          <p className="component-desc">Responsive menu with slide/scale transitions.</p>
        </div>

        


        
      </div>
      
      <div className="component-card component-card--centered">
        <div className="component-body"><div className="demo-wrapper"><div className="viewport-container"><ViewportElement /></div></div></div>
        <h3 className="component-label">Elememnt Viewport Tracking</h3>
        <p className="component-desc">Detects when elements enter the viewport for effects.</p>
      </div>
    </div>
  )
}
