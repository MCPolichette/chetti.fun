import React from "react";
import "./robotFactory.css";

// Face should be it's own element. (animated Gif.)
//
const Robot = (Color) => {
	const test = { backgroundColor: Color.color };
	return (
		<div>
			<h1 style={Color}>Test</h1>
			<div
				className="robotBlock "
				style={{
					width: "200px",
					height: "300px",
					position: "relative",
					margin: "auto",
					marginTop: "2em",
					borderColor: "white",
				}}
			>
				<div
					className="robotBlock animate__animated animate__zoomInDown animate__slow "
					style={{
						width: "100%",
						height: "50%",
						position: "relative",
						margin: "auto",
						borderColor: "none",
						top: "-.5em",
						marginTop: "6em",
					}}
				>
					<div className="robotBody" style={test}>
						<img className="" src="/robotParts/sq-body04.png" />
					</div>
					<div
						className="robotBlock  animate__animated animate__zoomInDown animate__slow animate__delay-2s	"
						style={{
							width: "100%",
							height: "30%",
							position: "absolute",
							top: "-5em",
							margin: "auto",
							zIndex: 1,
						}}
					>
						<div className="robotHead" style={test}>
							<img className="" src="/robotParts/head01.png" />
						</div>
					</div>
					<div
						className="robotBlock"
						style={{
							borderColor: "red",
							height: "100%",
							width: "40%",
							position: "absolute",
							top: 0,
							right: -25,
						}}
					></div>
					<div
						className="robotBlock"
						style={{
							borderColor: "red",
							height: "100%",
							width: "40%",
							position: "absolute",
							top: 0,
							left: -25,
						}}
					></div>
				</div>
				<div
					className="robotBlock animate__animated animate__zoomInDown animate__slow "
					style={{
						width: "100%",
						height: "25%",
						position: "relative",
						margin: "auto",
					}}
				></div>
			</div>
		</div>
	);
};

export default Robot;
