import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Books from "./pages/books/Books";
import News from "./pages/news/News";
import LoginControlled from "./pages/loginControlled/LoginControlled";
import LoginUncontrolled from "./pages/loginUncontrolled/LoginUncontrolled";
import LoginWithFormik from "./pages/loginWithFormik/LoginWithFormik";
import FormWithFiles from "./pages/formWithFiles/FormWithFiles";

function App() {
    return (
        <>
            {/* <Books/> */}
            {/* <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
                <News />
            </ThemeProvider> */}
            {/* <LoginControlled /> */}
            {/* <LoginUncontrolled /> */}
            <LoginWithFormik/>
            {/* <FormWithFiles /> */}
        </>
    );
}

export default App;
