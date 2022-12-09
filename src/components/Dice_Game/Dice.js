import React from "react";
import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";

const Dice = ({ diceValue, size }) => {
	var translateZ = size;
	let shrink = size * 3.5;
	var rotateY = -45;
	var rotateX = -45;
	let d_translateZ = "translateZ(-100px)";
	const [diceDisplay, setDiceDisplay] = useState(
		"translateZ(" +
			translateZ +
			"px) rotateX(" +
			rotateX +
			"deg) rotateY(" +
			rotateY +
			"deg) "
	);
	let timeout = 800;
	let x, y;

	useEffect(() => {
		switch (diceValue) {
			case 0:
				let w = Math.floor(Math.random() * 12) * 90;
				x = w - 45;
				y = w - 45;
				d_translateZ = "translateZ(-180px)";
				break;
			case 1:
				x = 720;
				y = 810;
				break;
			case 6:
				x = 720;
				y = 990;
				break;
			default:
				x = 720 + (6 - diceValue) * 90;
				y = 900;
				break;
		}
		let z = Math.floor(Math.random() * 90);
		setDiceDisplay(
			"translateZ(" +
				shrink +
				"px) rotateY(" +
				(y - z * 2) +
				"deg) rotateX(" +
				(x + z * 2) +
				"deg) translate(-80%, -80%)"
		);
		setTimeout(function() {
			let nd_rotateY = "rotateY(" + x + 900 + "deg)";
			let nd_rotateX = "rotateX(" + y + 720 + "deg)";
			setDiceDisplay(
				"translateZ(" + shrink * 1.5 + "px)" + nd_rotateX + nd_rotateY
			);
		}, 500);
		setTimeout(function() {
			let nd_rotateY = "rotateY(" + x + "deg)";
			let nd_rotateX = "rotateX(" + y + "deg)";
			setDiceDisplay(d_translateZ + nd_rotateX + nd_rotateY);
		}, timeout);
	}, [diceValue]);

	return (
		<Col md={6} style={{ marginTop: 45 }}>
			<div className="panel">
				<div className="dice" style={{ transform: diceDisplay }}>
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
		</Col>
	);
};
export default Dice;
