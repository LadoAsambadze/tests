import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Shoes from "./pages/Shoes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shoes" element={<Shoes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
