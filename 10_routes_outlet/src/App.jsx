import { createTheme, ThemeProvider } from "@mui/material";
import UserRoutes from "./routes/UserRoutes";
import { useEffect, useState } from "react";
import "./App.css";
import { getCookie } from "./services/cookie";
import { jwtDecode } from "jwt-decode";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = getCookie("uat");
        if(token) {
            const payload = jwtDecode(token);
            delete payload.exp;
            delete payload.iss;
            delete payload.aud;
            setUser(payload);
        }
    }, [])

    return (
        <>
            <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
                <UserRoutes user={user} setUser={setUser} />
            </ThemeProvider>
        </>
    );
}

export default App;
