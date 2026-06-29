import { useState } from "react";
import cointSprite from "./assets/coins.gif";

const size = 1124;

function Coin({x = 0}) {
    const [y, setY] = useState(0);

    setTimeout(() => {
        if(y >= 900) {
            setY(0)
        } else {
            setY((prev) => prev + 10);
        }
    }, 100)

    return (
        <div style={{position: "relative", left: `${x}px`, top: `${y}px`}}>
            <img width="40px" height="40px" src={cointSprite} />
        </div>
    )
}

export default Coin;