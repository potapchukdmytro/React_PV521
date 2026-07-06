import { useFormik } from "formik";

const inputGroupStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
    margin: "16px 8px",
};

function LoginWithFormik() {
    function submitHandler(values) {
        console.log(values);
    }   

    // інпути повинні мати name
    // назви властивостей повинні бути такі самі як і name у інпутах
    const initValues = {
        email: "",
        password: "",
        rememberMe: false
    };

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: submitHandler
    });

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
                    onSubmit={formik.handleSubmit}
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
                            value={formik.values.email}
                            onChange={formik.handleChange}
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
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div style={{ margin: "16px 8px", textAlign: "start" }}>
                        <label htmlFor="rememberMe">Запам'яти мене</label>
                        <input
                            name="rememberMe"
                            id="rememberMe"
                            type="checkbox"
                            checked={formik.values.rememberMe}
                            onChange={formik.handleChange}
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

export default LoginWithFormik;
