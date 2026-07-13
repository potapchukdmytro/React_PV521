import { Outlet } from "react-router";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function AdminLayout() {
    return (
        <>
                <Outlet />
        </>
    );
}

export default AdminLayout;
