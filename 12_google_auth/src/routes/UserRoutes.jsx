import { Route, Routes } from "react-router";
import Books from "./../pages/books/Books";
import News from "./../pages/news/News";
import Login from "./../pages/login/Login";
import FormWithFiles from "./../pages/formWithFiles/FormWithFiles";
import HomePage from "./../pages/home/HomePage";
import NotFound from "./../pages/notFound/NotFound";
import UserLayout from "./../components/layouts/UserLayout";
import AdminLayout from "../components/layouts/AdminLayout";
import CreateBook from "../adminPages/books/CreateBook";
import EditBook from "../adminPages/books/EditBook";
import BooksTable from "../adminPages/books/BooksTable";
import { useAuth } from "../context/authContext";

function UserRoutes() {
    const {isAdmin} = useAuth();

    return (
        <Routes>
            <Route
                path="/"
                element={<UserLayout />}
            >
                <Route index element={<HomePage />} />
                <Route path="books" element={<Books />} />
                <Route path="news" element={<News />} />
                <Route path="login" element={<Login />} />
                <Route path="tracks" element={<FormWithFiles />} />
                // admin
                {isAdmin() && (
                    <Route path="dashboard" element={<AdminLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="books">
                            <Route index element={<BooksTable />} />
                            <Route path="create" element={<CreateBook />} />
                            <Route path="edit" element={<EditBook />} />
                        </Route>
                    </Route>
                )}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default UserRoutes;
