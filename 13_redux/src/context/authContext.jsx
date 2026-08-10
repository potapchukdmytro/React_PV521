import { jwtDecode } from "jwt-decode";
import { createContext, useState, useContext } from "react";
import { removeCookie } from "../services/cookie";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function logout() {
        removeCookie("uat");
        setUser(null);
    }

    function isAdmin() {
        return user && user.role == "admin";
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

    function googleLogin(token) {
        try {
            const payload = jwtDecode(token);
            const userData = {
                email: payload.email,
                firstName: payload.given_name,
                lastName: payload.family_name,
                userName: payload.email,
                image: payload.picture,
                role: "user"
            };

            setUser(userData);
            return true;

        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async function isValidToken(token) {
        try {
            const response = await axios.post("https://frontend53.somee.com/api/auth/validate", token, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(response.status == 200) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error.response);
            return false;
        }
    }

    return (
        <AuthContext.Provider value={{ user, logout, login, isAdmin, isValidToken, googleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}