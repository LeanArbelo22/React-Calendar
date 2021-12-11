import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'


function Navbar() {
    return (
        <div className="navbar navbar-dark bg-dark">
            <div className="container">
            <span className="navbar-brand mt-2 mb-2">
                Leandro
            </span>
            <div className="enlaces">
            <li className="nav-link mt-2 mb-2">
            <Link className="links" to="login">Login</Link>
            </li>
            <li className="nav-link mt-2 mb-2">
            <Link className="nav-item links" to="calendar" >Calendario</Link> 
            </li>
            <button className="btn btn-primary mt-2 mb-2">
                <i className="fas fa-sign-out-alt"></i>
                <span className="m-2">
                    Salir
                </span>
            </button>
            </div>
            </div>
        </div>
    )
}

export default Navbar;
