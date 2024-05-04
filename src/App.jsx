import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppComps from './appcomps.jsx';
import './css/body/body.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <BrowserRouter>
        {/* <AppComps.Header /> */}
        <Routes>

          <Route path='/' element={<AppComps.Index />} />
          <Route path='/contact-us' />
        </Routes>
        <AppComps.Footer />
      </BrowserRouter>
    </main>
  )
}

export default App
