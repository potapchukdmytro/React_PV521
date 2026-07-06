import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Books from "./pages/books/Books";
import News from "./pages/news/News";
import Login from "./pages/login/Login";

function App() {
    return (
        <>
            {/* <Books/> */}
            {/* <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
                <News />
            </ThemeProvider> */}
            <Login />
        </>
    );
}

export default App;
