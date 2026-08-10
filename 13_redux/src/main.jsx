import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./context/authContext";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AuthProvider>
                    <HelmetProvider>
                        <App />
                    </HelmetProvider>
                </AuthProvider>
            </Provider>
        </BrowserRouter>
    </StrictMode>,
);
