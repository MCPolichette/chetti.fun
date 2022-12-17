import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./home.css";
const NavMenu = () => {
	return (
		<Navbar variant="dark" fixed="bottom" bg="primary">
			<div className="container-fluid gameText">
				<Link className="navbar-brand" to="/">
					<i className="fa-solid fa-left-long"></i> Back
				</Link>
			</div>
		</Navbar>
	);
};

export default NavMenu;
