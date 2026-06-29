import { useState } from "react";
import characterSprite from "./assets/character.png";

const minX = 398;
const maxX = 1442;

function Character() {
    return (
        <img style={{
            position: "absolute",
            top: "800px",
            left: `860px`
        }} 
        width="80px"
        src={characterSprite}/>
    )
}

export default Character;