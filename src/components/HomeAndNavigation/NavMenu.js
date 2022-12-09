import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
const NavMenu = () => {
	return (
		<Navbar variant="dark" fixed="bottom" bg="primary">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					{" "}
					Back
				</Link>
			</div>
		</Navbar>
	);
};

export default NavMenu;
