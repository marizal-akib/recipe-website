import { NavLink } from "react-router-dom";
import './Nav.css'

const Navbar = () => {
  return (
    <div>
      <h2>Khaboo!!!</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
