import React from "react";
import Home from "./components/HomeAndNavigation/Home.js";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import DiceGame from "./components//Dice_Game/DiceGame";
import Robot_Factory from "./components/Robot_Factory/Robot_Factory.js";
import { FruitFrenzy } from "./components/fruit-frenzy/FruitFrenzy";
import Memory from "./components/Memory/Memory.js";
import NavMenu from "./components/HomeAndNavigation/NavMenu.js";
import { PickNPlace } from "./components/pick-n-place/PickNPlace";
import Game from "./components/Balloons/Balloons.js";

function App() {
	return (
		<HashRouter>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/dice">
						<DiceGame />
					</Route>
					<Route path="/memory">
						<Memory />
					</Route>
					<Route path="/pick-n-place">
						<PickNPlace />
					</Route>
					<Route path="/robot_factory">
						<Robot_Factory />
					</Route>
					<Route path="/fruit_frenzy">
						<FruitFrenzy />
					</Route>
					<Route path="/Baloon">
						<Game />
					</Route>
					<Redirect to="/" />
				</Switch>
			</div>
			<NavMenu />
		</HashRouter>
	);
}

export default App;
