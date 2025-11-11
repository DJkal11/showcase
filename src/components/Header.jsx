import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)

  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="header-left">
          <button className="hamburger" aria-label="Toggle navigation" onClick={() => setOpen(v => !v)} aria-expanded={open}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <NavLink to="/" className="brand-link">Showcase</NavLink>
        </div>

        <nav className={`main-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          <NavLink to="/react-bits" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setOpen(false)}>React Bits</NavLink>
          <NavLink to="/motion" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setOpen(false)}>Motion</NavLink>
          {/* <NavLink to="/tools" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setOpen(false)}>Tools</NavLink>
          <NavLink to="/extras" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setOpen(false)}>Extras</NavLink> */}
        </nav>

        <div className="header-actions">
         
        </div>
      </div>
    </header>
  )
}
