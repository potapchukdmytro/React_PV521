import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Books from "./pages/books/Books";
import News from "./pages/news/News";

function App() {
    return (
        <>
            {/* <Books/> */}
            <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
                <News />
            </ThemeProvider>
        </>
    );
}

export default App;
