import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Robot from "./Robot";
import "./robotFactory.css";
import Parts from "./parts.json";

const Robot_Factory = () => {
	function randomColor() {
		return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
	}
	const getRandom = (arr) => {
		return arr[Math.floor(Math.random() * arr.length)];
	};
	const [robotColor, setRobotColor] = useState(randomColor);
	// Change Head Function
	// Change Body Function
	function newColor() {
		setRobotColor(randomColor);
		console.log(robotColor);
	}
	const TEST_ROBOT = {
		body: getRandom(Parts.bodies),
		display: getRandom(Parts.displays),
		head: getRandom(Parts.heads),
		face: getRandom(Parts.faces),
	};
	const [thisRobot, updateRobot] = useState({
		primary_color: robotColor,
		secondary_color: robotColor,
		body_shape: TEST_ROBOT.body.shape,
		body: TEST_ROBOT.body.body,
		display: TEST_ROBOT.display,
		head_shape: TEST_ROBOT.head.shape,
		head: TEST_ROBOT.head.head,
		face: TEST_ROBOT.face,
		arms_shape: "rnd",
		arms: "rnd-arms-01",
		feet_shape: "legs",
		feet: "legs01",
		accessories: "",
	});
	console.log(thisRobot);
	return (
		<>
			<Container>
				<h1 style={{ backgroundColor: { robotColor } }}>Robot Factory</h1>
				<Row>
					<Container className="factory ">
						<Row className="justify-content-center">
							<Robot build={thisRobot} />
						</Row>
					</Container>
				</Row>
			</Container>
			<Container style={{ marginTop: "2em" }}>
				<Row>
					<Button variant="primary" onClick={newColor}>
						Color
					</Button>
					<Button variant="primary" onClick={newColor}>
						Head
					</Button>
					<Button variant="primary" onClick={newColor}>
						Body
					</Button>
					<Button variant="primary" onClick={newColor}>
						Feet
					</Button>
					<Button variant="primary" onClick={newColor}>
						Face
					</Button>
				</Row>
			</Container>
			{/* a row that contains the robot building container. (at least 3 overlapping <div>s) */}
			{/* a row for control container, 
    - color selection
    - body selection
    -head selection
    etc....  */}
			{/* A method to select saved robots? */}
		</>
	);
};

export default Robot_Factory;
