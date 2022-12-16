import React from "react";
import "./robotFactory.css";
// Face should be it's own element. (animated Gif.)

const Robot = (build) => {
	const primaryColor = {
		backgroundColor: build.build.primary_color,
	};
	const parts_list = {
		primary_color: build.build.primary_color,
		body_shape: build.build.body_shape,
		body: "/robotParts/bodies/" + build.build.body,
		head_shape: build.build.head_shape,
		head: "robotParts/heads/" + build.build.head,
		face: "robotParts/faces/" + build.build.face.static,
		display: "robotParts/displays/" + build.build.display,
	};
	console.log(build.build);
	return (
		<div>
			<div //!? Remove ROBOT BLOCK to get rid of display dashes
				className="robotBlock roboContainer "
				style={{
					borderColor: "white",
				}}
			>
				<div className="roboPosition  ">
					<div className={parts_list.body_shape} style={primaryColor}>
						<img
							style={{ width: "100%", height: "100%" }}
							className="robotBody"
							src={parts_list.body}
						/>
						<img
							className=""
							style={{ position: "absolute", top: "20%", left: "20%" }}
							src={parts_list.display}
						/>
					</div>

					<div className="robotBlock headPosition  	" style={{}}>
						<div className={parts_list.head_shape} style={primaryColor}>
							<img className="" src={parts_list.head} />
							<img className="facePosition" src={parts_list.face} />
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
					className="robotBlock  "
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
