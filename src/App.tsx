import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='*' element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
