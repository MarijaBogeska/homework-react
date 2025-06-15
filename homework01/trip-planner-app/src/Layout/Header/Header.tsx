import Navbar from "../../Components/Navbar/Navbar";
import type { NavLink } from "../../models/core.model";
import "./Header.css"

interface HeaderProps{
    title: string;
    navData: NavLink[];
    onPageClick: (page: string)=> void;
}

function Header({title,navData,onPageClick}: HeaderProps){
return (
    <header className="Header">
        <h1>{title}</h1>
        <Navbar navData={navData} onClick={onPageClick}/>
    </header>
)
}

export default Header;