import { useState } from "react";

const inputGroupStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
    margin: "16px 8px",
};

function LoginControlled() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [rememberMe, setRememberMe] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    function submitHandler(event) {
        event.preventDefault();

        console.log(data);
    }

    function onChangeHandler(event) {
        const { name, value, checked } = event.target;

        if (name === "rememberMe") {
            const newData = { ...data, rememberMe: checked };
            setData(newData);
        } else {
            const newData = { ...data, [name]: value };
            setData(newData);
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
                        />
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
