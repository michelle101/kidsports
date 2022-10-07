import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import { Blog } from "./Components/Pages/Blog";
import { Contact } from "./Components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="kidsports/" element={<Home />} />
            <Route path="kidsports/About" element={<About />} />
            <Route path="kidsports/Blog" element={<Blog />} />
            <Route path="kidsports/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;