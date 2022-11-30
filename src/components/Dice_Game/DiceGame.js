import React from 'react';
import Dice from "./Dice";
import Coins from '../common/coins';
import StartButton from '../common/StartButton';
import "./dicegame.css";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import UIfx from 'uifx';
import success_snd from '../../site_sounds/318968__djm62__successarpeggio.flac';
import error_snd from '../../site_sounds/419023__jacco18__acess-denied-buzz.mp3';

const DiceGame = () => {
    const success_sound = new UIfx(success_snd);
    const error_sound = new UIfx(error_snd);
    const [numbers, setNumbers] = useState([{ number: 2 }, { number: 3 }, { number: 4 }, { number: 5 }, { number: 6 }, { number: 7 }, { number: 8 }, { number: 9 }, { number: 10 }, { number: 11 }, { number: 12 }]);
    const maxScore = 5
    const [score, setScore] = useState(0);
    const [dice_count, setDice_count] = useState(1);
    const [diceValue, setDiceValue] = useState('');

    const numberClick = (e) => {
        console.log(e.target.value)
        if (e.target.value == diceValue) {
            success_sound.play();
            // setDiceValue(1)
            setScore({ score } + 1)
        } else {
            error_sound.play();
        }
        console.log(diceValue)
        console.log(score)
    }
    const diceRoll = (value) => {
        setDiceValue(value)
    }

    return (
        <div className="container gamectr">
            <h1 >DICE GAME</h1>
            <p> I think that my 3 year old is capable of reading two dice, so I've duplicated the dice roll.
                At this moment, the buttons will only reflect the value of the last rolled dice.</p>

            <div className="container playGame ">
                <Coins score={score} maxScore={maxScore} />
                <div className='row  justify-content-center'>
                    <Dice diceValue={diceValue} diceRoll={diceRoll} size={-150} />
                    <Dice diceValue={diceValue} diceRoll={diceRoll} size={-150} />
                </div>
                <div className="row">
                    <div className="col">
                        <div className="buttonDisplay">
                            {numbers.map(({ number }) => (
                                <button type="button" key={number} value={number} className="btn btn-primary btn-lg  diceBtn" onClick={numberClick}>{number}</button>))}
                        </div>
                    </div>
                </div>
            </div>
        </div >)
}

export default DiceGame;