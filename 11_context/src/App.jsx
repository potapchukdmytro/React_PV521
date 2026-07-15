import { Button, createTheme, ThemeProvider } from "@mui/material";
import UserRoutes from "./routes/UserRoutes";
import { useEffect } from "react";
import "./App.css";
import { getCookie } from "./services/cookie";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "./context/authContext";

function App() {
    const {login} = useAuth();

    useEffect(() => {
        const token = getCookie("uat");
        if (token) {
            login(token);
        }
    }, []);

    return (
        <>
                <ThemeProvider
                    theme={createTheme({ palette: { mode: "dark" } })}
                >
                    <UserRoutes />
                </ThemeProvider>
        </>
    );
}

export default App;
