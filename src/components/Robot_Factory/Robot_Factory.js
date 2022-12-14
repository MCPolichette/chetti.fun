import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Robot from "./Robot";
import "./robotFactory.css";

const Robot_Factory = () => {
	const randomColor = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
	const [robotColor, setRobotColor] = useState("blue");
	// Change Head Function
	// Change Body Function
	function newColor() {
		setRobotColor(randomColor);
		console.log(robotColor);
	}
	const [thisRobot, updateRobot] = useState({
		head: 0,
		body: 1,
	});
	return (
		<>
			<Container>
				<h1 style={{ backgroundColor: { robotColor } }}>Robot Factory</h1>
				<Row>
					<Container className="factory ">
						<Row className="justify-content-center">
							<Robot color={robotColor} />
						</Row>
					</Container>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col>
						<Button variant="primary" onClick={newColor}>
							Color
						</Button>
					</Col>
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
