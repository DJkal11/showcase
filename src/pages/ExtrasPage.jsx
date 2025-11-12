export default function ExtrasPage(){
  return (
    <div style={{padding:20}}>
      <h1>Extras</h1>
      <div className="component-grid">
        <div className="component-card component-card--centered">
          <div className="component-body"><div style={{height:120, background:'#f6f6f6', borderRadius:8}} /></div>
          <h3 className="component-label">Placeholder 1</h3>
          <p className="component-desc">Reserved space for future component demo.</p>
        </div>

        <div className="component-card component-card--centered">
          <div className="component-body"><div style={{height:120, background:'#f6f6f6', borderRadius:8}} /></div>
          <h3 className="component-label">Placeholder 2</h3>
          <p className="component-desc">Reserved space for future component demo.</p>
        </div>
      </div>
    </div>
  )
}
