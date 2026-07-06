import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Books from "./pages/books/Books";
import News from "./pages/news/News";
import LoginControlled from "./pages/loginControlled/LoginControlled";

function App() {
    return (
        <>
            {/* <Books/> */}
            {/* <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
                <News />
            </ThemeProvider> */}
            <LoginControlled />
        </>
    );
}

export default App;
