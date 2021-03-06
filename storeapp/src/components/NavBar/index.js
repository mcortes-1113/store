import React from 'react';
import { Link } from "react-router-dom";

function NavTabs() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={window.location.pathname === "/"
                    ? "nav-link active" : "nav-link"}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/directory" className={window.location.pathname === "/cart"
                    ? "nav-link active" : "nav-link"}>
                    Shopping Cart
                </Link>                        
            </li>
        </ul>
    )
}

export default NavTabs;
