import React from 'react';
// import Coin from "./coin";
import { useState } from "react";

const Coins = ({ score }) => {
    // Going to USE COINS as a scoreboard.  MAY create seperate SCOREBOARD component in the future.
    var coinArr = new Array()
    switch (score) {
        case 0:
            coinArr = []
            break;
        default:
            for (let i = 0; i < score; i++) {
                coinArr.push({ i })
            }
            break;
    }


    return (
        <div className="row justify-content-center" style={{ height: 60 }
        }>
            {
                coinArr.map(({ coin, index }) => (

                    <div key={index} className="col-1 rounded-circle" style={{
                        color: 'black',
                        margin: 5,
                        background: "#76ff03",
                        boxShadow: "0 0 50px #76ff03",
                        width: 40,
                        height: 40,
                        zIndex: 10,
                        animation: "bounce 1s infinite"

                    }}>
                    </div>
                ))
            }

            {/* {coinScore.map(({ coinId, active, }) => (
                // <Coin key={coinId} active={active} />
            ))} */}
        </div >
    );
}

export default Coins;