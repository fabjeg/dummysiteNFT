import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { Collection } from "./pages/collection/colection"; 
import { Home } from "./pages/home/home";
import { Layout } from "./index";
import './main.css'
import { Contact } from "./pages/contact/contact";

createRoot(document.getElementById("root")).render(
<StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);