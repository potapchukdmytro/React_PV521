import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router";

function UserLayout() {
    return (
        <>
            <Navbar />
            <div style={{ minHeight: "100vh" }}>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default UserLayout;
