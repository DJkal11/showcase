import Showcase from '../components/showcase'
import { Button } from '../components/ui/button'

export default function ToolsPage(){
  return (
    <div style={{padding:20}}>
      <h1>Tools</h1>
      <div className="component-grid">
        <div className="component-card component-card--centered">
          <div className="component-body"><Showcase /></div>
          <h3 className="component-label">Showcase</h3>
          <p className="component-desc">Sample cards illustrating UI patterns and tags.</p>
        </div>

        <div className="component-card component-card--centered">
          <div className="component-body"><div style={{display:'flex', gap:12}}>
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </div></div>
          <h3 className="component-label">UI Button</h3>
          <p className="component-desc">Buttons with primary/secondary variants and consistent spacing.</p>
        </div>
      </div>
    </div>
  )
}
