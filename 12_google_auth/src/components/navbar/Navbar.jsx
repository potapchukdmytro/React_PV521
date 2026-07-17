import { removeCookie } from "../../services/cookie";
import NavLink from "../nav/NavLink";
import { Link } from "react-router";
import { useAuth } from "../../context/authContext";

function Navbar() {
    const { logout, user, isAdmin } = useAuth();

    const links = [
        { text: "Головна", link: "/" },
        { text: "Книги", link: "/books" },
        { text: "Новини", link: "/news" },
        { text: "Плейлист", link: "/tracks" },
    ];

    const adminLinks = [{ text: "Адмін панель", link: "/dashboard" }];

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
                {isAdmin() &&
                    adminLinks.map((l) => (
                        <Link key={l.text} to={l.link}>
                            <NavLink>{l.text}</NavLink>
                        </Link>
                    ))}
            </div>
            <div style={{ flexGrow: 1 }}>
                {user ? (
                    <>
                        <NavLink>Профіль</NavLink>
                        <NavLink onClick={logout}>Вийти</NavLink>
                    </>
                ) : (
                    <Link to="/login">
                        <NavLink>Увійти</NavLink>
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
