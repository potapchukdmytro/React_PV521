import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

function Balance() {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const { balance } = useSelector((state) => state.userBalance);

    function depositHandler() {
        const value = parseInt(inputRef.current.value);
        dispatch({ type: "deposit", payload: value });
    }

    function withdrawHandler() {
        const value = parseInt(inputRef.current.value);
        dispatch({ type: "withdraw", payload: value });
    }

    return (
        <>
            <h2>${balance}</h2>
            <div style={{ margin: "12px 0px" }}>
                <input
                    ref={inputRef}
                    style={{ fontSize: "0.9em" }}
                    type="number"
                    placeholder="0"
                    min={0}
                />
            </div>
            <button
                style={{
                    margin: "0px 8px",
                    fontSize: "0.9em",
                    padding: "4px 8px",
                    backgroundColor: "darkgreen",
                    border: "none",
                    borderRadius: "5px",
                }}
                onClick={depositHandler}
            >
                Deposit
            </button>
            <button
                style={{
                    margin: "0px 8px",
                    fontSize: "0.9em",
                    padding: "4px 8px",
                    backgroundColor: "darkred",
                    border: "none",
                    borderRadius: "5px",
                }}
                onClick={withdrawHandler}
            >
                Withdraw
            </button>
        </>
    );
}

export default Balance;
