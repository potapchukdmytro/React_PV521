import NavLink from "../nav/NavLink";
import { Link } from "react-router";

function Navbar() {
    const links = [
        { text: "Головна", link: "/" },
        { text: "Книги", link: "/books" },
        { text: "Новини", link: "/news" },
        { text: "Плейлист", link: "/tracks" }
    ];

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
                {links.map((l) => (
                    <Link key={l.text} to={l.link}>
                        <NavLink>{l.text}</NavLink>
                    </Link>
                ))}
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
