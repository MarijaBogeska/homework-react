import { Link } from "react-router-dom";
import type { NavLink } from "../../models/core.model";
import "./Navbar.css";

interface NavLinks {
  navData: NavLink[];
}
function Navbar({ navData }: NavLinks) {
  return (
    <nav className="Navbar">
      <ul>
        {navData.map((link, i) => (
          <li key={i}>
            <Link to={link.path} >{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
