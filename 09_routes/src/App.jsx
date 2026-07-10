import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Books from "./pages/books/Books";
import News from "./pages/news/News";
import LoginControlled from "./pages/loginControlled/LoginControlled";
import LoginUncontrolled from "./pages/loginUncontrolled/LoginUncontrolled";
import LoginWithFormik from "./pages/loginWithFormik/LoginWithFormik";
import FormWithFiles from "./pages/formWithFiles/FormWithFiles";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import { Route, Routes } from "react-router";
import NotFound from "./pages/notFound/NotFound";

function App() {
    return (
        <>
            <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/login" element={<LoginWithFormik />} />
                    <Route path="/tracks" element={<FormWithFiles />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ThemeProvider>
        </>
    );
}

export default App;
