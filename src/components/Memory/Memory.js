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
    const [activeCards, setActiveCards] = useState([])
    const [cards, setCards] = useState([])
    const startgame = (e) => {
        setCards([])
        let arr = new Array();
        let cat = game.category
        for (let i = 0; i < game.number_of_pictures; i++) {
            cat[i].status = "down"
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
    function flipCard (indexes, newStatus){

        let arr = new Array()
        cards.forEach((card => {
            arr.push(card)
        }))
        for (let i= 0; i <indexes.length; i++){
            console.log("is this a number?", indexes)
        var z = { // For unknown reasons (arr[index].status = "up") does not work.  this is my work-around, creating a new object with all the same data.
                alt: cards[indexes[i]].alt,
                id: cards[indexes[i]].id,
                img: cards[indexes[i]].img,
                status: newStatus }
        arr[indexes[i]] = z }
        setCards(arr)
    }
    const handleCardClick = (index) => {
        if (cards[index].status != "match"){
        console.log(index)
        console.log(activeCards)
        let z = activeCards
            switch (activeCards.length) {
            case 0:
                z.push(index);
                flipCard([index], "up")
                console.log("0")             
            break;
            case 1:
                if (index != z[0]){
                z.push(index)
                if (cards[(z[0])].id === cards[(z[1])].id) {
                 flipCard([z[0], z[1]],"match");
                 z=[];
                    console.log("Match!", cards)
                } else {
                    console.log(z)
                    console.log("NO MATCH", cards)
                   flipCard([z[1]], "up");
                   setTimeout(
                   function () {
                        flipCard([z[0],z[1]], "down")
                        setActiveCards([])
                    }, 1000)
                             }
                             
                            }
            break;
        }    
        setActiveCards(z)

        }

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