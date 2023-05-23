import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./balloonStyle.css"; // Import the CSS file for styling
import pop_1 from "../../site_sounds/323740__reitanna__mouth-pop2.wav";
import pop_2 from "../../site_sounds/665182__el_boss__item-or-material-pickup-pop-2-of-3.wav";
import pop_3 from "../../site_sounds/290442__littlerobotsoundfactory__mouth_09.wav";
import win_snd from "../../site_sounds/456966__funwithsound__success-fanfare-trumpets.mp3";
// import pop4 from "../../site_sounds/674317__eilassfx__pop-sound.wav";
import UIfx from "uifx";

const Balloon = ({ id, left, speed, onCatch }) => {
	const [top, setTop] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTop((prevTop) => prevTop + speed);
		}, 100);

		return () => {
			clearInterval(interval);
		};
	}, [speed]);

	useEffect(() => {
		if (top >= window.innerHeight - 100) {
			onCatch(false, id);
		}
	}, [top, onCatch, id]);

	const getRandomColor = () => {
		const colors = [
			"#ff4081",
			"#7e57c2",
			"#42a5f5",
			"#66bb6a",
			"#ffeb3b",
			"#ff5722",
		];
		return colors[Math.floor(Math.random() * colors.length)];
	};

	const handleClick = () => {
		onCatch(true, id);
	};

	const balloonStyle = {
		left: `${left}px`,
		top: `${top}px`,
		backgroundColor: getRandomColor(),
	};

	return (
		<div className="balloon" style={balloonStyle} onClick={handleClick} />
	);
};

const Game = () => {
	const win_sound = new UIfx(win_snd);
	const pop_snds = [new UIfx(pop_1), new UIfx(pop_2), new UIfx(pop_3)];
	const [score, setScore] = useState(0);
	const [balloons, setBalloons] = useState([]);
	const [gameOver, setGameOver] = useState(false);

	const addBalloon = () => {
		if (balloons.length >= 6) {
			return; // Maximum number of balloons reached, exit the function
		}

		const newBalloon = {
			id: Date.now(),
			left: Math.floor(Math.random() * (window.innerWidth - 80)),
			speed: Math.floor(Math.random() * 18) + 5,
		};

		setBalloons((prevBalloons) => [...prevBalloons, newBalloon]);
	};

	const handleCatch = (caught, id) => {
		if (caught) {
			setScore((prevScore) => prevScore + 1);
			let rndsound = Math.floor(Math.random() * (pop_snds.length - 1));
			pop_snds[rndsound].play();
		}
		console.log(id);
		setBalloons((prevBalloons) =>
			prevBalloons.filter((balloon) => balloon.id !== id)
		);
	};

	useEffect(() => {
		if (!gameOver) {
			const interval = setInterval(addBalloon, 500);

			return () => {
				clearInterval(interval);
			};
		}
	}, [gameOver]);

	const handleRestart = () => {
		setScore(0);
		setBalloons([]);
		setGameOver(false);
	};

	useEffect(() => {
		if (score >= 20) {
			setGameOver(true);
			setBalloons([]);

			win_sound.play();
		}
	}, [score]);

	return (
		<Container className=" gamectr gameText">
			<h1>Catch the Falling Balloons</h1>
			<div className="score">Score: {score}</div>
			{gameOver && (
				<Row>
					<Col className="game-over align-items-center">
						<h2>Game Over!</h2>
						<Button
							type="button"
							size="lg"
							variant=" btn-success"
							onClick={handleRestart}
						>
							Play Again
						</Button>
					</Col>
				</Row>
			)}

			<Row className="game-window align-items-center">
				{balloons.map((balloon) => (
					<Balloon
						key={balloon.id}
						id={balloon.id}
						left={balloon.left}
						speed={balloon.speed}
						onCatch={handleCatch}
					/>
				))}
			</Row>
		</Container>
	);
};

export default Game;
