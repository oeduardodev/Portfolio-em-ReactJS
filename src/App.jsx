import "./App.css";
import Home from "./Home/Home"
import Figma from "./Components/OutrosConhecimentos/Figma/Figma";
import Photoshop from "./Components/OutrosConhecimentos/Photoshop/Photoshop"
import Premiere from "./Components/OutrosConhecimentos/Premiere/Premiere";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/ProjFigma" element={<Figma />} />
          <Route path="/ProjPhotoshop" element={<Photoshop/>} />
          <Route path="/ProjPremiere" element={<Premiere/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
