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
	const [robotBody, setRobotBody] = useState(getRandom(parts.bodies));
	const [robotLegs, setRobotLegs] = useState(getRandom(parts.legs));
	const [robotArms, setRobotArms] = useState(getRandom(parts.arms));
	const [robotHead, setRobotHead] = useState(getRandom(parts.heads));
	const [robotColor, setRobotColor] = useState(randomColor);
	const [eyeColor, setEyeColor] = useState(randomColor);
	const [robotEyes, setRobotEyes] = useState(getRandom(parts.eyes));
	const [robotMouth, setRobotMouth] = useState(getRandom(parts.mouths));
	const [headstyle, setnewHeadStyle] = useState("");

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
	function randomRobotBody() {
		setRobotBody(getRandom(parts.bodies));
	}
	function randomRobotLegs() {
		setRobotLegs(getRandom(parts.legs));
	}
	function randomRobotHead() {
		setRobotHead(getRandom(parts.heads));
		setnewHeadStyle("new_head");
	}
	function randomRobotColor() {
		setRobotColor(randomColor);
	}
	function randomEyeColor() {
		setEyeColor(randomColor);
	}
	function randomRobotEyes() {
		setRobotEyes(getRandom(parts.eyes));
	}
	function randomRobotMouth() {
		setRobotMouth(getRandom(parts.mouths));
	}
	function randomRobotArms() {
		setRobotArms(getRandom(parts.arms));
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
		test: headstyle,
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
				<br />
				<br />
			</Container>
			<Container style={{ marginTop: "2em" }}>
				<Button className="" variant="primary" onClick={randomEverything}>
					Randomizer
				</Button>
				<Row>
					<Button className="rnd-btn" onClick={randomRobotBody}>
						Body
					</Button>
					<Button className="rnd-btn" onClick={randomRobotLegs}>
						Legs
					</Button>
					<Button className="rnd-btn" onClick={randomRobotHead}>
						Head
					</Button>
					<Button className="rnd-btn" onClick={randomRobotColor}>
						Color
					</Button>
					<Button className="rnd-btn" onClick={randomRobotEyes}>
						Eyes
					</Button>
					<Button className="rnd-btn" onClick={randomRobotMouth}>
						Mouth
					</Button>
					<Button className="rnd-btn" onClick={randomRobotArms}>
						Arms
					</Button>
				</Row>
			</Container>
		</div>
	);
};

export default Robot_Factory;
