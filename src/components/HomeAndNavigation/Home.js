import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Button } from "react-bootstrap";
import "./home.css";

const Home = () => {
	return (
		<Container>
			<p> welcome to </p>
			<h1>Chetti.fun</h1>
			<p className="small">
				This site was made to help learn better coding, and to provide Ad-Free
				personalized mobile games for my 3 year old
			</p>
			<hr />
			<Row>
				<h3> Games</h3>
				<Link to="/dice">
					<Button variant="primary">DICE GAME !</Button>
				</Link>
				<Link to="/memory">
					<Button variant="primary">Memory Game!</Button>
				</Link>
				<Link to="/pick-n-place">
					<Button variant="primary">Pick N' Place!</Button>
				</Link>
			</Row>
		</Container>
	);
};

export default Home;
