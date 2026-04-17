import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre"    element={<Sobre />} />
        <Route path="/contato"  element={<Contato />} />
        {/* 404 — redireciona para home */}
        <Route path="*"         element={<Home />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </BrowserRouter>
  )
}
