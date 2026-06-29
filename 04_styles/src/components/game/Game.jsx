import Coin from "./Coin";

function Game() {
    return (
        <>
            <Coin x={0} />
            <Coin x={100} />
            <Coin x={200} />
            <Coin x={-260} />
            <Coin x={550} />
        </>
    );
}

export default Game;
