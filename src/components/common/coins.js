import React from 'react';
import Coin from "./coin";
import { useState, useEffect } from "react";

const Coins = ({ score, maxScore }) => {
    // Going to USE COINS as a scoreboard.  MAY create seperate SCOREBOARD component in the future.
    var coinArr = new Array()
    for (let i = 0; i < maxScore; i++) {
        coinArr.push({ active: false, coinId: ("coin_" + i) })
    }
    const [coinScore, setCoinScore] = useState(coinArr)

    return (

        <div className="row justify-content-center">
            {/* Temporary internal *Coin, while I determine how I want to do this.. MAY remove seperate coin component */}
            <div className="col-1 rounded-circle" style={{
                color: 'black',
                margin: 5,
                background: "#76ff03",
                boxShadow: "0 0 50px #76ff03",
                width: 40,
                height: 40,
                zIndex: 10
            }}>{score}
            </div>
            {/* {coinScore.map(({ coinId, active, }) => (
                // <Coin key={coinId} active={active} />
            ))} */}
        </div>
    );
}

export default Coins;