import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import CurriculumsPage from './pages/CurriculumsPage';
import PricesPage from './pages/PricesPage';
import PrimarySchoolPlans from './pages/PrimarySchoolPlans';
import MiddleSchoolPlans from './pages/MiddleSchoolPlans';
import HighSchoolPlans from './pages/HighSchoolPans';
import Plans from './pages/Plans';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/prices" element={<PricesPage />} />
      <Route path="/curriculums" element={<CurriculumsPage />} />
      <Route path="/plans/primary-school" element={<PrimarySchoolPlans />} />
      <Route path="/plans/middle-school" element={<MiddleSchoolPlans />} />
      <Route path="/plans/high-school" element={<HighSchoolPlans />} />
      <Route path="/plans" element={<Plans />} />
    </Routes>
  </BrowserRouter>

  )
}

export default App
