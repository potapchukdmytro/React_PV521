const inputGroupStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
    margin: "16px 8px",
};

function Login() {
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
                    style={{
                        padding: "32px 32px",
                        border: "1px solid gray",
                        borderRadius: "12px",
                        width: "35%",
                    }}
                >
                    <h1 style={{ margin: "0px 0px 32px 0px" }}>Вхід</h1>
                    <div style={inputGroupStyle}>
                        <label>Пошта</label>
                        <input
                            style={{ fontSize: "1em" }}
                            type="text"
                            placeholder="user@mail.com"
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label>Пароль</label>
                        <input
                            style={{ fontSize: "1em" }}
                            type="password"
                            placeholder="password"
                        />
                    </div>

                    <div style={{ margin: "16px 8px", textAlign: "start" }}>
                        <label>Запам'яти мене</label>
                        <input type="checkbox" />
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

export default Login;
