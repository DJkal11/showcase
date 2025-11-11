import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ReactBitsPage from './pages/ReactBitsPage'
import MotionPage from './pages/MotionPage'
import ToolsPage from './pages/ToolsPage'
import ExtrasPage from './pages/ExtrasPage'

function App(){
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ReactBitsPage/>} />
          <Route path="/react-bits" element={<ReactBitsPage/>} />
          <Route path="/motion" element={<MotionPage/>} />
          {/* <Route path="/tools" element={<ToolsPage/>} />
          <Route path="/extras" element={<ExtrasPage/>} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
