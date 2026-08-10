import "./NavLink.css";

function NavLink({ children, ...props }) {


    return (
        <span
            className="custom-navlink"
            {...props}
        >
            {children}
        </span>
    );
}

export default NavLink;
