
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';
import Home from './components/Home';


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
  );
}

export default App;
