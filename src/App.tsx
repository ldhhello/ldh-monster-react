import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './routes'
import Portfolio from './routes/portfolio'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='*' element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
