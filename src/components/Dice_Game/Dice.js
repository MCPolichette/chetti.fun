import React from 'react';
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import UIfx from 'uifx';
import rollSound_1 from './sounds/389721__uminari__rolling-rocks-01.wav';
import rollSound_2 from './sounds/574445__f-m-audio__kicking-large-stones-down-shoreline-on-stony-beach-5.wav';
import rollSound_3 from './sounds/574449__f-m-audio__pushing-large-stones-down-shoreline-on-stony-beach-2.wav';

const Dice = ({ diceValue, diceRoll, size }) => {
    var translateZ = size;
    let shrink = (size * 2.5)
    var rotateY = -45;
    var rotateX = -45;
    let d_translateZ = "translateZ(-100px)"
    const [diceDisplay, setDiceDisplay] = useState("translateZ(" + translateZ + "px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) ")
    console.log(diceDisplay)
    let rnd;
    let x, y;
    const rollSounds = [new UIfx(rollSound_1), new UIfx(rollSound_2), new UIfx(rollSound_3)]
    const diceroll = (e) => {
        let timeout = 600;
        let startroll = "rotateY(880 deg) rotateX(900 deg)"
        setDiceDisplay(startroll)
        e.preventDefault();
        rnd = Math.floor(Math.random() * 6 + 1);
        switch (rnd) {
            case 1:
                x = 720;
                y = 810;
                break;
            case 6:
                x = 720;
                y = 990;
                break;
            default:
                x = 720 + (6 - rnd) * 90;
                y = 900;
                break;
        }
        if (rnd == diceValue) {
            console.log("MATCH");
            timeout = 900
            setDiceDisplay("translateZ(" + shrink + "px) rotateY(-45deg) rotateX(-45deg)")
        }
        let z = Math.floor(Math.random() * 90)
        setDiceDisplay("translateZ(" + shrink + "px) rotateY(" + (y - z) + "deg) rotateX(" + (x + z) + "deg)")
        setTimeout(function () {
            let nd_rotateY = "rotateY(" + x + 900 + "deg)";
            let nd_rotateX = "rotateX(" + y + 720 + "deg)";
            setDiceDisplay("translateZ(" + (shrink * 1.5) + "px)" + nd_rotateX + nd_rotateY)
            diceValue = (rnd)
            let rndsound = Math.floor(Math.random() * 3);
            rollSounds[rndsound].play()
            diceRoll(diceValue)
        }, 500)
        setTimeout(function () {

            console.log(x, y, rnd, diceValue)
            let nd_rotateY = "rotateY(" + x + "deg)";
            let nd_rotateX = "rotateX(" + y + "deg)";
            setDiceDisplay(d_translateZ + nd_rotateX + nd_rotateY)
            diceValue = (rnd)

            diceRoll(diceValue)
        }, timeout)
    }

    return (
        <div className="col-6" style={{ marginTop: 45 }}>
            <div className="panel" >
                <div className="dice" onClick={(e) => diceroll(e)} style={{ transform: diceDisplay, }} >
                    <div className="side one">
                        <span className="dot"></span>
                    </div>
                    <div className="side two">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="side three">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="side four">
                        <div className="kolona">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="kolona">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                    <div className="side five">
                        <div className="kolona">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="kolona">
                            <span className="dot"></span>
                        </div>
                        <div className="kolona">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                    <div className="side six">
                        <div className="kolona">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="kolona">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="kolona">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Dice;