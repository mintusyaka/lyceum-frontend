import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import CurriculumsPage from './pages/CurriculumsPage';
import PricesPage from './pages/PricesPage';


function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contacts" element={<ContactsPage />} />
    <Route path="/prices" element={<PricesPage />} />
    <Route path="/curriculums" element={<CurriculumsPage />} />

  </Routes>
</BrowserRouter>

  )
}

export default App
