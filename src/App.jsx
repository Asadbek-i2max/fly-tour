import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Tours from "./pages/Tours";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import Gallery from "./pages/Gallery";

import "./i18n";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
