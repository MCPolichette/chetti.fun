import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import OptionsModal from "./OptionModal";

//WORK IN PROGRESS,  WILL DEVELOPE THIS ON NEXT BUILD, then migrate the feature over to the other games.

const StartButton = (isActive, options, startFunction) => {
	var OptionDisplay = <div />;
	console.log(options);

	// const [startButton, setStartButton] = useSate(activeButton);
	const activeButton = {
		position: "fixed",
		width: "100vw",
		height: "100%",
		left: 0,
		textShadow: "4px 4px black",
		fontSize: "300%",
		animation: "bounce 4s infinite",
		backgroundColor: "rgba(8,51,181, 0.6)",
		zIndex: 10,
	};

	const inactiveButton = { visibility: "hidden" };
	var styling;
	if (isActive === true) {
		styling = activeButton;
	} else {
		styling = inactiveButton;
	}

	return (
		<>
			{/* <div style={styling}> */}
			<Row className="justify-content-center">
				<Col
					md={3}
					className="d-grid gap-2"
					style={{
						width: "100%",
						margin: 0,
						position: "absolute",
						top: "50%",
					}}
				>
					<Button
						size="lg"
						className="btn justify-content-center btn-primary"
						onClick={startFunction}
					>
						START GAME
					</Button>
				</Col>
			</Row>
			{/* </div> */}
		</>
	);
};

export default StartButton;
