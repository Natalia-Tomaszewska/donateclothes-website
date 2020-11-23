import React from 'react';
import "./../../scss/Navigation.scss";
import {NavLink} from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
    return (
<section className="navigation-section">
    <div className="navigation-container">
        <div className="login-row">
<nav className="nav1">
    <ul className="login-nav">
        <li className="nav-element">
            <NavLink to="/login">Zaloguj</NavLink>
        </li>
        <li className="nav-element">
            <NavLink to="/login">Załóż konto</NavLink>
        </li>
    </ul>
</nav>
        </div>
        <div className="nav-row">
            <nav className="nav2">
                <ul className="header-nav">
                    <li className="nav-element">
                        <NavLink to="/">Start</NavLink>
                    </li>
                    <li className="nav-element">
                        <NavLink to="/whatAbout">O co chodzi?</NavLink>
                    </li>
                    <li className="nav-element">
                        <NavLink to="/aboutUs">O nas</NavLink>
                    </li>
                    <li className="nav-element">
                        <NavLink to="/fundation">Fundacja i organizacje</NavLink>
                    </li>
                    <li className="nav-element">
                        <NavLink to="/contact">Kontakt</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

</section>
    )
};

export default Navigation;
