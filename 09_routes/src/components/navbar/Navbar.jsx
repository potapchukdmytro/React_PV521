import NavLink from "../nav/NavLink";
import { Link } from "react-router";

function Navbar() {
    return (
        <nav
            style={{
                height: "80px",
                borderBottom: "1px solid gray",
                backgroundColor: "#1e1f27",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    marginLeft: "16px",
                    flexGrow: 5,
                    display: "flex",
                }}
            >
                <Link to="/">
                    <NavLink>Головна</NavLink>
                </Link>
                <Link to="/books">
                    <NavLink>Книги</NavLink>
                </Link>
                <Link to="/news">
                    <NavLink>Новини</NavLink>
                </Link>
                <Link to="tracks">
                    <NavLink>Плейлист</NavLink>
                </Link>
            </div>
            <div style={{ flexGrow: 1 }}>
                <Link to="/login">
                    <NavLink>Увійти</NavLink>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
