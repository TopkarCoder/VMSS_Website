import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Company from './pages/Company';
import MissionVision from './pages/MissionVision';
import ProductsAndServices from './pages/ProductsAndServices';
import Customers from './pages/Customers';
import Stories from './pages/Stories';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/mission" element={<MissionVision />} />

        <Route path="/productsandservices" element={<ProductsAndServices />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </Router>
  );
}