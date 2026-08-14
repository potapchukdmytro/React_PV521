import { Fragment } from "react";
import { CircularProgress } from "@mui/material";

function Spiner() {
    return (
        <div style={{ marginTop: "100px" }}>
            <Fragment>
                <svg width={0} height={0}>
                    <defs>
                        <linearGradient
                            id="my_gradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#037df0" />
                            <stop offset="100%" stopColor="#f9fd00" />
                        </linearGradient>
                    </defs>
                </svg>
                <CircularProgress
                    size="5rem"
                    aria-label="Loading…"
                    sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
                />
            </Fragment>
        </div>
    );
}

export default Spiner;