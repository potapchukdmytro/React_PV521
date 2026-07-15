import { jwtDecode } from "jwt-decode";
import { createContext, useState, useContext } from "react";
import { removeCookie } from "../services/cookie";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function logout() {
        removeCookie("uat");
        setUser(null);
    }

    function login(token) {
        try {
            const payload = jwtDecode(token);
            delete payload.exp;
            delete payload.iss;
            delete payload.aud;
            setUser(payload);
            return true;
        } catch (error) {
            return false;
        }
    }

    return (
        <AuthContext.Provider value={{ user, logout, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}