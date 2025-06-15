import type { NavLink } from "../../models/core.model";
import "./Navbar.css";

interface NavLinks {
  navData: NavLink[];
  onClick: (page: string) => void;
}
function Navbar({ navData, onClick }: NavLinks) {
  return (
    <nav className="Navbar">
      <ul>
        {navData.map((link, i) => (
          <li key={i}>
            <a href="#" onClick={()=> onClick(link.text)}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
