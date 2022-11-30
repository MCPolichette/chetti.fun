import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="navbar fixed-bottom navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"> Back</Link>
            </div>
        </nav>
    );
}

export default NavBar;