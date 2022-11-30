import React from 'react'
import { Link } from "react-router-dom";
import diceImage from "../../images/dice.png"

const Home = () => {

    return (

        <div className="container" >
            <h1>HOME CONTAINER</h1>
            <hr />
            <h3> Games</h3>
            <Link to="/dice"><img src={diceImage} style={{ width: 200, backgroundColor: "White" }} /></Link>

        </div>
    );
}

export default Home;