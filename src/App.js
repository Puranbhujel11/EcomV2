import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import Product from './Product';
import Contact from './Contact';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Header />
    <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
