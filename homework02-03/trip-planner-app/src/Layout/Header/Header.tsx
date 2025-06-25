import Navbar from "../../Components/Navbar/Navbar";
import type { NavLink } from "../../models/core.model";
import "./Header.css"

interface HeaderProps{
    title: string;
    navData: NavLink[];
}

function Header({title,navData}: HeaderProps){
return (
    <header className="Header">
        <h1>{title}</h1>
        <Navbar navData={navData} />
    </header>
)
}

export default Header;