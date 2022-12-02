import React, { useRef } from "react";
import { useState } from "react";
import "./memory.css"
import categories from "./cards.json"
import Card from "./Card";


const Memory = () => {
    const [game, setGame] = useState({
        number_of_pictures: 5,
        category: categories.family
    })
    const [cards, setCards] = useState([])
    const startgame = (e) => {
        setCards([])
        let arr = new Array();
        let cat = game.category
        for (let i = 0; i < game.number_of_pictures; i++) {
            arr.push(cat[i]);
            arr.push(cat[i]);
        }
        console.log(arr)
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let k = arr[i];
            arr[i] = arr[j];
            arr[j] = k;
        }
        setCards(arr)
        console.log("cards randomized")
    };

    const handleCardClick = (index) => {
        let arr = new Array()
        cards.forEach((card => {
            arr.push(card)
        }))
        let x = { // For unknown reasons (arr[index].status = "up") does not work.  this is my work-around, creating a new object with all the same data.
            alt: cards[index].alt,
            id: cards[index].id,
            img: cards[index].img,
            status: "up"
        }
        arr[index] = x
        setCards(arr)

    }



    return (
        <div className="container gameBox">
            <h1>Memory Game</h1>

            <button onClick={startgame}> START GAME</button>
            <hr></hr>
            <div className="row justify-content-center">
                {cards.map((card, index) => (
                    <Card key={index} card={card} index={index} handleCardClick={handleCardClick} />
                )
                )}
            </div>

        </div>
    );
}

export default Memory;