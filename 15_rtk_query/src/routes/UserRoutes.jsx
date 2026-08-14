import { Route, Routes } from "react-router";
import Books from "./../pages/books/Books";
import News from "./../pages/news/News";
import Login from "./../pages/login/Login";
import FormWithFiles from "./../pages/formWithFiles/FormWithFiles";
import HomePage from "./../pages/home/HomePage";
import NotFound from "./../pages/notFound/NotFound";
import UserLayout from "./../components/layouts/UserLayout";
import AdminLayout from "../components/layouts/AdminLayout";
import CreateBook from "../pages/dashboard/books/CreateBook";
import EditBook from "../pages/dashboard/books/EditBook";
import BooksTable from "../pages/dashboard/books/BooksTable";
import { useAuth } from "../context/authContext";
import Balance from "../pages/balance/Balance";
import Playlist from "../pages/playlist/Playlist";
import Dashboard from "../pages/dashboard/Dashboard";
import TracksList from "../pages/dashboard/music/TracksList";
import CreateTrack from "../pages/dashboard/music/CreateTrack";
import UpdateTrack from "../pages/dashboard/music/UpdateTrack";

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
                <Route path="addtrack" element={<FormWithFiles />} />
                <Route path="balance" element={<Balance />} />
                <Route path="playlist" element={<Playlist />} />
                // admin
                {isAdmin() && (
                    <Route path="dashboard" element={<AdminLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="books">
                            <Route index element={<BooksTable />} />
                            <Route path="create" element={<CreateBook />} />
                            <Route path="edit/:id" element={<EditBook />} />
                        </Route>
                        <Route path="tracks">
                            <Route index element={<TracksList />} />
                            <Route path="create" element={<CreateTrack />} />
                            <Route path="edit/:id" element={<UpdateTrack />} />
                        </Route>
                    </Route>
                )}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default UserRoutes;
