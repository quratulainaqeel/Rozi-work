import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Routes/home";
import About from "./Routes/about";
import Contact from "./Routes/contact";
import Service from "./Routes/service";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
