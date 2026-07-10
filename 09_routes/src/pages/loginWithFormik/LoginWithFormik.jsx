import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";

const inputGroupStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
    margin: "16px 8px",
};

function LoginWithFormik() {
    const navigate = useNavigate();

    function submitHandler(values) {
        console.log(values);

        // Перекидає на головну сторінку
        navigate("/");
    }

    // інпути повинні мати name
    // назви властивостей повинні бути такі самі як і name у інпутах
    const initValues = {
        email: "",
        password: "",
        rememberMe: false,
    };

    // схема валідації через yup
    const passwordRegex =
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;
    const validationSchema = Yup.object({
        email: Yup.string()
            .required("Пошта є обов'язковою")
            .email("Невірний формат пошти"),
        password: Yup.string()
            .required("Пароль є обов'язковим")
            .min(8, "Мінімальна довжина 8 символів")
            .max(16, "Максимальна довжина 16 символів")
            .matches(passwordRegex, "Пароль повинен містити цифру, символ, велику та малу літери"),
    });

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: submitHandler,
        validationSchema: validationSchema,
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
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.email && formik.touched.email && (
                            <span
                                style={{
                                    color: "lightcoral",
                                    fontSize: "13px",
                                }}
                            >
                                {formik.errors.email}
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
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.password && formik.touched.password && (
                            <span
                                style={{
                                    color: "lightcoral",
                                    fontSize: "13px",
                                }}
                            >
                                {formik.errors.password}
                            </span>
                        )}
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
