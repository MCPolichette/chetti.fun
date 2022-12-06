import React from "react";
import { useState, useEffect } from "react";
const Card = ({ card, handleCardClick, index }) => {
	const [cardface, setCardFace] = useState(" flip-card-inner card ");
	useEffect(() => {
		console.log("status Change", card.status);
		switch (card.status) {
			case "up":
				setCardFace("flipped flip-card-inner card  ");
				break;
			case "match":
				setCardFace(" flipped flip-card-inner card  ");
				break;
			case "down":
				setCardFace(" flip-card-inner card  ");
		}
	}, [card.status]);

	return (
		<div className=" box" onClick={() => handleCardClick(index)}>
			<div className={cardface}>
				<div className="flip-card-front"></div>
				<div className="flip-card-back">
					<img src={card.img} alt={card.alt} />
					<p>{card.alt}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
