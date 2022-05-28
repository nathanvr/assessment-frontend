import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./component/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path="/home" element={<Home />}></Route>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/ProductDetail/:id" element={<Detail />} />{" "}
          {/* rutas en min y separadas por guion */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
