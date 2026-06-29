import { gradientStyle } from "./styles";
import { useState } from "react";

export function CircleButton({ text, size = "40px" }) {
    const btnStyles = {
        color: "black",
        backgroundColor: "#AAAAAA",
        borderRadius: "50%",
        width: size,
        height: size,
    };

    return <button style={btnStyles}>{text}</button>;
}

export function Button({ text, width = "150px", height = "40px" }) {
    return (
        <button
            style={{
                color: "white",
                backgroundColor: "lightcoral",
                fontSize: "1.1em",
                height: height,
                width: width,
            }}
        >
            {text}
        </button>
    );
}

export function ButtonGradient({ text, width = "150px", height = "40px" }) {
    const [hover, setHover] = useState(false);

    return (
        <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                ...gradientStyle,
                width: width,
                height: height,
                opacity: hover ? "70%" : "100%",
                boxShadow: hover ? "-1px -1px 1px black" : "none",
                cursor: hover ? "pointer" : "default",
            }}
        >
            {text}
        </button>
    );
}

export function ButtonText({ children }) {
    return <button>{children}</button>;
}
