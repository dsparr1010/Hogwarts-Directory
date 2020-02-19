import React from "react";
import '../../assets/css/style.css';

function Header() {
    return (
        <div>
            <h1 className = 'header display-4'> <i className="fas fa-quidditch"></i> Hogwarts Directory </h1>
            <p className="lead">Search for a character from HP</p>
        </div>
    )
}

export default Header;