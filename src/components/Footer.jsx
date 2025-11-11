import React from 'react'

export default function Footer(){
  return (
    <footer style={{marginTop:40}} className="app-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="brand">Showcase</span>
          <span className="dot">•</span>
          <span className="meta">React + Motion demos</span>
        </div>
        <div className="footer-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
          <a href="https://react.dev/" target="_blank" rel="noreferrer" className="footer-link">React</a>
          <a href="https://motion.dev/" target="_blank" rel="noreferrer" className="footer-link">Motion</a>
        </div>
      </div>
    </footer>
  )
}