import { useState } from "react";
import "./css/Navbar.css";
import pokemonLogo from "../pokemonLogo.png";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-logo">
        {/* <img src={pokemonLogo} className="nav-logo-image" alt="logo-img" /> */}
        <a className="nav-title" href="/">
          PokePedia
        </a>
      </div>
      <div className={`nav-items ${isNavbarOpen && "nav-items-open"}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
      <div
        className={`nav-toggle ${isNavbarOpen && "nav-toggle-open"}`}
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
