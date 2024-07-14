import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import Home from '@/pages/Home'
import Header from '@/components/Header'

function App() {
  return (
    <div className="bg-zinc-900 *:font-nunito">
      <Router>
        <Header />
        {/* This is div is to divide the header from the content (add the padding) */}
        <div className="pt-16 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/contact" element={<h1>Contact</h1>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
