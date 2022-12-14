import React from "react";
import { Card } from "react-bootstrap";
import "./home.css";

const GameCard = ({ title, icon, creator }) => {
	return (
		<Card bg="success" className="gameText">
			<Card.Header>
				<h6>{title}</h6>
			</Card.Header>
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<h1>
						<i className={icon} />
					</h1>
					{/* <footer className="blockquote-footer">
						created by <cite title="Source Title">{creator}</cite>
					</footer> */}
				</blockquote>
			</Card.Body>
		</Card>
	);
};
export default GameCard;
