import React from 'react';
import Dice from "./Dice";
import Coins from '../common/coins';
import "./dicegame.css";
import { useState, useEffect } from "react";
import UIfx from 'uifx';
import win_snd from '../../site_sounds/456966__funwithsound__success-fanfare-trumpets.mp3';
import success_snd from '../../site_sounds/318968__djm62__successarpeggio.flac';
import error_snd from '../../site_sounds/419023__jacco18__acess-denied-buzz.mp3';
import rollSound_1 from './sounds/389721__uminari__rolling-rocks-01.wav';
import rollSound_2 from './sounds/574445__f-m-audio__kicking-large-stones-down-shoreline-on-stony-beach-5.wav';
import rollSound_3 from './sounds/574449__f-m-audio__pushing-large-stones-down-shoreline-on-stony-beach-2.wav';

const DiceGame = () => {
    const success_sound = new UIfx(success_snd);
    const error_sound = new UIfx(error_snd);
    const win_sound = new UIfx(win_snd);
    const rollSounds = [new UIfx(rollSound_1), new UIfx(rollSound_2), new UIfx(rollSound_3)]
    const [numbers, setNumbers] = useState([{ number: 2 }, { number: 3 }, { number: 4 }, { number: 5 }, { number: 6 }, { number: 7 }, { number: 8 }, { number: 9 }, { number: 10 }, { number: 11 }, { number: 12 }]);
    const maxScore = 5
    const [score, setScore] = useState(0);
    const [diceValues, setDice] = useState([0, 0])
    const [total, setTotal] = useState(0)
    const [btnShake, shakeBtns] = useState("test")
    const [start_button, startGame] = useState({
        position: "fixed",
        width: "100vw",
        height: "100%",
        left: 0,
        opacity: .8,
        textShadow: "4px 4px black",
        fontSize: "300%",
        animation: "bounce 4s infinite"

    })

    const numberClick = (e) => {
        console.log(e.target.value)
        if (e.target.value == total) {
            switch (score) {
                case maxScore: //Winning Scenario
                    setScore(0)
                    startGame({
                        position: "fixed",
                        width: "100vw",
                        height: "100%",
                        left: 0,
                        opacity: .8,
                        textShadow: "4px 4px black",
                        fontSize: "300%",
                        animation: "bounce .9s infinite"
                    })
                    win_sound.play();
                    setDice([0, 0])
                    break;
                default:
                    success_sound.play();
                    setScore(score + 1)
                    setTimeout(function () { testRoll() }, 800)
                    break;
            }

        } else {
            error_sound.play();
            console.log(e.target)
            let newArr = numbers
            let index = numbers.findIndex(object => { return object.number == e.target.value });
            console.log(index)
            newArr.splice((index), 1)
            setNumbers(newArr)
            shakeBtns("wiggle")
            setTimeout(function () { shakeBtns("big") }, 1000)
        }
        console.log(score)
    }
    const resetNumbers = () => {
        let arr = [];
        for (let i = 2; i <= 12; i++) {
            arr.push({ number: (i) })
        }
        setNumbers(arr)
    }
    function mostly_random(x) {  //prevents the dice from rolling the same number
        var num = Math.floor(Math.random() * 6 + 1);
        return (num === x) ? mostly_random(x) : num;
    }


    const testRoll = (e) => {
        if (!score) {
            startGame({
                position: "fixed",
                bottom: 0,
                transition: "bottom 2s"
            })
        }
        let new_roll = []
        let x = 0
        for (let i = 0; i < diceValues.length; i++) {
            let rnd = mostly_random(diceValues[i])
            new_roll.push(rnd);
        };
        resetNumbers()
        setDice(new_roll)
        for (let j = 0; j < new_roll.length; j++) {
            x = (x + new_roll[j])
        }
        setTotal(x)
        let rndsound = Math.floor(Math.random() * 3);
        rollSounds[rndsound].play()


    }

    return (
        <div className="container gamectr">
            <button className='btn btn-primary'
                onClick={testRoll}
                style={start_button}
            >ROLL DICE !</button>
            <h1 >DICE GAME</h1>
            <div className="container playGame " >
                <Coins key={"ONLY-ONE"} score={score} maxScore={maxScore} />
                <div className='row  justify-content-center'>
                    {diceValues.map((value, index) => (
                        <Dice key={index} diceValue={value} size={-150} />
                    ))}
                </div>
                <div className="row">
                    <div className="col">
                        <div className={btnShake}>
                            <div className="buttonDisplay">
                                {numbers.map(({ number, index }) => (
                                    <button type="button" key={index} value={number} className="btn btn-success btn-lg diceBtn" onClick={numberClick}>{number}</button>))}
                            </div>
                        </div></div>
                </div>
            </div>
        </div >)
}

export default DiceGame;