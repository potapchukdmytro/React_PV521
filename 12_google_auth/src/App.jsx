import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import UserRoutes from "./routes/UserRoutes";
import { useEffect } from "react";
import "./App.css";
import { getCookie, removeCookie } from "./services/cookie";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "./context/authContext";

function App() {
    const { isValidToken, login, googleLogin } = useAuth();

    useEffect(() => {
        const loginUser = async () => {
            const token = getCookie("uat");
            if (token) {
                try {
                    const payload = jwtDecode(token);
                    if (payload.iss == "https://accounts.google.com") {
                        googleLogin(token);
                    } else {
                        if (await isValidToken(token)) {
                            login(token);
                        } else {
                            removeCookie("uat");
                        }
                    }
                } catch (error) {
                    removeCookie("uat");
                }
            }
        };
        loginUser();
    }, []);

    return (
        <>
            <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
                <UserRoutes />
            </ThemeProvider>
        </>
    );
}

export default App;
