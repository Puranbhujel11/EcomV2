import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Product from './Product';
import Contact from './Contact';

function App() {
  return (
    <>
    <Router>
    <Header />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
