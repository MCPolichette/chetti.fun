import Dice from "./Dice";
import "./dicegame.css";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import UIfx from 'uifx';
import rollSound_1 from './sounds/389721__uminari__rolling-rocks-01.wav';
import rollSound_2 from './sounds/574445__f-m-audio__kicking-large-stones-down-shoreline-on-stony-beach-5.wav';
import rollSound_3 from './sounds/574449__f-m-audio__pushing-large-stones-down-shoreline-on-stony-beach-2.wav';

const DiceGame = () => {
    const numbers = [1, 2, 3, 4, 5, 6]
    const [data, setData] = useState('');
    const [diceValue, setDiceValue] = useState(0)
    const numberClick = (e) => {

        console.log(diceValue)
    }
    const diceRoll = (value) => {
        setDiceValue(value)
    }


    return (
        <div className="container gamectr">

            <h1 >DICE GAME</h1>
            <Dice diceValue={diceValue} diceRoll={diceRoll} />
            <div className="row">
                <div className="col">
                    <div className="buttonDisplay">
                        {numbers.map((number) => (
                            <button type="button" className="btn btn-primary btn-lg  diceBtn" onClick={numberClick}>{number}</button>))}
                    </div>
                </div>

            </div>
        </div>)
}

export default DiceGame;