import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import diceImage from "../../images/dice.png";

const Home = () => {
  return (
    <div className="container">
      <p> welcome to </p>
      <h1>Chetti.fun</h1>
      <p className="small">
        {" "}
        This site was made to help learn better coding, and to provide Ad-Free
        personalized mobile games for my 3 year old
      </p>
      <hr />
      <div className="row">
        <h3> Games</h3>
        <Link to="/dice">
          <button className="btn btn-success btn-lg">DICE GAME !</button>
        </Link>
        <Link to="/memory">
          <button className="btn btn-success btn-lg">Memory Game!</button>
        </Link>
        <Link to="/pick-n-place">
          <button className="btn btn-success btn-lg">Pick N' Place!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
