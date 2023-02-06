import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import PokemonEncyclopedia from "./component/PokemonEncyclopedia";
import Detail from "./component/Detail";
import About from "./component/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonEncyclopedia />} />
        <Route path="/detail/:pokemonName" element={<Detail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
