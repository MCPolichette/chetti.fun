import Dice from "./Dice";
import "./dicegame.css";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import UIfx from 'uifx';
import success_snd from '../../site_sounds/318968__djm62__successarpeggio.flac';
import error_snd from '../../site_sounds/419023__jacco18__acess-denied-buzz.mp3';

const DiceGame = () => {
    const success_sound = new UIfx(success_snd);
    const error_sound = new UIfx(error_snd);
    const numbers = [1, 2, 3, 4, 5, 6];
    const [data, setData] = useState('');
    const [diceValue, setDiceValue] = useState('');
    const numberClick = (e) => {
        console.log(e.target.value)
        if (e.target.value == diceValue) {
            success_sound.play();
            // setDiceValue(0)
        } else {
            error_sound.play();
        }


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
                            <button type="button" value={number} className="btn btn-primary btn-lg  diceBtn" onClick={numberClick}>{number}</button>))}
                    </div>
                </div>

            </div>
        </div>)
}

export default DiceGame;