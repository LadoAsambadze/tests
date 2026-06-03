import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Products from "./pages/Products";
import Navbar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
