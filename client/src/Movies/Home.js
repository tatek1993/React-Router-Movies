import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();
    console.log("This is our history", history);
    const routeToHome = () => {
        history.push("/");
    }
    return (
        <div onClick={routeToHome} className="home-button">Home</div>
    );
}
export default Home;