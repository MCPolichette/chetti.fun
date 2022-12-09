import React, { useState, useEffect } from "react";
import {
	Container,
	Form,
	Button,
	Row,
	ButtonGroup,
	ToggleButton,
} from "react-bootstrap";
import "./memory.css";
import categories from "./cards.json";
import Card from "./Card";
import UIfx from "uifx";
import OptionsModal from "../HomeAndNavigation/OptionModal";
import win_snd from "../../site_sounds/456966__funwithsound__success-fanfare-trumpets.mp3";
import success_snd from "../../site_sounds/318968__djm62__successarpeggio.flac";
import error_snd from "../../site_sounds/419023__jacco18__acess-denied-buzz.mp3";

const Memory = () => {
	const success_sound = new UIfx(success_snd);
	const error_sound = new UIfx(error_snd);
	const win_sound = new UIfx(win_snd);
	const [start_button, startGameDisplay] = useState({
		position: "fixed",
		width: "100vw",
		height: "100%",
		left: 0,
		opacity: 0.8,
		textShadow: "4px 4px black",
		fontSize: "300%",
		animation: "bounce 4s infinite",
		zIndex: 10,
	});

	const listed_categories = categories.list;
	const [game, setGame] = useState({
		number_of_pictures: 6,
		category: listed_categories[0].images,
	});
	const [score, setScore] = useState(0);
	const [activeCards, setActiveCards] = useState([]);
	const [cards, setCards] = useState([]);
	function iconTag(iconreference, text) {
		return (
			<h2>
				<i className={iconreference} /> -{text}
			</h2>
		);
	}
	const test = (e) => {
		console.log(e);
		setRadioValue(e.index);
		let i = e.index;
		setGame({
			number_of_pictures: 6,
			category: listed_categories[i].images,
		});
	};

	function radioCheck(value) {
		console.log(radioValue);
		if (value.index === radioValue) {
			return "primary";
		} else {
			return "secondary";
		}
	}

	const [radioValue, setRadioValue] = useState("0");

	const memory_options = (
		<Form>
			<ButtonGroup className="mb-2">
				{listed_categories.map((category, index) => (
					<ToggleButton
						key={index}
						id={index}
						type="checkbox"
						variant={radioCheck({ index })}
						value={index}
						onChange={(e) => test({ index })}
					>
						{iconTag(category.icon, category.category)}
					</ToggleButton>
				))}
			</ButtonGroup>
		</Form>
	);

	useEffect(() => {
		if (score === game.number_of_pictures) {
			win_sound.play();
			setScore(0);
			startgame();
			startGameDisplay({
				position: "fixed",
				width: "100vw",
				height: "100%",
				left: 0,
				opacity: 0.8,
				textShadow: "4px 4px black",
				fontSize: "300%",
				zIndex: 10,
				animation: "bounce 4s infinite",
			});
		}
	}, [score]);
	const newGame = (e) => {
		startGameDisplay({});
	};

	const startgame = (e) => {
		setScore(0);
		newGame();
		setCards([]);
		let arr = new Array();
		let cat = game.category;
		var id = 0;
		for (let i = 0; i < game.number_of_pictures; i++) {
			cat[i].status = "down";
			cat[i].id = id;
			arr.push(cat[i]);
			arr.push(cat[i]);
			id = id + 1;
		}
		console.log(arr);
		for (let i = arr.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			let k = arr[i];
			arr[i] = arr[j];
			arr[j] = k;
		}
		setCards(arr);
		console.log("cards randomized");
	};
	function flipCard(indexes, newStatus) {
		let arr = new Array();
		cards.forEach((card) => {
			arr.push(card);
		});
		for (let i = 0; i < indexes.length; i++) {
			var z = {
				// For unknown reasons (arr[index].status = "up") does not work.  this is my work-around, creating a new object with all the same data.
				alt: cards[indexes[i]].alt,
				id: cards[indexes[i]].id,
				img: cards[indexes[i]].img,
				status: newStatus,
			};
			arr[indexes[i]] = z;
		}
		setCards(arr);
	}
	const handleCardClick = (index) => {
		if (cards[index].status != "match") {
			let z = activeCards;
			switch (activeCards.length) {
				case 0:
					z.push(index);
					flipCard([index], "up");
					break;
				case 1:
					if (index != z[0]) {
						z.push(index);
						if (cards[z[0]].id === cards[z[1]].id) {
							flipCard([z[0], z[1]], "match");
							setScore(score + 1);
							success_sound.play();
							z = [];
						} else {
							console.log(z);
							console.log("NO MATCH", cards);
							flipCard([z[1]], "up");
							setTimeout(function() {
								flipCard([z[0], z[1]], "down");
								setActiveCards([]);
								error_sound.play();
							}, 1000);
						}
					}
					break;
			}
			setActiveCards(z);
		} else {
			error_sound.play();
		}
	};

	return (
		<Container className=" gameBox">
			<Button
				className="btn justify-content-center btn-primary"
				style={start_button}
				onClick={startgame}
			>
				START GAME
			</Button>
			<h1>Memory Game </h1>
			<hr></hr>
			<Row className="justify-content-md-center">
				{cards.map((card, index) => (
					<Card
						key={index}
						card={card}
						index={index}
						handleCardClick={handleCardClick}
					/>
				))}
			</Row>
			<OptionsModal
				title="Memory Options"
				currentSettings={game}
				saveOptions={setGame}
				options={memory_options}
				setRadioValue={setRadioValue}
			/>
		</Container>
	);
};

export default Memory;
