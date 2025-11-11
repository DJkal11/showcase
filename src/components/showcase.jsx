import React from 'react'

function SampleCard({title, desc, tags=[]}){
  return (
    <article className="showcase-card">
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <h4 style={{margin:0}}>{title}</h4>
        <div className="meta">{tags.join(' • ')}</div>
      </div>
      <p style={{margin:0, color:'var(--muted)'}}>{desc}</p>
      <div style={{display:'flex', justifyContent:'flex-end'}}>
        <a className="showcase-cta" href="#">View</a>
      </div>
    </article>
  )
}

export default function Showcase(){
  const items = [
    { title: 'Design System', desc: 'Reusable components, tokens and layout primitives for consistent UI.', tags:['UI','Tokens'] },
    { title: 'Animation Kit', desc: 'A collection of animation utilities and examples powered by Motion.', tags:['Motion','Animations'] },
    { title: 'Interactive Cards', desc: 'Cards with hover and mouse-follow effects, ready to drop in.', tags:['UX','Microinteraction'] },
    { title: 'Embla Carousel', desc: 'Accessible carousel wrapper with Prev/Next controls and gestures support.', tags:['Carousel'] },
    { title: 'Utilities', desc: 'Small helper functions and primitives used across the app.', tags:['Helpers'] },
    { title: 'Experimental', desc: 'Work-in-progress demos and experiments.', tags:['WIP'] },
  ]

  return (
    <section>
      <h2 style={{marginTop:0}}>Showcase</h2>
      <div className="showcase-grid">
        {items.map((it, i) => <SampleCard key={i} title={it.title} desc={it.desc} tags={it.tags} />)}
      </div>
    </section>
  )
}
