import { ArrowUpRight } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <a href="#home" className="nav-logo">
        <span className="ieee-mark">IEEE</span>

        <span className="divider" />

        <span className="branch-name">
          SCT STUDENT BRANCH
        </span>
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#tracks">Tracks</a>
        <a href="#events">Events</a>
        <a href="#legacy">Legacy</a>
      </nav>

      <a
        href="#register"
        className="nav-register"
      >
        Register
        <ArrowUpRight size={16} />
      </a>

    </header>
  );
}

export default Navbar;