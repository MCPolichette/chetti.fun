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
            {coinScore.map(({ coinId, active }) => (
                <Coin key={coinId} active={active} />
            ))}
        </div>
    );
}

export default Coins;