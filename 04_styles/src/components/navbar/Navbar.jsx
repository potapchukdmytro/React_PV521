import "./Navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import Coin from "../game/Coin";

function Navbar() {
    const localTheme = localStorage.getItem("theme");
    let defaultState = true;
    if(localTheme) {
        try {
            defaultState = JSON.parse(localTheme)
        } catch (error) {
            localStorage.removeItem("theme");
        }
        
    }
    const [isDark, setIsDark] = useState(defaultState);

    function changeTheme() {
        const newDark = !isDark;
        setIsDark(newDark);
        localStorage.setItem("theme", JSON.stringify(newDark));
    }

    return (
        <nav className={`navbar ${isDark ? "navbar-dark" : "navbar-light"}`}>
            <a>Головна</a>
            <a>Про нас</a>
            <a>Контакти</a>
            <a>Документація</a>
            <FontAwesomeIcon onClick={changeTheme} icon={isDark ? faSun : faMoon} />
            {/* {
                isDark 
                ? <FontAwesomeIcon onClick={changeTheme} icon={faSun} />
                : <FontAwesomeIcon onClick={changeTheme} icon={faMoon} />
            } */}
        </nav>
    );
}

export default Navbar;
