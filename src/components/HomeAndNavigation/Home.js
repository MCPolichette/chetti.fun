import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import GameCard from "./gameCard";
import "./home.css";

const Home = () => {
	let gamelist = [
		{
			title: "Dice Game!",
			link: "/dice",
			icon: "fa-solid fa-dice",
		},
		{
			title: "Memory Game",
			link: "/memory",
			icon: "fa-solid fa-person-chalkboard",
		},
		{
			title: "Pick N Place",
			link: "/pick-n-place",
			icon: "fa-solid fa-arrows-to-circle",
		},
		{
			title: "Robot Factory",
			link: "/robot_factory",
			icon: "fa-solid fa-robot",
		},
		{
			title: "Balloons",
			link: "/balloon",
			icon: "fa-solid fa-circle",
		},
	];
	return (
		<Container>
			<p> welcome to </p>
			<h1>Chetti.fun</h1>
			<p className="small">
				This site was made to help learn better coding, and to provide
				Ad-Free personalized mobile games for my 3 year old
			</p>
			<hr />
			<Row className="justify-content-center">
				{gamelist.map((game, index) => (
					<Col key={game.title} sm={2} style={{ width: "10em" }}>
						<Link to={game.link}>
							<GameCard title={game.title} icon={game.icon} />
						</Link>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Home;
