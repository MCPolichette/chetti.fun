import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "./robotFactory.css";
import parts from "./vector-parts.json";
import VectorRobot from "./vectorRobot";

const Robot_Factory = () => {
	function randomColor() {
		return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
	}
	const getRandom = (arr) => {
		return Math.floor(Math.random() * arr.length);
	};
	function randomEverything() {
		setRobotBody(getRandom(parts.bodies));
		setRobotLegs(getRandom(parts.legs));
		setRobotHead(getRandom(parts.heads));
		setRobotColor(randomColor);
		setEyeColor(randomColor);
		setRobotEyes(getRandom(parts.eyes));
		setRobotMouth(getRandom(parts.mouths));
		setRobotArms(getRandom(parts.arms));
	}
	const [robotBody, setRobotBody] = useState(getRandom(parts.bodies));
	const [robotLegs, setRobotLegs] = useState(getRandom(parts.legs));
	const [robotArms, setRobotArms] = useState(getRandom(parts.arms));
	const [robotHead, setRobotHead] = useState(getRandom(parts.heads));
	const [robotColor, setRobotColor] = useState(randomColor);
	const [eyeColor, setEyeColor] = useState(randomColor);
	const [robotEyes, setRobotEyes] = useState(getRandom(parts.eyes));
	const [robotMouth, setRobotMouth] = useState(getRandom(parts.mouths));
	function newColor() {
		setRobotColor(randomColor);
		console.log(robotColor);
	}

	const vector_build = {
		primary_color: robotColor,
		eye_color: eyeColor,
		head: robotHead,
		body: robotBody,
		mouth: robotMouth,
		eyes: robotEyes,
		arms: robotArms,
		legs: robotLegs,
	};

	return (
		<div style={{}}>
			<Container>
				<h1 style={{ backgroundColor: { robotColor } }}>Robot Factory</h1>
				<Row>
					<Container className="factory ">
						<Row className="justify-content-center">
							{/* <Robot build={thisRobot} /> */}
							<VectorRobot build={vector_build} />
						</Row>
					</Container>
				</Row>
			</Container>
			<Container style={{ marginTop: "2em" }}>
				<Row>
					<Button className="rnd-btn" variant="primary" onClick={newColor}>
						Color
					</Button>
					<Button
						className="rnd-btn"
						variant="primary"
						onClick={randomEverything}
					>
						Randomizer
					</Button>
				</Row>
			</Container>
		</div>
	);
};

export default Robot_Factory;
