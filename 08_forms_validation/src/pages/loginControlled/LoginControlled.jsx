import { useState } from "react";

const inputGroupStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
    margin: "16px 8px",
};

function LoginControlled() {
    const [data, setData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    // state помилок для валідації
    const [errors, setErrors] = useState({ isPasswordBlur: false });

    function submitHandler(event) {
        event.preventDefault();

        let result =  validate("email", data.email);
        if(result.email) {
            return;
        }

        result = validate("password", data.password);
        if(result.password) {
            return;
        }

        console.log(data);
    }

    function validate(property, value) {
        if (property == "email") {
            return validateEmail(value);
        } else if (property == "password") {
            return validatePassword(value);
        }
    }

    function validateEmail(email) {
        const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

        const invalidEmailError = "Невірний формат пошти";
        const requiredEmailError = "Пошта є обов'язковою";

        const result = { ...errors };
        delete result.email;

        // email
        if (!email || email.length == 0) {
            result.email = requiredEmailError;
        } else if (!emailRegex.test(email)) {
            result.email = invalidEmailError;
        }

        setErrors(result);
        return result;
    }

    function validatePassword(password) {
        const passwordRegex =
            /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;

        const invalidPasswordError =
            "Пароль повинен містити цифру, символ, велику та малу літери";
        const lengthPasswordError = "Пароль повинен бути від 8 до 16 символів";

        const result = { ...errors };
        delete result.password;

        // password
        if (!password || password.length < 8 || password.length > 16) {
            result.password = lengthPasswordError;
        } else if (!passwordRegex.test(password)) {
            result.password = invalidPasswordError;
        }

        setErrors(result);
        return result;
    }

    function passwordBlur() {        
        setErrors({ ...errors, isPasswordBlur: true });
    }

    function onChangeHandler(event) {
        const { name, value, checked } = event.target;

        if (name === "rememberMe") {
            const newData = { ...data, rememberMe: checked };
            setData(newData);
        } else {
            const newData = { ...data, [name]: value };
            setData(newData);
            validate(name, newData[name]);
        }
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
                            name="email"
                            id="email"
                            autoComplete="email"
                            style={{ fontSize: "1em" }}
                            type="text"
                            placeholder="user@mail.com"
                            value={data.email}
                            onChange={onChangeHandler}
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
                            name="password"
                            id="password"
                            style={{ fontSize: "1em" }}
                            type="password"
                            placeholder="password"
                            autoComplete="current-password"
                            value={data.password}
                            onChange={onChangeHandler}
                            onBlur={passwordBlur}
                        />
                        {errors.password && errors.isPasswordBlur && (
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
                            name="rememberMe"
                            id="rememberMe"
                            type="checkbox"
                            checked={data.rememberMe}
                            onChange={onChangeHandler}
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

export default LoginControlled;
