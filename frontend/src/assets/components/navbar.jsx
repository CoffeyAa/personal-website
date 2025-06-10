import React, {useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <header className='main header'>
                <img src="./kafka bug.jpg" className="profile pic"/>
                <div className='app name'>Aaron Coffey</div>
                <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>
        </div>
    )
}

export default Navbar