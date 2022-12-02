import React from "react";
const Card = ({ card, handleCardClick, index }) => {

    return (

        <div className="card bg-primary" onClick={() => handleCardClick(index)} >
            <div className="card-header"
                style={{ backgroundColor: card.color }}>{card.status}</div>
            <div className="card-body small">{card.img}{index}</div>

        </div>
    );
}

export default Card;
