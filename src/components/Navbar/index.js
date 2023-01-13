import { useState } from "react";
import MenuIcon from "../MenuIcon/MenuIcon";
import NavLinks from "./NavLinks";
import './style.css'


const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

    const toggleNav = () => {
        setShowNav(!showNav)
    }

    return (
        <div className="header">
            <nav className="navbar">
                <div className="heading">
                    <p>Navbar</p>
                </div>
                <div>
                    <MenuIcon onClick={toggleNav} />
                </div>
                <NavLinks showNav={showNav} />
            </nav>
        </div>
    )
}

export default Navbar;