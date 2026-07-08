import axios from "axios";
import { useRef } from "react";

const inputGroupStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
    margin: "16px 8px",
};

function LoginUncontrolled() {
    console.log("login render");
    
    // useRef - константа яка посилається на значення або html елемент
    // зміна value useRef не викликає ререндер
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const rememberMeRef = useRef(null);

    async function submitHandler(event) {
        event.preventDefault();

        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            rememberMe: rememberMeRef.current.checked
        }

        console.log(data);

        const response = await axios.post("https://frontend53.somee.com/api/auth/login", data);
        console.log(response);
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                }}
            >
                <form
                    onSubmit={submitHandler}
                    style={{
                        padding: "32px 32px",
                        border: "1px solid gray",
                        borderRadius: "12px",
                        width: "35%",
                    }}
                >
                    <h1 style={{ margin: "0px 0px 32px 0px" }}>Вхід</h1>
                    <div style={inputGroupStyle}>
                        <label htmlFor="email">Пошта</label>
                        <input
                            ref={emailRef}
                            name="email"
                            id="email"
                            autoComplete="email"
                            style={{ fontSize: "1em" }}
                            type="text"
                            placeholder="user@mail.com"
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label htmlFor="password">Пароль</label>
                        <input
                            ref={passwordRef}
                            name="password"
                            id="password"
                            style={{ fontSize: "1em" }}
                            type="password"
                            placeholder="password"
                            autoComplete="current-password"
                        />
                    </div>

                    <div style={{ margin: "16px 8px", textAlign: "start" }}>
                        <label htmlFor="rememberMe">Запам'яти мене</label>
                        <input
                            ref={rememberMeRef}
                            name="rememberMe"
                            id="rememberMe"
                            type="checkbox"
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            style={{
                                border: "none",
                                borderRadius: "5px",
                                fontSize: "21px",
                                padding: "6px 12px",
                                width: "100%",
                                backgroundColor: "lightseagreen",
                            }}
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default LoginUncontrolled;
