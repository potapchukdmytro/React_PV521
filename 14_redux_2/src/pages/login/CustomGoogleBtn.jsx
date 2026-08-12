import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { setCookie } from "../../services/cookie";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/authContext";

export function CustomGoogleBtn() {
    const navigate = useNavigate();
    const { googleLogin } = useAuth();

    // Google auth
    function googleSuccessHandler(creds) {
        console.log(creds);
        
        const token = creds.credential;
        try {
            const decoded = jwtDecode(token);
            setCookie("uat", token, decoded.exp);
            const res = googleLogin(token);
            if (res) {
                navigate("/", { replace: true });
            }
        } catch (error) {}
    }

    function googleErrorHandler() {
        console.log("Не вдалося увійти через Google. Спробуйте інший варіант");
    }

    const loginBn = useGoogleLogin({
        onSuccess: googleSuccessHandler,
        onError: googleErrorHandler
    });

    return <button onClick={() => loginBn()}>Google</button>;
}
