import React from "react";
import parts from "./vector-parts.json";

import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { Container } from "react-bootstrap";

const VectorRobot = (build) => {
	console.log(build.build);
	const style = {
		fill: build.build.primary_color,
		stroke: "#000",
		strokeWidth: "6px",
	};
	// The standard object (NON-DYNAMIC) STYLING should be moved to aCSS file
	const dark = {
		fill: "black",
		opacity: ".95",
		stroke: "#000",
		strokeWidth: "3px",
	};
	const light = {
		fill: "grey",
		opacity: ".95",
		stroke: "#000",
		strokeWidth: "3px",
	};
	const eyepart = { fill: "white", stroke: "#000", strokeWidth: "4px" };
	const empty = { fill: "transparent", stroke: "#000", strokeWidth: "4px" };
	const temp = { fill: "white", stroke: "#000", strokeWidth: "4px" };
	const shadow = { fillOpacity: 0.65 };
	const head = parts.heads[build.build.head];
	const mouth = parts.mouths[build.build.mouth];
	const body = parts.bodies[build.build.body];
	const eyes = parts.eyes[build.build.eyes];

	const pupil = {
		fill: build.build.eye_color,
		stroke: "#000",
		strokeWidth: "2px",
	};
	return (
		<div
			className="robotContainer"
			style={{ position: "relative", left: "40px" }}
		>
			<svg
				id="body"
				style={{
					position: "absolute",
					left: "0",
					top: "130",
					height: "200px",
				}}
				width="200."
				height="200"
				className="robot"
				viewBox="0 0 209 209"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#_clip1)">
					<path d={body["primary-shape"]} style={style} />
					<path d={body["shadow-shape"]} style={shadow} />
				</g>
			</svg>
			<svg
				id="head"
				style={{
					position: "absolute",
					left: "25",
					top: "0",
					height: "150px",
				}}
				className="robot"
				viewBox="0 0 209 209"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#_clip3)">
					<path d={head["primary-shape"]} style={style} />
					<path d={head["shadow-shape"]} style={shadow} />
				</g>
				<g clip-path="url(#_clip1)">
					<path d={eyes["dark"]} style={dark} />
					<path d={eyes["light"]} style={light} />
					<path d={eyes["eye-part"]} style={eyepart} />
					<path d={eyes["pupil"]} style={pupil} />
				</g>
				<g clip-path="url(#_clip2)">
					<path d={mouth["primary-shape"]} style={dark} />
					<path d={mouth["white"]} style={eyepart} />
					<path d={mouth["dark"]} style={dark} />
					<path d={mouth["nofill"]} style={empty} />
				</g>
			</svg>
		</div>
	);
};

export default VectorRobot;
