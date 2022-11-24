import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import UIfx from 'uifx';

import rollSound_1 from './sounds/389721__uminari__rolling-rocks-01.wav';
import rollSound_2 from './sounds/574445__f-m-audio__kicking-large-stones-down-shoreline-on-stony-beach-5.wav';
import rollSound_3 from './sounds/574449__f-m-audio__pushing-large-stones-down-shoreline-on-stony-beach-2.wav';

const Dice = ({ diceValue, diceRoll }) => {

    let d_translateZ = "translateZ(-100px)"
    let d_rotateY = "rotateY(-45deg)"
    let d_rotateX = "rotateX(-45deg)"
    const [diceDisplay, setDiceDisplay] = useState(d_translateZ + d_rotateX + d_rotateY)
    const [text, settext] = useState("white")
    console.log(diceDisplay)
    let rnd;
    let x, y;
    const rollSounds = [new UIfx(rollSound_1), new UIfx(rollSound_2), new UIfx(rollSound_3)]
    const diceroll = (e) => {
        let startroll = "rotateY(360 deg) rotateX(360 deg)"
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
        if (rnd === diceValue) {
            console.log("MATCH");
            setDiceDisplay(d_translateZ + d_rotateX + d_rotateY)
        }
        console.log(x, y, rnd, diceValue)
        let nd_rotateY = "rotateY(" + x + "deg)";
        let nd_rotateX = "rotateX(" + y + "deg)";
        setDiceDisplay(d_translateZ + nd_rotateX + nd_rotateY)
        settext("red")
        diceValue = (rnd)
        let rndsound = Math.floor(Math.random() * 3);
        rollSounds[rndsound].play()
        diceRoll(diceValue)
    }

    return (
        <div className="container">
            <div className="row" style={{ marginTop: 100 }}>
                <div className="column">
                    <div className="panel" >
                        <div className="dice" onClick={(e) => diceroll(e)} style={{ transform: diceDisplay }} >
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
            </div>
        </div >
    );
}
export default Dice;