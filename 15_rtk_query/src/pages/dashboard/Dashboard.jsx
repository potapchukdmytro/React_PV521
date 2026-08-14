import { Button } from "@mui/material";
import { Link } from "react-router";

function Dashboard() {
    return (
        <div style={{ marginTop: "12px" }}>
            <Link to="tracks">
                <Button>Керування музикою</Button>
            </Link>
            <Link to="books">
                <Button>Керування книгами</Button>
            </Link>
        </div>
    );
}

export default Dashboard;
