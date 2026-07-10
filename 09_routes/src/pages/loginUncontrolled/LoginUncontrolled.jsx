import axios from "axios";
import { useRef, useState } from "react";

const inputGroupStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
    margin: "16px 8px",
};

function LoginUncontrolled() {
    const [errors, setErrors] = useState({});

    // useRef - константа яка посилається на значення або html елемент
    // зміна value useRef не викликає ререндер
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const rememberMeRef = useRef(null);

    async function submitHandler(event) {
        event.preventDefault();

        const result = validate();

        if (result.email || result.password) {
            return;
        }

        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            rememberMe: rememberMeRef.current.checked,
        };

        const response = await axios.post(
            "https://frontend53.somee.com/api/auth/login",
            data,
        );
    }

    // валідація на кнопку
    function validate() {
        const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        const passwordRegex =
            /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const invalidEmailError = "Невірний формат пошти";
        const requiredEmailError = "Пошта є обов'язковою";
        const invalidPasswordError =
            "Пароль повинен містити цифру, символ, велику та малу літери";
        const lengthPasswordError = "Пароль повинен бути від 8 до 16 символів";

        const result = {};
        // email
        if (!email || email.length == 0) {
            result.email = requiredEmailError;
        } else if (!emailRegex.test(email)) {
            result.email = invalidEmailError;
        }

        // password
        if (!password || password.length < 8 || password.length > 16) {
            result.password = lengthPasswordError;
        } else if (!passwordRegex.test(password)) {
            result.password = invalidPasswordError;
        }

        setErrors(result);
        return result;
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
                        {errors.email && (
                            <span
                                style={{
                                    color: "lightcoral",
                                    fontSize: "13px",
                                }}
                            >
                                {errors.email}
                            </span>
                        )}
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
                        {errors.password && (
                            <span
                                style={{
                                    color: "lightcoral",
                                    fontSize: "13px",
                                }}
                            >
                                {errors.password}
                            </span>
                        )}
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
